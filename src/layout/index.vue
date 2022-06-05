<template>
  <div class="root">
    <div class="view">
      <div class="header">
        <Header></Header>
      </div>

      <div class="bottom">
        <div class="sideList">
          <SideList></SideList>
        </div>
        <div class="mainView">
          <MainView></MainView>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from '@/store/theme'
import Header from './components/header/index.vue'
import MainView from './components/mainView/index.vue'
import SideList from './components/sideList/index.vue'
const useTheme = useThemeStore()
</script>

<style lang="scss" scoped>
.root {
  height: 100vh;
  width: 100vw;
  background-color: rgb(2, 121, 91);
  display: flex;
  justify-content: center;
  align-items: center;
  .view {
    background-color: #fff;
    height: 75vh;
    width: 67vw;
    display: flex;
    flex-direction: column;
    .header {
      height: 8%;
      background-color: rgba(255, 255, 255, 0.5);
      border-bottom: 1px solid rgba(18, 17, 17, 0.8);
    }

    .bottom {
      display: flex;
      .sideList {
        background-color: rgba(253, 253, 253, 0.5);
        display: flex;
        border-right: 1px solid rgba(91, 84, 84, 0.5);
        width: 27%;
        height: 100%;
        overflow: auto;
        position: relative;
      }
      .mainView {
        background-color: rgba(253, 253, 253, 0.5);
        display: flex;
      }
    }
  }
}
</style>
