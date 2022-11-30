<template>
  <div class="parkArea col-sm-6 col-12 hover-overlay">
    <div class="row">
      <Park class="d-flex justify-content-around" 
      v-for="park in Area.park"
      :areaId="Area._id"
      :Park="park" 
      v-model="show"
      :key="park._id" 
      @onRent="Renting" />
    </div>
  </div>
</template>
<script>
import Park from "./Park.vue";
import contactService from "../services/contact.service";
export default {
  props: {
    Area: { type: Object, required: true }

  },
  components: { Park },
  data() {
    return { return: { show: false } }
  },
  methods: {
    showAll() {
      this.show = !this.show
      console.log(this.show);
    },
    async Renting(user, park) {
      if (user) {
        park.rented = true;
        park.user = user
        await new contactService("/api").update(this.Area._id, park)
      }
    },
  }
};
</script>

<style>
.parkArea {
  cursor: pointer;
  border: 1px solid;
  padding: 10px 0px;
  box-sizing: border-box;
}

.parkArea:hover {
  background: linear-gradient(45deg,
      LightGray,
      rgba(220, 214, 230, 0.5) 100%);
}
</style>
