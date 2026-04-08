<template>
  <section
    class="w-screen max-w-full h-[100dvh] flex-shrink-0 grid grid-cols-1 md:grid-cols-2 relative overflow-hidden"
    style="scroll-snap-align: start;"
  >
    <!-- Left: decorative + navigation -->
    <div class="flex flex-col justify-between px-8 md:px-14 pt-20 pb-10 md:py-0 md:justify-center relative">
      <!-- Giant quotation mark -->
      <span
        class="font-display text-[#1a1a18]/[0.06] select-none pointer-events-none absolute top-8 md:top-16 left-8 md:left-14"
        style="font-size: clamp(8rem, 18vw, 16rem); line-height: 0.8;"
        aria-hidden="true"
      >&ldquo;</span>

      <!-- Label -->
      <div class="relative z-10">
        <span class="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#1a1a18]/40 block mb-6">
          Depoimentos
        </span>
        <h2 class="font-display text-[clamp(3rem,5.5vw,6.5rem)] leading-[0.88] tracking-wide text-[#1a1a18] uppercase mb-8">
          O Que<br>Dizem<br>Sobre o Bruno
        </h2>
      </div>

      <!-- Dot navigation -->
      <div class="flex items-center gap-3 relative z-10">
        <button
          v-for="(_, i) in testimonials"
          :key="i"
          class="transition-all duration-400 rounded-full"
          :style="{
            width: current === i ? '20px' : '8px',
            height: '8px',
            backgroundColor: current === i ? '#1a1a18' : 'rgba(26,26,24,0.22)',
            transition: 'width 0.35s cubic-bezier(0.16,1,0.3,1), background-color 0.35s ease',
          }"
          :aria-label="`Depoimento ${i + 1}`"
          @click="goTo(i)"
        />
        <span class="font-body text-xs text-[#1a1a18]/30 ml-3 tracking-widest">
          {{ String(current + 1).padStart(2, '0') }} / {{ String(testimonials.length).padStart(2, '0') }}
        </span>
      </div>
    </div>

    <!-- Right: testimonial content -->
    <div class="flex flex-col justify-center px-8 md:px-14 pb-16 md:py-0 relative overflow-y-auto overflow-x-hidden scroll-track w-full">
      <!-- Thin left border accent (desktop) -->
      <div class="hidden md:block absolute left-0 top-[15%] bottom-[15%] w-px bg-[#1a1a18]/10" />

      <!-- Testimonial transition wrapper -->
      <div class="relative">
        <transition name="fade-up" mode="out-in">
          <div :key="current" class="flex flex-col gap-6 min-w-0 w-full">
            <!-- Quote text -->
            <p
              class="font-body text-[clamp(1rem,1.6vw,1.35rem)] text-[#1a1a18]/75 leading-relaxed min-w-0 w-full break-words"
              style="max-width: min(44ch, 100%);"
            >
              "{{ testimonials[current].quote }}"
            </p>

            <!-- Red separator -->
            <div class="flex items-center gap-3">
              <span class="w-6 h-px bg-[#d42b2b]" />
            </div>

            <!-- Client info -->
            <div class="flex items-center gap-4">
              <!-- Avatar circle with initials -->
              <div
                class="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border border-[#1a1a18]/10"
                style="background-color: #e2dbd2;"
              >
                <img
                  :src="testimonials[current].avatar"
                  :alt="testimonials[current].name"
                  class="w-full h-full object-cover"
                  style="filter: grayscale(100%);"
                />
              </div>
              <div>
                <span class="font-body font-semibold text-sm text-[#1a1a18] block tracking-wide">
                  {{ testimonials[current].name }}
                </span>
                <span class="font-body text-xs text-[#1a1a18]/45 tracking-[0.12em] uppercase">
                  {{ testimonials[current].style }} · {{ testimonials[current].city }}
                </span>
              </div>
              <!-- Star rating -->
              <div class="ml-auto flex items-center gap-0.5">
                <svg
                  v-for="s in 5" :key="s"
                  width="12" height="12" viewBox="0 0 24 24"
                  fill="#d42b2b" class="opacity-90"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Prev / Next arrows -->
      <div class="flex items-center gap-3 mt-10">
        <button
          class="w-10 h-10 border border-[#1a1a18]/25 flex items-center justify-center
                 hover:bg-[#1a1a18] hover:border-[#1a1a18] transition-all duration-300 group
                 disabled:opacity-25 disabled:pointer-events-none active:scale-[0.96]"
          :disabled="current === 0"
          aria-label="Depoimento anterior"
          @click="goTo(current - 1)"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               class="text-[#1a1a18] group-hover:text-[#f2ede6] transition-colors duration-300">
            <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
          </svg>
        </button>
        <button
          class="w-10 h-10 border border-[#1a1a18]/25 flex items-center justify-center
                 hover:bg-[#1a1a18] hover:border-[#1a1a18] transition-all duration-300 group
                 disabled:opacity-25 disabled:pointer-events-none active:scale-[0.96]"
          :disabled="current === testimonials.length - 1"
          aria-label="Próximo depoimento"
          @click="goTo(current + 1)"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               class="text-[#1a1a18] group-hover:text-[#f2ede6] transition-colors duration-300">
            <path d="M5 12h14M14 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Marquee strip — bottom (same pattern as Hero) -->
    <div class="absolute bottom-0 left-0 right-0 z-10 border-t border-[#1a1a18]/10 overflow-hidden py-3 bg-[#1a1a18] col-span-2">
      <div class="flex whitespace-nowrap" :style="{ transform: `translateX(-${offset}px)` }">
        <span v-for="n in 8" :key="n" class="font-display text-sm tracking-[0.25em] uppercase text-[#f2ede6]/50 px-8">
          Arte que Fica &bull; Clientes Satisfeitos &bull; Estúdio de Confiança &bull;
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useMarquee } from '../../composables/useMarquee'

const { offset } = useMarquee()

const current = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const testimonials = [
  {
    quote: 'O Bruno tem uma precisão absurda. Levei uma referência e ele superou tudo que eu esperava. A cicatrização foi perfeita e a tatuagem ficou idêntica ao projeto.',
    name: 'Bruna Takahashi',
    style: 'Realismo',
    city: 'São Paulo',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    quote: 'O Bruno entendeu exatamente o que eu queria — algo delicado, quase invisível, mas com muita personalidade. A fineline ficou impecável após três meses.',
    name: 'Felipe Drummond',
    style: 'Fineline',
    city: 'Campinas',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    quote: 'Já fiz quatro sessões com o Bruno e cada uma foi uma experiência diferente. O traço bold do Blackwork dele é único. Voltarei para a manga completa.',
    name: 'Isabela Noronha',
    style: 'Old School',
    city: 'Santos',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80',
  },
]

function goTo(i: number) {
  current.value = Math.max(0, Math.min(i, testimonials.length - 1))
  resetTimer()
}

function resetTimer() {
  if (timer) clearInterval(timer)
  timer = setInterval(() => {
    current.value = (current.value + 1) % testimonials.length
  }, 5000)
}

onMounted(() => { resetTimer() })
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<style scoped>
.font-display { font-family: 'Bebas Neue', sans-serif; }
.font-body    { font-family: 'Space Grotesk', sans-serif; }

.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(14px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
