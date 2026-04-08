<template>
  <section
    class="min-w-[100vw] h-[100dvh] flex-shrink-0 flex flex-col relative overflow-hidden"
    style="scroll-snap-align: start; background-color: #1a1a18;"
  >
    <!-- Header bar -->
    <div class="flex-shrink-0 border-b border-[#f2ede6]/10 px-8 md:px-14 pt-16 pb-5 flex items-end justify-between">
      <div>
        <span class="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#f2ede6]/40 block mb-2">
          O Artista
        </span>
        <h2 class="font-display text-[clamp(3rem,5.5vw,6.5rem)] leading-[0.9] tracking-wide text-[#f2ede6] uppercase">
          Bruno Tattoo
        </h2>
      </div>
      <p class="hidden md:block font-body text-sm text-[#f2ede6]/45 max-w-[38ch] leading-relaxed pb-1 text-right">
        Uma década de dedicação à arte na pele. Especialista em realismo e estilo geek.
      </p>
    </div>

    <!-- Artist grid area -->
    <div class="flex-1 min-h-0 px-4 md:px-6 pt-4 pb-4 overflow-hidden">

      <!-- Desktop: Singular focused grid -->
      <div
        class="hidden md:grid h-full gap-3"
        style="grid-template-columns: 1.5fr 1fr 0.8fr; grid-template-rows: 1fr 1fr;"
      >
        <!-- Main Portrait -->
        <div
          class="relative overflow-hidden group cursor-pointer"
          style="grid-column: 1; grid-row: 1 / 3;"
        >
          <img
            src="/images/bruno/perfil.jpg"
            alt="Bruno Tattoo"
            class="absolute inset-0 w-full h-full object-cover"
            style="filter: grayscale(100%) contrast(1.08); transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#1a1a18]/90 via-[#1a1a18]/15 to-transparent pointer-events-none" />
          <div class="absolute bottom-0 left-0 right-0 p-8">
            <span class="font-display text-[#f2ede6] text-5xl uppercase block leading-none mb-2">Bruno Tattoo</span>
            <span class="font-body text-xs text-[#f2ede6]/55 tracking-[0.2em] uppercase block">
              Mestre em Realismo &amp; Blackwork
            </span>
          </div>
          <!-- Arrow icon on hover -->
          <div
            class="absolute top-4 right-4 w-10 h-10 bg-[#d42b2b] flex items-center justify-center
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f2ede6" stroke-width="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </div>
        </div>

        <!-- Detail Work 1 -->
        <div
          class="relative overflow-hidden"
          style="grid-column: 2; grid-row: 1;"
        >
          <img
            src="/images/bruno/work1.jpg"
            alt="Trabalho em destaque - Jesus"
            class="absolute inset-0 w-full h-full object-cover"
            style="filter: grayscale(100%) contrast(1.1); transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);"
          />
          <div class="absolute inset-0 bg-[#1a1a18]/20" />
        </div>

        <!-- Detail Work 2 -->
        <div
          class="relative overflow-hidden"
          style="grid-column: 2; grid-row: 2;"
        >
          <img
            src="/images/bruno/work2.jpg"
            alt="Trabalho em destaque - Anime"
            class="absolute inset-0 w-full h-full object-cover"
            style="filter: grayscale(100%) contrast(1.1); transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);"
          />
          <div class="absolute inset-0 bg-[#1a1a18]/20" />
        </div>

        <!-- Stats & Call to Action -->
        <div
          class="relative overflow-hidden flex flex-col p-8 border border-[#f2ede6]/08"
          style="grid-column: 3; grid-row: 1 / 3; background-color: #242420;"
        >
           <div class="flex-1 flex flex-col justify-center gap-12">
              <div v-for="stat in stats" :key="stat.label">
                <span class="font-display text-[#f2ede6] block" style="font-size: 3.5rem; line-height: 1;">
                  {{ stat.value }}
                </span>
                <span class="font-body text-xs text-[#f2ede6]/40 tracking-[0.18em] uppercase block mt-1">
                  {{ stat.label }}
                </span>
              </div>
           </div>

          <button
            class="w-full mt-8 font-body font-semibold text-xs tracking-[0.18em] uppercase px-6 py-5
                   border border-[#f2ede6]/25 text-[#f2ede6]
                   hover:bg-[#f2ede6] hover:text-[#1a1a18] transition-all duration-300 active:scale-[0.98]"
            style="transition-timing-function: cubic-bezier(0.16,1,0.3,1)"
          >
            Agendar com Bruno
          </button>
        </div>
      </div>

      <!-- Mobile: Simple layout -->
      <div class="md:hidden flex flex-col h-full gap-3">
        <div class="relative overflow-hidden flex-[3]">
          <img
            src="/images/bruno/perfil.jpg"
            alt="Bruno Tattoo"
            class="absolute inset-0 w-full h-full object-cover"
            style="filter: grayscale(100%) contrast(1.08);"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#1a1a18]/90 to-transparent pointer-events-none" />
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <span class="font-display text-4xl text-[#f2ede6] uppercase block">Bruno Tattoo</span>
            <span class="font-body text-xs text-[#f2ede6]/55 tracking-widest uppercase mt-1 block">Mestre Tatuador</span>
          </div>
        </div>

        <div class="flex gap-3 flex-[1.2]">
           <div class="relative overflow-hidden flex-1">
              <img src="/images/bruno/work1.jpg" class="absolute inset-0 w-full h-full object-cover grayscale" />
           </div>
           <div class="relative overflow-hidden flex-1">
              <img src="/images/bruno/work2.jpg" class="absolute inset-0 w-full h-full object-cover grayscale" />
           </div>
        </div>

        <div
          class="flex-shrink-0 flex items-center justify-around px-4 pt-6 pb-14"
          style="background-color: #242420;"
        >
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <span class="font-display text-[#f2ede6] text-3xl block leading-none">{{ stat.value }}</span>
            <span class="font-body text-[10px] text-[#f2ede6]/40 tracking-widest uppercase mt-1 block">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '1',    label: 'Mestre Tatuador' },
  { value: '5+',   label: 'Anos de Arte' },
  { value: '1K+',  label: 'Histórias na Pele' },
]
</script>

<style scoped>
.font-display { font-family: 'Bebas Neue', sans-serif; }
.font-body    { font-family: 'Space Grotesk', sans-serif; }
</style>
