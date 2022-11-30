import { createApp } from "vue";
import App from "./App.vue";
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router";
import "./assets/main.css";
import VueTippy from "vue-tippy";
import store from "./store";

// Create a new store instance.
const app = createApp(App)
app.use(VueTippy, {
  defaultProps: { placement: "right" },
})

app.use(store);
app.use(router).mount("#app");



