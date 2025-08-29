# Guía de Despliegue en Netlify

## Configuración Inicial

### 1. Conectar el Repositorio

1. Ve a [Netlify](https://netlify.com) y conéctate con tu cuenta de GitHub
2. Selecciona el repositorio `thebigweb`
3. Configura el despliegue automático

### 2. Configuración de Build

Netlify detectará automáticamente la configuración desde `netlify.toml`:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

### 3. Variables de Entorno

Configura estas variables de entorno en Netlify (Site settings > Environment variables):

```
VITE_WORDPRESS_API_URL=https://omartejada.com/contenido/wp-json/wp/v2
VITE_API_TIMEOUT=15000
VITE_API_RETRIES=5
VITE_API_RETRY_DELAY=1000
VITE_DEBUG_ENABLED=false
```

## Verificación del Despliegue

### 1. Verificar Build

1. Ve a la pestaña "Deploys" en Netlify
2. Verifica que el build sea exitoso
3. Revisa los logs por errores

### 2. Verificar Funciones Serverless

1. Ve a la pestaña "Functions" en Netlify
2. Verifica que `wordpress-proxy` esté desplegada
3. Prueba la función manualmente

### 3. Verificar la Aplicación

1. Abre la URL de tu aplicación
2. Ve a la página de Works
3. Si hay errores, usa el componente de prueba

## Solución de Problemas Comunes

### Error: "Function not found"

**Causa**: La función serverless no se desplegó correctamente

**Solución**:
1. Verifica que el directorio `netlify/functions` existe
2. Asegúrate de que `netlify.toml` tenga la configuración correcta
3. Revisa los logs de build

### Error: "CORS policy"

**Causa**: Problemas de CORS con WordPress

**Solución**:
1. La función serverless maneja CORS automáticamente
2. Si persiste, configura CORS en WordPress

### Error: "Timeout"

**Causa**: WordPress tarda mucho en responder

**Solución**:
1. Aumenta `VITE_API_TIMEOUT` a 20000
2. Optimiza WordPress con plugins de caché

## Monitoreo

### 1. Logs de Netlify

- Ve a "Functions" > "wordpress-proxy" > "Logs"
- Revisa errores y tiempos de respuesta

### 2. Analytics

- Configura Google Analytics en Netlify
- Monitorea el rendimiento de la aplicación

### 3. Alertas

- Configura alertas para builds fallidos
- Monitorea el tiempo de respuesta de las funciones

## Optimización

### 1. Caché

- Configura headers de caché en `netlify.toml`
- Usa CDN de Netlify

### 2. Imágenes

- Optimiza imágenes antes del build
- Usa formatos modernos (WebP)

### 3. Código

- Minimiza el bundle de JavaScript
- Usa lazy loading para componentes

## Rollback

Si algo sale mal:

1. Ve a "Deploys" en Netlify
2. Encuentra un deploy exitoso anterior
3. Haz clic en "Publish deploy"

## Contacto

Si tienes problemas:

1. Revisa los logs de build
2. Usa el componente de prueba en la aplicación
3. Verifica la configuración de WordPress
4. Contacta soporte con los logs de error
