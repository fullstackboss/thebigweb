<template>
  <!-- INICIO -->
  <div class="container pt-4">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
      <!-- Columna de texto (7/12) - Segunda en móvil -->
      <div class="col-span-12 lg:col-span-7 p-4">
        <div class="flex items-center justify-left lg:justify-start mb-2">
          <span class="inline-block mr-4" style="width: 40px; height: 1px; background: var(--color-primary);"></span>
          <div class="tit-pretitulo m-0">
            Consultame por tus dudas
          </div>
        </div>
        <div class="tit-grande">
          Contactame
        </div>
        <div class="my-0 tit-mensaje mx-auto lg:mx-0">
          Rápido y transparente, el camino hacia la creación de un sitio.
        </div>
        <div class="mt-6 mb-6 md:mb-0 flex flex-col sm:flex-row justify-between gap-4">
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


  <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
    <div class="col-span-12 lg:col-span-6">
      <!-- PRIMER FORMULARIO -->
      <div class="relative flex flex-col rounded-xl bg-transparent">
        <form class="mt-8 mb-2 w-full p-4">
          <div class="mb-1 flex flex-col gap-6">
            <div class="w-full">
              <label class="block mb-2 text-sm text-slate-600">
                Nombre
              </label>
              <input type="text"
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full px-5 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Nombre" />
            </div>
            <div class="w-full">
              <label class="block mb-2 text-sm text-slate-600">
                Email
              </label>
              <input type="email"
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full px-5 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Email" />
            </div>
            <div class="w-full">
              <label class="block mb-2 text-sm text-slate-600">
                Teléfono
              </label>
              <input type="text"
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full px-5 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Teléfono" />
            </div>
            <div class="w-full ">
              <label class="block mb-2 text-sm text-slate-600">
                ¿Cómo puedo ayudarte?
              </label>
              <textarea rows="4"
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-xl px-5 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="¿Cómo puedo ayudarte?"></textarea>
            </div>
          </div>
          <button
            class="mt-4 rounded-full bg-slate-800 py-4 px-8 border border-transparent text-center text-base text-white transition-all  focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 disabled:pointer-events-none disabled:opacity-50  w-full md:w-[50%] mx-auto"
            type="button">
            Enviar Mensaje
          </button>
        </form>
      </div>

    </div>
    <div class="col-span-12 lg:col-span-6 flex justify-center">
      <img src="../assets/images/contact-demo.jpg" alt="" class="w-2/3">
    </div>
  </div>

</template>

<script setup>
import Button from '../components/Button.vue'

</script>