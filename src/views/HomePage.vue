<script lang="ts" setup>
import SideBar from '@/components/SideBar.vue'
import TasksComp from '@/components/TasksComp.vue'
</script>

<template>
  <div class="max-w-xl mx-auto">
    <div class="flex items-start justify-start gap-2">
      <SideBar />
      <TasksComp />
    </div>
  </div>
</template>
