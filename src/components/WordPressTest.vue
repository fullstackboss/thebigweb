<template>
  <div class="p-6 bg-gray-50 rounded-lg">
    <h3 class="text-lg font-bold mb-4">Prueba de Conectividad WordPress</h3>
    
    <div class="space-y-4">
      <!-- Estado de la conexión -->
      <div class="flex items-center space-x-2">
        <div :class="[
          'w-3 h-3 rounded-full',
          connectionStatus === 'testing' ? 'bg-yellow-500 animate-pulse' :
          connectionStatus === 'success' ? 'bg-green-500' :
          connectionStatus === 'error' ? 'bg-red-500' : 'bg-gray-400'
        ]"></div>
        <span class="font-medium">
          {{ getStatusText() }}
        </span>
      </div>
      
      <!-- Información de la API -->
      <div class="text-sm text-gray-600">
        <p><strong>URL de la API:</strong> {{ apiUrl }}</p>
        <p><strong>Entorno:</strong> {{ isProduction ? 'Producción' : 'Desarrollo' }}</p>
      </div>
      
      <!-- Botones de prueba -->
      <div class="flex space-x-2">
        <button 
          @click="testConnection"
          :disabled="isTesting"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {{ isTesting ? 'Probando...' : 'Probar Conexión' }}
        </button>
        
        <button 
          @click="testPosts"
          :disabled="isTesting"
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
        >
          Probar Posts
        </button>
        
        <button 
          @click="testCategories"
          :disabled="isTesting"
          class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50"
        >
          Probar Categorías
        </button>
      </div>
      
      <!-- Resultados -->
      <div v-if="testResults" class="mt-4">
        <h4 class="font-medium mb-2">Resultados de la prueba:</h4>
        <pre class="bg-white p-3 rounded border text-xs overflow-auto max-h-40">{{ testResults }}</pre>
      </div>
      
      <!-- Errores -->
      <div v-if="error" class="mt-4 p-3 bg-red-100 border border-red-300 rounded">
        <h4 class="font-medium text-red-800 mb-1">Error:</h4>
        <p class="text-red-700 text-sm">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getApiUrl, fetchWithRetry, WORDPRESS_CONFIG } from '../config/wordpress.js'
import { API_CONFIG } from '../config/environment.js'

const connectionStatus = ref('idle') // idle, testing, success, error
const isTesting = ref(false)
const testResults = ref(null)
const error = ref(null)
const apiUrl = ref('')
const isProduction = ref(false)

onMounted(() => {
  apiUrl.value = getApiUrl(WORDPRESS_CONFIG.ENDPOINTS.POSTS)
  isProduction.value = import.meta.env.PROD
})

const getStatusText = () => {
  switch (connectionStatus.value) {
    case 'testing': return 'Probando conexión...'
    case 'success': return 'Conexión exitosa'
    case 'error': return 'Error de conexión'
    default: return 'No probado'
  }
}

const testConnection = async () => {
  isTesting.value = true
  connectionStatus.value = 'testing'
  error.value = null
  testResults.value = null
  
  try {
    const url = getApiUrl(WORDPRESS_CONFIG.ENDPOINTS.POSTS, { per_page: 1 })
    const response = await fetchWithRetry(url)
    const data = await response.json()
    
    connectionStatus.value = 'success'
    testResults.value = JSON.stringify({
      status: response.status,
      statusText: response.statusText,
      dataLength: Array.isArray(data) ? data.length : 'No es un array',
      sampleData: Array.isArray(data) && data.length > 0 ? data[0] : null
    }, null, 2)
  } catch (err) {
    connectionStatus.value = 'error'
    error.value = err.message
    testResults.value = JSON.stringify({
      error: err.message,
      name: err.name,
      stack: err.stack
    }, null, 2)
  } finally {
    isTesting.value = false
  }
}

const testPosts = async () => {
  isTesting.value = true
  error.value = null
  testResults.value = null
  
  try {
    const url = getApiUrl(WORDPRESS_CONFIG.ENDPOINTS.POSTS, { per_page: 5, _embed: '_embed' })
    const response = await fetchWithRetry(url)
    const data = await response.json()
    
    testResults.value = JSON.stringify({
      totalPosts: data.length,
      posts: data.map(post => ({
        id: post.id,
        title: post.title.rendered,
        categories: post.categories,
        hasEmbedded: !!post._embedded
      }))
    }, null, 2)
  } catch (err) {
    error.value = err.message
    testResults.value = JSON.stringify({ error: err.message }, null, 2)
  } finally {
    isTesting.value = false
  }
}

const testCategories = async () => {
  isTesting.value = true
  error.value = null
  testResults.value = null
  
  try {
    const url = getApiUrl(WORDPRESS_CONFIG.ENDPOINTS.CATEGORIES)
    const response = await fetchWithRetry(url)
    const data = await response.json()
    
    testResults.value = JSON.stringify({
      totalCategories: data.length,
      categories: data.map(cat => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        count: cat.count
      }))
    }, null, 2)
  } catch (err) {
    error.value = err.message
    testResults.value = JSON.stringify({ error: err.message }, null, 2)
  } finally {
    isTesting.value = false
  }
}
</script>
