import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { initializeTheme } from './theme.js'

// Importar páginas
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Works from './pages/Works.vue'
import Contact from './pages/Contact.vue'
import WorkDetail from './pages/WorkDetail.vue'

// Inicializar tema
initializeTheme()

// Definición de rutas
const routes = [
  { path: '/', component: Home },
  { path: '/acerca', component: About },
  { path: '/trabajos', component: Works },
  { path: '/works', redirect: '/trabajos' },
  { path: '/contacto', component: Contact },
  { path: '/work/:id', component: WorkDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

createApp(App).use(router).mount('#app')
