<script lang="ts" setup>
import { useHead } from '@vueuse/head'
useHead({
  title: 'Vite-key',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})
</script>

<template>
  <router-view />
</template>
