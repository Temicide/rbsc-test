import { archetypes } from "@/data/archetypes";
import { quizQuestions } from "@/data/quiz";
import type { AnswerMap, Archetype, ScoredResult, TraitKey, TraitScores } from "@/lib/types";

export const traitKeys: TraitKey[] = [
  "social",
  "presence",
  "humor",
  "chaos",
  "passion",
  "drive",
  "observation",
  "influence",
];

export const emptyTraitScores = (): TraitScores => ({
  social: 0,
  presence: 0,
  humor: 0,
  chaos: 0,
  passion: 0,
  drive: 0,
  observation: 0,
  influence: 0,
});

export function maxTraitScores(): TraitScores {
  const maximums = emptyTraitScores();

  for (const question of quizQuestions) {
    for (const key of traitKeys) {
      maximums[key] += Math.max(...question.options.map((option) => option.scores[key] ?? 0));
    }
  }

  return maximums;
}

export function scoreAnswers(answers: AnswerMap): TraitScores {
  const totals = emptyTraitScores();

  for (const question of quizQuestions) {
    const selectedOptionId = answers[question.id];
    const option = question.options.find((item) => item.id === selectedOptionId);

    if (!option) {
      continue;
    }

    for (const key of traitKeys) {
      totals[key] += option.scores[key] ?? 0;
    }
  }

  return totals;
}

const maximumTraitScores = maxTraitScores();

export function normalizeTraitScore(key: TraitKey, value: number) {
  const maximum = maximumTraitScores[key];

  if (maximum <= 0) {
    return 0;
  }

  return Math.max(0, Math.min(10, (value / maximum) * 10));
}

function distanceFromProfile(scores: TraitScores, archetype: Archetype) {
  return traitKeys.reduce((distance, key) => {
    const normalized = normalizeTraitScore(key, scores[key]);
    return distance + Math.abs(normalized - archetype.profile[key]);
  }, 0);
}

export function getArchetype(scores: TraitScores) {
  return [...archetypes].sort((a, b) => {
    const distanceDiff = distanceFromProfile(scores, a) - distanceFromProfile(scores, b);

    if (distanceDiff !== 0) {
      return distanceDiff;
    }

    return a.name.localeCompare(b.name, "th");
  })[0];
}

function compatibilityScore(scores: TraitScores, candidate: Archetype, base: Archetype) {
  const profileDistance = distanceFromProfile(scores, candidate);
  const explicitMatchBonus = base.compatibleIds.includes(candidate.id) ? 8 : 0;
  const complementBonus = Math.abs(candidate.profile.chaos - base.profile.chaos) > 4 ? 2 : 0;

  return explicitMatchBonus + complementBonus - profileDistance / 3;
}

export function getCompatibleMatches(scores: TraitScores, base: Archetype) {
  return archetypes
    .filter((candidate) => candidate.id !== base.id)
    .sort((a, b) => {
      const scoreDiff = compatibilityScore(scores, b, base) - compatibilityScore(scores, a, base);

      if (scoreDiff !== 0) {
        return scoreDiff;
      }

      return a.name.localeCompare(b.name, "th");
    })
    .slice(0, 3);
}

export function getScoredResult(answers: AnswerMap): ScoredResult {
  const traitScores = scoreAnswers(answers);
  const archetype = getArchetype(traitScores);
  const matches = getCompatibleMatches(traitScores, archetype);

  return {
    archetype,
    traitScores,
    matches,
  };
}

export function encodeAnswers(answers: AnswerMap) {
  const ordered = quizQuestions.map((question) => answers[question.id] ?? "");
  return encodeURIComponent(ordered.join("."));
}

export function decodeAnswers(value: string | null): AnswerMap | null {
  if (!value) {
    return null;
  }

  const parts = decodeURIComponent(value).split(".");

  if (parts.length !== quizQuestions.length) {
    return null;
  }

  const answers: AnswerMap = {};

  for (const [index, question] of quizQuestions.entries()) {
    const optionId = parts[index];
    const isValid = question.options.some((option) => option.id === optionId);

    if (!isValid) {
      return null;
    }

    answers[question.id] = optionId;
  }

  return answers;
}
