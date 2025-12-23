<script lang="ts" setup>
import { useTaskStore } from '@/stores/task.store'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const title = ref('')
const date = ref('')
const errorMessage = ref('')

const taskStore = useTaskStore()
const router = useRouter()

const handleSubmit = () => {
  // Validation
  if (!title.value.trim()) {
    errorMessage.value = 'Task title is required'
    return
  }

  // Add task to store
  taskStore.addTask(title.value.trim(), date.value || undefined)

  // Reset form
  title.value = ''
  date.value = ''
  errorMessage.value = ''

  // Navigate to home page
  router.push('/')
}
</script>

<template>
  <!-- Form to add new task -->
  <form
    @submit.prevent="handleSubmit"
    class="flex items-center flex-col justify-center gap-8 mt-10"
  >
    <h2 class="text-2xl font-semibold">Create New Task</h2>

    <!-- Error message -->
    <div v-if="errorMessage" class="text-red-400 bg-red-900 bg-opacity-30 px-4 py-2 rounded">
      {{ errorMessage }}
    </div>

    <div class="flex flex-col gap-4 w-full max-w-md">
      <div class="flex flex-col gap-2">
        <label for="title" class="text-sm font-medium">Title *</label>
        <input
          id="title"
          v-model="title"
          type="text"
          placeholder="Enter task title"
          class="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
          required
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="date" class="text-sm font-medium">Due Date (optional)</label>
        <input
          id="date"
          v-model="date"
          type="date"
          class="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
        />
      </div>
    </div>

    <div class="flex items-center justify-center gap-4">
      <button
        type="button"
        @click="router.push('/')"
        class="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-full transition-colors"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full transition-colors"
      >
        Add Task
      </button>
    </div>
  </form>
</template>
