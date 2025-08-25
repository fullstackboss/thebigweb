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
          activeTab === idx ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white'
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
      :content_work="item.content_work"
      :projectId="item.id"
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
        id: 'ux-1',
        img: new URL('../assets/proyectos/proyecto-ux-1.jpg', import.meta.url).href,
        title: 'Titulo acerca del is proyecto UX 1',
        description: 'Iba ayudando a empresas emergentes lo web, Lorem ipsum factouern is poree monoloretr Lorem ipsum is Perect.',
        url: '#',
        position_image: 'order-1',
        position_title: 'order-2',
        position_description: 'order-3',
        content_work: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold">Descripción del Proyecto UX/UI 1</h3>
            <p>Este proyecto se enfocó en mejorar la experiencia del usuario para una plataforma de comercio electrónico. Trabajamos en:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Investigación de usuarios y análisis de comportamiento</li>
              <li>Diseño de wireframes y prototipos interactivos</li>
              <li>Pruebas de usabilidad y iteraciones</li>
              <li>Implementación de patrones de diseño modernos</li>
            </ul>
            <h4 class="text-xl font-semibold">Tecnologías utilizadas:</h4>
            <p>Figma, Adobe XD, Sketch, InVision, Miro</p>
            <h4 class="text-xl font-semibold">Resultados:</h4>
            <p>Mejora del 40% en la tasa de conversión y reducción del 25% en el tiempo de navegación.</p>
          </div>
        `
      },
      {
        id: 'ux-2',
        img: new URL('../assets/proyectos/proyecto-ux-2.jpg', import.meta.url).href,
        title: 'Titulo acerca del is proyecto UX 2',
        description: 'Ayudando a Lorem common emergentes lo web impecable, Lorem ipsum factouern is poree monoloretr Lorem ipolutis.',
        url: '#',
        position_image: 'order-1',
        position_title: 'order-2',
        position_description: 'order-3',
        content_work: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold">Descripción del Proyecto UX/UI 2</h3>
            <p>Rediseño completo de una aplicación móvil para gestión de tareas. El proyecto incluyó:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Auditoría de UX de la aplicación existente</li>
              <li>Diseño de nueva arquitectura de información</li>
              <li>Creación de sistema de diseño consistente</li>
              <li>Prototipado y testing con usuarios reales</li>
            </ul>
            <h4 class="text-xl font-semibold">Tecnologías utilizadas:</h4>
            <p>Figma, Principle, Maze, Hotjar, Google Analytics</p>
            <h4 class="text-xl font-semibold">Resultados:</h4>
            <p>Aumento del 60% en la retención de usuarios y mejora del 35% en la satisfacción general.</p>
          </div>
        `
      }
    ]
  },
  {
    label: 'Proyectos Motion Graphics',
    items: [
      {
        id: 'motion-1',
        img: new URL('../assets/proyectos/proyecto-motion-1.jpg', import.meta.url).href,
        title: 'Titulo acerca del is proyecto MotionGrafics 1',
        description: 'Estoy ayudando a empresas lo web impecable, Lorem ipsum factouern is poree monoloretr Lorem ipsum is facto absolutis.',
        url: '#',
        position_image: 'lg:order-2 order-1',
        position_title: 'order-1',
        position_description: 'order-3',
        content_work: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold">Descripción del Proyecto Motion Graphics 1</h3>
            <p>Creación de identidad visual animada para una marca de tecnología. El proyecto incluyó:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Diseño de logo animado y variaciones</li>
              <li>Creación de elementos gráficos en movimiento</li>
              <li>Desarrollo de transiciones y micro-interacciones</li>
              <li>Implementación en diferentes plataformas</li>
            </ul>
            <h4 class="text-xl font-semibold">Tecnologías utilizadas:</h4>
            <p>After Effects, Cinema 4D, Adobe Illustrator, Lottie</p>
            <h4 class="text-xl font-semibold">Resultados:</h4>
            <p>Mejora del 45% en el reconocimiento de marca y aumento del 30% en engagement en redes sociales.</p>
          </div>
        `
      },
      {
        id: 'motion-2',
        img: new URL('../assets/proyectos/proyecto-motion-2.jpg', import.meta.url).href,
        title: 'Titulo acerca del is proyecto MotionGrafics 2',
        description: 'Deseo ayudando a empresas emergentes lo web impecable, Lorem ipsum factouern is poree monoloretr Lorem ipsum is facto .',
        url: '#',
        position_image: 'lg:order-2 order-1',
        position_title: 'order-1',
        position_description: 'order-3',
        content_work: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold">Descripción del Proyecto Motion Graphics 2</h3>
            <p>Producción de video promocional para lanzamiento de producto. El proyecto incluyó:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Storyboard y previsualización</li>
              <li>Animación 2D y 3D integrada</li>
              <li>Composición y efectos visuales</li>
              <li>Optimización para múltiples formatos</li>
            </ul>
            <h4 class="text-xl font-semibold">Tecnologías utilizadas:</h4>
            <p>After Effects, Premiere Pro, Blender, DaVinci Resolve</p>
            <h4 class="text-xl font-semibold">Resultados:</h4>
            <p>Video viral con más de 500K visualizaciones y conversión del 15% en ventas del producto.</p>
          </div>
        `
      }
    ]
  },
  {
    label: 'Desarrollo Frontend',
    items: [
      {
        id: 'dev-1',
        img: new URL('../assets/proyectos/proyecto-desarrollo-1.jpg', import.meta.url).href,
        title: 'Titulo acerca del is proyecto Desarrollo 1',
        description: 'Estoy ayudando a empresas emergentes lo web impecam factouern is poree monoloretr Lorem ipsum is facto Peerctus is cooomsn.',
        url: '#',
        position_image: 'lg:order-3 order-1',
        position_title: 'order-1',
        position_description: 'order-2',
        content_work: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold">Descripción del Proyecto Desarrollo Frontend 1</h3>
            <p>Desarrollo de aplicación web progresiva (PWA) para gestión de inventarios. El proyecto incluyó:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Arquitectura de aplicación moderna con Vue.js</li>
              <li>Implementación de PWA con service workers</li>
              <li>Diseño responsive y optimización de rendimiento</li>
              <li>Integración con APIs REST y autenticación</li>
            </ul>
            <h4 class="text-xl font-semibold">Tecnologías utilizadas:</h4>
            <p>Vue.js 3, Vite, Tailwind CSS, PWA, Firebase</p>
            <h4 class="text-xl font-semibold">Resultados:</h4>
            <p>Reducción del 70% en tiempo de carga y mejora del 50% en la productividad del usuario.</p>
          </div>
        `
      },
      {
        id: 'dev-2',
        img: new URL('../assets/proyectos/proyecto-desarrollo-2.jpg', import.meta.url).href,
        title: 'Titulo acerca del is proyecto Desarrollo 2',
        description: 'Vamos a ayudando a empresas emergentes lo, Lorem ipsum factouern is poree Iper abosluutis comin Lorem ipsum is facto.',
        url: '#',
        position_image: 'lg:order-3 order-1',
        position_title: 'order-1',
        position_description: 'order-2',
        content_work: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold">Descripción del Proyecto Desarrollo Frontend 2</h3>
            <p>Plataforma de e-learning con funcionalidades avanzadas. El proyecto incluyó:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Interfaz de usuario intuitiva para estudiantes y profesores</li>
              <li>Sistema de gestión de cursos y contenido multimedia</li>
              <li>Dashboard analítico con gráficos interactivos</li>
              <li>Optimización SEO y accesibilidad web</li>
            </ul>
            <h4 class="text-xl font-semibold">Tecnologías utilizadas:</h4>
            <p>React, Next.js, TypeScript, Styled Components, Chart.js</p>
            <h4 class="text-xl font-semibold">Resultados:</h4>
            <p>Aumento del 80% en la retención de estudiantes y mejora del 60% en la satisfacción del usuario.</p>
          </div>
        `
      }
    ]
  }
]

const activeTab = ref(0)
</script> 