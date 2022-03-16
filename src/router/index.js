import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WineView from '../views/WineView.vue'
import PetView from '../views/PetView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/wine',
    name: 'wine',
    component: WineView
  },
  {
    path: '/pet',
    name: 'pet',
    component: PetView
  }
]




const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
