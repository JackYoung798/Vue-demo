import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'
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
          path: '/goods/goodsManage',
          component: () => import('@/views/goods/goodsManage.vue')
        },
        {
          path: '/goods/goodsList',
          component: () => import('@/views/goods/goodsList.vue')
        },
        {
          path: '/user/userMessage',
          component: () => import('@/views/user/userMessage.vue')
        },
        {
          path: '/user/reAvatar',
          component: () => import('@/views/user/reAvatar.vue')
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

router.beforeEach((to) => {
  const useStore = useUserStore()
  if (!useStore.token && to.path !== '/login') return '/login'
  return true
})

export default router
