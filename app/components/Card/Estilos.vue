<template>
  <section
    class="w-screen max-w-[100vw] h-[100dvh] flex-shrink-0 flex flex-col md:flex-row relative overflow-hidden"
    style="scroll-snap-align: start;"
  >
    <!-- Content panel (mobile: top strip, desktop: left column) -->
    <div
      class="flex flex-col justify-center px-8 md:px-14 pt-24 pb-12 md:py-0 z-10 bg-[#f2ede6]
             h-auto md:h-full md:w-[37%] md:flex-shrink-0 border-b border-[#1a1a18]/10 md:border-b-0"
    >
      <span class="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#1a1a18]/40 mb-4">
        Especialidades
      </span>
      <h2 class="font-display text-[clamp(3rem,5.5vw,7rem)] leading-[0.88] tracking-wide text-[#1a1a18] uppercase mb-5">
        Qual Estilo<br>Que É<br>Seu?
      </h2>
      <p class="font-body text-sm text-[#1a1a18]/50 leading-relaxed max-w-[38ch] mb-7 hidden md:block">
        Cinco linguagens visuais, uma única obsessão com qualidade. Passe o cursor para explorar.
      </p>
      <div class="flex flex-col gap-2.5">
        <div
          v-for="(style, i) in styles"
          :key="style.name"
          class="flex items-center gap-3 cursor-pointer group/label"
          @mouseenter="active = i"
          @mouseleave="active = null"
          @click="openModal(style)"
        >
          <span
            class="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-300"
            :class="active === i ? 'bg-[#d42b2b]' : 'bg-[#1a1a18]/20'"
          />
          <span
            class="font-body text-sm tracking-wide transition-all duration-200"
            :class="active === i ? 'text-[#1a1a18] font-semibold' : 'text-[#1a1a18]/45'"
          >
            {{ style.name }}
          </span>
        </div>
      </div>
    </div>

    <!-- Desktop: 5 vertical expanding image strips -->
    <div class="hidden md:flex flex-1 h-full">
      <div
        v-for="(style, i) in styles"
        :key="style.name"
        class="relative h-full overflow-hidden cursor-pointer"
        :style="{
          flexBasis: active === i ? '34%' : '16.5%',
          transition: 'flex-basis 0.7s cubic-bezier(0.16,1,0.3,1)',
          flexShrink: 0,
          flexGrow: 0,
        }"
        @mouseenter="active = i"
        @mouseleave="active = null"
      >
        <img
          :src="style.thumb"
          :alt="style.name"
          class="absolute inset-0 w-full h-full object-cover"
          style="filter: grayscale(100%) contrast(1.12);"
        />
        <video
          :src="style.video"
          :poster="style.thumb"
          :alt="style.name"
          class="absolute inset-0 w-full h-full object-cover"
          :style="{
            filter: 'grayscale(100%) contrast(1.12)',
            opacity: active === i ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }"
          muted
          loop
          playsinline
          preload="none"
          @mouseenter="($event.target as HTMLVideoElement).play()"
          @mouseleave="($event.target as HTMLVideoElement).pause(); ($event.target as HTMLVideoElement).currentTime = 0"
        ></video>
        <!-- Gradient overlay -->
        <div
          class="absolute inset-0 pointer-events-none"
          :style="{
            background: 'linear-gradient(to top, rgba(26,24,20,0.9) 0%, rgba(26,24,20,0.15) 55%, transparent 100%)',
            opacity: active === i ? 1 : 0.5,
            transition: 'opacity 0.5s ease',
          }"
        />
        <!-- Style label -->
        <div class="absolute bottom-0 left-0 right-0 px-4 pb-6 overflow-hidden">
          <span
            class="font-display text-[#f2ede6] uppercase block"
            :style="{
              fontSize: active === i ? '2.4rem' : '0.72rem',
              writingMode: active === i ? 'horizontal-tb' : 'vertical-rl',
              letterSpacing: active === i ? '0.06em' : '0.22em',
              lineHeight: 1,
              transition: 'font-size 0.6s cubic-bezier(0.16,1,0.3,1)',
            }"
          >
            {{ style.name }}
          </span>
          <p
            class="font-body text-xs text-[#f2ede6]/65 leading-relaxed mt-2"
            :style="{
              opacity: active === i ? 1 : 0,
              maxHeight: active === i ? '60px' : '0',
              overflow: 'hidden',
              transition: 'opacity 0.4s ease 0.15s, max-height 0.4s ease 0.1s',
            }"
          >
            {{ style.desc }}
          </p>
        </div>
      </div>
    </div>

    <!-- Mobile: 5 horizontal image strips -->
    <div class="flex md:hidden flex-1 flex-col">
      <div
        v-for="style in styles"
        :key="style.name"
        class="relative flex-1 overflow-hidden"
        @click="openModal(style)"
      >
        <img
          :src="style.thumb"
          :alt="style.name"
          class="absolute inset-0 w-full h-full object-cover"
          style="filter: grayscale(100%) contrast(1.12);"
        />
        <div class="absolute inset-0 bg-[#1a1a18]/55 pointer-events-none"></div>
        <div class="absolute inset-0 flex items-center px-8">
          <span class="font-display text-[#f2ede6] text-2xl uppercase tracking-[0.15em]">
            {{ style.name }}
          </span>
        </div>
      </div>
    </div>
  <div v-if="modalOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-md" @click.self="closeModal">
  <div class="relative w-11/12 max-w-md bg-[#1a1a18] rounded-xl overflow-hidden shadow-2xl">
    <button @click="closeModal" class="absolute top-3 right-3 text-white text-3xl font-bold z-50 drop-shadow-md">✕</button>
    <video v-if="selectedStyle" :src="selectedStyle.video" :poster="selectedStyle.thumb" controls autoplay muted loop playsinline class="w-full h-auto bg-[#1a1a18]"></video>
  </div>
</div>
</section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface TattoStyle {
  name: string;
  img: string;
  video: string;
  thumb: string;
  desc: string;
}

const active = ref<number | null>(null)

const styles: TattoStyle[] = [
  { name: 'Realismo',   img: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=700&q=80', video: '/videos/bruno/IMG_8417.mp4', thumb: '/thumbnails/realismo_thumb.png', desc: 'Retratos com hiper-detalhamento fotográfico gravados na pele.' },
  { name: 'Fine Line',   img: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=700&q=80', video: '/videos/bruno/IMG_7087.mp4', thumb: '/thumbnails/fineline_thumb.png', desc: 'Traços delicados e precisos — elegância que não envelhece.' },
  { name: 'Tradicional', img: 'https://images.unsplash.com/photo-1605106702734-205df224ecce?w=700&q=80', video: '/videos/bruno/IMG_8642.mp4', thumb: '/thumbnails/oldschool_thumb.png', desc: 'Sempre atual. Contornos fortes, cores inabalaíveis.' },
  { name: 'Geométrico', img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=700&q=80', video: '/videos/bruno/IMG_7695.mp4', thumb: '/thumbnails/geometrico_thumb.png', desc: 'Padrões matemáticos em harmonia visual perfeita.' },
  { name: 'Blackwork',  img: 'https://images.unsplash.com/photo-1587064712555-6e206484699b?w=700&q=80', video: '/videos/bruno/IMG_7455.mp4', thumb: '/thumbnails/blackwork_thumb.png', desc: 'Tinta preta intensa. Contraste máximo, impacto permanente.' },
];

const modalOpen = ref(false)
const selectedStyle = ref<TattoStyle | null>(null)

function openModal(style: TattoStyle) {
  selectedStyle.value = style
  modalOpen.value = true
}
function closeModal() {
  modalOpen.value = false
  selectedStyle.value = null
}
</script>

<style scoped>
.font-display { font-family: 'Bebas Neue', sans-serif; }
.font-body    { font-family: 'Space Grotesk', sans-serif; }
</style>
