//login.ts
import http from '@/utils/http'
import * as type from './types'
const userApi = {
  //注册
  register(userinfo: type.registerDto) {
    return http.post('/user/register', userinfo)
  },
  //登录
  login(userinfo: type.loginDto) {
    return http.post('/user/login', userinfo)
  },
  //获取好友列表
  async getFriendList() {
    const loginInfo: { qq: string; password: string } = JSON.parse(
      localStorage.getItem('loginInfo') as any
    )

    return http.get(`/user/friends/${loginInfo.qq} `)
  },
}
export default userApi
