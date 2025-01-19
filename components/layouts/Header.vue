<template>
  <div>
    <header class="main-header clearfix">
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
      <nav class="main-menu clearfix">
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
                <h5><a href="tel:+243810041500">+243 810 041 500</a></h5>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <div class="stricky-header stricked-menu main-menu">
      <div class="sticky-header__content"></div>
      <!-- /.sticky-header__content -->
    </div>
    <!-- /.stricky-header -->
  </div>
</template>
