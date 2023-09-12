import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsPodcastView from '../views/DetailsPodcastView.vue'
import DetailsCapView from '../views/DetailsCapView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/DetailsCapView',
      name: 'DetailsCapView',
      component: DetailsCapView
    },
    {
      path: '/DetailsPodcastView',
      name: 'DetailsPodcastView',
      component: DetailsPodcastView
    },
  ]
})

export default router
