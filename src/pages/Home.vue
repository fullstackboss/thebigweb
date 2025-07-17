<template>
  <section class="py-8 flex flex-col items-center justify-center" style="background: var(--color-background);">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="text-center lg:text-left order-2 lg:order-1">
          <div class="flex items-center justify-center lg:justify-start mb-2">
            <span class="inline-block mr-4" style="width: 50px; height: 1px; background: var(--color-primary);"></span>
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
        <div class="order-1 lg:order-2">
           <!-- Animación Rive -->
          <div class="w-full flex justify-center items-center py-8">
            <canvas ref="riveCanvas" width="400" height="400" class="max-w-full h-auto" style="width: 460px; height: 380px;"></canvas>
          </div>
        </div>
      </div>
    </div>


<!--   <div>
          <img
            :src="currentTheme === 'dark' ? fotoDark : fotoLight"
            alt="Mi Foto"
            class="w-full h-auto rounded-lg"
          />
        </div> -->


    
  </section>

  <!-- Tarjeta tipo hero, responsiva, con imagen a la izquierda y contenido a la derecha -->
  <div class="container my-12">
    <div class="container border rounded-md flex lg:flex-row md:flex-col flex-col"> 
  <div class="lg:w-4/12 w-full flex justify-center">
    <div class="relative -top-[60px]">
      <img class="rounded-xl max-w-sm" :src="currentTheme === 'dark' ? fotoDark : fotoLight" alt="">
    </div>
  </div>
  <div class="lg:w-8/12 w-full flex justify-center items-center p-10">
    <div class="">
      <h1 class="font-bold text-5xl mb-4">Soy Omar Tejada</h1>
        <p class="">
          Rápido y transparente, el camino hacia la creación de un sitio web que represente a su marca de la mejor manera está a solo 4 semanas de distancia. Siguiendo la meso de todo el proceso.
        </p>
    <div>
      <div class="flex lg:flex-row md:flex-row flex-col justify-between mt-8 gap-4">
          <div class="flex justify-center">
            <button class="bg-black text-white font-inter rounded-full px-8 py-3 text-lg font-normal transition hover:bg-gray-800 focus:outline-none w-full">Contáctame</button>
          </div>
          <div class="flex justify-center gap-4">
            <button class="bg-white text-black border font-inter rounded-full px-8 py-3 text-lg font-normal transition hover:bg-gray-800 hover:text-white focus:outline-none w-full">Contáctame</button>
            <button class="bg-white text-black border font-inter rounded-full px-8 py-3 text-lg font-normal transition hover:bg-gray-800 hover:text-white focus:outline-none w-full">Contáctame</button>
          </div>
        </div>
    </div>
    </div>
  </div>
</div>
  </div>
  




</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick, watch } from 'vue'
import { getCurrentTheme } from '../theme.js'
import fotoLight from '../assets/fotos/foto-light.jpg'
import fotoDark from '../assets/fotos/foto-dark.jpg'

const currentTheme = ref(getCurrentTheme())
let observer
const riveCanvas = ref(null)
let riveInstance = null
let riveScript = null
let isDarkInput = null

onMounted(async () => {
  observer = new MutationObserver(() => {
    currentTheme.value = getCurrentTheme()
  })
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

  await nextTick()
  if (riveCanvas.value) {
    // Cargar el script de Rive CDN si no está cargado
    if (!window.rive) {
      riveScript = document.createElement('script')
      riveScript.src = 'https://unpkg.com/@rive-app/canvas@2.9.1'
      riveScript.async = true
      riveScript.onload = () => {
        crearRive()
      }
      document.body.appendChild(riveScript)
    } else {
      crearRive()
    }
  }
})

function crearRive() {
  if (!window.rive) {
    console.error('Rive CDN no cargado')
    return
  }
  const srcUrl = new URL('../assets/animaciones/prueba.riv', import.meta.url).href
  riveInstance = new window.rive.Rive({
    src: srcUrl,
    canvas: riveCanvas.value,
    autoplay: true,
    stateMachines: 'stm', // Asegúrate que el nombre coincide con tu .riv
    onLoad: () => {
      riveInstance.resizeDrawingSurfaceToCanvas()
      // Obtener el input 'isDark' del state machine
      const inputs = riveInstance.stateMachineInputs('stm')
      isDarkInput = inputs?.find(input => input.name === 'isDark')
      // Sincronizar con el tema actual
      setIsDarkInput(currentTheme.value === 'dark')
      console.log('Animación Rive cargada y surface ajustada, input isDark:', isDarkInput)
    },
    onError: (e) => console.error('Error al cargar Rive:', e)
  })
}

function setIsDarkInput(isDark) {
  if (isDarkInput) {
    isDarkInput.value = isDark
  }
}

// Observar cambios de tema y sincronizar con Rive
watch(currentTheme, (newTheme) => {
  setIsDarkInput(newTheme === 'dark')
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  if (riveInstance && riveInstance.cleanup) riveInstance.cleanup()
  if (riveScript && riveScript.parentNode) riveScript.parentNode.removeChild(riveScript)
})
</script>