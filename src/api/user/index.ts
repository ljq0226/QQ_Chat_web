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
  async getFriendList(qq: string) {
    return http.get(`/user/friends/${qq} `)
  },
}
export default userApi
