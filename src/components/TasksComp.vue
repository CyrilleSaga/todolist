<script lang="ts" setup>
import { ref } from 'vue'
import TaskItem from './TaskItem.vue'
import type { Task } from '@/model/task'
import { useTaskStore } from '@/stores/task.store'

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

const handleStarred = (value: number) => {
  taskStore.taskToDisplay.map((task) => {
    if (task.id === value) {
      task.starred = !task.starred
    }
  })
}

const handleCompleted = (value: number) => {
  taskStore.taskToDisplay.map((task) => {
    if (task.id === value) {
      task.completed = !task.completed
      console.log(task)
    }
  })
}
</script>

<template>
  <div class="bg-black bg-opacity-30 p-6 rounded-lg">
    <!-- title -->
    <div class="flex items-center justify-start gap-8">
      <h4>Tasks</h4>
    </div>

    <!-- tasks -->
    <div class="flex flex-col gap-4">
      <TaskItem
        v-for="task in taskStore.taskToDisplay"
        :key="task.id"
        :id="task.id"
        :title="task.title"
        :date="task.date"
        :starred="task.starred"
        :completed="task.completed"
        @update:completed="handleCompleted"
        @update:starred="handleStarred"
      />
    </div>

    <!-- Footer -->
  </div>
</template>
