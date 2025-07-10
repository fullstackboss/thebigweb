<template>
  <div class="min-h-screen bg-theme-surface p-8">
    <div class="container mx-auto max-w-6xl">
      <h1 class="text-4xl font-bold text-theme-primary mb-8">Trabajos</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="bg-theme-card p-6 rounded-lg shadow-lg border border-theme hover:shadow-xl transition-shadow"
        >
          <div class="w-full h-48 bg-theme-surface rounded-lg mb-4 flex items-center justify-center">
            <span class="text-theme-muted text-lg">{{ project.name }}</span>
          </div>
          <h3 class="text-xl font-semibold text-theme-primary mb-2">{{ project.name }}</h3>
          <p class="text-theme-secondary mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in project.technologies" 
              :key="tech"
              class="px-3 py-1 bg-theme-surface text-theme-secondary text-sm rounded-full"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    name: 'E-commerce Platform',
    description: 'Plataforma completa de comercio electrónico con carrito de compras y sistema de pagos.',
    technologies: ['Vue 3', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    name: 'Dashboard Analytics',
    description: 'Panel de control con gráficos interactivos y análisis de datos en tiempo real.',
    technologies: ['Vue 3', 'Chart.js', 'Firebase']
  },
  {
    id: 3,
    name: 'Social Media App',
    description: 'Aplicación de redes sociales con chat en tiempo real y compartir contenido.',
    technologies: ['Vue 3', 'Socket.io', 'PostgreSQL']
  },
  {
    id: 4,
    name: 'Task Manager',
    description: 'Gestor de tareas con drag & drop, notificaciones y colaboración en equipo.',
    technologies: ['Vue 3', 'Vuex', 'Express']
  },
  {
    id: 5,
    name: 'Portfolio Website',
    description: 'Sitio web de portafolio personal con animaciones y diseño responsivo.',
    technologies: ['Vue 3', 'GSAP', 'Tailwind']
  },
  {
    id: 6,
    name: 'Weather App',
    description: 'Aplicación del clima con pronósticos detallados y ubicación automática.',
    technologies: ['Vue 3', 'OpenWeather API', 'Geolocation']
  }
])
</script> 