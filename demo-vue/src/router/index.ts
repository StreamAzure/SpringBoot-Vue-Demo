import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/components/Index.vue'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import ChangePassword from '@/components/ChangePassword.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          component: Index,
        },
        {
          path: '/register',
          component: Register,
        },
        {
          path: '/login',
          component: Login,
        },
        {
          path: '/passwd',
          component: ChangePassword,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
      // 如果有 savedPosition，则滚动到保存的位置
      if (savedPosition) {
        return savedPosition;
      }
  
      // 否则，滚动到页面顶部
      return { top: 0 };
    },
})

export default router