// Configuración de WordPress
export const WORDPRESS_CONFIG = {
  // URL base de la API
  API_BASE_URL: 'https://omartejada.com/contenido/wp-json/wp/v2',
  
  // Endpoints
  ENDPOINTS: {
    POSTS: '/posts',
    CATEGORIES: '/categories',
    MEDIA: '/media'
  },
  
  // Parámetros por defecto
  DEFAULT_PARAMS: {
    PER_PAGE: 100,
    EMBED: '_embed'
  },
  
  // Mapeo de categorías por nombre (slug) - más flexible que por ID
  CATEGORIES: {
    DESIGNS: {
      slug: 'designs',
      label: 'Designs UX/UI'
    },
    MOTIONGRAPHICS: {
      slug: 'motiongraphics',
      label: 'Motiongraphics'
    },
    PROJECTS: {
      slug: 'projects',
      label: 'Projects'
    }
  }
}

// Función para obtener la URL completa de la API
export const getApiUrl = (endpoint, params = {}) => {
  const url = new URL(`${WORDPRESS_CONFIG.API_BASE_URL}${endpoint}`)
  
  // Agregar parámetros por defecto
  const defaultParams = {
    ...WORDPRESS_CONFIG.DEFAULT_PARAMS,
    ...params
  }
  
  Object.entries(defaultParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value)
    }
  })
  
  return url.toString()
}

// Función para obtener el nombre de la categoría basado en el slug
export const getCategoryName = (categorySlug) => {
  const category = Object.values(WORDPRESS_CONFIG.CATEGORIES).find(
    cat => cat.slug === categorySlug
  )
  
  if (!category) {
    console.warn(`Categoría no encontrada con slug: ${categorySlug}. Verifica la configuración en wordpress.js`)
    return 'projects' // Categoría por defecto
  }
  
  return category.slug
}

// Función para obtener la etiqueta de la categoría
export const getCategoryLabel = (categorySlug) => {
  const category = Object.values(WORDPRESS_CONFIG.CATEGORIES).find(
    cat => cat.slug === categorySlug
  )
  
  if (!category) {
    return 'Projects' // Etiqueta por defecto
  }
  
  return category.label
}

// Función para obtener la URL de la imagen destacada
export const getFeaturedMediaUrl = (post) => {
  console.log('🔍 Buscando imagen destacada para post:', post.id, post.title?.rendered)
  
  // Método 1: Desde _embedded (método preferido)
  if (post._embedded && 
      post._embedded['wp:featuredmedia'] && 
      post._embedded['wp:featuredmedia'][0]) {
    const mediaUrl = post._embedded['wp:featuredmedia'][0].source_url
    console.log('✅ Imagen encontrada desde _embedded:', mediaUrl)
    return mediaUrl
  }
  
  // Método 2: Desde featured_media si existe
  if (post.featured_media && post.featured_media !== 0) {
    console.log('📸 Post tiene featured_media ID:', post.featured_media)
    // Aquí podríamos hacer una llamada adicional para obtener la URL
    // Por ahora retornamos null para usar la imagen por defecto
    return null
  }
  
  // Método 3: Verificar si hay algún campo de imagen en el post
  if (post.featured_image_url) {
    console.log('✅ Imagen encontrada desde featured_image_url:', post.featured_image_url)
    return post.featured_image_url
  }
  
  console.log('❌ No se encontró imagen destacada para el post')
  return null
}

// Función para obtener el slug de la categoría desde el post
export const getPostCategorySlug = (post) => {
  // Primero intentar obtener desde el embed (método preferido)
  if (post._embedded && 
      post._embedded['wp:term'] && 
      post._embedded['wp:term'][0] && 
      post._embedded['wp:term'][0][0]) {
    console.log('Categoría obtenida desde embed:', post._embedded['wp:term'][0][0].slug)
    return post._embedded['wp:term'][0][0].slug
  }
  
  // Si no hay embed, usar los IDs de categoría y mapear a slugs
  if (post.categories && post.categories.length > 0) {
    // Mapeo de IDs a slugs según tu WordPress
    // CORREGIDO: Los IDs 1 y 2 estaban invertidos
    const categoryMap = {
      1: 'motiongraphics', // Primera categoría creada (ID 1 = motiongraphics)
      2: 'designs',        // Segunda categoría creada (ID 2 = designs)
      3: 'projects'        // Tercera categoría creada (ID 3 = projects)
    }
    
    const categoryId = post.categories[0] // Tomar la primera categoría
    const mappedSlug = categoryMap[categoryId]
    
    if (mappedSlug) {
      console.log(`Categoría mapeada desde ID ${categoryId} a slug: ${mappedSlug}`)
      return mappedSlug
    } else {
      console.warn(`Categoría no mapeada con ID: ${categoryId}. Ajusta el mapeo en wordpress.js`)
      return null
    }
  }
  
  console.warn('Post sin categorías:', post.id, post.title?.rendered)
  return null
} 