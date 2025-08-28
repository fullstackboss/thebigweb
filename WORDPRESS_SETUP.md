# Configuración de WordPress para el Portafolio

## Requisitos

Para que el portafolio funcione correctamente con WordPress, necesitas configurar las siguientes categorías en tu instalación de WordPress:

### 1. Crear las Categorías

En tu WordPress, ve a **Posts > Categories** y crea las siguientes categorías:

1. **Motiongraphics** (ID: 1)
   - Nombre: Motiongraphics
   - Slug: motiongraphics
   - Descripción: Proyectos de animación y motion graphics
   - **Maquetación**: Título → Imagen → Descripción

2. **Designs** (ID: 2)
   - Nombre: Designs UX/UI
   - Slug: designs
   - Descripción: Proyectos de diseño UX/UI
   - **Maquetación**: Imagen → Título → Descripción

3. **Projects** (ID: 3)
   - Nombre: Projects
   - Slug: projects
   - Descripción: Proyectos de desarrollo web y aplicaciones
   - **Maquetación**: Título → Descripción → Imagen

**IMPORTANTE**: Los IDs pueden variar en tu WordPress. Usa el botón "Verificar Categorías de WordPress" en la interfaz para ver los IDs reales.

**NOTA**: Cada categoría mantiene su propia maquetación consistente para todos los proyectos dentro de ella.

**⚠️ CORRECCIÓN APLICADA**: Los IDs 1 y 2 estaban invertidos. Ahora:
- ID 1 = Motiongraphics
- ID 2 = Designs UX/UI  
- ID 3 = Projects

### 1.1. Maquetación de Categorías

Cada categoría tiene una maquetación específica que se mantiene consistente:

#### **Designs UX/UI**
```
[Imagen] [Título] [Descripción]
```
- **Imagen**: Lado izquierdo (order-1)
- **Título**: Centro (order-2) 
- **Descripción**: Lado derecho (order-3)

#### **Motiongraphics**
```
[Título] [Imagen] [Descripción]
```
- **Título**: Lado izquierdo (order-1)
- **Imagen**: Centro (lg:order-2, order-1 en móvil)
- **Descripción**: Lado derecho (order-3)

#### **Projects**
```
[Título] [Descripción] [Imagen]
```
- **Título**: Lado izquierdo (order-1)
- **Descripción**: Centro (order-2)
- **Imagen**: Lado derecho (lg:order-3, order-1 en móvil)

### 2. Verificar IDs de Categorías

Para verificar los IDs de las categorías, visita:
```
https://omartejada.com/contenido/wp-json/wp/v2/categories
```

### 3. Configurar Posts

Para cada proyecto que quieras mostrar:

1. **Crear un nuevo Post**
2. **Asignar la categoría correspondiente** (Projects, Designs, o Motiongraphics)
3. **Establecer una imagen destacada** (Featured Image)
4. **Escribir el contenido** en el editor de WordPress
5. **El excerpt** se usará como descripción corta

### 4. Estructura del Post

Cada post debe tener:

- **Título**: Nombre del proyecto
- **Contenido**: Descripción detallada del proyecto (puede incluir HTML)
- **Excerpt**: Resumen corto del proyecto
- **Imagen destacada**: Thumbnail del proyecto
- **Categoría**: Una de las tres categorías principales

### 5. Personalizar Categorías

Si quieres usar diferentes nombres o IDs para las categorías, edita el archivo:
```
src/config/wordpress.js
```

Y actualiza la sección `CATEGORIES` y el mapeo de IDs:

```javascript
// Mapeo de categorías por nombre (slug)
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

// Mapeo de IDs a slugs (en getPostCategorySlug)
const categoryMap = {
  1: 'motiongraphics', // ID 1 = Motiongraphics
  2: 'designs',        // ID 2 = Designs UX/UI
  3: 'projects'        // ID 3 = Projects
}
```

**Para verificar los IDs reales**:
1. Usa el botón "Verificar Categorías de WordPress" en la interfaz
2. O visita: `https://omartejada.com/contenido/wp-json/wp/v2/categories`
3. Ajusta el mapeo en `src/config/wordpress.js` según los IDs reales

### 6. Verificar la API

Para verificar que la API funciona correctamente, visita:
```
https://omartejada.com/contenido/wp-json/wp/v2/posts?_embed
```

### 7. Solución de Problemas

#### Error 404 en posts
- Verifica que los posts estén publicados (no en borrador)
- Asegúrate de que la API REST esté habilitada en WordPress

#### Imágenes no se muestran
- Verifica que los posts tengan imágenes destacadas
- Asegúrate de que las imágenes estén públicas

#### Categorías no se filtran
- Verifica los IDs de las categorías en la configuración
- Asegúrate de que los posts tengan categorías asignadas

### 8. Ejemplo de Post

**Título**: Mi Proyecto de Diseño UX
**Categoría**: Designs
**Excerpt**: Este proyecto se enfocó en mejorar la experiencia del usuario...
**Contenido**: 
```html
<h3>Descripción del Proyecto</h3>
<p>Este proyecto se enfocó en...</p>
<h4>Proceso de Trabajo</h4>
<ul>
  <li>Investigación de usuarios</li>
  <li>Diseño de wireframes</li>
  <li>Pruebas de usabilidad</li>
</ul>
```

### 9. Notas Importantes

- Los posts se ordenan por fecha de publicación (más recientes primero)
- Solo se muestran posts publicados
- El contenido HTML se renderiza correctamente en el portafolio
- Las imágenes destacadas se muestran como thumbnails
- Los excerpts se muestran como descripciones cortas
- **Cada categoría mantiene su maquetación consistente** para todos los proyectos
- La maquetación se adapta automáticamente a dispositivos móviles 