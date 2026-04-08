import { ref, onMounted, onUnmounted } from 'vue'

export function useHorizontalScroll(totalCards: number) {
  const scrollContainer = ref<HTMLElement | null>(null)
  const currentSlide = ref(0)

  // Debounce flag — prevents rapid multi-slide jumps on trackpads
  let wheelLocked = false

  function onScroll() {
    if (!scrollContainer.value) return
    const w = scrollContainer.value.clientWidth
    if (w === 0) return
    currentSlide.value = Math.round(scrollContainer.value.scrollLeft / w)
  }

  function goToCard(index: number) {
    if (!scrollContainer.value) return
    const clamped = Math.max(0, Math.min(index, totalCards - 1))
    scrollContainer.value.scrollTo({
      left: clamped * scrollContainer.value.clientWidth,
      behavior: 'smooth',
    })
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowRight') goToCard(currentSlide.value + 1)
    if (e.key === 'ArrowLeft')  goToCard(currentSlide.value - 1)
  }

  // Convert vertical wheel to horizontal slide navigation
  function onWheel(e: WheelEvent) {
    e.preventDefault()
    if (wheelLocked) return
    wheelLocked = true
    if (e.deltaY > 0 || e.deltaX > 0) goToCard(currentSlide.value + 1)
    else                               goToCard(currentSlide.value - 1)
    // Unlock after the smooth scroll has had time to settle (~650 ms)
    setTimeout(() => { wheelLocked = false }, 650)
  }

  // Touch swipe support
  let touchStartX = 0
  let touchStartY = 0

  function onTouchStart(e: TouchEvent) {
    touchStartX = e.touches[0].clientX
    touchStartY = e.touches[0].clientY
  }

  function onTouchEnd(e: TouchEvent) {
    const dx = touchStartX - e.changedTouches[0].clientX
    const dy = touchStartY - e.changedTouches[0].clientY
    // Only treat as horizontal swipe if the horizontal movement dominates
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return
    if (dx > 0) goToCard(currentSlide.value + 1)
    else        goToCard(currentSlide.value - 1)
  }

  onMounted(() => {
    window.addEventListener('keydown', onKeydown)
    const el = scrollContainer.value
    if (el) {
      el.addEventListener('wheel', onWheel, { passive: false })
      el.addEventListener('touchstart', onTouchStart, { passive: true })
      el.addEventListener('touchend',   onTouchEnd,   { passive: true })
    }
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown)
    const el = scrollContainer.value
    if (el) {
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchend',   onTouchEnd)
    }
  })

  return {
    scrollContainer,
    currentSlide,
    onScroll,
    goToCard,
  }
}
