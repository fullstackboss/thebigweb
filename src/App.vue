<script setup>
import BigHead from './components/BigHead.vue'
import BigFoot from './components/BigFoot.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <BigHead />
    <main class="flex-1 lg:mt-16 mt-12">
      <div class="container mx-auto lg:p-3 p-4">
        <router-view />
      </div>
    </main>
    <BigFoot />
  </div>
</template>

<style scoped>
/* Estilos específicos del componente si son necesarios */
</style>
