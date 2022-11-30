<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ park.user.name }}</h5>
      <div class="card-text">
        Thời gian bắt đầu:
        <p>
          {{
              time.toLocaleDateString() + " vào lúc " + time.toLocaleTimeString()
          }}
        </p>
      </div>
      <div class="d-flex justify-content-between">
        <RouterLink v-if="this.$store.state.admin" :to="{ path: `/admin/profile/${park.user.id}` }"
          class="btn btn-primary">Xem chi tiết ...</RouterLink>
        <RouterLink v-else :to="{ path: `/user/profile/${park.user.id}` }" class="btn btn-primary">Xem chi tiết ...
        </RouterLink>
        <RouterLink :to='{ name: "editUser", params: { name: "admin", areaId: areaId, parkId: park._id , id:park.user.id} }' class="btn btn-primary">Sửa</RouterLink>
      </div>
    </div>
  </div>



</template>
<script>
import { RouterLink } from "vue-router";
import { useStore } from "vuex";
export default {
  props: {
    park:{type:Object},
    areaId:{type:String}
  },
  data() {
    return { user:this.$store.state.user_rent};
  },
  emits:['oke'],
  components: { RouterLink },
  setup(props) {
    const time = new Date()
    time.setTime(props.park.user.time)
    const store = useStore()
    store.commit('userRent', { user: props.park._id })
    return {time};
  }
};
</script>
