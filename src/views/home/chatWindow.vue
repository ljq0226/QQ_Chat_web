<template>
  <div class="chat_all">
    <div class="top">
      <div class="username">{{ router.query.username }}</div>
      <div class="phone"><img src="@/assets/images/home/phone.png" alt="" /></div>
      <div class="open"></div>
      <div class="messageIcon"><img src="@/assets/images/home/messeage.png" alt="" /></div>
    </div>
    <div class="chatMessage">messeage</div>
    <div class="chat">chat</div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useMessage } from 'naive-ui'
const router = useRoute()
let friend: any = reactive({})
onBeforeMount(() => {
  friend = router.query
})
</script>
<style lang="scss" scoped>
.chat_all {
  display: flex;
  flex-flow: column;
  width: 46.1vw;
  position: relative;
  .chat {
    height: 13.9vh;
    background-color: $primaryColor;
  }
  .chatMessage {
    height: 50vh;
    background-color: rgb(126, 65, 65);
  }
  .top {
    display: flex;
    height: 5vh;
    align-items: center;
    .username {
      margin: 5px 8px;
      font-weight: bold;
    }
    .messageIcon {
      flex: 0.05;
    }
    .open {
      flex: 1;
    }
    img {
      width: 20px;
      opacity: 0.3;
    }
  }
}
</style>
