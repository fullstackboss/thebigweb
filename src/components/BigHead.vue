<template>
  <header style="background: var(--color-background); position: fixed; top: 0; left: 0; width: 100%; z-index: 50;">
    <nav class="container mx-auto px-4 py-4 border-b border-theme relative" style="border-color: var(--color-border); height: 64px; min-height: 64px;">
      <div class="flex justify-between items-center" style="height: 32px;">
        <div class="text-2xl font-bold text-theme-primary" style="color: var(--color-textoresalta);">
          TheBigWeb
        </div>
        <!-- Botón hamburguesa para tablet y móvil -->
        <div class="md:hidden flex items-center space-x-2 ">
          <button 
            @click="toggleTheme"
            class="p-2 rounded-full transition hover:bg-theme-hover"
            style="background: var(--color-suave); color: var(--color-primary);"
          >
            <SunIcon v-if="currentTheme === 'light'" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5" />
          </button>
          <button 
            @click="toggleMenu"
            class="p-2 rounded-lg transition hover:bg-theme-hover"
            style="background: var(--color-neutro); color: var(--color-primary);"
            aria-label="Toggle menu"
          >
            <Bars3Icon v-if="!isMenuOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </button>
        </div>
        <!-- Menú desktop (visible en md y superior) -->
        <div class="hidden md:flex items-center space-x-2">
          <ul class="flex gap-2 pr-6">
            <MenuItem section="inicio" />
            <MenuItem section="acerca" />
            <MenuItem section="trabajos" />
            <MenuItem section="contacto" />
          </ul>
          <button 
            @click="toggleTheme"
            class="p-2 rounded-full transition hover:bg-theme-hover"
            style="background: var(--color-suave); color: var(--color-primary);"
          >
            <SunIcon v-if="currentTheme === 'light'" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5" />
          </button>
          <input
            type="checkbox"
            class="relative inline-block h-6 w-10 appearance-none rounded-full cursor-pointer before:absolute before:left-0 before:top-0 before:inline-block before:h-full before:w-full before:rounded-full before:bg-slate-200 before:transition-colors before:duration-200 before:ease-in after:absolute after:left-0.5 after:top-2/4 after:h-5 after:w-5 after:-translate-y-2/4 after:rounded-full after:bg-white after:transition-transform after:duration-200 after:ease-in checked:before:bg-slate-800 checked:after:translate-x-[calc(100%-4px)] dark:after:bg-white"
            :checked="currentTheme === 'dark'"
            @change="toggleTheme"
            aria-label="Cambiar modo oscuro"
          />
        </div>
      </div>
      <!-- Menú móvil/tablet desplegable -->
      <Transition name="menu-mobile">
        <div 
          v-show="isMenuOpen" 
          class="md:hidden fixed z-50 border-b border-theme menu-mobile"
          style="background: var(--color-background); border-color: var(--color-border); top: 64px; left: 0; right: 0; height: calc(100vh - 64px);"
        >
          <ul class="flex flex-col items-center justify-center h-full" style="gap: 30px;">
            <MenuItem section="inicio" @click="closeMenu" />
            <MenuItem section="acerca" @click="closeMenu" />
            <MenuItem section="trabajos" @click="closeMenu" />
            <MenuItem section="contacto" @click="closeMenu" />
          </ul>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { getCurrentTheme, setTheme } from '../theme.js'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import MenuItem from './MenuItem.vue'

const currentTheme = ref(getCurrentTheme())
const isMenuOpen = ref(false)

const updateTheme = () => {
  currentTheme.value = getCurrentTheme()
}

const toggleTheme = () => {
  const newTheme = currentTheme.value === 'light' ? 'dark' : 'light'
  setTheme(newTheme)
  updateTheme()
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Cerrar menú al cambiar el tamaño de la ventana
const handleResize = () => {
  if (window.innerWidth >= 768) { // md breakpoint
    isMenuOpen.value = false
  }
}

onMounted(() => {
  updateTheme()
  window.addEventListener('storage', updateTheme)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('storage', updateTheme)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.menu-mobile-enter-active,
.menu-mobile-leave-active {
  transition: all 0.3s ease;
}
.menu-mobile-enter-from,
.menu-mobile-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.menu-mobile ul li {
  margin-bottom: 0.5rem;
}
.menu-mobile ul li:last-child {
  margin-bottom: 0;
}
</style> 