<template>
  <!-- INICIO -->
  <div class="container pt-4">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
      <!-- Columna del canvas (5/12) - Primera en móvil -->
      <div class="col-span-12 lg:col-span-5 p-4 flex items-center justify-center">
        <img src="../assets/fotos/foto-dark.jpg" alt="" class="h-96 w-full object-cover rounded-2xl">
      </div>
      <!-- Columna de texto (7/12) - Segunda en móvil -->
      <div class="col-span-12 lg:col-span-7 p-4">
        <div class="flex items-center justify-left lg:justify-start mb-2">
          <span class="inline-block mr-4" style="width: 40px; height: 1px; background: var(--color-primary);"></span>
          <p class="tit-pretitulo m-0">
            Conoceme un poco más
          </p>
        </div>
        <h1 class="tit-grande mt-2">
          Acerca de mi
        </h1>
        <p class="mt-6 text-parrafo mx-auto lg:mx-0">
          Rápido y transparente, el camino hacia la creación de un sitio web que represente a su marca de la mejor manera está a solo 4 semanas de distancia. Siguiendo la meso de todo el proceso. Rápido y transparente, el camino hacia la creación de un sitio web que represente a su marca de la mejor manera está a solo 4 semanas de distancia. Siguiendo la meso de todo el proceso.
        </p>
        <div class="mt-8 mb-6 md:mb-0 flex flex-col sm:flex-row justify-between gap-4">
         <!--  <div class="flex flex-col justify-center md:w-auto">
            <Button text="Contáctame" url="#" backgroundColor="var(--color-antineutro)"
              backgroundColorHover="var(--color-mediooscuro)" textColor="var(--color-neutro)"
              textColorHover="var(--color-claro)" rounded="full" minWidth="fit-content" icon="arrow-up-circle" />
          </div> -->
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
  <!-- TIMELINE EDUCACIÓN -->
  <div class="container mt-16">
    <div class="flex items-center mb-10">
      <span class="inline-block mr-4" style="width: 40px; height: 1px; background: var(--color-primary);"></span>
      <h2 class="tit-bloque m-0">Educación</h2>
    </div>
    <div class="relative w-full">
      <!-- Línea principal -->
      <div
        class="sm:absolute sm:top-6 sm:left-0 sm:w-full sm:border-t sm:border-gray-300 sm:block hidden"
        style="border-color: var(--color-border); z-index: 0;"
      ></div>
      <div
        class="sm:hidden absolute left-4 top-0 h-full border-l border-gray-300"
        style="border-color: var(--color-border); z-index: 0;"
      ></div>
      <div class="flex flex-col sm:flex-row justify-between items-start w-full relative z-10">
        <div
          v-for="(edu, i) in educacion"
          :key="i"
          class="flex flex-row sm:flex-col items-center sm:items-center flex-1 mb-8 sm:mb-0 relative"
        >
          <!-- Círculo -->
          <div
            class="bg-white border rounded-full min-w-[2rem] min-h-[2rem] w-8 h-8 flex items-center justify-center mt-2 mb-0 sm:mb-2 z-10 aspect-square"
            style="border-color: var(--color-border);"
          ></div>
          <!-- Línea vertical para móvil -->
          <div v-if="i < educacion.length - 1" class="hidden lg:hidden w-0.5 h-12 bg-gray-300 mx-auto" style="background: var(--color-border);"></div>
          <!-- Info -->
          <div class="text-left sm:text-center mt-2 w-full ml-4 sm:ml-0">
            <div class="font-bold text-base sm:text-lg" style="color: var(--color-textoresalta);">{{ edu.titulo }}</div>
            <div class="text-parrafo mb-1">{{ edu.centro }}</div>
            <div class="text-small">{{ edu.fecha }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '../components/Button.vue'
// Página Acerca de
const educacion = [
  { titulo: 'Nombre de estudio', centro: 'Centro de estudio', fecha: '2012 - 2023' },
  { titulo: 'Nombre de estudio', centro: 'Centro de estudio', fecha: '2012 - 2023' },
  { titulo: 'Nombre de estudio', centro: 'Centro de estudio', fecha: '2012 - 2023' },
  { titulo: 'Nombre de estudio', centro: 'Centro de estudio', fecha: '2012 - 2023' },
]
</script>