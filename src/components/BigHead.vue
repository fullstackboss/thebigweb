<template>
  <header class="bg-white">
    <nav class="container mx-auto px-4 py-4 border-b border-black">
      <div class="flex justify-between items-center">
        <div class="text-xl font-bold text-black">
          TheBigWeb
        </div>
        
        <div class="flex items-center space-x-8">
          <ul class="flex space-x-8">
            <li>
              <router-link 
                to="/" 
                class="text-black hover:text-gray-600 transition-colors"
                active-class="font-semibold"
              >
                Inicio
              </router-link>
            </li>
            <li>
              <router-link 
                to="/acerca" 
                class="text-black hover:text-gray-600 transition-colors"
                active-class="font-semibold"
              >
                Acerca de
              </router-link>
            </li>
            <li>
              <router-link 
                to="/trabajos" 
                class="text-black hover:text-gray-600 transition-colors"
                active-class="font-semibold"
              >
                Trabajos
              </router-link>
            </li>
            <li>
              <router-link 
                to="/contacto" 
                class="text-black hover:text-gray-600 transition-colors"
                active-class="font-semibold"
              >
                Contacto
              </router-link>
            </li>
          </ul>
          
          <button 
            @click="toggleTheme"
            class="p-2 rounded-full transition hover:bg-gray-100"
          >
            <SunIcon v-if="currentTheme === 'light'" class="w-5 h-5 text-black" />
            <MoonIcon v-else class="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getCurrentTheme, setTheme } from '../theme.js'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

const currentTheme = ref('light')

const toggleTheme = () => {
  const newTheme = currentTheme.value === 'light' ? 'dark' : 'light'
  currentTheme.value = newTheme
  setTheme(newTheme)
}

onMounted(() => {
  currentTheme.value = getCurrentTheme()
})
</script>

<style scoped>
/* Estilos específicos del header si son necesarios */
</style> 