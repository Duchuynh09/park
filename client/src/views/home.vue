<template>
  <div class="row">
    <ParkArea v-for="area in this.$store.state.Area" :key="area._id" :Area="area"  />
  </div>
</template>
<script ts>
import ParkArea from "../components/ParkArea.vue";
import { useRoute } from 'vue-router'
import { useStore } from "vuex";
export default {
  components: { ParkArea }, 
  setup(){
    const route=useRoute()
    const store = useStore()
    store.commit('login',{user_id:route.params.id})
    store.commit('isAdmin',{id:route.params.id})
  }
};
</script>
<style>

</style>
