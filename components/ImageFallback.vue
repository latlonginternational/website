<template>
  <img
    :src="imageSrc"
    :alt="alt"
    @error="handleImageError"
    :class="className"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  src: string
  alt: string
  className?: string
}>()

const imageSrc = ref(props.src)
const defaultImage = '/assets/images/resources/logo-1.png'

const handleImageError = () => {
  imageSrc.value = defaultImage
}
</script> 