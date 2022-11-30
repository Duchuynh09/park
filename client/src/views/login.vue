<template>
  <div>
    <Form
      :user="{}"
      @submit:user="loginAply"
      submit_title="Đăng nhập"
      :login="islogin"
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
      message: "",
      islogin: true,
    };
  },
  emits:["longin_user"],
  components: { Form },
  methods: {
    async loginAply(data) {
      this.Users= await new contactService("/api/user").getAll();
      this.Users.forEach(async(value) => {
        if ((data.email == value.email) && (value.password== data.password)) {
          await setTimeout(() => {
            this.$router.push({ name: 'user', params: { id: `${value._id}` }})
          }, 500);
        }else this.message="Sai tài khoản hoặc mật khẩu";
      });
      
    },
  },
  mounted(){
  }
};
</script>

<style></style>
