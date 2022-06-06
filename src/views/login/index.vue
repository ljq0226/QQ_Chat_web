<template>
  <div class="flex">
    <div class="root">
      <div class="top">
        <div class="img"><img src="../../assets/images/login/guanbi.png" /></div>
        <div class="icon"><i class="iconfont icon-erweima"></i></div>
      </div>
      <div class="middle">
        <div><img src="@/assets/images/login/qq.jpeg" alt="" /></div>
      </div>
      <div class="bottom">
        <div>
          <div class="input username">
            <input
              v-model="loginInfo.qq"
              autofocus
              type="text"
              placeholder="QQNumber"
              @keydown.enter="handleLogin"
            />
          </div>
          <div class="input password">
            <input
              v-model="loginInfo.password"
              type="password"
              placeholder="password"
              @keydown.enter="handleLogin"
            />
          </div>
          <div class="login">
            <a class="iconfont icon-denglu" @click="handleLogin"></a>
          </div>
        </div>
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
        router.push('/home')
      }
    } else {
      window.$message.warning(res.message)
    }
  } catch (error) {
    window.$message.error(error.message)
  }
}
</script>

<style lang="scss" scoped>
.root {
  background-color: #fff;
  width: 15vw;
  height: 40vh;
  border-radius: 10px;
  .bottom {
    display: flex;
    justify-content: center;

    .input {
      font-size: 18px;
      border-bottom: 1px solid rgb(217, 220, 222);
      line-height: 5vh;
    }
    .login {
      display: flex;
      justify-content: center;
      a {
        font-size: 2em;
      }
    }

    // .password {
    //   padding-right: 20px;
    //   background: url('@/assets/images/login/jinru.png') no-repeat scroll right center transparent;
    // }
  }

  .middle {
    display: flex;
    justify-content: center;
    margin-bottom: 3vh;
    img {
      width: 5vw;
      border-radius: 50px;
    }
  }

  .top {
    margin-bottom: 6vh;
    .img {
      float: left;
      margin: 8px;
    }
    img {
      width: 1vw;
    }
    .icon {
      float: right;
      margin: 8px;
    }
    i {
      width: 1vw;
    }
  }
}
.flex {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/images/login_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
