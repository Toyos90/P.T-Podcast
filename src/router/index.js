import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PetDetailsView from '../views/PetDetailsView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/PetDetailsView',
      name: 'PetDetailsView',
      component: PetDetailsView
    },
    {
      path: '/LoginView',
      name: 'LoginView',
      component: LoginView
    },
  ]
})

export default router
