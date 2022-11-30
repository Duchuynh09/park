<template>
    <!-- add nen khong can user <=> user = {} -->
    <UserForm :user="{}" @rented="renting" />
</template>
<script>
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import UserForm from "../components/userForm.vue";
import contactService from "../services/contact.service";
export default {
    components: {
        UserForm,
    },
    methods: {
        async renting(user,area ,park) {
            if (user) {
                let userRent =await new contactService("/api/user").create(user)
                console.log(userRent);
                park.rented = true;
                park.user = userRent
                park.user.id = userRent._id
                let t = new Date()
                park.user.time = t.getTime()
                await new contactService("/api").update(area._id, park)
                alert(`Đã thêm thành công tại khu xe ${area.name},vị trí số ${park._id} `)
                
            }
        },
    },
    setup() {
        const store = useStore();
        store.commit("isAdmin", { id: 0 });
        store.commit("login", { user_id: 0 });
    },
};
</script>
  
<style>

</style>
  