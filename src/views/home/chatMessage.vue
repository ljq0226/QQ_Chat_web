<template>
  <div class="message_all">
    <button @click="send"></button>

    <template v-for="item in p.params.record" :key="item">
      <div class="time-space">
        <div class="time">
          {{ item.createDate }}
        </div>
      </div>
      <div v-if="item.flag" class="sendMsg">
        <div class="s-space"></div>
        <div class="s-msg">{{ item.content }}</div>
        <div class="s-img">
          <n-avatar
            round
            size="small"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </div>
      </div>
      <div v-else class="receiveMsg">
        <div class="s-img">
          <n-avatar
            round
            size="small"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </div>
        <div class="s-msg">{{ item.content }}</div>

        <div class="s-space"></div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import moment from 'moment'
import { NAvatar } from 'naive-ui'
import { reactive } from 'vue-demi'
import { ref, onMounted, inject } from 'vue'
import { Socket } from 'socket.io-client'
const socket = inject('socket') as Socket
// eslint-disable-next-line vue/require-default-prop
const p: any = defineProps({ params: Object })

onMounted(() => {
  socket.connect() //连接socket服务器
})
const send = () => {
  console.log('')
  socket.emit('socketTest', { test: '测试数据' }, (data: any) => {
    console.log(data) // { msg1: '测试1', msg2: '测试2' }
  })
}
</script>
<style lang="scss" scoped>
.message_all {
  display: flex;
  flex-direction: column;

  overflow: auto;

  .time-space {
    display: flex;
    justify-content: center;
    .time {
      font-size: 10px;
      font-color: gray;
      opacity: 0.6;
    }
  }
  .receiveMsg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .s-space {
      flex: 0.95;
    }
    .s-msg {
      font-size: 12px;
      padding: 10px;
      border-radius: 10px;
      background-color: rgb(243, 243, 243);
    }
    .s-img {
      margin-left: 10px;
    }
  }
  .sendMsg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .s-space {
      flex: 0.95;
    }
    .s-msg {
      font-size: 12px;
      padding: 10px;
      border-radius: 10px;
      background-color: rgb(217, 244, 254);
    }
    .s-img {
      margin-right: 10px;
    }
  }
}
</style>
