<template>
  <div class="flex flex-col items-center">
    <div
      class="w-20 lg:w-24 h-20 lg:h-24 border-2 border-gray-300 rounded-md mb-2 bg-cover bg-center"
      :style="{ backgroundImage: `url(${resolvedFoto})` }"
    ></div>
    <p class="text-center text-sm">{{ nombre }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  nombre: String,
  foto: String
})

const resolvedFoto = computed(() => {
  try {
    return new URL(props.foto, import.meta.url).href
  } catch {
    return props.foto
  }
})
</script> 