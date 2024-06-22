import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import NewTask from '@/views/NewTask.vue'
import HomePage from '@/views/HomePage.vue'
import TaskDetail from '@/views/TaskDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Home page
    {
      path: '/',
      name: 'home',
      component: HomePage
    },

    {
      path: '/task',
      name: 'task',
      children: [
        // New task page
        {
          path: 'new', // localhost:3000/task/new
          name: 'newTask',
          component: NewTask
        },

        // Task detail page
        {
          path: ':id', // localhost:3000/task/1
          name: 'taskDetail',
          component: TaskDetail
        }
      ]
    }
  ] as RouteRecordRaw[]
})

export default router
