import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { initializeTheme } from './theme.js'

// Inicializar tema
initializeTheme()

// Definición de rutas inicial (solo Home por ahora)
const routes = [
  // Puedes agregar más rutas aquí
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
