<template>
	<v-container>
		<v-row class="justify-center">
			<v-col
				cols="12"
				md="10"
				sm="12"
				xs="12"
				class="d-flex flex-column align-items-center"
			>
				<v-row class="justify-center">
					<v-col
						v-for="monster in monsters"
						:key="monster.index"
						cols="12"
						md="6"
						lg="4"
					>
						<v-card class="my-3" color="light-blue darken-4" dark>
							<v-card-title>{{ monster.name }}</v-card-title>
							<v-card-actions>
								<v-btn color="primary" @click="$router.push(`/monster/${monster.index}`)">
									See details
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { dndBase } from '@/types/dndBase';

export default Vue.extend({
	name: 'MonsterPage',
	computed: {
		monsters() {
			return this.$store.state.monsters.results as dndBase[];
		},
	},
	data: () => ({}),
});
</script>
