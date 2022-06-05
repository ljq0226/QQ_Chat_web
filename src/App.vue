<template>
  <AppProvider>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </AppProvider>
</template>
<script setup>
import { NMessageProvider, NDialogProvider } from 'naive-ui'
import AppProvider from '@/components/AppProvider/index.vue'
</script>
<style lang="scss" scoped></style>
