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
								@click="changeAlignment(alignment.index)"
							>{{ alignment.name }}</v-btn>
						</v-col>
					</v-row>
				</v-item-group>
				<transition name="fade" mode="out-in">
					<v-card
						v-if="showCard"
						class="mt-10 m-auto"
						width="100%"
						max-width="500"
						color="light-blue darken-4"
						key="card"
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
				</transition>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { dndBase } from '@/types/dndBase';
import { alignmentType } from '@/types/alignmentType';

export default Vue.extend({
	name: 'AlignmentPage',
	created() {
		this.$store.dispatch('fetchAlignmentsTotal', this.actualAlignment);
	},
	computed: {
		alignments() {
			return this.$store.state.alignments.results as dndBase[];
		},
		alignmentTotal() {
			return this.$store.state.alignmentTotal as alignmentType;
		},
	},
	data: () => ({
		actualAlignment: 'chaotic-good',
		showCard: true,
	}),
	methods: {
		changeAlignment(newAlignment: string) {
			this.showCard = false;
			setTimeout(() => {
				this.actualAlignment = newAlignment;
				this.showCard = true;
			}, 300);
		},
	},
	watch: {
		actualAlignment() {
			this.$store.dispatch('fetchAlignmentsTotal', this.actualAlignment);
		},
	},
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
	transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
	opacity: 0;
}
</style>
