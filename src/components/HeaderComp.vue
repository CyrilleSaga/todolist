<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleNewTask = () => {
  router.push({ name: 'newTask' })
}

const handleHome = () => {
  router.push({ name: 'home' })
}
</script>

<template>
  <nav class="flex items-center justify-between gap-8">
    <header class="font-bold text-6xl">
      <div @click="handleHome" class="cursor-pointer">
        To<span class="text-yellow-400">do.</span>
      </div>
    </header>
    <div class="flex items-center justify-start gap-8">
      <button class="px-4 py-2 rounded-full" @click="handleNewTask">Add Task</button>
    </div>
  </nav>
</template>
