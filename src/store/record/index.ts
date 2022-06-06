import { defineStore } from 'pinia'
import * as type from '@/api/chatRecord/types'
import { recordApi } from '@/api/chatRecord'
import moment from 'moment'
export const useRecordStore = defineStore('record', {
  state: () => ({
    record: [],
  }),
  getters: {},
  actions: {
    async getRecord(data: type.getRecordDto) {
      const res: any = await recordApi.getRecord(data)
      const result: any = res.data
      const { receiveMsg, sendMsg } = result
      receiveMsg.forEach((item: any) => {
        item.createDate = moment(item.createDate).format('MMMM Do , h:mm a')
        item.flag = 0
      })
      sendMsg.forEach((item: any) => {
        item.createDate = moment(item.createDate).format('MMMM Do , h:mm a')
        item.flag = 1
      })
      this.record = receiveMsg
        .concat(sendMsg)
        .sort((a: any, b: any) => moment(a.createDate).valueOf() - moment(b.createDate).valueOf())
    },
  },
})
