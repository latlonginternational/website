<template>
  <div>
    <header class="main-header clearfix">
      <div class="main-header__top clearfix" :class="{ 'header-hidden': isTopHidden, 'header-visible': isTopVisible }">
        <div class="main-header__top-inner clearfix">
          <div class="main-header__top-left">
            <ul class="list-unstyled main-header__top-address">
              <li>
                <div class="icon">
                  <span class="icon-pin"></span>
                </div>
                <div class="text">
                  <p>{{ $i18n.__('contact.address') }}</p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <span class="icon-email"></span>
                </div>
                <div class="text">
                  <p><a :href="'mailto:' + $i18n.__('contact.email')">{{ $i18n.__('contact.email') }}</a></p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <span class="icon-phone"></span>
                </div>
                <div class="text">
                  <p><a :href="'tel:' + $i18n.__('contact.phone').replace(/\s+/g, '')">{{ $i18n.__('contact.phone') }}</a></p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <span class="icon-phone"></span>
                </div>
                <div class="text">
                  <p><a href="tel:+243993400082">+243 993 400 082</a></p>
                </div>
              </li>
            </ul>
          </div>
          <div class="main-header__top-right">
            <div class="main-header__top-right-social">
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-whatsapp"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      <nav class="main-menu clearfix" :class="{ 'scrolled': isScrolled }">
        <div class="main-menu-wrapper clearfix">
          <div class="main-menu-wrapper__left">
            <div class="main-menu-wrapper__logo">
              <a href="/"><img src="/assets/images/resources/logo-1.png" width="160px" alt="" /></a>

                             

            </div>

            
            <div class="main-menu-wrapper__main-menu">
              <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
              <ul class="main-menu__list mt-1">

                <!-- Sélecteur de langue -->
                <li class="language-menu-item  hidden lg:block">
                  <LanguageSelector />
                </li>

                <!-- Home -->
                <li>
                  <a href="/">{{ $i18n.__('navigation.home') }}</a>
                </li>
                <!-- À propos -->
                <li class="dropdown">
                  <a href="/about">{{ $i18n.__('navigation.about') }}</a>
                </li>

                <!-- Services -->
                <li>
                  <a href="/services">{{ $i18n.__('navigation.services.title') }}</a>
                  <ul>
                    <li><a href="/services/protection">{{ $i18n.__('navigation.services.protection') }}</a></li>
                    <li><a href="/services/technology">{{ $i18n.__('navigation.services.technology') }}</a></li>
                    <li><a href="/services/consultancy">{{ $i18n.__('navigation.services.consultancy') }}</a></li>
                    <li><a href="/services/trainings">{{ $i18n.__('navigation.services.trainings') }}</a></li>
                    <li>
                      <a href="/services/others-security-services">{{ $i18n.__('navigation.services.others') }}</a>
                    </li>
                  </ul>
                </li>
                <!-- Éthique -->
                <li class="dropdown">
                  <a href="/ethique">{{ $i18n.__('navigation.ethics.title') }}</a>
                  <ul style="width: 240px !important;">
                    <li><a href="/ethique/conseils">{{ $i18n.__('navigation.ethics.councils') }}</a></li>
                    <li><a href="/ethique/rse">{{ $i18n.__('navigation.ethics.csr') }}</a></li>
                    <li><a href="/ethique/termes-conditions">{{ $i18n.__('navigation.ethics.terms') }}</a></li>
                    <li><a href="/ethique/code-conduite">{{ $i18n.__('navigation.ethics.code') }}</a></li>
                    <li><a href="/ethique/icoca">{{ $i18n.__('navigation.ethics.icoca') }}</a></li>
                  </ul>
                </li>
                
              </ul>
            </div>
          </div>
          <div class="main-menu-wrapper__right">
            <div class="main-menu-wrapper__call">
              <div class="main-menu-wrapper__call-icon">
                <span class="icon-phone"></span>
              </div>
              <div class="main-menu-wrapper__call-number">
                <p>{{ $i18n.__('common.callUs') }}</p>
                <h5>
                  <a class="text-white hover:underline" :href="'tel:' + $i18n.__('contact.phone').replace(/\s+/g, '')">{{ $i18n.__('contact.phone') }}</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <div class="stricky-header stricked-menu main-menu" :class="{ 'scrolled': isScrolled }">
      <div class="sticky-header__content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useNuxtApp } from '#app'

const { $i18n } = useNuxtApp()

const lastScrollY = ref(0)
const isTopHidden = ref(false)
const isTopVisible = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  // Gérer l'état du scroll pour le fond du menu
  isScrolled.value = currentScrollY > 50
  
  // Masquer le header top lors du scroll vers le bas
  if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    isTopHidden.value = true
    isTopVisible.value = false
  }
  // Afficher le header top lors du scroll vers le haut
  else if (currentScrollY < lastScrollY.value) {
    isTopHidden.value = false
    isTopVisible.value = true
  }
  
  lastScrollY.value = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.main-header__top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
}

.main-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  background-color: transparent;
}

.main-menu.scrolled {
  background-color: rgba(3, 20, 48, 0.85);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

/* Déplacer le menu vers le bas quand le header top est visible */
.main-header__top:not(.header-hidden) + .main-menu {
  top: var(--header-top-height, 40px);
}

.header-hidden {
  transform: translateY(-100%);
}

.header-visible {
  transform: translateY(0);
}

.stricky-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
}

/* Ajuster le contenu principal pour compenser le header fixe */
:deep(body) {
  padding-top: var(--header-height, 120px);
}

/* Styles pour les écrans < 1260px */
@media (max-width: 1259px) {
  .main-header__top {
    display: none !important;
  }

  .main-menu {
    top: 0 !important;
  }

  .main-header__top:not(.header-hidden) + .main-menu {
    top: 0 !important;
  }

  /* Ajuster le padding du body pour les petits écrans */
  :deep(body) {
    padding-top: var(--header-height-mobile, 80px);
  }
}

.language-menu-item {
  padding-right: 1rem;
  display: flex;
  align-items: center;
}

.language-menu-item :deep(.language-selector) {
  margin: 0;
}

.language-menu-item :deep(.language-button) {
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.25rem 2rem 0.25rem 0.75rem;
  font-size: 0.875rem;
}


.language-menu-item :deep(.language-options) {
  margin-top: 0.5rem;
}

.language-menu-item :deep(.language-option) {
  padding: 0.375rem 2rem 0.375rem 0.75rem;
  font-size: 0.875rem;
}
</style>
