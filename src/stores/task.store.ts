import type { Task } from '@/model/task'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore({
  id: 'task',
  state: () => ({
    tasks: [
      {
        id: 1,
        title: 'Task 1',
        date: '2023-01-01',
        starred: true,
        completed: false
      },

      {
        id: 2,
        title: 'Task 2',
        date: '2023-01-01',
        starred: false,
        completed: false
      },
      {
        id: 3,
        title: 'Task 3',
        date: '2023-01-01',
        starred: false,
        completed: false
      },
      {
        id: 4,
        title: 'Task 4',
        date: '2023-01-01',
        starred: true,
        completed: false
      }
    ],
    taskToDisplay: [] as Task[]
  }),
  actions: {
    allTasks() {
      this.taskToDisplay = this.tasks
    },

    filteredTasks() {
      this.taskToDisplay = this.tasks.filter((task) => task.starred)
    },

    completedTasks() {
      this.taskToDisplay = this.tasks.filter((task) => task.completed)
    }
  }
})
