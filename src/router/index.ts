import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import SettingPage from '@/views/SettingPage.vue'
import DashboardPage from '@/views/DashboardPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Login page
    { path: '/', name: 'login', component: LoginPage },

    // Register page
    { path: '/register', name: 'register', component: RegisterPage },

    // Dashboard page
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage,
      children: [
        // Profile page
        { path: 'profile', name: 'profile', component: ProfilePage },

        // Setting page
        { path: 'setting', name: 'setting', component: SettingPage }
      ]
    }
  ] as RouteRecordRaw[]
})

export default router
