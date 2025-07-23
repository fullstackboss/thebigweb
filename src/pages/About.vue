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
          Rápido y transparente, el camino hacia la creación de un sitio web que represente a su marca de la mejor
          manera está a solo 4 semanas de distancia. Siguiendo la meso de todo el proceso. Rápido y transparente, el
          camino hacia la creación de un sitio web que represente a su marca de la mejor manera está a solo 4 semanas de
          distancia. Siguiendo la meso de todo el proceso.
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

  <!-- TIMELINE EDUCACIÓN -->
  <div class="container mt-16">
    <div class="flex items-center mb-10">
      <span class="inline-block mr-4" style="width: 40px; height: 1px; background: var(--color-primary);"></span>
      <h2 class="tit-bloque m-0">Educación</h2>
    </div>
    <div class="relative w-full">
      <!-- Línea principal -->
      <div class="sm:absolute sm:top-6 sm:left-0 sm:w-full sm:border-t sm:border-gray-300 sm:block hidden"
        style="border-color: var(--color-border); z-index: 0;"></div>
      <div class="sm:hidden absolute left-4 top-0 h-full border-l border-gray-300"
        style="border-color: var(--color-border); z-index: 0;"></div>
      <div class="flex flex-col sm:flex-row justify-between items-start w-full relative z-10">
        <div v-for="(edu, i) in educacion" :key="i"
          class="flex flex-row sm:flex-col items-center sm:items-center flex-1 mb-8 sm:mb-0 relative">
          <!-- Círculo -->
          <div
            class="bg-white border rounded-full min-w-[2rem] min-h-[2rem] w-8 h-8 flex items-center justify-center mt-2 mb-0 sm:mb-2 z-10 aspect-square"
            style="border-color: var(--color-border);"></div>
          <!-- Línea vertical para móvil -->
          <div v-if="i < educacion.length - 1" class="hidden lg:hidden w-0.5 h-12 bg-gray-300 mx-auto"
            style="background: var(--color-border);"></div>
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

  <!--BLOQUE ECPERIENCIA Y CONOCIMIENTOS-->
  <div class="container py-20">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
      <!-- EXPERIENCIA -->
      <div class="col-span-12 lg:col-span-7 p-4">


        <div class="">
          <!-- TITULO -->
          <div class="flex items-center mb-10">
            <span class="inline-block mr-4" style="width: 40px; height: 1px; background: var(--color-primary);"></span>
            <h2 class="tit-bloque m-0">Experiencia</h2>
          </div>
          <!-- CONTENIDO -->
          <div class="flex w-full flex-col items-start">
            <div class="group flex gap-x-6">
              <div class="relative">
                <div class="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-200"></div><span
                  class="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-slate-800"><svg
                    width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5">
                    <path
                      d="M17 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21Z"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M9 17H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></span>
              </div>
              <div class="-translate-y-1.5 pb-8 text-slate-600">
                <p class="font-sans text-base font-bold tit-compo antialiased ">Timeline Title Here.</p><small
                  class="mt-2 font-sans text-sm text-parrafo antialiased">The key to more success is to have a lot of
                  pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood
                  sweat and tears, and I&#x27;m never giving up, I&#x27;m just getting started. I&#x27;m up to
                  something. Fan luv.</small>
              </div>
            </div>
            <div data-value=":r15:" class="group flex gap-x-6">
              <div class="relative">
                <div class="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-200"></div><span
                  class="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-slate-800"><svg
                    width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5">
                    <path
                      d="M18 8.4C18 6.70261 17.3679 5.07475 16.2426 3.87452C15.1174 2.67428 13.5913 2 12 2C10.4087 2 8.88258 2.67428 7.75736 3.87452C6.63214 5.07475 6 6.70261 6 8.4C6 15.8667 3 18 3 18H21C21 18 18 15.8667 18 8.4Z"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                      d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></span>
              </div>
              <div class="-translate-y-1.5 pb-8 text-slate-600">
                <p class="font-sans text-base font-bold tit-compo antialiased ">Timeline Title Here.</p><small
                  class="mt-2 font-sans text-sm text-parrafo antialiased">The key to more success is to have a lot of
                  pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood
                  sweat and tears, and I&#x27;m never giving up, I&#x27;m just getting started. I&#x27;m up to
                  something. Fan luv.</small>
              </div>
            </div>
            <div data-value=":r16:" class="group flex gap-x-6">
              <div class="relative"><span
                  class="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-slate-800"><svg
                    width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg" color="currentColor" class="h-5 w-5">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                      d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391M12 7.30872C10.6809 7.27322 9.5 7.86998 9.5 9.50001C9.5 12.5 15 11 15 14C15 15.711 13.5362 16.4462 12 16.391M12 7.30872V5.5M12 16.391V18.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></span></div>
              <div class="-translate-y-1.5 pb-8 text-slate-600 data-[orientation=horizontal]:py-4">
                <p class="font-sans text-base font-bold tit-compo antialiased ">Timeline Title Here.</p><small
                  class="mt-2 font-sans text-sm text-parrafo antialiased">The key to more success is to have a lot of
                  pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood
                  sweat and tears, and I&#x27;m never giving up, I&#x27;m just getting started. I&#x27;m up to
                  something. Fan luv.</small>
              </div>
            </div>
          </div>

        </div>


      </div>

      <!-- CONOCIMIENTO -->
      <div class="col-span-12 lg:col-span-5 p-4 ">
        <div class="w-full">
          <!-- TITULO -->
          <div class="flex items-center mb-10">
            <span class="inline-block mr-4" style="width: 40px; height: 1px; background: var(--color-primary);"></span>
            <h2 class="tit-bloque m-0">Conocimientos</h2>
          </div>
          <!-- CONTENIDO -->

          <div class="grid grid-cols-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-4 gap-4">
            <MyPrograms nombre="Photoshop" foto="../assets/images/soft-demo.jpg" />
            <MyPrograms nombre="Illustrator" foto="../assets/images/soft-demo.jpg" />
            <MyPrograms nombre="Zbrush" foto="../assets/images/soft-demo.jpg" />
            <MyPrograms nombre="After Effects" foto="../assets/images/soft-demo.jpg" />
            <MyPrograms nombre="Premiere" foto="../assets/images/soft-demo.jpg" />
            <MyPrograms nombre="Figma" foto="../assets/images/soft-demo.jpg" />
            <MyPrograms nombre="Blender" foto="../assets/images/soft-demo.jpg" />
            <MyPrograms nombre="React" foto="../assets/images/soft-demo.jpg" />
            <MyPrograms nombre="Vue" foto="../assets/images/soft-demo.jpg" />
            <MyPrograms nombre="HTML/CSS" foto="../assets/images/soft-demo.jpg" />
            <MyPrograms nombre="JavaScript" foto="../assets/images/soft-demo.jpg" />
            <MyPrograms nombre="WordPress" foto="../assets/images/soft-demo.jpg" />
          </div>

        </div>
      </div>
    </div>
  </div>


<!-- GUSTOS/CONOCIMIENTOS SECTION -->
<div class="mb-12">
  <!-- TITULO -->
  <div class="flex items-center mb-8">
    <span class="inline-block w-10 h-px bg-blue-500 mr-4"></span>
    <h2 class="tit-bloque m-0">Intereses y Hobbies</h2>
  </div>
  
  <!-- IMAGE GRID -->
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
    <!-- Image 1 -->
    <div class=" bg-gray-200 rounded-lg overflow-hidden">
      <img src="../assets/images/hobbie-demo.jpg" alt="Hobbie 1" class="w-full">
    </div>
    
    <!-- Image 2 -->
    <div class=" bg-gray-200 rounded-lg overflow-hidden">
      <img src="../assets/images/hobbie-demo.jpg" alt="Hobbie 1" class="w-full object-cover">
    </div>
    
    <!-- Image 3 -->
    <div class=" bg-gray-200 rounded-lg overflow-hidden">
      <img src="../assets/images/hobbie-demo.jpg" alt="Hobbie 1" class="w-full object-cover">
    </div>
    
    <!-- Image 4 -->
    <div class=" bg-gray-200 rounded-lg overflow-hidden">
      <img src="../assets/images/hobbie-demo.jpg" alt="Hobbie 1" class="w-full object-cover">
    </div>
  </div>
</div>
</template>

<script setup>
import Button from '../components/Button.vue'
import MyPrograms from '../components/MyPrograms.vue'
// Página Acerca de
const educacion = [
  { titulo: 'Nombre de estudio', centro: 'Centro de estudio', fecha: '2012 - 2023' },
  { titulo: 'Nombre de estudio', centro: 'Centro de estudio', fecha: '2012 - 2023' },
  { titulo: 'Nombre de estudio', centro: 'Centro de estudio', fecha: '2012 - 2023' },
  { titulo: 'Nombre de estudio', centro: 'Centro de estudio', fecha: '2012 - 2023' },
]
</script>