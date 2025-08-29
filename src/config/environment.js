// Configuración de entorno
import { ENV_CONFIG } from './env.js'

const isDevelopment = ENV_CONFIG.IS_DEVELOPMENT
const isProduction = ENV_CONFIG.IS_PRODUCTION

// URLs de la API según el entorno
export const API_CONFIG = {
  // URL base de WordPress - desde variables de entorno
  WORDPRESS_BASE_URL: ENV_CONFIG.WORDPRESS_API_URL,
  
  // Configuración de red
  NETWORK: {
    TIMEOUT: ENV_CONFIG.API_TIMEOUT,
    RETRIES: ENV_CONFIG.API_RETRIES,
    RETRY_DELAY: ENV_CONFIG.API_RETRY_DELAY
  },
  
  // Configuración de debug
  DEBUG: {
    ENABLED: ENV_CONFIG.DEBUG_ENABLED,
    LOG_REQUESTS: ENV_CONFIG.DEBUG_ENABLED,
    LOG_RESPONSES: ENV_CONFIG.DEBUG_ENABLED
  }
}

// Función para obtener la URL completa de la API
export const getApiUrl = (endpoint, params = {}) => {
  const url = new URL(`${API_CONFIG.WORDPRESS_BASE_URL}${endpoint}`)
  
  // Agregar parámetros
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value)
    }
  })
  
  return url.toString()
}

// Función para hacer peticiones HTTP con configuración de entorno
export const fetchWithEnvironmentConfig = async (url, options = {}) => {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.NETWORK.TIMEOUT)
  
  if (API_CONFIG.DEBUG.LOG_REQUESTS) {
    console.log(`🌐 Request: ${url}`)
  }
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers
      }
    })
    
    clearTimeout(timeoutId)
    
    if (API_CONFIG.DEBUG.LOG_RESPONSES) {
      console.log(`✅ Response: ${response.status} ${response.statusText}`)
    }
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`)
    }
    
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    
    if (API_CONFIG.DEBUG.ENABLED) {
      console.error(`❌ Request failed: ${error.message}`)
    }
    
    throw error
  }
}
