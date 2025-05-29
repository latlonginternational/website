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
                  <p>325 Blvd Kanyamuhanga, Q. des Volcans, Goma</p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <span class="icon-email"></span>
                </div>
                <div class="text">
                  <p><a href="mailto:info@latlongcongo.com">info@latlongcongo.com</a></p>
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
              <a href="/"
                ><img src="/assets/images/resources/logo-1.png" width="160px" alt=""
              /></a>
            </div>
            <div class="main-menu-wrapper__main-menu">
              <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
              <ul class="main-menu__list mt-1">
                <!-- Home -->
                <li>
                  <a href="/">Accueil</a>
                </li>
                <!-- À propos -->
                <li class="dropdown">
                  <a href="/about">À propos</a>
                </li>

                <!-- Services -->
                <li>
                  <a href="/services">Services</a>
                  <ul>
                    <li><a href="/services/protection">Protection</a></li>
                    <li><a href="/services/technology">Technologie</a></li>
                    <li><a href="/services/consultancy">Consultance</a></li>
                    <li><a href="/services/trainings">Formations</a></li>
                    <li>
                      <a href="/services/others-security-services">Autres services</a>
                    </li>
                  </ul>
                </li>
                <!-- Éthique -->
                <li class="dropdown">
                  <a href="/ethique">Éthique</a>
                  <ul style="width: 240px !important;">
                    <li><a href="/ethique/conseils">Conseils</a></li>
                    <li><a href="/ethique/rse">Responsabilité sociétale</a></li>
                    <li><a href="/ethique/termes-conditions">Termes et conditions</a></li>
                    <li><a href="/ethique/code-conduite">Code de conduite</a></li>
                    <li><a href="/ethique/icoca">ICoCA</a></li>
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
                <p>Appelez-nous</p>
                <h5>
                  <a class="text-white hover:underline" href="tel:+243810041500">Contacts</a>
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

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      lastScrollY: 0,
      isTopHidden: false,
      isTopVisible: false,
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY
      
      // Gérer l'état du scroll pour le fond du menu
      this.isScrolled = currentScrollY > 50
      
      // Masquer le header top lors du scroll vers le bas
      if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
        this.isTopHidden = true
        this.isTopVisible = false
      }
      // Afficher le header top lors du scroll vers le haut
      else if (currentScrollY < this.lastScrollY) {
        this.isTopHidden = false
        this.isTopVisible = true
      }
      
      this.lastScrollY = currentScrollY
    }
  }
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
</style>
