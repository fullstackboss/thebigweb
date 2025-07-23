<template>
  <div class="group block w-full" aria-disabled="false" data-accordion-container data-accordion-mode="exclusive">
    <div v-for="(item, idx) in items" :key="idx">
      <div 
        class="flex items-center justify-between w-full py-5 text-left font-medium tit-compo cursor-pointer"
        :data-accordion-toggle="true"
        :data-accordion-target="`#customIconAccordion${idx}`"
        :aria-expanded="false">
        {{ item.title }}
        <svg data-accordion-icon-close xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <svg data-accordion-icon-open xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>
      </div>
      <div :id="`customIconAccordion${idx}`" class="overflow-hidden transition-all duration-300 border-b border-slate-200 dark:border-slate-700">
        <p class="mb-5 text-parrafo">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>