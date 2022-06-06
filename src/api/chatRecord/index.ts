import http from '@/utils/http'
import * as type from './types'

export const recordApi = {
  //获取聊天信息
  getRecord(data: type.getRecordDto) {
    return http.post('chatRecord/getChatRecord', data)
  },
}
