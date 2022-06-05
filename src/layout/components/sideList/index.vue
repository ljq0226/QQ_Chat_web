<template>
  <div>
    <template v-for="item in friendStore.friendInfo" :key="item.qq">
      <div class="chatWindow">
        <div class="left"><img src="@/assets/images/qq.jpeg" /></div>
        <div class="'middle">
          <span>{{ item.username }}</span>
        </div>
        <div class="right">星期1</div>
      </div>
    </template>
  </div>
</template>
<script setup>
import { useFriendStore } from '@/store/friend'
import { onBeforeMount, reactive, ref, onMounted } from 'vue'
const friendStore = useFriendStore()
const friendsInfo = reactive(friendStore.friendInfo)
onBeforeMount(() => {
  friendStore.getFriendList()
})
</script>
<style lang="scss" scoped>
.chatWindow {
  display: flex;
  justify-content: space-between;
  width: 16vw;
  .left {
    img {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
  }
  .middle {
    display: flex;
    flex-direction: row;
  }
}
</style>
