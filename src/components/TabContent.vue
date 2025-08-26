<template>
  <div class="flex flex-col md:flex-row items-center gap-10 py-10 my-0 border-b border-black last:border-b-0">
    <!-- Imagen -->
    <div :class="['w-full md:w-1/3 flex-shrink-0 flex items-center justify-center mb-4 md:mb-0', position_image]">
      <img :src="img" alt="" class="w-full h-48 object-cover rounded-xl" />
    </div>
    <!-- Título y descripción -->
    <div :class="['w-full md:w-1/3 flex flex-col justify-center', position_title]">
      <h2 class="font-poppins text-2xl font-bold mb-2">{{ title }}</h2>
      
    </div>
    <!-- Acción -->
    <div :class="['w-full md:w-1/3 flex flex-col items-start justify-start', position_description]">
      <p class="text-parrafo mb-4">{{ description }}</p>
      <button 
        @click="openWorkDetail"
        class="inline-flex items-center border border-black rounded-full px-6 py-2 text-lg font-inter font-normal transition hover:bg-black hover:text-white group"
      >
        Ver más
        <svg class="ml-2 w-5 h-5 group-hover:text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  img: String,
  title: String,
  description: String,
  url: String,
  position_title: String,
  position_description: String,
  position_image: String,
  content_work: String,
  projectId: String,
  activeTabIndex: Number
})

const openWorkDetail = () => {
  // Generar un ID único basado en el título si no se proporciona
  const id = props.projectId || props.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  
  // Navegar al detalle con el índice de la categoría activa
  router.push({
    path: `/work/${id}`,
    query: { 
      tab: props.activeTabIndex,
      from: 'works'
    }
  })
}
</script> 