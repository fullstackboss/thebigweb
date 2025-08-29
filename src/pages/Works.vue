<template>
  <div class="min-h-screen flex flex-col">
    <BigHead />
    <main class="flex-1 lg:mt-16 mt-12">
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
              Proyectos 2025
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
        <!-- Loading state -->
        <div v-if="loading" class="text-center py-16">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          <p class="mt-4 text-parrafo">Cargando proyectos...</p>
        </div>

        <!-- Error state -->
        <div v-else-if="error" class="text-center py-16">
          <p class="text-red-600 text-lg mb-4">{{ error }}</p>
          <button @click="fetchPosts" class="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Reintentar
          </button>
        </div>

        <!-- Content when loaded -->
        <div v-else>
          <!-- Debug info (temporal) -->
          <div class="mb-4 p-4 bg-gray-100 rounded-lg hiddenx">
            <h3 class="font-bold mb-2">Debug Info:</h3>
            <p><strong>Total posts:</strong> {{ posts.length }}</p>
            <p><strong>Categorías encontradas:</strong> {{ [...new Set(posts.map(p => p.category_slug).filter(Boolean))].join(', ') || 'Ninguna' }}</p>
            <p><strong>Posts por categoría:</strong></p>
            <ul class="ml-4">
              <li><strong>Designs:</strong> {{ posts.filter(p => p.category_slug === 'designs').length }} posts</li>
              <li><strong>Motiongraphics:</strong> {{ posts.filter(p => p.category_slug === 'motiongraphics').length }} posts</li>
              <li><strong>Projects:</strong> {{ posts.filter(p => p.category_slug === 'projects').length }} posts</li>
            </ul>
            <p><strong>Posts sin categoría:</strong> {{ posts.filter(p => !p.category_slug).length }}</p>
            <div class="mt-3 space-x-2">
              <button @click="checkWordPressCategories" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Verificar Categorías de WordPress
              </button>
              <button @click="reloadPosts" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Recargar Posts
              </button>
              <button @click="runFullDebug" class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                Debug Completo
              </button>
            </div>
          </div>
          
          <!-- Tabs -->
          <div class="flex flex-col md:flex-row gap-2 mb-8 relative">
            <button
              v-for="(tab, idx) in tabs"
              :key="tab.label"
              :data-tab="idx"
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
          <div v-if="tabs[activeTab] && tabs[activeTab].items && tabs[activeTab].items.length > 0">
            <TabContent
              v-for="item in tabs[activeTab].items"
              :key="item.id"
              :img="item.featured_media_url || '../assets/images/demo.jpeg'"
              :title="item.title.rendered"
              :description="item.excerpt.rendered"
              :url="item.link"
              :position_title="item.position_title"
              :position_description="item.position_description"
              :position_image="item.position_image"
              :content_work="item.content.rendered"
              :projectId="item.id"
              :activeTabIndex="activeTab"
            />
          </div>
          
          <!-- Empty state -->
          <div v-else class="text-center py-16 text-gray-500">
            <p class="text-xl">No hay proyectos disponibles en esta categoría</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import BigHead from '../components/BigHead.vue'
import BigFoot from '../components/BigFoot.vue'
import TabContent from '../components/TabContent.vue'
import { 
  getApiUrl, 
  getCategoryName, 
  getCategoryLabel, 
  getFeaturedMediaUrl,
  getPostCategorySlug,
  WORDPRESS_CONFIG 
} from '../config/wordpress.js'
import { debugWordPressSetup } from '../config/wordpress-debug.js'
import { getFeaturedImageUrls, getMediaDebugInfo } from '../utils/wordpress-media.js'

const route = useRoute()
const activeTab = ref(0)
const loading = ref(true)
const error = ref(null)
const posts = ref([])

// Función para establecer la categoría activa basada en la URL
const setActiveTabFromURL = () => {
  const tabParam = route.query.tab
  if (tabParam !== undefined) {
    const tabIndex = parseInt(tabParam)
    if (tabIndex >= 0 && tabIndex < tabs.value.length) {
      activeTab.value = tabIndex
    }
  }
}

// Establecer la categoría activa cuando se monta el componente
onMounted(() => {
  fetchPosts()
})

// Watcher para cuando cambie la URL
watch(() => route.query.tab, (newTab) => {
  if (newTab !== undefined) {
    const tabIndex = parseInt(newTab)
    if (tabIndex >= 0 && tabIndex < tabs.value.length) {
      activeTab.value = tabIndex
      // Scroll suave a la categoría activa
      setTimeout(() => {
        const activeTabElement = document.querySelector(`[data-tab="${tabIndex}"]`)
        if (activeTabElement) {
          activeTabElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          })
        }
      }, 100)
    }
  }
})

// Función para obtener posts desde WordPress
const fetchPosts = async () => {
  loading.value = true
  error.value = null
  
  try {
    // Obtener posts con información de imágenes destacadas y términos de categorías
    const apiUrl = getApiUrl(WORDPRESS_CONFIG.ENDPOINTS.POSTS, { _embed: '_embed' })
    const response = await fetch(apiUrl)
    
    if (!response.ok) {
      throw new Error('Error al obtener los posts')
    }
    
    const data = await response.json()
    
    // Procesar posts para extraer URLs de imágenes destacadas y categorías
    console.log('🔄 Procesando posts para obtener imágenes destacadas...')
    
    // Usar la nueva utilidad para obtener imágenes destacadas
    const processedPosts = await getFeaturedImageUrls(data.map(post => ({
      ...post,
      category_slug: getPostCategorySlug(post)
    })))
    
    // Debug: mostrar información de las imágenes destacadas
    processedPosts.forEach((post, index) => {
      console.log(`📸 Post ${index + 1} - Imagen destacada:`, getMediaDebugInfo(post))
    })
    
    posts.value = processedPosts
    loading.value = false
    
    // Debug: mostrar información de los posts
    console.log('Posts obtenidos:', processedPosts)
    console.log('Categorías encontradas:', [...new Set(processedPosts.map(p => p.category_slug).filter(Boolean))])
    
    // Debug detallado de cada post
    processedPosts.forEach((post, index) => {
      console.log(`Post ${index + 1}:`, {
        id: post.id,
        title: post.title.rendered,
        categories: post.categories,
        category_slug: post.category_slug,
        has_embedded: !!post._embedded,
        embedded_terms: post._embedded?.wp_term
      })
    })
    
  } catch (err) {
    console.error('Error fetching posts:', err)
    error.value = 'Error al cargar los proyectos. Por favor, intenta de nuevo.'
    loading.value = false
  }
}

// Función para verificar las categorías disponibles en WordPress
const checkWordPressCategories = async () => {
  try {
    const categoriesUrl = getApiUrl(WORDPRESS_CONFIG.ENDPOINTS.CATEGORIES)
    const response = await fetch(categoriesUrl)
    const categories = await response.json()
    
    console.log('Categorías disponibles en WordPress:', categories)
    
    // Mostrar alerta con las categorías
    const categoryInfo = categories.map(cat => `ID: ${cat.id}, Nombre: ${cat.name}, Slug: ${cat.slug}`).join('\n')
    alert(`Categorías disponibles:\n${categoryInfo}`)
  } catch (err) {
    console.error('Error al obtener categorías:', err)
    alert('Error al obtener categorías de WordPress')
  }
}

// Función para recargar posts
const reloadPosts = () => {
  console.log('Recargando posts...')
  fetchPosts()
}

// Función para ejecutar debug completo
const runFullDebug = async () => {
  console.log('🚀 Ejecutando debug completo...')
  const result = await debugWordPressSetup()
  
  if (result.success) {
    alert('Debug completo ejecutado. Revisa la consola para más detalles.')
  } else {
    alert('Error en debug completo. Revisa la consola para más detalles.')
  }
}

// Tabs dinámicos basados en los posts obtenidos
const tabs = computed(() => [
  {
    label: WORDPRESS_CONFIG.CATEGORIES.DESIGNS.label,
    items: posts.value.filter(post => 
      post.category_slug === WORDPRESS_CONFIG.CATEGORIES.DESIGNS.slug
    ).map((post, index) => ({
      ...post,
      // Maquetación consistente para Designs: Imagen-Texto-Descripción
      position_image: 'order-1',
      position_title: 'order-2',
      position_description: 'order-3'
    }))
  },
  {
    label: WORDPRESS_CONFIG.CATEGORIES.MOTIONGRAPHICS.label,
    items: posts.value.filter(post => 
      post.category_slug === WORDPRESS_CONFIG.CATEGORIES.MOTIONGRAPHICS.slug
    ).map((post, index) => ({
      ...post,
      // Maquetación consistente para Motiongraphics: Texto-Imagen-Descripción
      position_image: 'lg:order-2 order-1',
      position_title: 'order-1',
      position_description: 'order-3'
    }))
  },
  {
    label: WORDPRESS_CONFIG.CATEGORIES.PROJECTS.label,
    items: posts.value.filter(post => 
      post.category_slug === WORDPRESS_CONFIG.CATEGORIES.PROJECTS.slug
    ).map((post, index) => ({
      ...post,
      // Maquetación consistente para Projects: Texto-Descripción-Imagen
      position_image: 'lg:order-3 order-1',
      position_title: 'order-1',
      position_description: 'order-2'
    }))
  }
])
</script>

<style scoped>
/* Estilos existentes se mantienen */
</style> 