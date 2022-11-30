<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
}
</script>
<template>
  <div class="container">
    <AppHeader />
    <!-- {{this.$store.state.user}} -->
    <router-view />
  </div>
</template>

<style>

</style>
