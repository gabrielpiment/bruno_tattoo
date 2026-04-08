<template>
  <section
    class="min-w-[100vw] h-[100dvh] flex-shrink-0 grid grid-cols-1 md:grid-cols-2 relative overflow-hidden"
    style="scroll-snap-align: start; background-color: #1a1a18;"
  >
    <!-- Left: photo -->
    <div class="relative overflow-hidden min-h-[50vw] md:min-h-0">
      <img
        src="https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=800&q=80"
        alt="Trabalho de tatuagem"
        class="absolute inset-0 w-full h-full object-cover"
        style="filter: grayscale(100%) contrast(1.05);"
      />
      <!-- Paper tear right edge -->
      <svg class="absolute right-0 top-0 h-full w-14 z-10" viewBox="0 0 55 600" preserveAspectRatio="none" fill="#1a1a18" xmlns="http://www.w3.org/2000/svg">
        <path d="M55 0L0 20L8 95L0 168L14 242L0 315L5 388L0 462L10 535L0 595L0 600L55 600Z"/>
      </svg>
    </div>

    <!-- Right: content -->
    <div class="flex flex-col justify-center px-8 md:px-14 pt-12 pb-28 min-h-0 overflow-y-auto overflow-x-hidden scroll-track w-full">
      <span class="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#f2ede6]/40 mb-3 min-w-0 w-full break-words">Sobre o Estúdio</span>

      <h2 class="font-display text-[clamp(2.8rem,6vw,6rem)] leading-[0.9] tracking-wide text-[#f2ede6] uppercase mb-5 min-w-0 w-full break-words">
        Sua Arte<br>Sua<br>Identidade
      </h2>

      <p class="font-body text-sm text-[#f2ede6]/55 leading-relaxed max-w-[45ch] mb-4">
        Mais de 5 anos transformando visões em arte permanente. Cada traço é calculado, cada sombra é precisa — porque sua pele merece o melhor.
      </p>

      <p class="font-body text-sm text-[#f2ede6]/55 leading-relaxed max-w-[45ch] mb-8">
        Trabalhamos com realismo, fineline, geek, old school, geométrico e blackwork. Orçamento gratuito incluso.
      </p>

      <!-- Info rows -->
      <div class="flex flex-col gap-3 mb-8">
        <div class="flex items-center gap-3">
          <span class="w-1 h-1 rounded-full bg-[#d42b2b]"></span>
          <span class="font-body text-sm font-semibold text-[#f2ede6] tracking-wide">Segunda – Sexta: 10h – 21h</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="w-1 h-1 rounded-full bg-[#d42b2b]"></span>
          <span class="font-body text-sm font-semibold text-[#f2ede6] tracking-wide">www.brunotattoo.com.br</span>
        </div>
      </div>

      <a
        href="https://wa.me/553484183658?text=Ol%C3%A1%20tudo%20bem%3F%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
        target="_blank"
        class="self-start font-body font-semibold text-sm tracking-widest uppercase px-7 py-3 border-2 border-[#f2ede6] text-[#f2ede6] hover:bg-[#f2ede6] hover:text-[#1a1a18] transition-all duration-300 active:scale-[0.98] text-center"
        style="transition-timing-function: cubic-bezier(0.16,1,0.3,1)"
      >
        Orçamento Grátis
      </a>
    </div>
  </section>
</template>

<style scoped>
.font-display { font-family: 'Bebas Neue', sans-serif; }
.font-body    { font-family: 'Space Grotesk', sans-serif; }
</style>
