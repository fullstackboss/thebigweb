# Solución de Problemas - WordPress API en Producción

## Problema: Error al cargar los proyectos en Netlify

### Posibles Causas y Soluciones

#### 1. Problemas de CORS (Cross-Origin Resource Sharing)

**Síntomas:**
- Error "Failed to fetch" en la consola
- Error 403 o 405 en las peticiones
- La aplicación funciona en desarrollo pero no en producción

**Soluciones:**

**A. Configurar CORS en WordPress:**
Agrega este código al archivo `functions.php` de tu tema WordPress:

```php
// Habilitar CORS para la API REST
add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        return $value;
    });
}, 15);
```

**B. Usar un proxy en Netlify:**
El archivo `netlify.toml` ya está configurado para hacer proxy de las peticiones a WordPress.

#### 2. Problemas de Timeout

**Síntomas:**
- Error "AbortError" en la consola
- La aplicación tarda mucho en cargar

**Soluciones:**

**A. Aumentar timeouts:**
Las variables de entorno ya están configuradas para manejar timeouts más largos en producción.

**B. Optimizar WordPress:**
- Instalar un plugin de caché (WP Rocket, W3 Total Cache)
- Optimizar imágenes
- Usar un CDN

#### 3. Problemas de Configuración de la API

**Síntomas:**
- Error 404 en las peticiones a la API
- No se encuentran posts o categorías

**Soluciones:**

**A. Verificar que la API REST esté habilitada:**
En WordPress, ve a Ajustes > Enlaces permanentes y asegúrate de que no esté en "Simple".

**B. Verificar la URL de la API:**
La URL debe ser: `https://omartejada.com/contenido/wp-json/wp/v2`

**C. Verificar que los posts estén publicados:**
Los posts deben estar en estado "Publicado" para aparecer en la API.

#### 4. Problemas de Red en Netlify

**Síntomas:**
- Errores intermitentes
- La aplicación funciona a veces y a veces no

**Soluciones:**

**A. Verificar la configuración de Netlify:**
- Asegúrate de que el archivo `netlify.toml` esté en la raíz del proyecto
- Verifica que las variables de entorno estén configuradas en Netlify

**B. Usar funciones serverless de Netlify:**
Si los problemas persisten, considera crear una función serverless que actúe como proxy.

### Herramientas de Diagnóstico

#### 1. Componente de Prueba
El componente `WordPressTest.vue` se muestra automáticamente cuando hay errores. Úsalo para:
- Probar la conectividad básica
- Verificar que los posts se cargan
- Verificar que las categorías están disponibles

#### 2. Logs de la Consola
Revisa la consola del navegador para ver:
- URLs de las peticiones
- Códigos de estado HTTP
- Mensajes de error detallados

#### 3. Herramientas de Red
Usa las herramientas de desarrollador del navegador para:
- Ver las peticiones HTTP
- Verificar headers de CORS
- Identificar timeouts

### Configuración Recomendada para Producción

#### Variables de Entorno en Netlify:
```
VITE_WORDPRESS_API_URL=https://omartejada.com/contenido/wp-json/wp/v2
VITE_API_TIMEOUT=15000
VITE_API_RETRIES=5
VITE_API_RETRY_DELAY=1000
VITE_DEBUG_ENABLED=false
```

#### Configuración de WordPress:
1. Habilitar la API REST
2. Configurar CORS
3. Optimizar el rendimiento
4. Usar un plugin de caché

### Pasos para Solucionar el Problema

1. **Verificar la conectividad básica:**
   - Abre la consola del navegador
   - Ve a la página de Works
   - Si hay error, usa el componente de prueba

2. **Verificar la configuración de WordPress:**
   - Confirma que la API REST está habilitada
   - Verifica que hay posts publicados
   - Prueba la URL de la API directamente

3. **Verificar la configuración de Netlify:**
   - Confirma que el archivo `netlify.toml` está desplegado
   - Verifica las variables de entorno
   - Revisa los logs de build

4. **Implementar soluciones:**
   - Configura CORS en WordPress
   - Ajusta timeouts si es necesario
   - Optimiza el rendimiento de WordPress

### Contacto para Soporte

Si los problemas persisten después de seguir estos pasos, proporciona:
- URL de la aplicación en Netlify
- Logs de error de la consola
- Resultados del componente de prueba
- Configuración actual de WordPress
