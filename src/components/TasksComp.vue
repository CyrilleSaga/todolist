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
  </div>
</template>
