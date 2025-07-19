<template>
  <a 
    :href="url" 
    :class="buttonClasses"
    :style="buttonStyles"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <span class="flex items-center gap-2">
      <slot>{{ text }}</slot>
      <component 
        :is="iconComponent" 
        class="w-4 h-4"
      />
    </span>
  </a>
</template>

<script setup>
import { computed, ref } from 'vue'
import { 
  ArrowUpRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon
} from '@heroicons/vue/24/outline'

const props = defineProps({
  text: {
    type: String,
    default: 'Botón'
  },
  url: {
    type: String,
    default: '#'
  },
  rounded: {
    type: String,
    default: 'full' // 'none', 'sm', 'md', 'lg', 'full'
  },
  backgroundColor: {
    type: String,
    default: 'var(--color-oscuro)'
  },
  backgroundColorHover: {
    type: String,
    default: 'var(--color-medio)'
  },
  textColor: {
    type: String,
    default: 'var(--color-primary)'
  },
  textColorHover: {
    type: String,
    default: 'var(--color-medio)'
  },
  border: {
    type: String,
    default: 'none'
  },
  minWidth: {
    type: String,
    default: 'auto'
  },
  icon: {
    type: String,
    default: 'ArrowUpRightIcon'
  }
})

const isHovered = ref(false)

const buttonClasses = computed(() => {
  const roundedClasses = {
    'none': 'rounded-none',
    'sm': 'rounded-sm',
    'md': 'rounded-md',
    'lg': 'rounded-lg',
    'full': 'rounded-full'
  }
  
  return [
    'inline-flex items-center justify-center px-8 py-3 text-lg font-normal transition-all duration-200 focus:outline-none',
    roundedClasses[props.rounded] || 'rounded-full'
  ].join(' ')
})

const buttonStyles = computed(() => ({
  backgroundColor: isHovered.value ? props.backgroundColorHover : props.backgroundColor,
  border: props.border,
  minWidth: props.minWidth,
  color: isHovered.value ? props.textColorHover : props.textColor
}))

const iconComponent = computed(() => {
  const iconMap = {
    'ArrowUpRightIcon': ArrowUpRightIcon,
    'EnvelopeIcon': EnvelopeIcon,
    'PhoneIcon': PhoneIcon,
    'ChatBubbleLeftRightIcon': ChatBubbleLeftRightIcon,
    'UserIcon': UserIcon,
    'HomeIcon': HomeIcon,
    'InformationCircleIcon': InformationCircleIcon,
    'BriefcaseIcon': BriefcaseIcon
  }
  
  return iconMap[props.icon] || ArrowUpRightIcon
})
</script> 