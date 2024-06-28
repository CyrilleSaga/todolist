<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Go to dashboard page
const gotoDashboard = () => {
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <h1 class="text-3xl font-bold">Login</h1>
  <button class="bg-green-300 px-4 py-2 rounded-full" @click="gotoDashboard">Login</button>
</template>
