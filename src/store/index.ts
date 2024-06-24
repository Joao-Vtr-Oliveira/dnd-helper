import { abilityScoresFull } from '@/types/abilityScoresType';
import { dndBase } from '@/types/dndBase';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		dndClasses: [] as dndBase[],
		dndClass: {} as dndBase,
    abilityScores: {} as dndBase[],
		abilityScoresTotal: {} as abilityScoresFull,
		alignments: {} as dndBase[],
		alignmentTotal: {} as abilityScoresFull,
	},
	getters: {},
	mutations: {
		changeClasses(state, payload: dndBase[]) {
			state.dndClasses = payload;
		},
		changeAbilityScores(state, payload: dndBase[]) {
			state.abilityScores = payload;
		},
		changeAbilityScoresTotal(state, payload: abilityScoresFull) {
			state.abilityScoresTotal = payload;
		},
	},
	actions: {
		async fetchClassesData({ commit }) {
      const apiData = await fetch('https://www.dnd5eapi.co/api/classes');
      const json: dndBase[] = await apiData.json();
      commit('changeClasses', json);
    },
		async fetchAbilityScores({ commit }) {
      const apiData = await fetch('https://www.dnd5eapi.co/api/ability-scores');
      const json: dndBase[] = await apiData.json();
      commit('changeAbilityScores', json);
    },
		async fetchAbilityScoresTotal({ commit }, ability: string) {
      const apiData = await fetch(`https://www.dnd5eapi.co/api/ability-scores/${ability}`);
      const json: abilityScoresFull = await apiData.json();
      commit('changeAbilityScoresTotal', json);
    },
	},
	modules: {},
});
