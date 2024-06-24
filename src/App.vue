<template>
	<v-app>
		<v-app-bar
			app
			color="primary"
			dark
		>
			<div class="d-flex align-center">
				<v-icon>mdi-dice-d20</v-icon>

				<h1>DnD Helper</h1>
			</div>

			<v-spacer></v-spacer>

			<div>
				<v-btn class="mr-2">
					<span>Recents</span>
					<v-icon>mdi-history</v-icon>
				</v-btn>

				<v-btn class="mr-2">
					<span>Favorites</span>
					<v-icon>mdi-heart</v-icon>
				</v-btn>

				<v-btn>
					<span>Nearby</span>
					<v-icon>mdi-map-marker</v-icon>
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
    },
	data: () => ({
		value: 1,
	}),
});
</script>
