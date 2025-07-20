<template>
  <div>
    <div v-for="(item, idx) in items" :key="idx">
      <button
        class="flex items-center w-full cursor-pointer py-4 select-none focus:outline-none focus-visible:ring focus-visible:ring-primary transition"
        :aria-expanded="openIndex === idx ? 'true' : 'false'"
        :aria-controls="'accordion-panel-' + idx"
        :id="'accordion-header-' + idx"
        role="button"
        tabindex="0"
        @click="toggle(idx)"
        @keydown.enter.prevent="toggle(idx)"
        @keydown.space.prevent="toggle(idx)"
        type="button"
      >
        <span class="text-lg font-bold w-12 text-right"
          :class="openIndex === idx ? 'color: var(--color-textoresalta)' : 'color: var(--color-textoresalta)'"
        >{{ item.number }}</span>
        <span 
          class="ml-4 flex-1 text-lg text-left"
          :class="openIndex === idx ? 'font-bold' : 'font-semibold'"
          :style="openIndex === idx ? 'color: var(--color-textoresalta)' : 'color: var(--color-textoresalta)'"
        >{{ item.title }}</span>
        <span class="text-2xl pr-4 transition-transform duration-200 flex items-center"
          :class="openIndex === idx ? 'font-bold text-black' : ''"
        >
          <i v-if="openIndex === idx" class="ri-subtract-line"></i>
          <i v-else class="ri-add-line"></i>
        </span>
      </button>
      <transition name="accordion-autoheight">
        <div
          v-show="openIndex === idx"
          :id="'accordion-panel-' + idx"
          class="pl-16 pr-8 pb-6 pt-0 mt-0 text-parrafo overflow-hidden"
          role="region"
          :aria-labelledby="'accordion-header-' + idx"
          ref="el => setPanelRef(idx, el)"
        >
          {{ item.content }}
        </div>
      </transition>
      <div class="border-b" style="border-color: var(--color-border);"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

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
const panelRefs = ref([])

function setPanelRef(idx, el) {
  if (el) panelRefs.value[idx] = el
}

function toggle(idx) {
  openIndex.value = openIndex.value === idx ? null : idx
  nextTick(() => {
    // Si se abre, enfoca el panel para accesibilidad
    if (openIndex.value === idx && panelRefs.value[idx]) {
      panelRefs.value[idx].focus && panelRefs.value[idx].focus()
    }
  })
}
</script>

<style scoped>
.accordion-autoheight-enter-active,
.accordion-autoheight-leave-active {
  transition: max-height 0.18s ease, opacity 0.18s ease;
}
.accordion-autoheight-enter-from,
.accordion-autoheight-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-autoheight-enter-to,
.accordion-autoheight-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style> 