<template>
  <!-- Left arrow -->
  <button
    v-if="current > 0"
    @click="$emit('prev')"
    aria-label="Card anterior"
    class="hidden md:flex fixed left-5 top-1/2 -translate-y-1/2 z-50 opacity-20 hover:opacity-70 transition-opacity duration-200 items-center justify-center w-10 h-10"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M15 18l-6-6 6-6"/>
    </svg>
  </button>

  <!-- Right arrow -->
  <button
    v-if="current < total - 1"
    @click="$emit('next')"
    aria-label="Próximo card"
    class="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 opacity-20 hover:opacity-70 transition-opacity duration-200 items-center justify-center w-10 h-10"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9 18l6-6-6-6"/>
    </svg>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  current: number
  total: number
  color?: string
}>(), { color: '#1a1a18' })

defineEmits<{
  (e: 'prev'): void
  (e: 'next'): void
}>()
</script>
