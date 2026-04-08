<template>
  <div class="relative w-screen h-[100dvh] overflow-hidden">

    <!-- Floating logo — muda cor no card escuro (Contact) -->
    <UiFloatingLogo :color="logoColor" />

    <!-- Horizontal scroll container -->
    <div
      ref="scrollContainer"
      class="flex h-[100dvh] overflow-x-auto overflow-y-hidden scroll-track"
      style="scroll-snap-type: x mandatory; scroll-behavior: smooth; -webkit-overflow-scrolling: touch;"
      @scroll="onScroll"
    >
      <CardHero />
      <CardAbout />
      <CardEstilos />
      <CardArtistas />
      <CardPortfolio />
      <CardDepoimentos />
      <CardContact />
    </div>

    <!-- Dot navigation -->
    <UiDotNav
      :labels="cardLabels"
      :current="currentSlide"
      :dark="isDarkCard"
      :dot-active-color="dotActiveColor"
      :dot-inactive-color="dotInactiveColor"
      @go="goToCard"
    />

    <!-- Setas desktop -->
    <UiNavArrows
      :current="currentSlide"
      :total="cardLabels.length"
      :color="arrowColor"
      @prev="goToCard(currentSlide - 1)"
      @next="goToCard(currentSlide + 1)"
    />

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const TOTAL = 7
const cardLabels = ['Início', 'Sobre', 'Estilos', 'O Artista', 'Portfólio', 'Depoimentos', 'Contato']

const { scrollContainer, currentSlide, onScroll, goToCard } = useHorizontalScroll(TOTAL)

// Cards com fundo escuro: About (1), Artistas (3), Contact (6)
const DARK_CARDS = new Set([1, 3, 6])
const isDarkCard = computed(() => DARK_CARDS.has(currentSlide.value))

const logoColor        = computed(() => isDarkCard.value ? '#f2ede6' : '#1a1a18')
const dotActiveColor   = computed(() => isDarkCard.value ? '#f2ede6' : '#1a1a18')
const dotInactiveColor = computed(() => isDarkCard.value ? 'rgba(242,237,230,0.3)' : 'rgba(26,26,24,0.25)')
const arrowColor       = computed(() => isDarkCard.value ? '#f2ede6' : '#1a1a18')
</script>
