<template>
  <section
    class="w-screen max-w-[100vw] h-[100dvh] flex-shrink-0 flex flex-col relative overflow-hidden"
    style="scroll-snap-align: start;"
  >
    <!-- Top: dark form area -->
    <div class="flex-1 flex flex-col justify-center px-8 md:px-14 py-16 relative overflow-hidden" style="background-color:#1a1a18;">

      <span class="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#f2ede6]/40 mb-4">Agendar Sessão</span>

      <h2 class="font-display text-[clamp(3.5rem,7vw,8rem)] leading-[0.9] tracking-wide text-[#f2ede6] uppercase mb-10">
        Sua Arte<br>Te Espera
      </h2>

      <form class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[580px]" @submit.prevent="onSubmit">
        <div class="flex flex-col gap-1.5">
          <label class="font-body text-xs tracking-widest uppercase text-[#f2ede6]/40">Nome</label>
          <input
            v-model="form.name"
            type="text"
            class="bg-transparent border border-[#f2ede6]/20 px-4 py-3 font-body text-sm text-[#f2ede6] placeholder-[#f2ede6]/25 focus:border-[#f2ede6]/60 outline-none transition-colors duration-200"
            placeholder="Seu nome"
          />
        </div>
        <div class="flex flex-col gap-1.5">
          <label class="font-body text-xs tracking-widest uppercase text-[#f2ede6]/40">WhatsApp</label>
          <input
            v-model="form.phone"
            type="tel"
            class="bg-transparent border border-[#f2ede6]/20 px-4 py-3 font-body text-sm text-[#f2ede6] placeholder-[#f2ede6]/25 focus:border-[#f2ede6]/60 outline-none transition-colors duration-200"
            placeholder="+55 (11) 9..."
          />
        </div>
        <div class="flex flex-col gap-1.5 md:col-span-2">
          <label class="font-body text-xs tracking-widest uppercase text-[#f2ede6]/40">Estilo / Ideia</label>
          <textarea
            v-model="form.idea"
            rows="2"
            class="bg-transparent border border-[#f2ede6]/20 px-4 py-3 font-body text-sm text-[#f2ede6] placeholder-[#f2ede6]/25 focus:border-[#f2ede6]/60 outline-none transition-colors duration-200 resize-none"
            placeholder="Descreva sua tatuagem..."
          />
        </div>
        <div class="md:col-span-2">
          <button
            type="submit"
            class="font-body font-semibold text-sm tracking-widest uppercase px-8 py-3 border-2 border-[#f2ede6] text-[#f2ede6] hover:bg-[#f2ede6] hover:text-[#1a1a18] transition-all duration-300 active:scale-[0.98]"
            style="transition-timing-function: cubic-bezier(0.16,1,0.3,1)"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>

      <!-- Watermark -->
      <span class="absolute right-0 bottom-0 font-display leading-none select-none pointer-events-none uppercase text-[#f2ede6]/[0.04]" style="font-size: 18vw;">
        Bruno
      </span>
    </div>

    <!-- Bottom: footer strip -->
    <div class="border-t border-[#f2ede6]/10 px-8 md:px-14 py-5 flex flex-col md:flex-row items-center justify-between gap-3" style="background-color:#f2ede6;">
      <span class="font-body text-xs tracking-widest uppercase text-[#1a1a18]/35">Bruno Tattoo Studio &copy; 2025</span>
      <div class="flex items-center gap-6">
        <span class="font-body text-xs tracking-wide text-[#1a1a18]/35">Política de Privacidade</span>
        <a href="https://instagram.com" target="_blank" class="font-body text-xs tracking-wide text-[#1a1a18]/35 hover:text-[#1a1a18] transition-colors duration-200">Instagram</a>
        <a href="https://wa.me/553484183658" target="_blank" class="font-body text-xs tracking-wide text-[#1a1a18]/35 hover:text-[#1a1a18] transition-colors duration-200">WhatsApp</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({ name: '', phone: '', idea: '' })

function onSubmit() {
  const baseMsg = `Olá tudo bem? Vim pelo site e gostaria de um orçamento.`
  const details = `\n\n*Nome:* ${form.value.name}\n*Ideia:* ${form.value.idea}`
  const fullMsg = encodeURIComponent(baseMsg + (form.value.name ? details : ''))
  window.open(`https://wa.me/553484183658?text=${fullMsg}`, '_blank')
}
</script>

<style scoped>
.font-display { font-family: 'Bebas Neue', sans-serif; }
.font-body    { font-family: 'Space Grotesk', sans-serif; }
</style>
