<template>
  <section class="py-16 flex flex-col items-center justify-center min-h-[60vh]" style="background: var(--color-background);">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="text-center lg:text-left">
          <div class="flex items-center justify-center lg:justify-start mb-2">
            <span class="inline-block mr-4" style="width: 70px; height: 1px; background: var(--color-primary);"></span>
            <p class="tit-normal m-0">
              UX Designer and Motion Designer
            </p>
          </div>
          <h1 class="tit-grande mt-2">
            Visual Designer
          </h1>
          <p class="mt-6 text-parrafo max-w-lg mx-auto lg:mx-0">
            Estoy ayudando a empresas emergentes y propietarios de negocios a hacer una declaración visual a través de un diseño y desarrollo web impecable.
          </p>
        </div>
        <div>
          <img
            :src="currentTheme === 'dark' ? fotoDark : fotoLight"
            alt="Mi Foto"
            class="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { getCurrentTheme } from '../theme.js'
import fotoLight from '../assets/fotos/foto-light.jpg'
import fotoDark from '../assets/fotos/foto-dark.jpg'

const currentTheme = ref(getCurrentTheme())
let observer

onMounted(() => {
  observer = new MutationObserver(() => {
    currentTheme.value = getCurrentTheme()
  })
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>