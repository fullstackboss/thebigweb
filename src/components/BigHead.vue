<template>
  <header class="bg-theme-card">
    <nav class="container mx-auto px-4 py-4 border-b border-theme">
      <div class="flex justify-between items-center">
        <div class="text-xl font-bold text-theme-primary">
          TheBigWeb
        </div>
        
        <div class="flex items-center space-x-8">
          <ul class="flex gap-3">
            <MenuItem section="inicio" />
            <MenuItem section="acerca" />
            <MenuItem section="trabajos" />
            <MenuItem section="contacto" />
          </ul>
          
          <button 
            @click="toggleTheme"
            class="p-2 rounded-full transition hover:bg-theme-hover"
            style="background: var(--color-card); color: var(--color-primary);"
          >
            <SunIcon v-if="currentTheme === 'light'" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5" />
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
import MenuItem from './MenuItem.vue'

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