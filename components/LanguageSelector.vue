<template>
  <div class="language-selector">
    <Listbox v-model="selectedLocale" @update:modelValue="handleLocaleChange">
      <div class="relative">
        <ListboxButton
          class="language-button bg-conult-base text-white"
        >
          <span class="block truncate">{{ $i18n.__(`common.language.${selectedLocale}`) }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon 
              class="h-5 w-5 text-white"
              aria-hidden="true" 
            />
          </span>
        </ListboxButton>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <ListboxOptions
            class="language-options w-full"
          >
            <div class="language-list flex flex-col justify-center items-center w-full">
              <ListboxOption
                v-for="locale in locales"
                :key="locale"
                :value="locale"
                v-slot="{ selected, active }"
                as="template"
              >
                <li
                  :class="[
                    active ? 'bg-conult-base text-white' : 'text-gray-900',
                    'language-option'
                  ]"
                >
                  {{ $i18n.__(`common.language.${locale}`) }}
                </li>
              </ListboxOption>
            </div>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { useNuxtApp } from '#app'
import { useCookie } from '#app'

const { $i18n } = useNuxtApp()
const locales = ['fr', 'en'] as const
const localeCookie = useCookie('preferred-locale', {
  maxAge: 365 * 24 * 60 * 60, // 1 an
  path: '/',
  sameSite: 'strict'
})
const selectedLocale = ref(localeCookie.value || $i18n.getLocale())

const handleLocaleChange = async (newLocale: typeof locales[number]) => {
  // Mettre à jour le cookie immédiatement
  localeCookie.value = newLocale
  
  // Mettre à jour la locale
  await $i18n.setLocale(newLocale)
  
  // Recharger la page pour appliquer les changements
  window.location.reload()
}

// Restaurer la langue préférée au chargement
onMounted(() => {
  if (localeCookie.value && locales.includes(localeCookie.value as typeof locales[number])) {
    selectedLocale.value = localeCookie.value as typeof locales[number]
    $i18n.setLocale(localeCookie.value)
  }
})
</script>

<style scoped>
.language-selector {
  position: relative;
  display: inline-block;
}

.language-button {
  position: relative;
  width: 100%;
  min-width: 100px;
  cursor: pointer;
  padding: 0.25rem 2rem 0.25rem 0.75rem;
  text-align: left;
  font-size: 0.875rem;
  transition: all 150ms ease-in-out;
  border: none;
  outline: none;
}


.language-button:focus {
  outline: none;
}

.language-options {
  position: absolute;
  right: 0;
  z-index: 9999;
  margin-top: 0.5rem;
  width: 100%;
  min-width: 100px;
  transform-origin: top right;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.language-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.language-option {
  position: relative;
  cursor: pointer;
  user-select: none;
  padding: 0.5rem 0.75rem;
  transition: all 150ms ease-in-out;
  font-size: 0.875rem;
  border-bottom: 1px solid #f3f4f6;
}

.language-option:last-child {
  border-bottom: none;
}


/* Animations */
.transition {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.duration-100 {
  transition-duration: 100ms;
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.transform {
  transform: translateZ(0);
}

.scale-95 {
  transform: scale(0.95);
}

.scale-100 {
  transform: scale(1);
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}
</style> 