<template>
  <UserForm @rented="changeInfo" :user="user"/>
</template>
<script>
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { reactive, computed } from "vue";
import UserForm from "../components/userForm.vue";
import contactService from "../services/contact.service";
export default {
  components: {
    UserForm,
  },
  data(){
    return {user:{}}
  },
  methods:{
    async getUser(id){
      this.user = await new contactService("/api/user").get(id)
    }
  },
  created(){
    this.getUser(this.$route.params.id)
  },  
  setup() {
    const route = useRoute();
    const store = useStore();
    if (route.params.name == "admin") {
      store.commit("login", { user_id: 0 });
      store.commit("isAdmin", { id: 0 })
      store.commit("userRent", { user: route.params })
    } else {
      store.commit("login", { user_id: route.params.id });
    }
    
    async function changeInfo(contactLocal, area, park) {
      if (contactLocal) {
        let userRent = await new contactService("/api/user").update(park.user.id, contactLocal)
        let time = park.user.time
        park.user = userRent
        park.user.id = userRent._id
        park.user.time = time
        console.log(park);
        await new contactService("/api").update(area._id, park)
        alert("Đã sửa thành công")
      }
    }
    return { changeInfo }
  }
};
</script>

<style>

</style>
