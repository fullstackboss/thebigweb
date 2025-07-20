<template>
  <div>
    <div v-for="(item, idx) in items" :key="idx">
      <div
        class="flex items-center cursor-pointer py-4 select-none"
        @click="toggle(idx)"
      >
        <span class="text-lg font-light w-12 text-right">{{ item.number }}</span>
        <span class="ml-4 flex-1 text-lg">{{ item.title }}</span>
        <span class="text-2xl pr-4 transition-transform duration-200">
          {{ openIndex === idx ? '-' : '+' }}
        </span>
      </div>
      <transition name="accordion">
        <div v-if="openIndex === idx" class="pl-16 pr-4 pb-4 text-parrafo text-base">
          {{ item.content }}
        </div>
      </transition>
      <div class="border-b" style="border-color: var(--color-border);"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = [
  {
    number: '01.',
    title: 'Experiencia de Usuario',
    content: 'Diseño interfaces intuitivas y atractivas, centradas en el usuario para mejorar la experiencia digital.'
  },
  {
    number: '02.',
    title: 'Desarrollo Web',
    content: 'Desarrollo sitios web modernos, rápidos y responsivos, adaptados a las necesidades de tu negocio.'
  },
  {
    number: '03.',
    title: 'MotionGraphics',
    content: 'Animaciones y motion graphics para destacar tu marca y captar la atención de tus usuarios.'
  },
  {
    number: '04.',
    title: 'Aplicaciones Móviles',
    content: 'Desarrollo de aplicaciones móviles funcionales y atractivas para iOS y Android.'
  }
]

const openIndex = ref(null)

function toggle(idx) {
  openIndex.value = openIndex.value === idx ? null : idx
}
</script>

<style scoped>

.accordion-enter-active, .accordion-leave-active {
  transition: max-height 0.18s ease, opacity 0.18s ease;
}
.accordion-enter-from, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.accordion-enter-to, .accordion-leave-from {
  max-height: 200px;
  opacity: 1;
  overflow: hidden;
}
</style> 