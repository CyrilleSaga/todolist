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
    task: null as Task | null,
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
    },

    findById(id: number) {
      this.task = this.tasks.find((task) => task.id === id) ?? null
    },

    addTask(title: string, date?: string) {
      const newId = this.tasks.length > 0 ? Math.max(...this.tasks.map((t) => t.id)) + 1 : 1

      const newTask: Task = {
        id: newId,
        title,
        date: date || new Date().toISOString().split('T')[0],
        starred: false,
        completed: false
      }

      this.tasks.unshift(newTask)
      // Update the display to show the new task
      this.allTasks()
    },

    toggleStarred(id: number) {
      const task = this.tasks.find((t) => t.id === id)
      if (task) {
        task.starred = !task.starred
      }
    },

    toggleCompleted(id: number) {
      const task = this.tasks.find((t) => t.id === id)
      if (task) {
        task.completed = !task.completed
      }
    }
  }
})
