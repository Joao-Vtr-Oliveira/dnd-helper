export type abilityScores = {
  index: string;
  name: string;
  url: string;
}

export interface abilityScoresFull extends abilityScores {
  "full_name": string;
  desc: string[],
  skills: abilityScores[];
}