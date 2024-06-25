import { abilityScoresFull } from '@/types/abilityScoresType';
import { alignmentType } from '@/types/alignmentType';
import { dndBase } from '@/types/dndBase';
import { monsterType } from '@/types/monsterType';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		abilityScores: {} as dndBase[],
		abilityScoresTotal: {} as abilityScoresFull,
		alignments: {} as dndBase[],
		alignmentTotal: {} as alignmentType,
		monsters: {} as dndBase[],
		monster: {} as monsterType
	},
	getters: {},
	mutations: {
		changeAbilityScores(state, payload: dndBase[]) {
			state.abilityScores = payload;
		},
		changeAbilityScoresTotal(state, payload: abilityScoresFull) {
			state.abilityScoresTotal = payload;
		},
		changeAlignemnts(state, payload: dndBase[]) {
			state.alignments = payload;
		},
		changeAlignemntsTotal(state, payload: alignmentType) {
			state.alignmentTotal = payload;
		},
		changeMonsters(state, payload: dndBase[]) {
			state.monsters = payload;
		},
		changeMonster(state, payload: monsterType) {
			state.monster = payload;
		}
	},
	actions: {
		async fetchAbilityScores({ commit }) {
			const apiData = await fetch('https://www.dnd5eapi.co/api/ability-scores');
			const json: dndBase[] = await apiData.json();
			commit('changeAbilityScores', json);
		},
		async fetchAbilityScoresTotal({ commit }, ability: string) {
			const apiData = await fetch(
				`https://www.dnd5eapi.co/api/ability-scores/${ability}`
			);
			const json: abilityScoresFull = await apiData.json();
			commit('changeAbilityScoresTotal', json);
		},
		async fetchAlignments({ commit }) {
      const apiData = await fetch('https://www.dnd5eapi.co/api/alignments');
      const json: dndBase[] = await apiData.json();
      commit('changeAlignemnts', json);
    },
		async fetchAlignmentsTotal({ commit }, alignment: string) {
			const apiData = await fetch(
				`https://www.dnd5eapi.co/api/alignments/${alignment}`
			);
			const json: abilityScoresFull = await apiData.json();
			commit('changeAlignemntsTotal', json);
		},
		async fetchMonsters({ commit }) {
      const apiData = await fetch('https://www.dnd5eapi.co/api/monsters');
      const json: dndBase[] = await apiData.json();
      commit('changeMonsters', json);
    },
		async fetchMonster({ commit }, index: string) {
			const apiData = await fetch(
				`https://www.dnd5eapi.co/api/monsters/${index}`
			);
			const json: abilityScoresFull = await apiData.json();
			commit('changeMonster', json);
		},
	},
	modules: {},
});
