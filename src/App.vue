<template>
	<v-app>
		<v-app-bar
			app
			color="primary"
			dark
		>
					<div class="d-flex align-center" @click='$router.push("/")'>
						<v-icon>mdi-dice-d20</v-icon>
						<h1>DnD Helper</h1>
					</div>

			<v-spacer></v-spacer>

			<div>
				<v-btn class="mr-2" @click='$router.push("/")'>
					<span>Ability Scores</span>
					<v-icon>mdi-tooltip-question</v-icon>
				</v-btn>

				<v-btn class="mr-2" @click="$router.push('/alignment')">
					<span>Alignment</span>
					<v-icon>mdi-account-star</v-icon>
				</v-btn>

				<v-btn @click="$router.push('/monsters')">
					<span>Monster list</span>
					<v-icon>mdi-list-box</v-icon>
				</v-btn>
			</div>
		</v-app-bar>
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'App',
	created() {
		this.$store.dispatch('fetchClassesData');
		this.$store.dispatch('fetchAbilityScores');
		this.$store.dispatch('fetchAlignments');
	},
	data: () => ({
		value: 1,
	}),
});
</script>
