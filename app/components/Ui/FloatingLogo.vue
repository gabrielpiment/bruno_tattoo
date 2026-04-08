<template>
  <div class="fixed top-5 left-6 z-50 flex items-center gap-2">
    <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 4L28 14L20 36L12 14Z" :stroke="color" stroke-width="2.5" fill="none"/>
      <path d="M12 14Q4 16 4 22Q4 28 12 26" :stroke="color" stroke-width="2" fill="none"/>
      <path d="M28 14Q36 16 36 22Q36 28 28 26" :stroke="color" stroke-width="2" fill="none"/>
    </svg>
    <span
      class="font-body font-semibold text-sm tracking-widest uppercase leading-none transition-colors duration-300"
      :style="{ color }"
    >
      Bruno<br>Tattoo
    </span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ color?: string }>(), { color: '#1a1a18' })
</script>

<style scoped>
.font-body { font-family: 'Space Grotesk', sans-serif; }
</style>
