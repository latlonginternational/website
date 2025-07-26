<template>
  <div>
    <header class="main-header clearfix">
      <div
        class="main-header__top clearfix"
        :class="{
          'header-hidden': isTopHidden,
          'header-visible': isTopVisible,
        }"
      >
        <div class="main-header__top-inner clearfix">
          <div class="main-header__top-left -mx-4">
            <ul class="list-unstyled main-header__top-address">
              <li>
                <div class="icon">
                  <span class="icon-pin"></span>
                </div>
                <div class="text">
                  <p>N° 325 Boulevard Kanyamuhanga, Goma, RDC</p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <span class="icon-email"></span>
                </div>
                <div class="text">
                  <p>
                    <a href="mailto:info@latlongcongo.com"
                      >info@latlongcongo.com</a
                    >
                  </p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <span class="icon-phone"></span>
                </div>
                <div class="text">
                  <p><a href="tel:+243810041500">+243 810 041 500</a></p>
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/LatlongInternational/"
                aria-label="Facebook"
                class="fab fa-facebook-square"
              ></a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/243993400082"
                aria-label="WhatsApp"
                ><i class="fab fa-whatsapp"></i
              ></a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/latlong-international/"
                aria-label="LinkedIn"
                ><i class="fab fa-linkedin"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <nav class="main-menu clearfix -mx-4" :class="{ scrolled: isScrolled }">
        <div class="main-menu-wrapper clearfix">
          <div class="main-menu-wrapper__left items-center">
            <div class="main-menu-wrapper__logo">
              <a href="/"
                ><img
                  src="/assets/images/resources/logo-1.png"
                  class="w-[140px] sm:w-[160px]"
                  alt=""
              /></a>
            </div>

            <div class="flex justify-between items-center pt-0.5 lg:pl-0 pl-4">
              <div class="language-menu-item hidden lg:block">
                <LanguageSelector />
              </div>

              <div class="main-menu-wrapper__main-menu -mt-1 lg:pl-6">
                <a href="#" class="mobile-nav__toggler mt-1.5"
                  ><i class="fa fa-bars"></i
                ></a>
                <ul class="main-menu__list mt-1">
                  <!-- Sélecteur de langue -->

                  <!-- Home -->
                  <li>
                    <a href="/">{{ t("navigation.home") }}</a>
                  </li>
                  <!-- À propos -->
                  <li>
                    <a href="/about">{{ t("navigation.about") }}</a>
                  </li>

                  <!-- Services -->
                  <li class="dropdown">
                    <a href="/services">{{ t("navigation.services.title") }}</a>
                    <ul>
                      <li>
                        <a href="/services/protection">{{
                          t("navigation.services.protection")
                        }}</a>
                      </li>
                      <li>
                        <a href="/services/technology">{{
                          t("navigation.services.technology")
                        }}</a>
                      </li>
                      <li>
                        <a href="/services/consultancy">{{
                          t("navigation.services.consultancy")
                        }}</a>
                      </li>
                      <li>
                        <a href="/services/trainings">{{
                          t("navigation.services.trainings")
                        }}</a>
                      </li>
                      <li>
                        <a href="/services/others-security-services">{{
                          t("navigation.services.others")
                        }}</a>
                      </li>
                    </ul>
                  </li>
                  <!-- Éthique -->
                  <li class="dropdown">
                    <a href="/ethique">{{ t("navigation.ethics.title") }}</a>
                    <ul style="width: 240px !important">
                      <li>
                        <a href="/ethique/conseils">{{
                          t("navigation.ethics.councils")
                        }}</a>
                      </li>
                      <li>
                        <a href="/ethique/rse">{{
                          t("navigation.ethics.csr")
                        }}</a>
                      </li>
                      <li>
                        <a href="/ethique/termes-conditions">{{
                          t("navigation.ethics.terms")
                        }}</a>
                      </li>
                      <li>
                        <a href="/ethique/code-conduite">{{
                          t("navigation.ethics.code")
                        }}</a>
                      </li>
                      <li>
                        <a href="/ethique/icoca">{{
                          t("navigation.ethics.icoca")
                        }}</a>
                      </li>
                    </ul>
                  </li>

                  <!-- Contacts -->
                  <li>
                    <a href="/contact">Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="main-menu-wrapper__right">
            <div class="main-menu-wrapper__call">
              <a href="/contact" class="main-menu-wrapper__call-icon">
                <span class="icon-phone"></span>
              </a>
              <div class="main-menu-wrapper__call-number">
                <p>{{ t("common.callUs") }}</p>
                <h5>
                  <a
                    class="text-white hover:underline items-center flex space-x-2"
                    href="/contact"
                  >
                    <span>
                      {{ t("navigation.contact") }}
                    </span>

                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5 text-gray-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <div
      class="stricky-header stricked-menu main-menu"
      :class="{ scrolled: isScrolled }"
    >
      <div class="sticky-header__content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const lastScrollY = ref(0);
const isTopHidden = ref(false);
const isTopVisible = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // Gérer l'état du scroll pour le fond du menu
  isScrolled.value = currentScrollY > 50;

  // Masquer le header top lors du scroll vers le bas
  if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    isTopHidden.value = true;
    isTopVisible.value = false;
  }
  // Afficher le header top lors du scroll vers le haut
  else if (currentScrollY < lastScrollY.value) {
    isTopHidden.value = false;
    isTopVisible.value = true;
  }

  lastScrollY.value = currentScrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
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
