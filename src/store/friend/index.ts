import { defineStore } from 'pinia'
import userApi from '../../api/user'
export const useFriendStore = defineStore('friend', {
  state: () => ({
    friendInfo: {},
  }),
  getters: {},
  actions: {
    async getFriendList() {
      const res: any = await userApi.getFriendList()
      try {
        if (res.code === 0) {
          this.friendInfo = res.data
          return this.friendInfo
        }
        window.$message.warning(res.message)
      } catch (err) {
        console.log(err)
      }
    },
  },
})
