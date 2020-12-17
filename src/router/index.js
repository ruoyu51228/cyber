import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/novel-m/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () => import('../views/novel-m/Classify')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/novel-m/Category')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
