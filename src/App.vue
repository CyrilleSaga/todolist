<script lang="ts" setup>
import HeaderComp from '@/components/HeaderComp.vue'
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <HeaderComp />
    <div class="flex items-stretch justify-between">
      <router-view />
      <!-- <router-view class="bg-black" name="task" />
      <router-view name="taskDetail" /> -->
    </div>
  </div>
</template>
