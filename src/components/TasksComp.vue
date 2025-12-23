<script lang="ts" setup>
import TaskItem from './TaskItem.vue'
import { useTaskStore } from '@/stores/task.store'

const taskStore = useTaskStore()

const handleStarred = (id: number) => {
  taskStore.toggleStarred(id)
}

const handleCompleted = (id: number) => {
  taskStore.toggleCompleted(id)
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
