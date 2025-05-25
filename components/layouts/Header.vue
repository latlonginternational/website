<template>
  <div>
    <header class="main-header clearfix" :class="{ 'header-hidden': isHeaderHidden, 'header-visible': isHeaderVisible }">
      <div class="main-header__top clearfix">
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
              <ul class="main-menu__list">
                <!-- Home -->
                <!-- class="dropdown current" -->
                <li>
                  <a href="/">Accueil</a>
                </li>
                <!-- À propos -->
                <li class="dropdown">
                  <a href="/about">À propos</a>
                  <ul>
                    <li><a href="#deta">A propos de nous</a></li>

                    <li class="dropdown">
                      <a href="#">Ressources</a>
                      <ul>
                        <li><a href="#">Guidelines</a></li>
                        <li><a href="#">Rapports</a></li>
                        <li><a href="#">Présentations</a></li>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a href="#">Images et Autres</a>
                      <ul>
                        <li><a href="#">Galerie</a></li>
                        <li><a href="#">Infographies</a></li>
                        <li><a href="#">Vidéos</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Partenaires</a></li>
                    <li><a href="#">FAQ</a></li>
                  </ul>
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
                <!-- Blog -->
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <!-- Appels d'offres -->
                <li>
                  <a href="#">Appels d'offres</a>
                </li>
                <!-- Contact -->
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="main-menu-wrapper__right">
            <div class="main-menu-wrapper__search-cat">
              <a
                href="#"
                class="main-menu-wrapper__search search-toggler icon-magnifying-glass"
              ></a>
            </div>
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

    <div class="stricky-header stricked-menu main-menu" :class="{ 'header-hidden': isHeaderHidden, 'header-visible': isHeaderVisible }">
      <div class="sticky-header__content"></div>
      <!-- /.sticky-header__content -->
    </div>
    <!-- /.stricky-header -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      lastScrollY: 0,
      isHeaderHidden: false,
      isHeaderVisible: false,
      scrollTimeout: null as number | null,
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
      
      // Masquer le header lors du scroll vers le bas
      if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
        this.isHeaderHidden = true
        this.isHeaderVisible = false
      }
      // Afficher le header lors du scroll vers le haut
      else if (currentScrollY < this.lastScrollY) {
        this.isHeaderHidden = false
        this.isHeaderVisible = true
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
  transition: transform 0.3s ease-in-out;
}

.main-menu {
  transition: all 0.3s ease-in-out;
  background-color: transparent;
}

.main-menu.scrolled {
  background-color: rgba(3, 20, 48, 0.7);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.header-hidden {
  transform: translateY(-100%);
}

.header-visible {
  transform: translateY(0);
}

.stricky-header {
  transition: transform 0.3s ease-in-out;
}

/* Ajuster le contenu principal pour compenser le header fixe */
:deep(body) {
  padding-top: var(--header-height, 120px);
}
</style>
