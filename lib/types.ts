export type TraitKey =
  | "socialBoldness"
  | "groupLoyalty"
  | "chaosEnergy"
  | "humorStyle"
  | "fanEnergy"
  | "observerInitiator";

export type TraitScores = Record<TraitKey, number>;

export type QuizOption = {
  id: string;
  label: string;
  detail: string;
  scores: Partial<TraitScores>;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  scene: string;
  options: [QuizOption, QuizOption, QuizOption, QuizOption];
};

export type Archetype = {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  description: string;
  strengths: string[];
  weakSpots: string[];
  catchphrase: string;
  compatibleIds: string[];
  profile: TraitScores;
  accent: string;
};

export type AnswerMap = Record<string, string>;

export type ScoredResult = {
  archetype: Archetype;
  traitScores: TraitScores;
  matches: Archetype[];
};
