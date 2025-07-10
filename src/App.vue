<script setup>
import { ref, onMounted } from 'vue'
import { getCurrentTheme, setTheme } from './theme.js'
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

<template>
  <main class="min-h-screen w-full flex flex-col items-center justify-center bg-theme-surface">
    <button 
      @click="toggleTheme"
      class="font-semibold p-4 rounded-full transition hover:bg-theme-secondary shadow-lg"
    >
      <SunIcon v-if="currentTheme === 'light'" class="w-6 h-6" />
      <MoonIcon v-else class="w-6 h-6" />
    </button>
  </main>
</template>

<style scoped>
/* Estilos específicos del componente si son necesarios */
</style>
