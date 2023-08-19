import { createRouter, createWebHistory } from 'vue-router'
// import { useUserStore } from '@/stores'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // layout
    {
      path: '/',
      component: () => import('@/views/layout/layoutPage.vue'),
      redirect: '/goods/details',
      children: [
        {
          path: '/goods/details',
          component: () => import('@/views/goods/goodsDetails.vue')
        },
        {
          path: '/goods/goodsAdd',
          component: () => import('@/views/goods/goodsAdd.vue')
        },
        {
          path: '/goods/goodsReduce',
          component: () => import('@/views/goods/goodsReduce.vue')
        },
        {
          path: '/goods/details',
          component: () => import('@/views/goods/goodsDetails.vue')
        },
        {
          path: '/user/userMessdge',
          component: () => import('@/views/user/userMessage.vue')
        },
        {
          path: '/user/rePassword',
          component: () => import('@/views/user/rePassword.vue')
        }
      ]
    },
    // 登录注册界面
    { path: '/login', component: () => import('@/views/login/loginPage.vue') }
  ]
})

// router.beforeEach((to) => {
//   const useStore = useUserStore()
//   if (!useStore.token && to.path !== '/login') return '/login'
//   return true
// })

export default router
