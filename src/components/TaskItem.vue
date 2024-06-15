<script lang="ts" setup>
import type { Task } from '@/model/task'
import { Star, StarIcon } from 'lucide-vue-next'

interface Emits {
  (e: 'update:starred', value: number): void
  (e: 'update:completed', value: number): void
}

const props = defineProps<Task>()
const emit = defineEmits<Emits>()

const handleStarred = () => {
  emit('update:starred', props.id)
}

const handleCompleted = () => {
  emit('update:completed', props.id)
}
</script>

<template>
  <div class="flex items-center justify-start gap-8">
    <input :id="props.title" type="checkbox" />
    <label
      class="flex-grow-1"
      :class="[props.completed ? 'line-through' : '']"
      :for="props.title"
      @click="handleCompleted"
      >{{ props.title }}</label
    >
    <span @click="handleStarred">
      <Star v-if="props.starred" />
      <StarIcon class="text-yellow-400" v-else />
    </span>
  </div>
</template>
