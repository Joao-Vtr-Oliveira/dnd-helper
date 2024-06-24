<template>
	<v-container>
		<v-row class="justify-center mx-auto">
			<v-col
				class=""
				cols="7"
			>
				<v-item-group class="">
					<v-item
						v-for="alignment in alignments"
						:key="alignment.index"
					>
						<v-btn
							:color="actualAlignment === alignment.index ? 'secundary' : 'error'"
							outlined
							x-large
							class="m-1"
							@click="actualAlignment = alignment.index"
							>{{ alignment.name }}</v-btn
						>
					</v-item>
				</v-item-group>

				<v-card
					class="mx-auto mt-20"
					width="500"
					max-width="500"
					color="light-blue darken-4"
				>
					<v-card-text>
						<div>Alignement</div>
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
			console.log(this.$store.state.alignments.results);
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
