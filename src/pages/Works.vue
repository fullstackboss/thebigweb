<template>
    <!-- INICIO -->
    <div class="container pt-4">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
      <!-- Columna de texto (7/12) - Segunda en móvil -->
      <div class="col-span-12 lg:col-span-7 p-4 order-2 lg:order-1 md:order-2">
        <div class="flex items-center justify-left lg:justify-start mb-2">
          <span class="inline-block mr-4" style="width: 40px; height: 1px; background: var(--color-primary);"></span>
          <p class="tit-pretitulo m-0">
            Últimos trabajos realizados
          </p>
        </div>
        <h1 class="tit-grande mt-2">
          Proyectos
        </h1>
        <p class="mt-6 text-parrafo mx-auto lg:mx-0">
          Rápido y transparente, el camino hacia la creación de un sitio web que represente a su marca de la mejor
          manera está a solo 4 semanas de distancia. Siguiendo la meso de todo el proceso. Rápido y transparente, el
          camino hacia la creación de un sitio web que represente a su marca de la mejor manera está a solo 4 semanas de
          distancia. Siguiendo la meso de todo el proceso.
        </p>

      </div>
      <!-- Columna del canvas (5/12) - Primera en móvil -->
      <div class="col-span-12 lg:col-span-5 p-4 flex items-center justify-center order-1 lg:order-2 md:order-1">
        <img src="../assets/images/soft-demo.jpg" alt="" class="h-96 w-full object-cover rounded-2xl">
      </div>


    </div>
  </div>
  <div class="container py-8">
    <!-- Tabs -->
    <div class="flex flex-col md:flex-row gap-2 mb-8 relative">
      <button
        v-for="(tab, idx) in tabs"
        :key="tab.label"
        @click="activeTab = idx"
        :class="[
          'flex-1 px-6 py-6 rounded-xl border border-black font-inter text-lg transition relative',
          activeTab === idx ? 'bg-black text-white' : 'bg-white text-black'
        ]"
      >
        {{ tab.label }}
        <span v-if="activeTab === idx" class="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-[51px] h-[50px] w-px bg-black"></span>
      </button>
    </div>
    <!-- Contenido dinámico -->
    <TabContent
      v-for="item in tabs[activeTab].items"
      :key="item.title"
      :img="item.img"
      :title="item.title"
      :description="item.description"
      :url="item.url"
      :position_title="item.position_title"
      :position_description="item.position_description"
      :position_image="item.position_image"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TabContent from '../components/TabContent.vue'

const tabs = [
  {
    label: 'Proyectos UX/UI',
    items: [
      {
        img: new URL('../assets/proyectos/proyecto-ux-1.jpg', import.meta.url).href,
        title: 'Titulo acerca del is proyecto UX 1',
        description: 'Iba ayudando a empresas emergentes lo web, Lorem ipsum factouern is poree monoloretr Lorem ipsum is Perect.',
        url: '#',
        position_image: 'order-1',
        position_title: 'order-2',
        position_description: 'order-3',
      },
      {
        img: new URL('../assets/proyectos/proyecto-ux-2.jpg', import.meta.url).href,
        title: 'Titulo acerca del is proyecto UX 2',
        description: 'Ayudando a Lorem common emergentes lo web impecable, Lorem ipsum factouern is poree monoloretr Lorem ipolutis.',
        url: '#',
        position_image: 'order-1',
        position_title: 'order-2',
        position_description: 'order-3',
      }
    ]
  },
  {
    label: 'Proyectos Motion Graphics',
    items: [
      {
        img: new URL('../assets/proyectos/proyecto-motion-1.jpg', import.meta.url).href,
        title: 'Titulo acerca del is proyecto MotionGrafics 1',
        description: 'Estoy ayudando a empresas lo web impecable, Lorem ipsum factouern is poree monoloretr Lorem ipsum is facto absolutis.',
        url: '#',
        position_image: 'lg:order-2 order-1',
        position_title: 'order-1',
        position_description: 'order-3',
      },
      {
        img: new URL('../assets/proyectos/proyecto-motion-2.jpg', import.meta.url).href,
        title: 'Titulo acerca del is proyecto MotionGrafics 2',
        description: 'Deseo ayudando a empresas emergentes lo web impecable, Lorem ipsum factouern is poree monoloretr Lorem ipsum is facto .',
        url: '#',
        position_image: 'lg:order-2 order-1',
        position_title: 'order-1',
        position_description: 'order-3',
      }
    ]
  },
  {
    label: 'Desarrollo Frontend',
    items: [
      {
        img: new URL('../assets/proyectos/proyecto-desarrollo-1.jpg', import.meta.url).href,
        title: 'Titulo acerca del is proyecto Desarrollo 1',
        description: 'Estoy ayudando a empresas emergentes lo web impecam factouern is poree monoloretr Lorem ipsum is facto Peerctus is cooomsn.',
        url: '#',
        position_image: 'lg:order-3 order-1',
        position_title: 'order-1',
        position_description: 'order-2',
      },
      {
        img: new URL('../assets/proyectos/proyecto-desarrollo-2.jpg', import.meta.url).href,
        title: 'Titulo acerca del is proyecto Desarrollo 2',
        description: 'Vamos a ayudando a empresas emergentes lo, Lorem ipsum factouern is poree Iper abosluutis comin Lorem ipsum is facto.',
        url: '#',
        position_image: 'lg:order-3 order-1',
        position_title: 'order-1',
        position_description: 'order-2',
      }
    ]
  }
]

const activeTab = ref(0)
</script> 