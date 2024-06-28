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
                :disabled='abilityScore === ability.index'
                outlined
                x-large
                class="m-1"
                @click="changeAbilityScore(ability.index)"
              >{{ ability.name }}</v-btn>
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
        </transition>
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
    showCard: true,
  }),
  methods: {
    changeAbilityScore(newScore: string) {
      this.showCard = false;
      setTimeout(() => {
        this.abilityScore = newScore;
        this.showCard = true;
      }, 300);
    },
  },
  watch: {
    abilityScore() {
      this.$store.dispatch('fetchAbilityScoresTotal', this.abilityScore);
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