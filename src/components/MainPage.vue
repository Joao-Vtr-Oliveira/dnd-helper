<template>
	<v-container>
		<v-row class="justify-center">
			<v-col
				cols="12"
				md="8"
				sm="10"
				xs="12"
				class="d-flex flex-column align-items-center"
			>
				<v-item-group>
					<v-row class="justify-center">
						<v-col
							v-for="ability in abilityScores"
							:key="ability.index"
							cols="auto"
						>
							<v-btn
								:color="abilityScore === ability.index ? 'primary' : 'warning'"
								outlined
								x-large
								class="m-1"
								@click="abilityScore = ability.index"
							>{{ ability.name }}</v-btn>
						</v-col>
					</v-row>
				</v-item-group>
				<v-card
					class="mt-10 m-auto"
					width="100%"
					max-width="500"
					color="light-blue darken-4"
				>
					<v-card-text>
						<div>Ability Score</div>
						<p class="text-h4 text--primary">
							{{ abilityScoresTotal.full_name }}
						</p>
						<ul>
							<li
								class="mb-5"
								v-for="(desc, index) in abilityScoresTotal.desc"
								:key="index"
							>
								{{ desc }}
							</li>
						</ul>
						<div class="text--primary">Skills:</div>
						<ul>
							<li
								v-for="(skill, index) in abilityScoresTotal.skills"
								:key="index"
							>
								{{ skill.name }}
							</li>
						</ul>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { dndBase } from '@/types/dndBase';
import { abilityScoresFull } from '../types/abilityScoresType';

export default Vue.extend({
	name: 'MainPage',
	created() {
		this.$store.dispatch('fetchAbilityScoresTotal', this.abilityScore);
	},
	computed: {
		abilityScores() {
			return this.$store.state.abilityScores.results as dndBase[];
		},
		abilityScoresTotal() {
			return this.$store.state.abilityScoresTotal as abilityScoresFull;
		},
	},
	data: () => ({
		abilityScore: 'cha',
	}),
	watch: {
		abilityScore() {
			this.$store.dispatch('fetchAbilityScoresTotal', this.abilityScore);
		},
	},
});
</script>
