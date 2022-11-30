<template>
  <div class="p-5">
    <ListRent v-for="area in this.$store.state.Area" :key="area._id" :area="area" />
    
  </div>
</template>

<script>
import ListRent from '../components/listRent.vue';

export default {
    components: { ListRent }
}
</script>

<style>

</style>