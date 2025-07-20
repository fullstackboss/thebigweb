<template>
  <div class="w-full mx-auto rounded-lg overflow-hidden border p-8" :style="{ borderColor: 'var(--color-border)' }">
    <div class="mb-8 flex justify-center lg:justify-start">
      <div :class="icon + ' text-5xl'" :style="{ color: 'var(--color-textoresalta)' }"></div>
    </div>
    <h2 class="tit-compo mb-2 text-center lg:text-left">{{ title }}</h2>
    <p class="text-parrafo text-center lg:text-left">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script> 