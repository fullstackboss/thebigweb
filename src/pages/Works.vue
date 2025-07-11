<template>
  <div class="py-8" style="background: var(--color-background);">
    <h1 style="color: var(--color-primary); font-size: 2.25rem; font-weight: bold; margin-bottom: 2rem;">Trabajos</h1>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
      <div 
        v-for="project in projects" 
        :key="project.id"
        style="background: var(--color-card); padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 2px 8px var(--color-shadow); border: 1px solid var(--color-border); transition: box-shadow 0.2s;"
      >
        <div style="width: 100%; height: 12rem; background: var(--color-surface); border-radius: 0.5rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center;">
          <span style="color: var(--color-text-muted); font-size: 1.125rem;">{{ project.name }}</span>
        </div>
        <h3 style="color: var(--color-primary); font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">{{ project.name }}</h3>
        <p style="color: var(--color-secondary); margin-bottom: 1rem;">{{ project.description }}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          <span 
            v-for="tech in project.technologies" 
            :key="tech"
            style="padding: 0.25rem 0.75rem; background: var(--color-surface); color: var(--color-secondary); font-size: 0.875rem; border-radius: 9999px;"
          >
            {{ tech }}
          </span>
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
    name: 'E-commerce Platform',
    description: 'Plataforma completa de comercio electrónico con carrito de compras y sistema de pagos.',
    technologies: ['Vue 3', 'Node.js', 'MongoDB']
  },
  {
    id: 5,
    name: 'Dashboard Analytics',
    description: 'Panel de control con gráficos interactivos y análisis de datos en tiempo real.',
    technologies: ['Vue 3', 'Chart.js', 'Firebase']
  },
  {
    id: 6,
    name: 'Social Media App',
    description: 'Aplicación de redes sociales con chat en tiempo real y compartir contenido.',
    technologies: ['Vue 3', 'Socket.io', 'PostgreSQL']
  }
])
</script> 