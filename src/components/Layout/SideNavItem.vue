<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{ location: string; title?: string }>()
</script>

<template>
  <RouterLink
    :to="location"
    exact-active-class="bg-secondary text-primary"
    class="flex rounded-full overflow-hidden duration-300 hover:bg-secondary"
  >
    <div class="flex items-center xl:px-4 px-2 py-2">
      <slot></slot>
      <div v-if="title" class="pl-5 hidden xl:block">
        {{ title }}
      </div>
    </div>
  </RouterLink>
</template>
