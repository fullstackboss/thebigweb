<template>

  <!-- INICIO -->
  <div class="container pt-4">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
      <!-- Columna del canvas (5/12) - Primera en móvil -->
      <div class="col-span-12 order-1 lg:order-2 md:order-1 lg:col-span-5 p-4 flex items-center justify-center ">
        <canvas ref="riveCanvas" width="400" height="400" class="max-w-full h-auto" style="height: 380px;"></canvas>
      </div>
      <!-- Columna de texto (7/12) - Segunda en móvil -->
      <div class="col-span-12 order-2 lg:order-1 md:order-2 lg:col-span-7 p-4">
        <div class="flex items-center justify-left lg:justify-start mb-2">
          <span class="inline-block mr-4" style="width: 40px; height: 1px; background: var(--color-primary);"></span>
          <p class="tit-pretitulo m-0">
            UX Designer and Motion Designer
          </p>
        </div>
        <h1 class="tit-grande mt-2">
          Visual Designer
        </h1>
        <p class="mt-6 tit-mensaje mx-auto lg:mx-0">
          Estoy ayudando a empresas emergentes y propietarios de negocios a hacer una declaración visual a través de
          un diseño y desarrollo web impecable.
        </p>
      </div>
    </div>
  </div>
  <!--LINEA-->
  <div class="border-r border-black lg:mr-[20%] md:mr-[50%] mr-[50%] py-16 md:py-16 mb-10 lg:mb-0 md:mb-12"
    style="border-color: var(--color-border);">
  </div>
  <!-- SOY OMAR -->
  <div class="container -mt-[20] ">
    <div class="border rounded-xl flex lg:flex-row md:flex-col flex-col" style="border-color: var(--color-border);">
      <div class="lg:w-4/12 w-full flex justify-center">
        <div class="relative -top-[40px] lg:-top-[40px] md:-top-[50px] p-5 lg:p-0 rounded-xl">
          <img class="rounded-xl object-contain w-72 xl:w-80 lg:w-64 md:w-80"
            :src="currentTheme === 'dark' ? fotoDark : fotoLight" alt="">
        </div>
      </div>
      <div class="lg:w-8/12 w-full flex flex-col justify-center px-6 lg:px-10 py-0 md:py-10">
        <h1 class="tit-bloque">Soy Omar Tejada</h1>
        <p class="text-parrafo">
          Rápido y transparente, el camino hacia la creación de un sitio web que represente a su marca de la mejor
          manera está a solo 4 semanas de distancia. Siguiendo la mesa de todo el proceso.
        </p>
        <div class="mt-8 mb-6 md:mb-0 flex flex-col sm:flex-row justify-between gap-4">
          <div class="flex flex-col justify-center md:w-auto">
            <Button text="Contáctame" url="#" backgroundColor="var(--color-antineutro)"
              backgroundColorHover="var(--color-mediooscuro)" textColor="var(--color-neutro)"
              textColorHover="var(--color-claro)" rounded="full" minWidth="fit-content" icon="arrow-up-circle" />
          </div>
          <div class="flex flex-col sm:flex-row justify-center gap-4 md:w-auto">
            <Button text="Facebook" url="#" backgroundColor="var(--color-background)"
              backgroundColorHover="var(--color-oscuro)" textColor="var(--color-antineutro)" textColorHover="white"
              rounded="full" border="1px solid var(--color-mediooscuro)" minWidth="fit-content"
              icon="ArrowUpRightIcon" />
            <Button text="LinkedIn" url="#" backgroundColor="var(--color-background)"
              backgroundColorHover="var(--color-oscuro)" textColor="var(--color-antineutro)" textColorHover="white"
              rounded="full" border="1px solid var(--color-mediooscuro)" minWidth="fit-content"
              icon="ArrowUpRightIcon" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--LINEA-->
  <div class=" border-l border-black lg:ml-[220px] md:ml-[25%] ml-[50%] py-16">
  </div>
  <!-- SERVICIOS -->
  <div class="container mb-0 mt-4">
    <div class="col-span-12">
      <div class="tit-bloque mb-6">Puedo ayudarte con...</div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
      <!-- Columnas -->
      <ServiceCard icon="ri-pencil-ruler-2-fill" title="Diseño UX/UI"
        description="Lorem ipsum dolor sit amet cotur ele dolores is act ismelaboru lorem ipsum facto meruem is" />
      <ServiceCard icon="ri-macbook-line" title="Desarrollo Web"
        description="Desarrollo sitios web modernos, rápidos y responsivos, adaptados a las necesidades de tu negocio." />
      <ServiceCard icon="ri-film-line" title="Animación y Motion"
        description="Animaciones y motion graphics para destacar tu marca y captar la atención de tus usuarios." />
    </div>
  </div>
  <!--LINEA-->
  <div class="border-r border-black lg:mr-[16%] md:mr-[75%] mr-[50%]  py-16">
  </div>
  <!-- METODOLOGIA -->
  <div class="container p-2">

    <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
      <!-- 40% (4/12 cols) -->
      <div class="col-span-12 lg:col-span-5 md:col-span-12">

        <div class="tit-bloque mt-2 flex items-center">
          <div class="inline-block mr-4" style="width: 40px; height: 1px; background: var(--color-primary);"></div>
          <div>Mi metodología</div>
        </div>
        <p class="mt-6 text-parrafo mx-auto lg:mx-0">
          Rápido y transparente, el camino hacia la creación de un sitio web que represente a su marca de la mejor
          manera está a solo 4 semanas. Siguiendo la metodología, garantizo la finalización
          paso a paso de todo el proceso.
        </p>

      </div>

      <!-- 60% (8/12 cols) -->
      <div class="col-span-12 lg:col-span-7 md:col-span-12">
        <bigAccordion />
      </div>
    </div>
  </div>
  <!-- MENSAJE -->
  <div class="container p-2 ">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
      <!-- 60% (8/12 cols) -->
      <div class="col-span-12 lg:col-span-5 p-4 flex justify-center order-2 lg:order-1 md:order-2">
        <div class="relative -mt-[0] lg:-mt-[140px]">
          <img src="../assets/images/demo.jpeg" alt="">
        </div>
      </div>
      <!-- 40% (4/12 cols) -->
      <div class="col-span-12 md:col-span-12 lg:col-span-7 p-4 flex flex-col justify-center order-1 lg:order-2 md:order-1">
        <div class="tit-bloque mt-2 flex items-center">
          <div class="inline-block mr-4" style="width: 160px; height: 1px; background: var(--color-primary);"></div>
          <div>Hablemos de algún proyecto, colaboración o idea que puedas tener y resolverlo.
            <p class="mt-6 text-parrafo mx-auto lg:mx-0">
          Rápido y transparente, el camino hacia la creación de un sitio web que represente a su marca.
        </p>
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
import Button from '../components/Button.vue'
import ServiceCard from '../components/ServiceCard.vue'
import bigAccordion from '../components/bigAccordion.vue'

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
