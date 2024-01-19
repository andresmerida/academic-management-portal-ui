import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdmisionView from "@/views/AdmisionView.vue";
import BibliotecaView from "@/views/BibliotecaView.vue";
import FacultadView from "@/views/FacultadView.vue"
import StudentView from "@/views/users/StudientView.vue"
import TeacherView from "@/views/users/TeacherView.vue";
import AdminView from "@/views/users/AdminView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cronograma',
      name: 'cronograma',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CronogramaView.vue')
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

    },
    {
      path: '/facultades',
      name: 'facultades',
      component: FacultadView

    },
    {
      path: '/docente',
      name: 'docente',
      component:StudentView

    },
    {
      path: '/estudiante',
      name: 'estudiante',
      component:TeacherView

    },
    {
      path: '/admin',
      name: 'admin',
      component:AdminView

    },

  ]
})

export default router
