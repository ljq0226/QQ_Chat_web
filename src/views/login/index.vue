<template>
  <div class="root">
    <div class="top"></div>
    <div class="img"></div>
    <div class="bottom">
      <div class="form-item">
        <input
          v-model="loginInfo.qq"
          type="text"
          placeholder="QQNumber"
          autofocus
          @keydown.enter="handleLogin"
        />
        <input
          v-model="loginInfo.qq"
          autofocus
          type="text"
          class="input"
          placeholder="QQNumber"
          @keydown.enter="handleLogin"
        />
      </div>
      <div class="form-item" mt-35>
        <input
          v-model="loginInfo.password"
          type="password"
          class="input"
          placeholder="password"
          @keydown.enter="handleLogin"
        />
      </div>
      <div class="form-item" mt-35>
        <button class="submit-btn" @click="handleLogin">登录</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, unref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const router = useRouter()
const query = unref(router.currentRoute).query
//默认账号密码
const loginInfo = ref({
  qq: '111',
  password: '123',
})
//点击登录处理
async function handleLogin() {
  const { qq, password } = loginInfo.value
  if (!qq || !password) {
    window.$message.warning('请输入QQ号和密码')
    return
  }
  try {
    window.$message.loading('正在验证...')
    //发送login请求 获取用户信息
    const res = userStore.login({ qq, password })
    if (typeof res !== 'string') {
      window.$message.success('登录成功')
      localStorage.setItem('loginInfo', JSON.stringify(loginInfo.value))
      if (query.redirect) {
        const path = query.redirect
        Reflect.deleteProperty(query, 'redirect')
        router.push({ path, query })
      } else {
        router.push('/')
      }
    } else {
      window.$message.warning(res.message)
    }
  } catch (error) {
    window.$message.error(error.message)
  }
}
</script>

<style lang="scss" scoped></style>
