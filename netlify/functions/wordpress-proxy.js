// Función serverless de Netlify para hacer proxy de peticiones a WordPress
const WORDPRESS_API_URL = 'https://omartejada.com/contenido/wp-json/wp/v2'

exports.handler = async (event, context) => {
  // Habilitar CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  }

  // Manejar preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    }
  }

  try {
    // Obtener la ruta de la petición
    const path = event.path.replace('/.netlify/functions/wordpress-proxy', '')
    const queryString = event.queryStringParameters ? 
      '?' + Object.entries(event.queryStringParameters)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&') : ''

    // Construir la URL de WordPress
    const wordpressUrl = `${WORDPRESS_API_URL}${path}${queryString}`

    console.log(`Proxying request to: ${wordpressUrl}`)

    // Hacer la petición a WordPress
    const response = await fetch(wordpressUrl, {
      method: event.httpMethod,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(event.headers.authorization && {
          'Authorization': event.headers.authorization
        })
      },
      body: event.body ? event.body : undefined
    })

    // Obtener el contenido de la respuesta
    const data = await response.text()

    // Retornar la respuesta
    return {
      statusCode: response.status,
      headers: {
        ...headers,
        'Content-Type': response.headers.get('content-type') || 'application/json'
      },
      body: data
    }

  } catch (error) {
    console.error('Error in WordPress proxy:', error)

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Error interno del servidor',
        message: error.message
      })
    }
  }
}
