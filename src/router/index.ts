import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/hello', component: () => import('@/views/Test.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
