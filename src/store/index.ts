import { abilityScoresFull } from '@/types/abilityScoresType';
import { alignmentType } from '@/types/alignmentType';
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
		alignmentTotal: {} as alignmentType,
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
		changeAlignemnts(state, payload: dndBase[]) {
			console.log(payload)
			state.alignments = payload;
		},
		changeAlignemntsTotal(state, payload: alignmentType) {
			state.alignmentTotal = payload;
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
	},
	modules: {},
});
