<template>
  <section
    class="w-screen max-w-full h-[100dvh] flex-shrink-0 relative overflow-hidden"
    style="scroll-snap-align: start;"
  >
    <!-- Left: label + headline -->
    <div 
      class="absolute left-4 md:left-14 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 max-w-[280px] md:max-w-[320px] 
             p-6 md:p-0 rounded-3xl md:rounded-none 
             bg-[#f2ede6]/70 md:bg-transparent backdrop-blur-md md:backdrop-blur-none 
             border border-white/20 md:border-none shadow-xl shadow-black/5 md:shadow-none"
    >
      <span class="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#1a1a18]/40">Portfólio</span>
      <h2 class="font-display text-[clamp(2.5rem,5.5vw,6rem)] leading-[0.9] tracking-wide text-[#1a1a18] uppercase">
        Meus<br>Trabalhos
      </h2>
      <p class="font-body text-sm text-[#1a1a18]/60 leading-relaxed mt-1">
        Arte que fica. Trabalhos únicos feitos com dedicação e precisão.
      </p>
      <NuxtLink
        to="/portfolio"
        class="self-start mt-4 font-body font-semibold text-sm tracking-widest uppercase px-7 py-3 border-2 border-[#1a1a18] text-[#1a1a18] hover:bg-[#1a1a18] hover:text-[#f2ede6] transition-all duration-300 active:scale-[0.98]"
        style="transition-timing-function: cubic-bezier(0.16,1,0.3,1)"
      >
        Ver Todos
      </NuxtLink>
    </div>

    <!-- Right: New 5-photo grid -->
    <div class="absolute right-0 top-0 w-[45%] md:w-[62%] h-full grid gap-1 p-1" style="grid-template-columns: 1fr 1fr; grid-template-rows: repeat(6, 1fr);">
      <!-- 1. Espartano -->
      <div class="relative overflow-hidden group cursor-pointer" style="grid-row: 1 / 4;">
        <img
          src="/thumbnails/portfolio_new_1.jpeg"
          alt="Tatuagem Espartano"
          class="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      
      <!-- 2. Anjo -->
      <div class="relative overflow-hidden group cursor-pointer" style="grid-row: 1 / 3;">
        <img
          src="/thumbnails/portfolio_new_2.jpeg"
          alt="Tatuagem Anjo"
          class="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <!-- 3. Camaleão -->
      <div class="relative overflow-hidden group cursor-pointer" style="grid-row: 3 / 5;">
        <img
          src="/thumbnails/portfolio_new_3.jpeg"
          alt="Tatuagem Camaleão"
          class="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <!-- 4. Caveira -->
      <div class="relative overflow-hidden group cursor-pointer" style="grid-row: 4 / 7;">
        <img
          src="/thumbnails/portfolio_new_4.jpeg"
          alt="Tatuagem Caveira"
          class="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <!-- 5. Mão Flor -->
      <div class="relative overflow-hidden group cursor-pointer" style="grid-row: 5 / 7;">
        <img
          src="/thumbnails/portfolio_new_5.jpeg"
          alt="Tatuagem Flor"
          class="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.font-display { font-family: 'Bebas Neue', sans-serif; }
.font-body    { font-family: 'Space Grotesk', sans-serif; }
</style>
