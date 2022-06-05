import { createPageLoadingGuard } from './page-loading-guard'

export function setupRouterGuard(router: any) {
  createPageLoadingGuard(router)
}
