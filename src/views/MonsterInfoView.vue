<template>
  <MonsterInfoPage />
</template>

<script lang="ts">
  import Vue from 'vue'
  import MonsterInfoPage from '../components/MonsterInfoPage.vue'

  export default Vue.extend({
    name: 'MonsterInfoView',

    components: {
      MonsterInfoPage,
    },
  })
</script>
