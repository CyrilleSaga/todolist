<script lang="ts" setup>
import type { Task } from '@/model/task'
import { useTaskStore } from '@/stores/task.store'
import { ref } from 'vue'

const title = ref('')

const taskStore = useTaskStore()

const handleSubmit = () => {
  const task: Task = {
    id: taskStore.taskToDisplay.length + 1,
    title: title.value,
    date: '2023-01-01',
    starred: false,
    completed: false
  }

  task.id = taskStore.taskToDisplay.length + 1
  taskStore.taskToDisplay.unshift(task)
}
</script>

<template>
  <!-- Form to add new task -->
  <form
    @submit.prevent="handleSubmit"
    class="flex items-center flex-col justify-center gap-8 mt-10"
  >
    <div class="flex items-center justify-between gap-8">
      <input v-model="title" type="text" placeholder="Add new task" />
    </div>
    <div class="flex items-center justify-end gap-8">
      <button type="submit" class="bg-green-300 px-4 py-2 rounded-full">Add Task</button>
    </div>
  </form>
</template>
