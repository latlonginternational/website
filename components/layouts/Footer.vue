<template>
  <footer class="site-footer">
    <div class="container">
      <div class="site-footer__top">
        <div class="row">
          <div class="col-xl-5 col-lg-5">
            <div class="site-footer__top-left">
              <div class="site-footer__top-logo-content">
                <a href="/"
                  ><img
                    src="/assets/images/logo-light-1.png"
                    width="146"
                    alt="Latlong Logo"
                /></a>
                <p class="site-footer__top-text">
                  Latlong International est une entreprise de sécurité opérant dans l'est
                  de la RDC depuis 2012, offrant des solutions de classe mondiale.
                </p>
              </div>
              <div class="site-footer__top-newsletter">
                <h5 class="site-footer__top-newsletter-title">
                  Abonnez-vous pour les dernières nouvelles
                </h5>
                <form class="site-footer__top-newsletter-form">
                  <div class="site-footer__top-newsletter-input-box">
                    <input type="email" placeholder="Adresse Email" name="email" />
                    <button type="submit" class="site-footer__top-newsletter-btn">
                      Go
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-xl-7 col-lg-7">
            <div class="site-footer__top-right">
              <div class="site-footer__top-widget-box">
                <div class="row">
                  <!-- Explore -->
                  <div class="col-xl-3 col-lg-3 col-md-4">
                    <div class="footer-widget__column footer-widget__explore">
                      <h3 class="footer-widget__title">Explore</h3>
                      <ul class="footer-widget__explore-list list-unstyled">
                        <li><a href="/about">À propos</a></li>
                        <li><a href="#">Partenaires</a></li>
                        <li><a href="#">Galerie</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                  <!-- Services -->
                  <div class="col-xl-3 col-lg-3 col-md-4">
                    <div class="footer-widget__column footer-widget__links">
                      <h3 class="footer-widget__title">Services</h3>
                      <ul class="footer-widget__links-list list-unstyled">
                        <li><a href="/services/protection">Protection</a></li>
                        <li><a href="/services/technology">Technologie</a></li>
                        <li><a href="/services/consultancy">Consultance</a></li>
                        <li><a href="/services/trainings">Formations</a></li>
                        <li>
                          <a href="/services/others-security-services">Autres Services</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- Contact -->
                  <div class="col-xl-6 col-lg-6 col-md-4">
                    <div class="footer-widget__column footer-widget__contact">
                      <h3 class="footer-widget__title">Contact</h3>
                      <p>
                        <a href="mailto:info@latlongcongo.com">info@latlongcongo.com</a>
                      </p>
                      <p>325 Blvd Kanyamuhanga, Q. des Volcans, Goma</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Social and Phone -->
              <div class="site-footer__top-contact-details">
                <div class="site-footer__top-right-social">
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-facebook"></i></a>
                  <a href="#"><i class="fab fa-whatsapp"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
                <div class="site-footer__top-right-phone">
                  <p class="site-footer__top-right-phone-tagline">Appelez-nous</p>
                 <p class="text-white mt-3">
                    <a class="text-white hover:underline" href="tel:+243810041500">+243810041500</a> <br>
                    <a class="text-white hover:underline" href="tel:+243993400082">+243993400082</a>
                  </p> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer Bottom -->
      <div class="site-footer__bottom">
        <p class="site-footer__bottom-text">
          © <span id="current-year"></span> 2024 - Latlong International. Tous droits
          réservés. Par <a href="www.witoxr.studio">Wito XR Studio</a> ❤️ ☕
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
