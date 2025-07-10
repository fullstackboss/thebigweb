<script setup>
import BigHead from './components/BigHead.vue'
import BigFoot from './components/BigFoot.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <BigHead />
    <main class="flex-1">
      <router-view />
    </main>
    <BigFoot />
  </div>
</template>

<style scoped>
/* Estilos específicos del componente si son necesarios */
</style>
