<template>
  <div class="col-xl-4 col-lg-5" ref="sidebarContainer">
    <div v-if="isSidebarFixed && !isMobile" :style="{ height: `${sidebarHeight}px` }"></div>
    <div 
      class="service-details__sidebar" 
      :class="{ 'fixed': isSidebarFixed && !isMobile, 'bottom': isSidebarBottom && !isMobile }" 
      :style="sidebarStyle"
      ref="sidebarElement"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

const props = defineProps({
  serviceSection: {
    type: Object,
    required: true
  }
})

const sidebarContainer = ref(null)
const sidebarElement = ref(null)
const isSidebarFixed = ref(false)
const isSidebarBottom = ref(false)
const isScrollingUp = ref(false)
const lastScrollY = ref(0)
const scrollThreshold = 5
const sectionOffset = ref(0)
const sidebarHeight = ref(0)
const sectionBottom = ref(0)
const sidebarWidth = ref(0)
const sidebarLeft = ref(0)
const originalStyles = ref(null)
const isMobile = ref(false)

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 1100
}

const sidebarStyle = computed(() => {
  if (isSidebarFixed.value && !isMobile.value) {
    return {
      position: 'fixed',
      top: '150px',
      left: `${sidebarLeft.value}px`,
      width: `${sidebarWidth.value}px`,
      marginTop: isScrollingUp.value ? '0px' : '90px',
      ...originalStyles.value
    }
  }
  return originalStyles.value || {}
})

const captureOriginalStyles = () => {
  if (sidebarElement.value) {
    const computedStyle = window.getComputedStyle(sidebarElement.value)
    originalStyles.value = {
      padding: computedStyle.padding,
      margin: computedStyle.margin,
      border: computedStyle.border,
      boxShadow: computedStyle.boxShadow,
      backgroundColor: computedStyle.backgroundColor
    }
  }
}

const updateDimensions = () => {
  if (sidebarElement.value && props.serviceSection && sidebarContainer.value) {
    const rect = sidebarElement.value.getBoundingClientRect()
    sidebarHeight.value = rect.height
    sidebarWidth.value = rect.width
    sidebarLeft.value = sidebarContainer.value.getBoundingClientRect().left
    sectionOffset.value = props.serviceSection.offsetTop
    sectionBottom.value = props.serviceSection.offsetTop + props.serviceSection.offsetHeight

    if (!originalStyles.value) {
      captureOriginalStyles()
    }
  }
}

const handleScroll = () => {
  if (!sidebarElement.value || !props.serviceSection || isMobile.value) return

  const scrollPosition = window.scrollY
  const headerHeight = 100
  const sectionRect = props.serviceSection.getBoundingClientRect()

  const scrollDifference = lastScrollY.value - scrollPosition
  if (Math.abs(scrollDifference) > scrollThreshold) {
    isScrollingUp.value = scrollDifference > 0
    lastScrollY.value = scrollPosition
  }

  const topLimit = sectionOffset.value - headerHeight
  const bottomLimit = sectionBottom.value - sidebarHeight.value - headerHeight

  if (scrollPosition >= topLimit && scrollPosition <= bottomLimit) {
    isSidebarFixed.value = true
    isSidebarBottom.value = false
  } else if (scrollPosition > bottomLimit) {
    isSidebarFixed.value = false
    isSidebarBottom.value = true
  } else {
    isSidebarFixed.value = false
    isSidebarBottom.value = false
  }
}

watch(isScrollingUp, (newValue) => {
  console.log('Direction du défilement changée:', newValue ? 'vers le haut' : 'vers le bas')
})

onMounted(() => {
  setTimeout(() => {
    checkScreenSize()
    updateDimensions()
    captureOriginalStyles()
    lastScrollY.value = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', () => {
      checkScreenSize()
      updateDimensions()
    })
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateDimensions)
})
</script>

<style scoped>
.service-details__sidebar {
  background: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
}

.service-details__sidebar.fixed {
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  z-index: 100;
  transition: margin-top 0.3s ease;
}

.service-details__sidebar.bottom {
  position: absolute;
  bottom: 0;
  left: 20px;
  right: 20px;
}

/* Style pour le défilement fluide */
.service-details__sidebar::-webkit-scrollbar {
  width: 6px;
}

.service-details__sidebar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.service-details__sidebar::-webkit-scrollbar-thumb {
  background: var(--conult-base);
  border-radius: 3px;
}

.service-details__sidebar::-webkit-scrollbar-thumb:hover {
  background: var(--conult-black);
}

@media (max-width: 1100px) {
  .service-details__sidebar {
    position: static !important;
    margin-top: 0 !important;
    width: 100% !important;
    left: 0 !important;
  }
  
  .service-details__sidebar.fixed {
    position: static !important;
    max-height: none;
    overflow-y: visible;
  }
}
</style> 