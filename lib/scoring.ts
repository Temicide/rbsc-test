import { archetypes } from "@/data/archetypes";
import { quizQuestions } from "@/data/quiz";
import type { AnswerMap, Archetype, ScoredResult, TraitKey, TraitScores } from "@/lib/types";

export const traitKeys: TraitKey[] = [
  "socialBoldness",
  "groupLoyalty",
  "chaosEnergy",
  "humorStyle",
  "fanEnergy",
  "observerInitiator",
];

export const emptyTraitScores = (): TraitScores => ({
  socialBoldness: 0,
  groupLoyalty: 0,
  chaosEnergy: 0,
  humorStyle: 0,
  fanEnergy: 0,
  observerInitiator: 0,
});

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

function normalizeScore(value: number) {
  return Math.max(0, Math.min(10, value + 4));
}

function distanceFromProfile(scores: TraitScores, archetype: Archetype) {
  return traitKeys.reduce((distance, key) => {
    const normalized = normalizeScore(scores[key]);
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
  const complementBonus =
    Math.abs(candidate.profile.chaosEnergy - base.profile.chaosEnergy) > 4 ? 2 : 0;

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
