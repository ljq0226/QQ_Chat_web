import { defineStore } from 'pinia'
import userApi from '../../api/user'
import * as type from '../../api/user/types'
export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {},
  }),
  getters: {},
  actions: {
    async createUser(data: type.registerDto) {
      await userApi.register(data)
    },
    async login(data: type.loginDto) {
      const qq: string = data.qq + ''
      const password: string = data.password + ''
      try {
        const res: any = await userApi.login({ qq, password })
        console.log(await res)
        if (res.code === 0) {
          console.log(res.data)
          const { qq, username, avatar, gender, age, email, signature, createDate, loginInfoId } =
            res.data
          this.userInfo = {
            qq,
            username,
            avatar,
            gender,
            age,
            email,
            signature,
            createDate,
            loginInfoId,
          }
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
})
