import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { setupRouterGuard } from './guard'
import { basicRoutes } from './routes'
export const router = createRouter({
  history: createWebHistory('/'),
  routes: basicRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name }: any = route
    router.hasRoute(name) && router.removeRoute(name)
  })
  basicRoutes.forEach((route) => {
    !router.hasRoute(route.name) && router.addRoute(route)
  })
}

export function setupRouter(app: any) {
  app.use(router)
  setupRouterGuard(router)
}
