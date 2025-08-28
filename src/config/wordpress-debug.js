// Archivo de debug para WordPress - Omar Tejada
// Este archivo ayuda a diagnosticar problemas con las categorías

export const DEBUG_CONFIG = {
  // URLs de debug
  DEBUG_URLS: {
    POSTS: 'https://omartejada.com/contenido/wp-json/wp/v2/posts?_embed',
    CATEGORIES: 'https://omartejada.com/contenido/wp-json/wp/v2/categories',
    POSTS_WITH_CATEGORIES: 'https://omartejada.com/contenido/wp-json/wp/v2/posts?categories=1,2,3&_embed'
  },
  
  // Mapeo esperado según la imagen de WordPress
  // CORREGIDO: Los IDs 1 y 2 estaban invertidos
  EXPECTED_CATEGORIES: {
    'motiongraphics': {
      id: 1,
      name: 'motiongraphics',
      slug: 'motiongraphics',
      count: 1
    },
    'designs': {
      id: 2, 
      name: 'designs',
      slug: 'designs',
      count: 1
    },
    'projects': {
      id: 3,
      name: 'Projects', 
      slug: 'projects',
      count: 2
    }
  }
}

// Función para verificar la configuración de WordPress
export const debugWordPressSetup = async () => {
  console.log('🔍 Iniciando debug de WordPress...')
  
  try {
    // 1. Verificar categorías
    console.log('📂 Verificando categorías...')
    const categoriesResponse = await fetch(DEBUG_CONFIG.DEBUG_URLS.CATEGORIES)
    const categories = await categoriesResponse.json()
    console.log('Categorías encontradas:', categories)
    
    // 2. Verificar posts
    console.log('📝 Verificando posts...')
    const postsResponse = await fetch(DEBUG_CONFIG.DEBUG_URLS.POSTS)
    const posts = await postsResponse.json()
    console.log('Posts encontrados:', posts.length)
    
    // 3. Analizar cada post
    posts.forEach((post, index) => {
      console.log(`\n📄 Post ${index + 1}:`, {
        id: post.id,
        title: post.title.rendered,
        categories: post.categories,
        has_embedded: !!post._embedded,
        embedded_terms: post._embedded?.wp_term,
        featured_media: post.featured_media
      })
    })
    
    // 4. Verificar posts con categorías específicas
    console.log('\n🎯 Verificando posts por categoría...')
    Object.entries(DEBUG_CONFIG.EXPECTED_CATEGORIES).forEach(async ([slug, expected]) => {
      const categoryPosts = posts.filter(post => 
        post.categories && post.categories.includes(expected.id)
      )
      console.log(`Categoría "${slug}": ${categoryPosts.length} posts`)
    })
    
    return { success: true, categories, posts }
    
  } catch (error) {
    console.error('❌ Error en debug:', error)
    return { success: false, error }
  }
}

// Función para verificar si un post tiene la categoría correcta
export const verifyPostCategory = (post, expectedSlug) => {
  const hasEmbeddedCategory = post._embedded?.wp_term?.[0]?.[0]?.slug === expectedSlug
  const hasMappedCategory = post.categories && post.categories.some(id => {
    // CORREGIDO: Los IDs 1 y 2 estaban invertidos
    const categoryMap = { 1: 'motiongraphics', 2: 'designs', 3: 'projects' }
    return categoryMap[id] === expectedSlug
  })
  
  return {
    postId: post.id,
    title: post.title.rendered,
    expectedSlug,
    hasEmbeddedCategory,
    hasMappedCategory,
    categories: post.categories,
    embeddedSlug: post._embedded?.wp_term?.[0]?.[0]?.slug
  }
} 