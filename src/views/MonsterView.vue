<template>
  <MonsterPage />
</template>

<script lang="ts">
  import Vue from 'vue'
  import MonsterPage from '../components/MonsterPage.vue'

  export default Vue.extend({
    name: 'MonsterView',

    components: {
      MonsterPage,
    },
  })
</script>
