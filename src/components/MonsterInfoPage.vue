<template>
	<v-container>
		<h1>{{ monster.name }}</h1>
		<v-row class="justify-center">
			<v-card
				class="mx-auto my-12"
				max-width="800"
				color="light-blue darken-4"
			>
				<v-card-title>{{ monster.name }}</v-card-title>

				<v-card-text>
					<v-row
						align="center"
						class="mx-0"
					>
						<div class="ms-2">
							<v-chip
								class="mr-2"
								color="green"
								v-if="monster.size"
								>{{ monster.size }}</v-chip
							>
							<v-chip
								class="mr-2"
								color="green"
								v-if="monster.type"
								>{{ monster.type }}</v-chip
							>
							<v-chip
								class="mr-2"
								color="green"
								v-if="monster.subtype"
								>{{ monster.subtype }}</v-chip
							>
							<v-chip
								class="mr-2"
								color="green"
								v-if="monster.aligment"
								>{{ monster.aligment }}</v-chip
							>
							<v-chip
								class="mr-2"
								color="green"
								v-if="monster.xp"
								>{{ monster.xp }} XP</v-chip
							>
						</div>
					</v-row>

					<div class="mt-4 text-subtitle-1">
						HP: {{ monster.hit_points }} | CA:
						{{ monster.armor_class[0].value }}
					</div>
				</v-card-text>

				<v-divider class="mx-4"></v-divider>

				<v-card-title>Ability Scores</v-card-title>

				<v-col
					cols="12"
					class="d-flex flex-wrap align-items-center"
				>
					<v-chip
						v-for="(stat, index) in monsterStats"
						:key="index"
						class="ma-2"
						color="primary"
						label
					>
						<v-icon left>{{ stat.icon }}</v-icon>
						{{ stat.label }}: {{ stat.value }}
					</v-chip>
				</v-col>

				<v-divider class="mx-4"></v-divider>

				<v-card-title>Special Abilities</v-card-title>

				<v-col
					cols="12"
					class="d-flex flex-wrap align-items-center"
				>
					<div
						v-for="(ability, index) in monster.special_abilities"
						:key="index"
						class="ma-2"
						color="primary"
						label
					>
						<h1>{{ ability.name }}</h1>
						<p>{{ ability.desc }}</p>
					</div>
				</v-col>
				<v-divider class="mx-4"></v-divider>

				<v-card-title>Actions</v-card-title>

				<v-col
					cols="12"
					class="d-flex flex-wrap align-items-center"
				>
					<div
						v-for="(action, index) in monster.actions"
						:key="index"
						class="ma-2"
					>
						<h1>{{ action.name }}</h1>
						<p v-if="action.attack_bonus">Attack Bonus: {{action.attack_bonus}}</p>
						<p>{{ action.desc }}</p>

					</div>
				</v-col>
			</v-card>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { monsterType } from '@/types/monsterType';

export default Vue.extend({
	name: 'MonsterInfoPage',
	computed: {
		monster() {
			return this.$store.state.monster as monsterType;
		},
		monsterId() {
			return this.$route.params.id;
		},
		monsterStats(): { label: string; value: number; icon: string }[] {
			if (!this.monster) return [];
			return [
				{
					label: 'Strength',
					value: this.monster.strength,
					icon: 'mdi-dumbbell',
				},
				{
					label: 'Dexterity',
					value: this.monster.dexterity,
					icon: 'mdi-weather-windy',
				},
				{
					label: 'Constitution',
					value: this.monster.constitution,
					icon: 'mdi-medication',
				},
				{
					label: 'Intelligence',
					value: this.monster.intelligence,
					icon: 'mdi-book',
				},
				{
					label: 'Wisdom',
					value: this.monster.wisdom,
					icon: 'mdi-eye-outline',
				},
				{
					label: 'Charisma',
					value: this.monster.charisma,
					icon: 'mdi-account-voice',
				},
			];
		},
	},
	data: () => ({
		selection: 1,
	}),
	created() {
		this.$store.dispatch('fetchMonster', this.monsterId);
	},
});
</script>
