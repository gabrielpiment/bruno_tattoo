<template>
  <section
    class="min-w-[100vw] h-[100dvh] flex-shrink-0 grid grid-cols-1 md:grid-cols-2 relative overflow-hidden"
    style="scroll-snap-align: start;"
  >
    <!-- Left: content -->
    <div
      ref="contentRef"
      class="flex flex-col justify-center px-8 md:px-14 pt-12 pb-28 md:py-0 order-2 md:order-1 overflow-y-auto scroll-track"
    >
      <!-- Eyebrow -->
      <div class="flex items-center gap-3 mb-4">
        <span class="w-8 h-px bg-[#1a1a18]"></span>
        <span class="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#1a1a18]/60">UBERABA, MG</span>
      </div>

      <!-- Headline -->
      <h1 class="font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.88] tracking-wide text-[#1a1a18] uppercase mb-4">
        Sua Pele<br>Sua<br>História
      </h1>

      <!-- Tagline -->
      <p class="font-body italic text-base md:text-xl text-[#1a1a18]/70 mb-2 font-light min-w-0 w-full break-words">
        Deixe sua marca, conte sua história.
      </p>

      <!-- Body -->
      <p class="font-body text-sm text-[#1a1a18]/50 leading-relaxed min-w-0 w-full break-words mb-6" style="max-width: min(42ch, 100%);">
        Cada tatuagem é uma história única gravada na pele. Agende sua sessão comigo.
      </p>

      <!-- CTAs -->
      <div class="flex flex-wrap items-center gap-4">
        <a
          href="https://wa.me/553484183658?text=Ol%C3%A1%20tudo%20bem%3F%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
          target="_blank"
          class="font-body font-semibold text-sm tracking-widest uppercase px-6 py-3 border-2 border-[#1a1a18] text-[#1a1a18] hover:bg-[#1a1a18] hover:text-[#f2ede6] transition-all duration-300 active:scale-[0.98] text-center"
          style="transition-timing-function: cubic-bezier(0.16,1,0.3,1)"
        >
          Fazer orçamento
        </a>
        <NuxtLink
          to="/portfolio"
          class="font-body font-semibold text-sm tracking-widest uppercase px-6 py-3 border-2 border-[#1a1a18]/30 text-[#1a1a18]/60 hover:border-[#1a1a18] hover:text-[#1a1a18] transition-all duration-300 active:scale-[0.98]"
          style="transition-timing-function: cubic-bezier(0.16,1,0.3,1)"
        >
          Portfólio
        </NuxtLink>
      </div>

      <!-- Social icons -->
      <div class="flex items-center gap-5 mt-14">
        <a v-for="icon in socialIcons" :key="icon.label" href="#" :aria-label="icon.label"
           class="opacity-35 hover:opacity-100 transition-opacity duration-200">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path :d="icon.path" v-if="icon.path" />
            <path v-for="(p, i) in icon.paths" :key="i" :d="p" />
            <rect v-if="icon.rect" v-bind="icon.rect" />
            <line v-if="icon.line" v-bind="icon.line" />
            <circle v-if="icon.circle" v-bind="(icon.circle as Record<string, unknown>)" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Right: photo -->
    <div class="relative overflow-hidden order-1 md:order-2 min-h-[55vw] md:min-h-0 group cursor-pointer">
      <img
        src="/images/bruno_artist.jpg"
        alt="Bruno Tattoo Artist"
        class="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-[1.15] transition-all duration-[1200ms] cubic-bezier(0.16,1,0.3,1) group-hover:grayscale-0 group-hover:scale-110"
      />
      <!-- Paper tear left edge -->
      <svg class="absolute left-0 top-0 h-full w-14 z-10" viewBox="0 0 55 600" preserveAspectRatio="none" fill="#f2ede6" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L55 18L48 85L55 150L42 225L55 295L50 368L55 445L46 515L55 585L55 600L0 600Z"/>
      </svg>

    </div>

    <!-- Marquee strip — bottom of card -->
    <div class="absolute bottom-0 left-0 right-0 z-20 border-t border-[#1a1a18]/15 overflow-hidden py-3 bg-[#1a1a18] order-3">
      <div class="flex whitespace-nowrap" :style="{ transform: `translateX(-${offset}px)` }">
        <span v-for="n in 8" :key="n" class="font-display text-sm tracking-[0.25em] uppercase text-[#f2ede6]/70 px-8">
          Agendamentos Abertos &bull; Tatuagem Premium &bull; Estúdio Exclusivo &bull;
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMarquee } from '../../composables/useMarquee'
const { offset } = useMarquee()

const socialIcons = [
  {
    label: 'Twitter',
    path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
    paths: [], rect: null, line: null, circle: null,
  },
  {
    label: 'WhatsApp',
    path: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
    paths: [], rect: null, line: null, circle: null,
  },
  {
    label: 'Facebook',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
    paths: [], rect: null, line: null, circle: null,
  },
  {
    label: 'Instagram',
    path: null,
    paths: ['M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'],
    rect: { width: 20, height: 20, x: 2, y: 2, rx: 5, ry: 5 },
    line: { x1: 17.5, y1: 6.5, x2: 17.51, y2: 6.5 },
    circle: null,
  },
]
</script>

<style scoped>
.font-display { font-family: 'Bebas Neue', sans-serif; }
.font-body    { font-family: 'Space Grotesk', sans-serif; }
</style>
