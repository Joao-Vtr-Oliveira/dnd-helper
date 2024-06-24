<template>
	<v-container>
		<v-row class="justify-center mx-auto">
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
							v-for="alignment in alignments"
							:key="alignment.index"
							cols="auto"
						>
							<v-btn
								:color="actualAlignment === alignment.index ? 'secondary' : 'error'"
								:disabled='actualAlignment === alignment.index'
								outlined
								x-large
								class="m-1"
								@click="actualAlignment = alignment.index"
							>{{ alignment.name }}</v-btn>
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
						<div>Alignment</div>
						<p class="text-h4 text--primary">
							{{ alignmentTotal.name }} - ({{ alignmentTotal.abbreviation }})
						</p>
						<div class="text--primary">Desc:</div>
						<ul>
							<li>
								{{ alignmentTotal.desc }}
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
import { alignmentType } from '@/types/alignmentType';

export default Vue.extend({
	name: 'AlignmentPage',
	created() {
		this.$store.dispatch('fetchAlignmentsTotal', this.actualAlignment);
	},
	computed: {
		abilityScores() {
			return this.$store.state.abilityScores.results as dndBase[];
		},
		abilityScoresTotal() {
			return this.$store.state.abilityScoresTotal as abilityScoresFull;
		},
		alignmentTotal() {
			return this.$store.state.alignmentTotal as alignmentType;
		},
		alignments() {
			return this.$store.state.alignments.results as dndBase[];
		},
	},
	data: () => ({
		actualAlignment: 'chaotic-good',
	}),
	watch: {
		actualAlignment() {
			this.$store.dispatch('fetchAlignmentsTotal', this.actualAlignment);
		},
	},
});
</script>
