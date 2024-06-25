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
				<v-card
					class="mx-auto my-12 pa-4"
					max-width="800"
					color="light-blue darken-4"
					raised
				>
					<v-card-title
						class="headline white--text text-center justify-center"
						>{{ monster.name }}</v-card-title
					>
					<v-card-text class="white--text text-center">
						<v-row
							align="center"
							justify="center"
							class="mx-0"
						>
							<v-chip
								v-for="chip in monsterDetails"
								:key="chip.label"
								class="ma-2"
								color="green"
								label
							>
								{{ chip.label }}: {{ chip.value }}
							</v-chip>
						</v-row>

						<div
							class="mt-4 text-subtitle-1 white--text"
							v-if="
								monster && monster.armor_class && monster.armor_class.length > 0
							"
						>
							HP: {{ monster.hit_points }} | CA:
							{{ monster.armor_class[0].value }}
						</div>
					</v-card-text>

					<v-divider class="mx-4 my-4"></v-divider>

					<v-card-title class="headline white--text text-center justify-center"
						>Ability Scores</v-card-title
					>
					<v-row class="justify-center">
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
					</v-row>

					<v-divider class="mx-4 my-4"></v-divider>

					<v-card-title class="headline white--text text-center justify-center"
						>Special Abilities</v-card-title
					>
					<v-row class="justify-center">
						<v-col
							v-for="(ability, index) in monster.special_abilities"
							:key="index"
							cols="12"
							md="6"
							sm="12"
							class="ma-1"
						>
							<v-card
								flat
								color="transparent"
							>
								<h3 class="subtitle-1 white--text">{{ ability.name }}</h3>
								<p class="body-1 white--text">{{ ability.desc }}</p>
							</v-card>
						</v-col>
					</v-row>

					<v-divider class="mx-4 my-2"></v-divider>

					<v-card-title class="headline white--text text-center justify-center"
						>Actions</v-card-title
					>
					<v-row class="justify-center">
						<v-col
							v-for="(action, index) in monster.actions"
							:key="index"
							cols="12"
							md="6"
							sm="12"
							class="ma-1"
						>
							<v-card
								flat
								color="transparent"
							>
								<h3 class="subtitle-1 white--text">{{ action.name }}</h3>
								<p
									v-if="action.attack_bonus"
									class="body-1 white--text"
								>
									Attack Bonus: {{ action.attack_bonus }}
								</p>
								<p class="body-1 white--text">{{ action.desc }}</p>
							</v-card>
						</v-col>
					</v-row>
				</v-card>
			</v-col>
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
		monsterDetails(): { label: string; value: number | string }[] {
			if (!this.monster) return [];
			const details: { label: string; value: number | string }[] = [];
			if (this.monster.size)
				details.push({ label: 'Size', value: this.monster.size });
			if (this.monster.type)
				details.push({ label: 'Type', value: this.monster.type });
			if (this.monster.subtype)
				details.push({ label: 'Subtype', value: this.monster.subtype });
			if (this.monster.alignment)
				details.push({ label: 'Alignment', value: this.monster.alignment });
			if (this.monster.xp)
				details.push({ label: 'XP', value: this.monster.xp });
			return details;
		},
	},
	created() {
		this.$store.dispatch('fetchMonster', this.monsterId);
	},
});
</script>
