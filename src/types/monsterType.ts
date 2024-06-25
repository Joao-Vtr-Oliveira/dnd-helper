import { dndBase } from './dndBase';

type specialAbilities = {
  name: string;
  desc: string;
}

type damage = {
  "damage_type": dndBase;
  "damage_dice": string;
}

type actions = {
  name: string;
  desc: string;
  "attack_bonus": number;
  damage: damage[]
}

export interface monsterType extends dndBase {
	size: string;
	type: string;
	subtype: string;
	alignment: string;
	armor_class: [{ value: number }];
	hit_points: number;
  speed: {
    walk: string
  };
	strength: number;
	dexterity: number;
	constitution: number;
	intelligence: number;
	wisdom: number;
	charisma: number;
  xp: number;
  "special_abilities": specialAbilities[];
  actions: actions[]
}
