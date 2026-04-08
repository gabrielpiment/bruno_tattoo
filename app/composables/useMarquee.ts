import { ref, onMounted, onUnmounted } from 'vue'

export function useMarquee(speed = 0.045) {
  const offset = ref(0)
  let animFrame: number | null = null
  let lastTime: number | null = null

  function animate(timestamp: number) {
    if (!lastTime) lastTime = timestamp
    const delta = timestamp - lastTime
    lastTime = timestamp
    offset.value = (offset.value + delta * speed) % 520
    animFrame = requestAnimationFrame(animate)
  }

  onMounted(() => {
    animFrame = requestAnimationFrame(animate)
  })

  onUnmounted(() => {
    if (animFrame !== null) cancelAnimationFrame(animFrame)
  })

  return { offset }
}
