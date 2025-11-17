<template>
  <div class="language-selector z-[9999] relative">
    <Listbox v-model="selectedLocale" @update:modelValue="switchLanguage">
      <div class="relative">
        <ListboxButton class="language-button bg-conult-base text-white">
          <span class="block truncate">{{ t(`common.language.${selectedLocale}`) }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-white" aria-hidden="true" />
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
          <ListboxOptions class="language-options absolute right-0 mt-2 w-full min-w-[100px] bg-white flex-col  shadow-lg z-[9999]">
            <ListboxOption
              v-for="locale in availableLocales"
              :key="locale.code"
              :value="locale.code"
              v-slot="{ selected, active }"
              as="template"
            >
              <div
                :class="[
                  active ? 'bg-conult-base text-white' : 'text-gray-900',
                  'language-option w-full'
                ]"
              >
                {{ locale.name }}
              </div>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { ChevronUpDownIcon } from '@heroicons/vue/20/solid'

type Locale = 'fr' | 'en'

const { locale, locales, t } = useI18n()
const localePath = useLocalePath()

const availableLocales = computed(() => {
	return [
		{ code: 'en', name: 'English' },
		{ code: 'fr', name: 'Français' }
	]
})

const selectedLocale = ref<Locale>(locale.value as Locale)

const defaultLocale: Locale = 'fr'

// Initialiser le cookie au chargement si nécessaire
onMounted(() => {
	const cookie = useCookie<'fr' | 'en'>('i18n_redirected', {
		maxAge: 365 * 24 * 60 * 60,
		path: '/',
		sameSite: 'lax'
	})

	if (!cookie.value) {
		cookie.value = defaultLocale
	}

	// Synchroniser la locale avec le cookie
	const { locale } = useI18n()
	locale.value = cookie.value
	selectedLocale.value = cookie.value
})

const switchLanguage = async (newLocale: Locale) => {
	try {
		console.log('Changement de langue vers:', newLocale)
		
		// 1. Mettre à jour le cookie
		const cookie = useCookie<'fr' | 'en'>('i18n_redirected', {
			maxAge: 365 * 24 * 60 * 60,
			path: '/',
			sameSite: 'lax'
		})
		cookie.value = newLocale
		console.log('Cookie défini:', cookie.value)

		// 2. Attendre que le cookie soit mis à jour
		await nextTick()

		// 3. Recharger la page pour appliquer la nouvelle langue
		window.location.href = window.location.href
	} catch (error) {
		console.error('Erreur lors du changement de langue:', error)
	}
}

// Synchroniser la locale sélectionnée avec la locale active
watch(() => locale.value, (newLocale) => {
	selectedLocale.value = newLocale as Locale
}, { immediate: true })
</script>

<style scoped>
.language-selector {
  position: relative;
  display: inline-block;
  z-index: 9999;
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

.language-option {
  position: relative;
  cursor: pointer;
  user-select: none;
  padding: 0.5rem 0.75rem;
  transition: all 150ms ease-in-out;
  font-size: 0.875rem;
  border-bottom: 1px solid #f3f4f6;
}

/* Animations */
.transition {
  @apply transition-all duration-200 ease-in-out;
}

.transform {
  @apply transform-gpu;
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

/* Responsive */
@media (max-width: 640px) {
  .language-button {
    @apply px-3 py-1.5;
  }

  .language-options {
    @apply min-w-[120px];
  }

  .language-option {
    @apply py-1.5 px-3;
  }
}
</style> 