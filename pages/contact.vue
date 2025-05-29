<template>
  <div>
    <!--Page Header Start-->
    <section class="page-header">
      <div
        class="page-header-bg"
        style="background-image: url(/assets/images/backgrounds/cont.jpg)"
      ></div>
      <div class="container">
        <div class="page-header__inner">
          <h2>Contactez-nous</h2>
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="/">Accueil</a></li>
            <li class="active">Contact</li>
          </ul>
        </div>
      </div>
    </section>
    <!--Page Header End-->

    <!--Contact Page Google Map Start-->
    <section class="contact-page-google-map">
      <div class="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.0928352617248!2d29.232973510331743!3d-1.6851257982921726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd058b19d64465%3A0x5391a088885468ce!2sLATLONG%20INTERNATIONAL!5e0!3m2!1sfr!2scd!4v1737188255317!5m2!1sfr!2scd"
          class="contact-page-google-map__one"
          allowfullscreen
        ></iframe>
      </div>
    </section>
    <!--Contact Page Google Map End-->

    <!--Contact Page Details Start-->
    <section class="contact-page-details">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-7">
            <div class="contact-page-details__left">
              <h3 class="contact-page-details__title">
                À propos de LatLong International
              </h3>
              <div class="contact-page-details__content">
                <div class="contact-page-details__content-img">
                  <img
                    src="/assets/images/resources/co.jpg"
                    alt="LatLong International"
                  />
                </div>
                <div class="contact-page-details__content-text-box">
                  <p class="contact-page-details__content-text-1">
                    LatLong International est une entreprise de sécurité opérant
                    dans l'est de la RDC depuis 2012, avec une expertise dans la
                    protection, la technologie et les solutions de sécurité
                    avancées.
                  </p>
                  <p class="contact-page-details__content-text-2">
                    Notre mission est de fournir des solutions de sécurité
                    intégrées de classe mondiale en dépassant constamment les
                    attentes grâce à l'innovation et l'excellence
                    opérationnelle.
                  </p>
                  <h2 class="contact-page-details__sign">Équipe LatLong</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="contact-page-details__right">
              <ul class="list-unstyled contact-page-details__list">
                <li>
                  <span>Appelez-nous</span>
                  <p><a href="tel:+243810041500">+243 810 041 500</a></p>
                </li>
                <li>
                  <span>Envoyez un email</span>
                  <p>
                    <a href="mailto:info@latlongcongo.com"
                      >info@latlongcongo.com</a
                    >
                  </p>
                </li>
                <li>
                  <span>Visitez nos bureaux</span>
                  <p>
                    325 Blvd Kanyamuhanga <br />
                    Q. des Volcans, Goma, Nord-Kivu
                  </p>
                </li>
              </ul>
              <div class="contact-page-details__social">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Contact Page Details End-->

    <!--Contact Page Form Start-->
    <section class="contact-page">
      <div class="container">
        <div class="section-title text-center">
          <span class="section-title__tagline">Contactez-nous</span>
          <h2 class="section-title__title">Envoyez-nous un message</h2>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="contact-page__form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Contact Page Form End-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactForm from '~/components/ContactForm.vue'

export default defineComponent({
  name: 'ContactPage',
  components: {
    ContactForm
  }
})
</script>

<style scoped>
.contact-page {
  padding: 120px 0;
}

.contact-page__content {
  background-color: #ffffff;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.1);
}

@media (max-width: 767px) {
  .contact-page {
    padding: 80px 0;
  }
  
  .contact-page__content {
    padding: 30px;
  }
}
</style>
