import { dndBase } from './dndBase';

export interface abilityScoresFull extends dndBase {
  "full_name": string;
  desc: string[],
  skills: dndBase[];
}