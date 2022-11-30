<template>
  <User :user="user" />
</template>
<script>
import { useRouter,useRoute } from 'vue-router'
import { useStore } from "vuex";
import User from "../components/userInfo.vue";
export default {
  components: {
    User,
  },
  setup(){
    const route=useRoute()
    const store = useStore()
    if (route.params.name == "admin") {
      store.commit("login", { user_id: 0 });
    } else {
      store.commit("login", { user_id: route.params.id });
    }
    store.commit("userRent", { user: route.params });
  }
};
</script>

<style></style>
