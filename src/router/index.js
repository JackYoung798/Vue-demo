import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/loginOage.vue') },
    {
      path: '/',
      component: () => import('@/views/layout/layoutPage.vue'),
      redirect: '/user/userMessdge',
      children: [
        {
          path: '/user/userMessdge',
          component: () => import('@/views/user/userMessdge.vue')
        },
        {
          path: '/user/userPassword',
          component: () => import('@/views/user/userPassword.vue')
        }
      ]
    }
  ]
})

export default router
