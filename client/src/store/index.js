import { createStore } from "vuex";
// Create a new store instance.
import contactService from "../services/contact.service";
const store = createStore({
  state() {
    return {
      existEmail: false,
      admin: false,
      user_active: {},
      user_rent: {},
      user: {},
      Users: [],
      Area: [],
    };
  },
  mutations: {
    async login(state, { user_id }) {
      state.user.id = user_id;
      if (user_id == 0) {
        state.user.name = "admin";
      } else {
        state.user_active = await new contactService("/api/user/").get(user_id);
        state.user.name = state.user_active?.name;
        state.user.time = {};
      }
    },
    async renderPark(state) {
      state.Area = await new contactService("/api").getAll();
    },
    async GetAllUser(state) {
      state.Users = await new contactService("/api/user").getAll();
    },

    isAdmin(state, { id }) {
      return id == 0 ? (state.admin = true) : (state.admin = false);
    },
    async userRent(state, { user }) {
      state.user_rent = await new contactService("/api/user/").get(user.id);
    },
    checkEmail(state, { email }) {
      state.Users.forEach((value) => {
        if (email == value.email) {
          state.existEmail = true;
          return;
        }
      });
    },
  },
});
store.commit("renderPark");
store.commit("GetAllUser");
export default store;
