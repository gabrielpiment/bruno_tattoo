<template>
  <nav
    class="fixed bottom-7 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-2.5 rounded-full transition-all duration-500"
    :style="navStyle"
    aria-label="Navegação por cards"
  >
    <button
      v-for="(label, i) in labels"
      :key="i"
      @click="$emit('go', i)"
      :aria-label="`Ir para ${label}`"
      :aria-current="current === i ? 'true' : undefined"
      class="rounded-full transition-all duration-300"
      :style="{
        width: current === i ? '20px' : '8px',
        height: '8px',
        backgroundColor: current === i ? dotActiveColor : dotInactiveColor,
      }"
    />
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  labels: string[]
  current: number
  dark?: boolean
  dotActiveColor?: string
  dotInactiveColor?: string
}>(), {
  dark: false,
  dotActiveColor: '#1a1a18',
  dotInactiveColor: 'rgba(26,26,24,0.25)',
})

defineEmits<{ (e: 'go', index: number): void }>()

const navStyle = computed(() =>
  props.dark
    ? {
        backdropFilter: 'blur(12px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(12px) saturate(1.4)',
        background: 'rgba(26, 26, 24, 0.25)',
        border: '1px solid rgba(242, 237, 230, 0.08)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 16px rgba(0,0,0,0.20)',
      }
    : {
        backdropFilter: 'blur(12px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(12px) saturate(1.4)',
        background: 'rgba(242, 237, 230, 0.25)',
        border: '1px solid rgba(26, 26, 24, 0.05)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 4px 16px rgba(26,26,24,0.06)',
      }
)
</script>
