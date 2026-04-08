<template>
  <div class="relative w-screen h-[100dvh] overflow-hidden" style="background-color: #f2ede6;">

    <!-- Background image — tattoo flash sheet -->
    <div
      class="fixed inset-0 z-0 pointer-events-none"
      style="
        background-image: url('/background.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.28;
        mix-blend-mode: multiply;
      "
    />

    <!-- Paper grain overlay -->
    <svg class="fixed inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <filter id="paper-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#paper-grain)" opacity="0.035"/>
    </svg>

    <!-- Content -->
    <div class="relative z-10 w-full h-full">
      <slot />
    </div>
  </div>
</template>
