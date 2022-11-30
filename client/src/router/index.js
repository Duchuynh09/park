import { createWebHistory, createRouter } from "vue-router";
import home from "@/views/home.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/user/:id",
    name: "user",
    component: home,
  },
  {
    path: "/:name/profile/:id",
    name: "userRent",
    component: () => import("@/views/user.vue"),
  },
  {
    path: "/:name/:areaId/:parkId/edit/:id",
    name: "editUser",
    component: () => import("@/views/editRentedUser.vue"),
  },
  {
    path: "/:name/:areaId/:parkId/add",
    name: "addUser",
    component: () => import("@/views/addRentedUser.vue"),
  },
  {
    path: "/admin",
    name: "manager",
    component: () => import("@/views/manager.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/register.vue"),
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
