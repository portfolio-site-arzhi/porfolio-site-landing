<template>
  <NuxtLayout>
    <NuxtPage :transition="pageTransition" />
  </NuxtLayout>
</template>

<script setup lang="ts">
const pageTransition = {
  name: 'page',
  mode: 'out-in'
} as const

useHead({
  meta: [{ key: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }]
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 180ms ease, transform 220ms ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition: none;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 1;
    transform: none;
  }
}

.motion-lift {
  transition: transform 220ms ease, box-shadow 220ms ease;
  will-change: transform;
}

.motion-lift:hover,
.motion-lift:focus-within {
  transform: translateY(-3px);
}

@keyframes motion-fade-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.motion-in {
  animation: motion-fade-up 520ms cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--enter-delay, 0ms);
}

@media (prefers-reduced-motion: reduce) {
  .motion-lift {
    transition: none;
  }

  .motion-lift:hover,
  .motion-lift:focus-within {
    transform: none;
  }

  .motion-in {
    animation: none;
  }
}
</style>
