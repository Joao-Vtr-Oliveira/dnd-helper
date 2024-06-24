<template>
  <AlignmentPage />
</template>

<script lang="ts">
  import Vue from 'vue'
  import AlignmentPage from '../components/AlignmentPage.vue'

  export default Vue.extend({
    name: 'AlignmentView',

    components: {
      AlignmentPage,
    },
  })
</script>
