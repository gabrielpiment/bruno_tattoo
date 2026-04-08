<template>
  <main 
    ref="scrollContainer"
    class="relative w-full h-[100dvh] bg-[#1a1a18] overflow-y-auto overflow-x-hidden z-[100] hide-scrollbar select-none"
    @wheel="handleInteraction"
    @touchstart="handleInteraction"
    @mousedown="handleInteraction"
  >
    
    <!-- Back Button - Discreet -->
    <header class="fixed top-6 left-6 z-[120]">
      <NuxtLink 
        to="/" 
        class="group flex items-center justify-center w-12 h-12 bg-[#f2ede6]/10 backdrop-blur-md rounded-full border border-[#f2ede6]/20 hover:bg-[#d42b2b] hover:border-[#d42b2b] transition-all duration-500 shadow-2xl"
        aria-label="Voltar para o Início"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[#f2ede6] transition-transform duration-500 group-hover:-translate-x-1">
          <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
        </svg>
      </NuxtLink>
    </header>

    <!-- Content Wrapper -->
    <div ref="contentWrapper" class="flex flex-col">
      <!-- Group Set 1 -->
      <div 
        v-for="(group, gIndex) in videoGroups" 
        :key="'g1-' + gIndex"
        class="w-full h-[100dvh] grid grid-cols-2 grid-rows-2 gap-1 p-1 flex-shrink-0"
      >
        <div 
          v-for="(video, vIndex) in group" 
          :key="'v1-' + vIndex"
          class="relative overflow-hidden group/item bg-[#1a1a18]"
        >
          <video 
            ref="videoRefs"
            :src="video" 
            muted 
            loop 
            playsinline
            preload="none" 
            class="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.15] brightness-[0.75] group-hover/item:grayscale-0 group-hover/item:brightness-100 group-hover/item:scale-105 transition-all duration-1000 ease-out bg-[#2a2a28]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>
      </div>

      <!-- Group Set 2 (for Seamless Loop) -->
      <div 
        v-for="(group, gIndex) in videoGroups" 
        :key="'g2-' + gIndex"
        class="w-full h-[100dvh] grid grid-cols-2 grid-rows-2 gap-1 p-1 flex-shrink-0"
      >
        <div 
          v-for="(video, vIndex) in group" 
          :key="'v2-' + vIndex"
          class="relative overflow-hidden group/item bg-[#1a1a18]"
        >
          <video 
            ref="videoRefs"
            :src="video" 
            muted 
            loop 
            playsinline 
            preload="none"
            class="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.15] brightness-[0.75] group-hover/item:grayscale-0 group-hover/item:brightness-100 group-hover/item:scale-105 transition-all duration-1000 ease-out bg-[#2a2a28]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>
      </div>
    </div>

    <!-- Screen Grain / Texture Overlay -->
    <div class="fixed inset-0 pointer-events-none opacity-[0.03] z-[110]" style="background-image: url('https://grain-y.com/images/grain.png');" />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollContainer = ref<HTMLElement | null>(null)
const contentWrapper = ref<HTMLElement | null>(null)
const videoRefs = ref<HTMLVideoElement[]>([])
const isInteracting = ref(false)
let interactionTimeout: ReturnType<typeof setTimeout>
let animationFrameId: number

const videoGroups = [
  [
    '/videos/bruno/IMG_6020.mp4',
    '/videos/bruno/IMG_6915.mp4',
    '/videos/bruno/IMG_7087.mp4',
    '/videos/bruno/IMG_7128.mp4'
  ],
  [
    '/videos/bruno/IMG_7258.mp4',
    '/videos/bruno/IMG_7455.mp4',
    '/videos/bruno/IMG_7669.mp4',
    '/videos/bruno/IMG_7695.mp4'
  ],
  [
    '/videos/bruno/IMG_7824.mp4',
    '/videos/bruno/IMG_7870.mp4',
    '/videos/bruno/IMG_7883.mp4',
    '/videos/bruno/IMG_7929.mp4'
  ],
  [
    '/videos/bruno/IMG_7948.mp4',
    '/videos/bruno/IMG_8103.mp4',
    '/videos/bruno/IMG_8343.mp4',
    '/videos/bruno/IMG_8348.mp4'
  ],
  [
    '/videos/bruno/IMG_8357.mp4',
    '/videos/bruno/IMG_8417.mp4',
    '/videos/bruno/IMG_8478.mp4',
    '/videos/bruno/IMG_8642.mp4'
  ],
  [
    '/videos/bruno/IMG_8798.mp4',
    '/videos/bruno/IMG_8800_1.mp4',
    '/videos/bruno/IMG_8920.mp4',
    '/videos/bruno/IMG_8921.mp4'
  ]
]


const handleInteraction = () => {
  isInteracting.value = true
  clearTimeout(interactionTimeout)
  interactionTimeout = setTimeout(() => {
    isInteracting.value = false
  }, 3000) // Resumes after 3s of inactivity
}

const autoScroll = () => {
  if (scrollContainer.value && !isInteracting.value) {
    const el = scrollContainer.value
    const halfHeight = el.scrollHeight / 2
    
    // Increment scroll
    el.scrollTop += 0.8 // Speed adjust (0.8px per frame approx)
    
    // Infinite reset
    if (el.scrollTop >= halfHeight) {
      el.scrollTop = 0
    }
  }
  animationFrameId = requestAnimationFrame(autoScroll)
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  animationFrameId = requestAnimationFrame(autoScroll)

  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      })
    }, { rootMargin: '100px' })

    if (videoRefs.value) {
      videoRefs.value.forEach(v => {
        if (v) observer!.observe(v)
      })
    }
  }
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId)
  clearTimeout(interactionTimeout)
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
