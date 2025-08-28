// Utilidades para manejar medios de WordPress
export const WORDPRESS_MEDIA_CONFIG = {
  API_BASE_URL: 'https://omartejada.com/contenido/wp-json/wp/v2',
  MEDIA_ENDPOINT: '/media'
}

// Función para obtener la URL de una imagen destacada
export const getFeaturedImageUrl = async (post) => {
  // Si ya tenemos la URL desde el embed, usarla
  if (post._embedded && 
      post._embedded['wp:featuredmedia'] && 
      post._embedded['wp:featuredmedia'][0]) {
    return post._embedded['wp:featuredmedia'][0].source_url
  }
  
  // Si tenemos un ID de media pero no el embed, hacer una llamada adicional
  if (post.featured_media && post.featured_media !== 0) {
    try {
      const mediaUrl = `${WORDPRESS_MEDIA_CONFIG.API_BASE_URL}${WORDPRESS_MEDIA_CONFIG.MEDIA_ENDPOINT}/${post.featured_media}`
      const response = await fetch(mediaUrl)
      
      if (response.ok) {
        const mediaData = await response.json()
        return mediaData.source_url
      }
    } catch (error) {
      console.error('Error obteniendo media:', error)
    }
  }
  
  return null
}

// Función para obtener múltiples imágenes destacadas en paralelo
export const getFeaturedImageUrls = async (posts) => {
  const postsWithImages = []
  
  for (const post of posts) {
    const imageUrl = await getFeaturedImageUrl(post)
    postsWithImages.push({
      ...post,
      featured_media_url: imageUrl
    })
  }
  
  return postsWithImages
}

// Función para verificar si un post tiene imagen destacada
export const hasFeaturedImage = (post) => {
  return !!(post._embedded?.wp_featuredmedia?.[0] || post.featured_media)
}

// Función para obtener información de debug de medios
export const getMediaDebugInfo = (post) => {
  return {
    postId: post.id,
    title: post.title?.rendered,
    featured_media: post.featured_media,
    has_embedded: !!post._embedded,
    embedded_media: post._embedded?.wp_featuredmedia,
    media_url: post._embedded?.wp_featuredmedia?.[0]?.source_url
  }
} 