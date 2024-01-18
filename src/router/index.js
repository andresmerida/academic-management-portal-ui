import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdmisionView from "@/views/AdmisionView.vue";
import BibliotecaView from "@/views/BibliotecaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/investigacion',
      name: 'investigacion',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/InvestigacionView.vue')
    },
    {
      path: '/admision',
      name: 'admision',
      component: AdmisionView

    },
    {
      path: '/bibloteca',
      name: 'bibloteca',
      component: BibliotecaView

    }

  ]
})

export default router
