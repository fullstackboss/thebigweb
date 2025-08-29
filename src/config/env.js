// Configuración de variables de entorno
export const ENV_CONFIG = {
  // URL de WordPress desde variables de entorno o valor por defecto
  WORDPRESS_API_URL: import.meta.env.VITE_WORDPRESS_API_URL || 'https://omartejada.com/contenido/wp-json/wp/v2',
  
  // Configuración de red
  API_TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT) || 15000,
  API_RETRIES: parseInt(import.meta.env.VITE_API_RETRIES) || 5,
  API_RETRY_DELAY: parseInt(import.meta.env.VITE_API_RETRY_DELAY) || 1000,
  
  // Debug
  DEBUG_ENABLED: import.meta.env.VITE_DEBUG_ENABLED === 'true' || import.meta.env.DEV,
  
  // Entorno
  IS_PRODUCTION: import.meta.env.PROD,
  IS_DEVELOPMENT: import.meta.env.DEV
}

// Función para validar la configuración
export const validateConfig = () => {
  const issues = []
  
  if (!ENV_CONFIG.WORDPRESS_API_URL) {
    issues.push('VITE_WORDPRESS_API_URL no está configurada')
  }
  
  if (ENV_CONFIG.API_TIMEOUT < 1000) {
    issues.push('VITE_API_TIMEOUT debe ser al menos 1000ms')
  }
  
  if (ENV_CONFIG.API_RETRIES < 1) {
    issues.push('VITE_API_RETRIES debe ser al menos 1')
  }
  
  return {
    isValid: issues.length === 0,
    issues
  }
}

// Función para mostrar información de configuración
export const getConfigInfo = () => {
  return {
    wordpressUrl: ENV_CONFIG.WORDPRESS_API_URL,
    timeout: ENV_CONFIG.API_TIMEOUT,
    retries: ENV_CONFIG.API_RETRIES,
    isProduction: ENV_CONFIG.IS_PRODUCTION,
    isDevelopment: ENV_CONFIG.IS_DEVELOPMENT,
    debugEnabled: ENV_CONFIG.DEBUG_ENABLED
  }
}
