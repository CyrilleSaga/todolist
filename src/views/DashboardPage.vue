<script lang="ts" setup></script>

<template>
  <h1 class="text-3xl font-bold">Dashboard</h1>
  <nav class="flex gap-4">
    <router-link :to="{ name: 'profile' }">Profile</router-link>
    <router-link :to="{ name: 'setting' }">Setting</router-link>
  </nav>

  <router-view />
</template>
