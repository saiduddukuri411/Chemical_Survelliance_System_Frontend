import { createRouter, createWebHistory } from "vue-router";

import Patients from "../components/patients/patients.vue";
import Samples from "../components/samples/samples.vue";

const routes = [
  {
    path: "/patients",
    name: "Patients",
    component: Patients,
  },

  {
    path: "/samples",
    name: "Samples",
    component: Samples,
  },
  {
    path: "/:catchAll(.*)",
    name:"not found",
    redirect:"/samples"
  },
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
