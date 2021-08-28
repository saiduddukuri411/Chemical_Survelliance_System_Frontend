import { createRouter, createWebHistory } from "vue-router";

import Patients from "../components/patients/patients.vue";
import Samples from "../components/samples/samples.vue";
import Login from "../components/login/login.vue";
import Uploads from "../components/uploads/uploads.vue";


let routes = [
      {
        path: "/",
        name: "Login",
        component: Login,
      },

      {
        path: "/samples",
        name: "Samples",
        component: Samples,
      },
      {
        path: "/patients",
        name: "Patients",
        component: Patients,
      },
      {
        path: "/uploads",
        name: "Uploads",
        component: Uploads,
      },
      {
        path: "/:catchAll(.*)",
        name: "not found",
        redirect: "/",
      },
    ]
  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
