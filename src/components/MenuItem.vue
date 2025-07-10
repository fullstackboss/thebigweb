<template>
  <li>
    <router-link 
      :to="routePath" 
      class="menu-btn"
      active-class="menu-btn-active"
    >
      {{ displayName }}
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
</script>

<style scoped>
.menu-btn {
  display: inline-block;
  border-radius: 9999px;
  padding: 7px 20px;
  transition: background 0.2s, color 0.2s;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  background: var(--color-primary);
  color: var(--color-card);
}

.menu-btn:hover {
  background: var(--color-secondary);
}

.menu-btn-active {
  font-weight: 600;
}
</style> 