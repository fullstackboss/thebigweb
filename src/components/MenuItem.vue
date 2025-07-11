<template>
  <li>
    <router-link 
      :to="routePath" 
      class="menu-btn"
      :class="{ 'menu-btn-active': isActive }"
      v-slot="{ isActive }"
      @click="$emit('click')"
    >
      <span :style="isActive ? activeStyle : inactiveStyle">{{ displayName }}</span>
    </router-link>
  </li>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  section: {
    type: String,
    required: true,
    validator: (value) => ['inicio', 'acerca', 'trabajos', 'contacto'].includes(value)
  }
})

// Definir eventos que puede emitir el componente
defineEmits(['click'])

const routePath = computed(() => {
  const routes = {
    inicio: '/',
    acerca: '/acerca',
    trabajos: '/trabajos',
    contacto: '/contacto'
  }
  return routes[props.section]
})

const displayName = computed(() => {
  const names = {
    inicio: 'Inicio',
    acerca: 'Acerca de',
    trabajos: 'Trabajos',
    contacto: 'Contacto'
  }
  return names[props.section]
})

const activeStyle = {
  border: '0px solid var(--color-border)',
  borderRadius: '9999px',
  padding: '7px 20px',
  color: 'var(--color-btnaccentext)',
  background: 'var(--color-btnaccent)',
  fontWeight: 300,
  transition: 'border 0.2s, color 0.2s, background 0.2s',
}

const inactiveStyle = {
  border: 'none',
  padding: '7px 20px',
  color: 'var(--color-primary)',
  background: 'transparent',
  fontWeight: 300,
  transition: 'color 0.2s',
}
</script>

<style scoped>
.menu-btn {
  display: inline-block;
  text-align: center;
  font-size: 15px;
  background: transparent;
}
</style> 