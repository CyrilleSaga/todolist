<script lang="ts" setup>
import { ToggleRight } from 'lucide-vue-next'
import { useTaskStore } from '@/stores/task.store'
import { onMounted } from 'vue'

const taskStore = useTaskStore()

const handleFilterAll = () => {
  taskStore.allTasks()
}

const handleFilterStarred = () => {
  taskStore.filteredTasks()
}

const handleFilterCompleted = () => {
  taskStore.completedTasks()
}

onMounted(() => {
  taskStore.allTasks()
})
</script>

<template>
  <section class="bg-black bg-opacity-30 p-6 rounded-lg">
    <div class="text-lg font-bold flex items-center justify-between gap-8">
      <span>Filters</span>
      <ToggleRight />
    </div>
    <div class="">
      <div class="flex items-center justify-start cursor-pointer gap-3" @click="handleFilterAll">
        <ToggleRight />
        <label class="block text-sm font-medium text-gray-700">All</label>
      </div>
      <div
        class="flex items-center justify-start cursor-pointer gap-3"
        @click="handleFilterStarred"
      >
        <ToggleRight />
        <label class="block text-sm font-medium text-gray-700">Starred</label>
      </div>
      <div
        class="flex items-center justify-start cursor-pointer gap-3"
        @click="handleFilterCompleted"
      >
        <ToggleRight />
        <label class="block text-sm font-medium text-gray-700">Completed</label>
      </div>
    </div>
  </section>
</template>
