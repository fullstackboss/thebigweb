<template>
  <div class="min-h-screen flex flex-col">
    <BigHead />
    <main class="flex-1 lg:mt-16 mt-12">
      <div class="container mx-auto lg:px-10 p-4">
        <!-- Botón de regreso -->
        <div class="mb-8">
          <button 
            @click="goBack"
            class="inline-flex items-center text-parrafo hover:text-black transition-colors group"
          >
            <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Volver a Proyectos
          </button>
        </div>

        <!-- Header del trabajo -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <!-- Imagen del proyecto -->
          <div class="order-2 lg:order-1">
            <img 
              :src="workDetail?.img" 
              :alt="workDetail?.title"
              class="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <!-- Información del proyecto -->
          <div class="order-1 lg:order-2">
            <div class="flex items-center mb-4">
              <span class="inline-block mr-4" style="width: 40px; height: 1px; background: var(--color-primary);"></span>
              <p class="tit-pretitulo m-0">Proyecto</p>
            </div>
            <h1 class="tit-grande mt-2 mb-6">{{ workDetail?.title }}</h1>
            <p class="text-parrafo text-lg leading-relaxed mb-6">
              {{ workDetail?.description }}
            </p>
            
            <!-- Botón de enlace externo si existe -->
            <a 
              v-if="workDetail?.url && workDetail?.url !== '#'"
              :href="workDetail.url" 
              target="_blank"
              class="inline-flex items-center border border-black rounded-full px-8 py-3 text-lg font-inter font-normal transition hover:bg-black hover:text-white group"
            >
              Visitar Proyecto
              <svg class="ml-2 w-5 h-5 group-hover:text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Contenido detallado del trabajo -->
        <div class="max-w-4xl mx-auto">
          <div v-if="workDetail?.content_work" v-html="workDetail.content_work" class="prose-detail max-w-none"></div>
          <div v-else class="text-center py-16 text-gray-500">
            <p class="text-xl">Contenido detallado no disponible</p>
          </div>
        </div>

        <!-- Navegación entre proyectos -->
        <div class="mt-16 pt-8 border-t border-gray-200">
          <div class="flex justify-between items-center">
            <button 
              v-if="previousWork"
              @click="goToWork(previousWork)"
              class="inline-flex items-center text-parrafo hover:text-black transition-colors group"
            >
              <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Proyecto Anterior
            </button>
            <div v-else></div>
            
            <button 
              v-if="nextWork"
              @click="goToWork(nextWork)"
              class="inline-flex items-center text-parrafo hover:text-black transition-colors group"
            >
              Siguiente Proyecto
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            <div v-else></div>
          </div>
        </div>
      </div>
    </main>
    <BigFoot />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BigHead from '../components/BigHead.vue'
import BigFoot from '../components/BigFoot.vue'

const route = useRoute()
const router = useRouter()

// Datos de todos los proyectos (esto debería venir de tu API de WordPress)
const allProjects = [
  // UX/UI
  {
    id: 'ux-1',
    img: new URL('../assets/proyectos/proyecto-ux-1.jpg', import.meta.url).href,
    title: 'Titulo acerca del is proyecto UX 1',
    description: 'Iba ayudando a empresas emergentes lo web, Lorem ipsum factouern is poree monoloretr Lorem ipsum is Perect.',
    url: '#',
    content_work: `
      <div class="space-y-8">
        <section>
          <h3 class="text-3xl font-bold mb-6">Descripción del Proyecto UX/UI 1</h3>
          <p class="text-lg leading-relaxed">Este proyecto se enfocó en mejorar la experiencia del usuario para una plataforma de comercio electrónico. Trabajamos en la optimización completa del flujo de compra y la interfaz de usuario para maximizar las conversiones.</p>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Proceso de Trabajo</h4>
          <ul class="space-y-3 text-lg">
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Investigación de usuarios y análisis de comportamiento mediante entrevistas y encuestas</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Diseño de wireframes y prototipos interactivos con múltiples iteraciones</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Pruebas de usabilidad con usuarios reales y análisis de métricas</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Implementación de patrones de diseño modernos y accesibles</span>
            </li>
          </ul>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Tecnologías Utilizadas</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Figma</p>
              <p class="text-sm text-gray-600">Diseño UI/UX</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Adobe XD</p>
              <p class="text-sm text-gray-600">Prototipado</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Sketch</p>
              <p class="text-sm text-gray-600">Diseño vectorial</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">InVision</p>
              <p class="text-sm text-gray-600">Colaboración</p>
            </div>
          </div>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Resultados Obtenidos</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-6 rounded-xl border border-green-200">
              <h5 class="text-xl font-bold text-green-800 mb-2">Conversión</h5>
              <p class="text-3xl font-bold text-green-600">+40%</p>
              <p class="text-green-700">Mejora en la tasa de conversión</p>
            </div>
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h5 class="text-xl font-bold text-blue-800 mb-2">Navegación</h5>
              <p class="text-3xl font-bold text-blue-600">-25%</p>
              <p class="text-blue-700">Reducción en tiempo de navegación</p>
            </div>
          </div>
        </section>
      </div>
    `
  },
  {
    id: 'ux-2',
    img: new URL('../assets/proyectos/proyecto-ux-2.jpg', import.meta.url).href,
    title: 'Titulo acerca del is proyecto UX 2',
    description: 'Ayudando a Lorem common emergentes lo web impecable, Lorem ipsum factouern is poree monoloretr Lorem ipolutis.',
    url: '#',
    content_work: `
      <div class="space-y-8">
        <section>
          <h3 class="text-3xl font-bold mb-6">Descripción del Proyecto UX/UI 2</h3>
          <p class="text-lg leading-relaxed">Rediseño completo de una aplicación móvil para gestión de tareas. El proyecto se enfocó en crear una experiencia intuitiva y eficiente para usuarios profesionales.</p>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Metodología de Trabajo</h4>
          <ul class="space-y-3 text-lg">
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Auditoría completa de UX de la aplicación existente</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Diseño de nueva arquitectura de información y flujos</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Creación de sistema de diseño consistente y escalable</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Prototipado avanzado y testing con usuarios reales</span>
            </li>
          </ul>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Herramientas y Tecnologías</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Figma</p>
              <p class="text-sm text-gray-600">Diseño principal</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Principle</p>
              <p class="text-sm text-gray-600">Animaciones</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Maze</p>
              <p class="text-sm text-gray-600">Testing</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Hotjar</p>
              <p class="text-sm text-gray-600">Analytics</p>
            </div>
          </div>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Impacto del Proyecto</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-6 rounded-xl border border-green-200">
              <h5 class="text-xl font-bold text-green-800 mb-2">Retención</h5>
              <p class="text-3xl font-bold text-green-600">+60%</p>
              <p class="text-green-700">Aumento en retención de usuarios</p>
            </div>
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h5 class="text-xl font-bold text-blue-800 mb-2">Satisfacción</h5>
              <p class="text-3xl font-bold text-blue-600">+35%</p>
              <p class="text-blue-700">Mejora en satisfacción general</p>
            </div>
          </div>
        </section>
      </div>
    `
  },
  // Motion Graphics
  {
    id: 'motion-1',
    img: new URL('../assets/proyectos/proyecto-motion-1.jpg', import.meta.url).href,
    title: 'Titulo acerca del is proyecto MotionGrafics 1',
    description: 'Estoy ayudando a empresas lo web impecable, Lorem ipsum factouern is poree monoloretr Lorem ipsum is facto absolutis.',
    url: '#',
    content_work: `
      <div class="space-y-8">
        <section>
          <h3 class="text-3xl font-bold mb-6">Descripción del Proyecto Motion Graphics 1</h3>
          <p class="text-lg leading-relaxed">Creación de identidad visual animada para una marca de tecnología. El proyecto se enfocó en desarrollar una identidad visual coherente y memorable que se adaptara a diferentes plataformas.</p>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Proceso Creativo</h4>
          <ul class="space-y-3 text-lg">
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Diseño de logo animado con múltiples variaciones y estados</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Creación de elementos gráficos en movimiento y transiciones</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Desarrollo de micro-interacciones y animaciones sutiles</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Implementación en diferentes plataformas y formatos</span>
            </li>
          </ul>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Software Utilizado</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">After Effects</p>
              <p class="text-sm text-gray-600">Animación 2D</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Cinema 4D</p>
              <p class="text-sm text-gray-600">Modelado 3D</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Illustrator</p>
              <p class="text-sm text-gray-600">Diseño vectorial</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Lottie</p>
              <p class="text-sm text-gray-600">Exportación</p>
            </div>
          </div>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Resultados del Proyecto</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-6 rounded-xl border border-green-200">
              <h5 class="text-xl font-bold text-green-800 mb-2">Reconocimiento</h5>
              <p class="text-3xl font-bold text-green-600">+45%</p>
              <p class="text-green-700">Mejora en reconocimiento de marca</p>
            </div>
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h5 class="text-xl font-bold text-blue-800 mb-2">Engagement</h5>
              <p class="text-3xl font-bold text-blue-600">+30%</p>
              <p class="text-blue-700">Aumento en engagement en redes</p>
            </div>
          </div>
        </section>
      </div>
    `
  },
  {
    id: 'motion-2',
    img: new URL('../assets/proyectos/proyecto-motion-2.jpg', import.meta.url).href,
    title: 'Titulo acerca del is proyecto MotionGrafics 2',
    description: 'Deseo ayudando a empresas emergentes lo web impecable, Lorem ipsum factouern is poree monoloretr Lorem ipsum is facto .',
    url: '#',
    content_work: `
      <div class="space-y-8">
        <section>
          <h3 class="text-3xl font-bold mb-6">Descripción del Proyecto Motion Graphics 2</h3>
          <p class="text-lg leading-relaxed">Producción de video promocional para lanzamiento de producto. El proyecto se enfocó en crear un video impactante que generara expectativa y conversiones para el nuevo producto.</p>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Fases del Proyecto</h4>
          <ul class="space-y-3 text-lg">
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Storyboard detallado y previsualización del concepto</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Animación 2D y 3D integrada con efectos visuales</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Composición avanzada y corrección de color</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Optimización para múltiples formatos y plataformas</span>
            </li>
          </ul>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Herramientas de Producción</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">After Effects</p>
              <p class="text-sm text-gray-600">Composición</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Premiere Pro</p>
              <p class="text-sm text-gray-600">Edición</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Blender</p>
              <p class="text-sm text-gray-600">3D</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">DaVinci</p>
              <p class="text-sm text-gray-600">Color</p>
            </div>
          </div>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Métricas de Éxito</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-6 rounded-xl border border-green-200">
              <h5 class="text-xl font-bold text-green-800 mb-2">Visualizaciones</h5>
              <p class="text-3xl font-bold text-green-600">500K+</p>
              <p class="text-green-700">Reproducciones del video</p>
            </div>
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h5 class="text-xl font-bold text-blue-800 mb-2">Conversión</h5>
              <p class="text-3xl font-bold text-blue-600">15%</p>
              <p class="text-blue-700">Tasa de conversión en ventas</p>
            </div>
          </div>
        </section>
      </div>
    `
  },
  // Desarrollo Frontend
  {
    id: 'dev-1',
    img: new URL('../assets/proyectos/proyecto-desarrollo-1.jpg', import.meta.url).href,
    title: 'Titulo acerca del is proyecto Desarrollo 1',
    description: 'Estoy ayudando a empresas emergentes lo web impecam factouern is poree monoloretr Lorem ipsum is facto Peerctus is cooomsn.',
    url: '#',
    content_work: `
      <div class="space-y-8">
        <section>
          <h3 class="text-3xl font-bold mb-6">Descripción del Proyecto Desarrollo Frontend 1</h3>
          <p class="text-lg leading-relaxed">Desarrollo de aplicación web progresiva (PWA) para gestión de inventarios. El proyecto se enfocó en crear una aplicación moderna, rápida y accesible que funcionara offline.</p>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Características Técnicas</h4>
          <ul class="space-y-3 text-lg">
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Arquitectura de aplicación moderna con Vue.js 3 y Composition API</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Implementación de PWA con service workers y cache offline</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Diseño responsive y optimización de rendimiento con lazy loading</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Integración con APIs REST y sistema de autenticación JWT</span>
            </li>
          </ul>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Stack Tecnológico</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Vue.js 3</p>
              <p class="text-sm text-gray-600">Framework</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Vite</p>
              <p class="text-sm text-gray-600">Build tool</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Tailwind CSS</p>
              <p class="text-sm text-gray-600">Estilos</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Firebase</p>
              <p class="text-sm text-gray-600">Backend</p>
            </div>
          </div>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Mejoras Implementadas</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-6 rounded-xl border border-green-200">
              <h5 class="text-xl font-bold text-green-800 mb-2">Rendimiento</h5>
              <p class="text-3xl font-bold text-green-600">-70%</p>
              <p class="text-green-700">Reducción en tiempo de carga</p>
            </div>
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h5 class="text-xl font-bold text-blue-800 mb-2">Productividad</h5>
              <p class="text-3xl font-bold text-blue-600">+50%</p>
              <p class="text-blue-700">Mejora en productividad del usuario</p>
            </div>
          </div>
        </section>
      </div>
    `
  },
  {
    id: 'dev-2',
    img: new URL('../assets/proyectos/proyecto-desarrollo-2.jpg', import.meta.url).href,
    title: 'Titulo acerca del is proyecto Desarrollo 2',
    description: 'Vamos a ayudando a empresas emergentes lo, Lorem ipsum factouern is poree Iper abosluutis comin Lorem ipsum is facto.',
    url: '#',
    content_work: `
      <div class="space-y-8">
        <section>
          <h3 class="text-3xl font-bold mb-6">Descripción del Proyecto Desarrollo Frontend 2</h3>
          <p class="text-lg leading-relaxed">Plataforma de e-learning con funcionalidades avanzadas. El proyecto se enfocó en crear una experiencia educativa intuitiva y efectiva para estudiantes y profesores.</p>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Funcionalidades Principales</h4>
          <ul class="space-y-3 text-lg">
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Interfaz de usuario intuitiva para estudiantes y profesores</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Sistema de gestión de cursos y contenido multimedia</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Dashboard analítico con gráficos interactivos y métricas</span>
            </li>
            <li class="flex items-start">
              <span class="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
              <span>Optimización SEO y accesibilidad web completa</span>
            </li>
          </ul>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Tecnologías Implementadas</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">React</p>
              <p class="text-sm text-gray-600">Frontend</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Next.js</p>
              <p class="text-sm text-gray-600">Framework</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">TypeScript</p>
              <p class="text-sm text-gray-600">Tipado</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <p class="font-semibold">Chart.js</p>
              <p class="text-sm text-gray-600">Gráficos</p>
            </div>
          </div>
        </section>
        
        <section>
          <h4 class="text-2xl font-semibold mb-4">Resultados del Proyecto</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-6 rounded-xl border border-green-200">
              <h5 class="text-xl font-bold text-green-800 mb-2">Retención</h5>
              <p class="text-3xl font-bold text-green-600">+80%</p>
              <p class="text-green-700">Aumento en retención de estudiantes</p>
            </div>
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h5 class="text-xl font-bold text-blue-800 mb-2">Satisfacción</h5>
              <p class="text-3xl font-bold text-blue-600">+60%</p>
              <p class="text-blue-700">Mejora en satisfacción del usuario</p>
            </div>
          </div>
        </section>
      </div>
    `
  }
]

const workDetail = ref(null)
const currentProjectIndex = ref(0)

// Obtener el proyecto actual basado en el ID de la URL
const currentProject = computed(() => {
  const projectId = route.params.id
  return allProjects.find(project => project.id === projectId)
})

// Proyectos anterior y siguiente para navegación
const previousWork = computed(() => {
  if (currentProjectIndex.value > 0) {
    return allProjects[currentProjectIndex.value - 1]
  }
  return null
})

const nextWork = computed(() => {
  if (currentProjectIndex.value < allProjects.length - 1) {
    return allProjects[currentProjectIndex.value + 1]
  }
  return null
})

const goBack = () => {
  console.log('Navegando a /trabajos')
  console.log('Rutas disponibles:', router.getRoutes().map(r => r.path))
  
  try {
    router.replace('/trabajos')
  } catch (error) {
    console.error('Error al navegar:', error)
    // Fallback: intentar con push
    router.push('/trabajos')
  }
}

const goToWork = (work) => {
  router.push(`/work/${work.id}`)
}

onMounted(() => {
  if (currentProject.value) {
    workDetail.value = currentProject.value
    currentProjectIndex.value = allProjects.findIndex(project => project.id === currentProject.value.id)
  } else {
    // Si no se encuentra el proyecto, redirigir a works
    router.push('/works')
  }
})
</script>

<style scoped>
.prose-detail {
  color: var(--color-textomedio);
}

.prose-detail h3 {
  color: var(--color-textoresalta);
  margin-bottom: 1.5rem;
  margin-top: 2rem;
}

.prose-detail h4 {
  color: var(--color-textoresalta);
  margin-bottom: 1rem;
  margin-top: 1.5rem;
}

.prose-detail p {
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.prose-detail ul {
  margin-bottom: 1.5rem;
}

.prose-detail li {
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.prose-detail strong {
  color: var(--color-textoresalta);
}

.prose-detail section {
  margin-bottom: 3rem;
}

.prose-detail section:last-child {
  margin-bottom: 0;
}
</style> 