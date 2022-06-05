import Layout from '@/layout/index.vue'
import { RouteRecordRaw } from 'vue-router'
export const basicRoutes = [
  {
    name: 'home',
    path: '/',
    component: Layout,
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    isHidden: true,
  },
  {
    name: 'REDIRECT',
    path: '/redirect',
    component: Layout,
    isHidden: true,
    children: [
      {
        name: 'REDIRECT_NAME',
        path: '',
        component: () => import('@/views/redirect/index.vue'),
      },
    ],
  },
  {
    name: 'LOGIN',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    isHidden: true,
    meta: {
      title: '登录页',
    },
  },
  {
    name: 'ERROR-PAGE',
    path: '/error-page',
    component: Layout,
    redirect: '/error-page/404',
    meta: {
      title: '错误页',
    },
    children: [
      {
        name: 'ERROR-404',
        path: '404',
        component: () => import('@/views/error-page/404.vue'),
        meta: {
          title: '404',
        },
      },
    ],
  },
  {
    name: 'test',
    path: '/test',
    component: () => import('@/views/login/test.vue'),
  },
]

export const NOT_FOUND_ROUTE = {
  name: 'NOT_FOUND',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  isHidden: true,
}
