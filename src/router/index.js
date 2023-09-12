import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/podcast/:id',
      name: 'podcast',
      props: true,
      component: () => import('../views/Podcast.vue')
    }
  ]
})

export default router
