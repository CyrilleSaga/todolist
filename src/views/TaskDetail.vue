<script lang="ts" setup>
import { useTaskStore } from '@/stores/task.store'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

const taskStore = useTaskStore()

onMounted(() => {
  taskStore.findById(Number(id))
})
</script>

<template>
  <h1>Task Detail</h1>
  <div v-if="taskStore.task">
    <div class="flex items-center justify-start gap-8">
      <h4>{{ taskStore.task.title }}</h4>
    </div>
    <div class="flex items-center justify-start gap-8">
      <span>{{ taskStore.task.date }}</span>
    </div>
    <div class="flex items-center justify-start gap-8">
      <span>{{ taskStore.task.starred }}</span>
    </div>
    <div class="flex items-center justify-start gap-8">
      <span>{{ taskStore.task.completed }}</span>
    </div>
  </div>
</template>
