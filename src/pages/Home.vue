<template>
  <section class="py-8 flex flex-col items-center justify-center" style="background: var(--color-background);">


    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-2 items-center">
        <div class="text-center lg:text-left order-2 lg:order-1 ">
          <div class="flex items-center justify-center lg:justify-start mb-2 ">
            <span class="inline-block mr-4" style="width: 40px; height: 1px; background: var(--color-primary);"></span>
            <p class="tit-normal m-0">
              UX Designer and Motion Designer
            </p>
          </div>
          <h1 class="tit-grande mt-2">
            Visual Designer
          </h1>
          <p class="mt-6 text-parrafo max-w-lg mx-auto lg:mx-0">
            Estoy ayudando a empresas emergentes y propietarios de negocios a hacer una declaración visual a través de
            un diseño y desarrollo web impecable.
          </p>
        </div>
        <div class="order-1 lg:order-2">
          <!-- Animación Rive -->
          <div class="w-full flex justify-center items-center py-0 lg:py-8 bg-blue-300">
            <canvas ref="riveCanvas" width="400" height="400" class="max-w-full h-auto" style="height: 340px;" ></canvas>
          </div>
        </div>
      </div>
    </div>



  </section>

  <!-- SOY OMAR -->
  <div class="container my-12">
    <div class="border border-black rounded-xl flex lg:flex-row md:flex-col flex-col">
      <div class="lg:w-4/12 w-full flex justify-center">
        <div class="relative -top-[40px] lg:-top-[40px] md:-top-[50px] p-5 lg:p-0 rounded-xl">
          <img class="rounded-xl object-contain w-96 xl:w-80 lg:w-64 md:w-80"
            :src="currentTheme === 'dark' ? fotoDark : fotoLight" alt="">
        </div>
      </div>
      <div class="lg:w-8/12 w-full flex flex-col justify-center px-6 lg:px-10 py-0 md:py-10">
      <h1 class="font-bold text-5xl mb-4">Soy Omar Tejada</h1>
      <p class="text-lg">
        Rápido y transparente, el camino hacia la creación de un sitio web que represente a su marca de la mejor
        manera está a solo 4 semanas de distancia. Siguiendo la mesa de todo el proceso.
      </p>
      <div class="mt-8 flex flex-col sm:flex-row justify-between gap-4">
        <div class="flex justify-center md:w-auto">
          <button
            class="bg-black text-white font-inter rounded-full px-8 py-3 text-lg font-normal transition hover:bg-gray-800 focus:outline-none w-full md:w-fit"
          >
            Contáctame
          </button>
        </div>
        <div class="flex flex-col sm:flex-row justify-center gap-4 md:w-auto">
          <button
            class="bg-white text-black border border-black font-inter rounded-full px-8 py-3 text-lg font-normal transition hover:bg-gray-800 hover:text-white focus:outline-none w-full sm:w-auto"
          >
            Facebook
          </button>
          <button
            class="bg-white text-black border border-black font-inter rounded-full px-8 py-3 text-lg font-normal transition hover:bg-gray-800 hover:text-white focus:outline-none w-full sm:w-auto"
          >
            Linkedin
          </button>
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