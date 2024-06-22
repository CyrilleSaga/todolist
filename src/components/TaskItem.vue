<script lang="ts" setup>
import type { Task } from '@/model/task'
import { Star, StarIcon, Eye } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

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

const router = useRouter()

const handleSeeDetail = () => {
  router.push({ name: 'taskDetail', params: { id: props.id } })
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
    <span @click="handleSeeDetail" :title="props.id.toString()">
      <Eye />
    </span>
  </div>
</template>
