<template>
  <div class="min-h-screen flex flex-col">
    <BigHead />
    <main class="flex-1 lg:mt-16 mt-12">
      <div class="container mx-auto lg:px-10 p-4">
        <!-- Loading state -->
        <div v-if="loading" class="text-center py-16">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          <p class="mt-4 text-parrafo">Cargando proyecto...</p>
        </div>

        <!-- Error state -->
        <div v-else-if="error" class="text-center py-16">
          <p class="text-red-600 text-lg mb-4">{{ error }}</p>
          <button @click="fetchWorkDetail" class="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Reintentar
          </button>
        </div>

        <!-- Content when loaded -->
        <div v-else-if="workDetail">
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
          <div class="mb-12">
            <!-- Información del proyecto -->
            <div class="max-w-4xl">
              <div class="flex items-center mb-4">
                <span class="inline-block mr-4" style="width: 40px; height: 1px; background: var(--color-primary);"></span>
                <p class="tit-pretitulo m-0">Proyecto</p>
              </div>
              <h1 class="tit-grande mt-2 mb-6" v-html="workDetail.title.rendered"></h1>
              <div class="text-parrafo text-lg leading-relaxed mb-6" v-html="workDetail.excerpt.rendered"></div>
              
              
            </div>
          </div>

          <!-- Contenido detallado del trabajo -->
          <div class="w-full">
            <div v-if="workDetail.content && workDetail.content.rendered" v-html="workDetail.content.rendered" class="prose-detail max-w-none"></div>
            <div v-else class="text-center py-16 text-gray-500">
              <p class="text-xl">Contenido detallado no disponible</p>
            </div>
          </div>
        </div>

        <!-- Not found state -->
        <div v-else class="text-center py-16">
          <p class="text-xl text-gray-500">Proyecto no encontrado</p>
          <button @click="goBack" class="mt-4 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Volver a Proyectos
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BigHead from '../components/BigHead.vue'
import { getApiUrl, WORDPRESS_CONFIG } from '../config/wordpress.js'

const route = useRoute()
const router = useRouter()

const workDetail = ref(null)
const loading = ref(true)
const error = ref(null)

// Obtener el ID del proyecto desde la URL
const projectId = computed(() => route.params.id)

// Función para obtener el detalle del trabajo desde WordPress
const fetchWorkDetail = async () => {
  if (!projectId.value) {
    error.value = 'ID de proyecto no válido'
    loading.value = false
    return
  }

  loading.value = true
  error.value = null
  
  try {
    const apiUrl = getApiUrl(`${WORDPRESS_CONFIG.ENDPOINTS.POSTS}/${projectId.value}`, { _embed: '_embed' })
    const response = await fetch(apiUrl)
    if (!response.ok) {
      if (response.status === 404) {
        error.value = 'Proyecto no encontrado'
      } else {
        throw new Error('Error al obtener el proyecto')
      }
    } else {
      const data = await response.json()
      workDetail.value = data
    }
  } catch (err) {
    console.error('Error fetching work detail:', err)
    error.value = 'Error al cargar el proyecto. Por favor, intenta de nuevo.'
  } finally {
    loading.value = false
  }
}

const goBack = () => {
  console.log('Navegando de vuelta a trabajos')
  
  // Obtener el índice de la categoría desde los query parameters
  const tabIndex = route.query.tab ? parseInt(route.query.tab) : 0
  const fromPage = route.query.from
  
  console.log('Tab index:', tabIndex, 'From page:', fromPage)
  
  try {
    if (fromPage === 'works' && !isNaN(tabIndex)) {
      // Navegar de vuelta a trabajos con la categoría específica
      console.log(`Navegando a /trabajos?tab=${tabIndex}`)
      router.replace({
        path: '/trabajos',
        query: { tab: tabIndex }
      })
    } else {
      // Fallback: ir a trabajos sin categoría específica
      console.log('Navegando a /trabajos (sin categoría específica)')
      router.replace('/trabajos')
    }
  } catch (error) {
    console.error('Error al navegar:', error)
    // Fallback: intentar con push
    router.push('/trabajos')
  }
}

onMounted(() => {
  fetchWorkDetail()
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