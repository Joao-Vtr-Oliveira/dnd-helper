import { abilityScores, abilityScoresFull } from '@/types/abilityScoresType';
import { dndClass } from '@/types/dndClass';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		dndClasses: [] as dndClass[],
		dndClass: {} as dndClass,
    abilityScores: {} as abilityScores[],
		abilityScoresTotal: {} as abilityScoresFull,
	},
	getters: {},
	mutations: {
		changeClasses(state, payload: dndClass[]) {
			state.dndClasses = payload;
		},
		changeAbilityScores(state, payload: abilityScores[]) {
			state.abilityScores = payload;
		},
		changeAbilityScoresTotal(state, payload: abilityScoresFull) {
			state.abilityScoresTotal = payload;
		},
	},
	actions: {
		async fetchClassesData({ commit }) {
      const apiData = await fetch('https://www.dnd5eapi.co/api/classes');
      const json: dndClass[] = await apiData.json();
      commit('changeClasses', json);
    },
		async fetchAbilityScores({ commit }) {
      const apiData = await fetch('https://www.dnd5eapi.co/api/ability-scores');
      const json: abilityScores[] = await apiData.json();
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
