<template>
  <section class="py-16 flex flex-col items-center justify-center min-h-[60vh]" style="background: var(--color-background);">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="text-center lg:text-left">
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
        <div>
           <!-- Animación Rive -->
          <div class="w-full flex justify-center items-center py-8">
            <canvas ref="riveCanvas" width="400" height="400" class="max-w-full h-auto" style="width: 400px; height: 400px;"></canvas>
          </div>
        </div>
      </div>
    </div>



    
  </section>
  



  <div>
          <img
            :src="currentTheme === 'dark' ? fotoDark : fotoLight"
            alt="Mi Foto"
            class="w-full h-auto rounded-lg"
          />
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