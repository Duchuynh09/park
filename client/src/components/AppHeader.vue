<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div class="container-fluid d-flex">
      <div class="navbar-brand">
        <router-link v-if="user_active.name" :to="{ name: 'user', params: { id: `${user_active.id}` } }"
          class="navbar-brand ">Home </router-link>
        <router-link v-else :to="{ path: '/' }" class="navbar-brand">Home </router-link>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item dropdown" v-if="user_active.name">
            <a class="nav-link dropdown-toggle" v-if="user_active.id == 0" role="button" data-bs-toggle="dropdown"><i
                class="fa-solid fa-circle-user"></i>{{ user_active.name }} </a>
            <ul class="dropdown-menu">
              <li v-if="this.$store.state.admin">
                <router-link class="dropdown-item" to="/admin">Quản lí cho thuê</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/">log out</router-link>
              </li>
            </ul>
          </li>
          <li v-else class="login nav-link" @click="goToLogin">Đăng nhập<i class="fa-solid fa-circle-user"></i></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    var user_active = this.$store.state.user;
    return {
      user_active
    };
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: "login" });
    },
  },
  setup() {
    // const store = useStore();
    // // const user_active = reactive(store.state.user)
    // var url = 
    // return { user_active ,url}
  }
};
</script>
<style>
.login {
  cursor: pointer;
}
</style>
