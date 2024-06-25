<template>
	<v-app>
		<v-app-bar
			app
			color="primary"
			dark
		>
			<v-app-bar-nav-icon class="d-flex d-sm-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<div class="d-flex align-center" @click='$router.push("/")'>
				<v-icon>mdi-dice-d20</v-icon>
				<h1 class="ml-2">DnD Helper</h1>
			</div>
			<v-spacer></v-spacer>
			<v-row class="d-none d-sm-flex">
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
			</v-row>
		</v-app-bar>

		<v-navigation-drawer
			v-model="drawer"
			app
			temporary
		>
			<v-list dense>
				<v-list-item @click='$router.push("/")'>
					<v-list-item-action>
						<v-icon>mdi-tooltip-question</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Ability Scores</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item @click="$router.push('/alignment')">
					<v-list-item-action>
						<v-icon>mdi-account-star</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Alignment</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item @click="$router.push('/monsters')">
					<v-list-item-action>
						<v-icon>mdi-list-box</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Monster list</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'App',
	data: () => ({
		drawer: false,
	}),
	created() {
		this.$store.dispatch('fetchClassesData');
		this.$store.dispatch('fetchAbilityScores');
		this.$store.dispatch('fetchAlignments');
		this.$store.dispatch('fetchMonsters');
	},
});
</script>
