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
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/novel-m/Search')
  },
  {
    path: '/search/result/:key',
    name: 'Search result',
    component: () => import('@components/novel-m/Search/result')
  },
  {
    path: '/detail/:book',
    name: 'book detail',
    component: () => import('../views/novel-m/Detail')
  },
  {
    path: '/reader',
    name: 'Reader',
    component: () => import('../views/novel-m/Reader')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
