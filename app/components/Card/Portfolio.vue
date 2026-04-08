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

    <!-- Right: asymmetric photo grid -->
    <div class="absolute right-0 top-0 w-[45%] md:w-[58%] h-full grid gap-1 p-1" style="grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr 1fr;">
      <!-- Tall image spanning 2 rows -->
      <div class="overflow-hidden" style="grid-row: 1 / 3;">
        <img
          src="/thumbnails/portfolio_1.png"
          alt="Tatuagem Realista Braço"
          class="w-full h-full object-cover"
          style="filter: grayscale(100%) contrast(1.1);"
        />
      </div>
      <!-- Top-right -->
      <div class="overflow-hidden">
        <img
          src="/thumbnails/portfolio_2.png"
          alt="Tatuagem Fine Line Detalhe"
          class="w-full h-full object-cover"
          style="filter: grayscale(100%) contrast(1.1);"
        />
      </div>
      <!-- Middle-right -->
      <div class="overflow-hidden">
        <img
          src="/thumbnails/portfolio_3.png"
          alt="Tatuagem Blackwork Geométrico"
          class="w-full h-full object-cover"
          style="filter: grayscale(100%) contrast(1.1);"
        />
      </div>
      <!-- Wide bottom spanning 2 cols -->
      <div class="overflow-hidden" style="grid-column: 1 / 3;">
        <img
          src="/thumbnails/portfolio_4.png"
          alt="Tatuagem Realista Sleeve"
          class="w-full h-full object-cover"
          style="filter: grayscale(100%) contrast(1.1);"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-display { font-family: 'Bebas Neue', sans-serif; }
.font-body    { font-family: 'Space Grotesk', sans-serif; }
</style>
