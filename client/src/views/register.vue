<template>
<div class="container py-5">
      <Form
        :user="user"
        @submit:user="registerSubmit"
        submit_title="Đăng ký"
        :register="register"
      />
      <p>{{ message }}</p>
</div>
</template>
<script>
import Form from "../components/form.vue";
import contactService from "../services/contact.service";
export default {
  data() {
    return {
      user: {},
      message: "",
      register: true,
    };
  },

  components: { Form },
  methods: {
    async registerSubmit(data) {
      this.$store.commit("checkEmail",{email:data.email})
      if(this.$store.state.existEmail){
        this.message="email da ton tai!!"
      }else {
        await new contactService("/api/user").create(data);
        console.log("Create with: " + data.email);
      }
    },
  },
};
</script>

<style>
</style>
