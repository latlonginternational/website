<template>
  <div>
    <!--Page Header Start-->
    <section class="page-header">
      <div
        class="page-header-bg"
        style="background-image: url(/assets/images/backgrounds/page-header-bg.jpg)"
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
                À propos de Latlong International
              </h3>
              <div class="contact-page-details__content">
                <div class="contact-page-details__content-img">
                  <img
                    src="/assets/images/resources/contact-page-details-content-img.jpg"
                    alt="Latlong International"
                  />
                </div>
                <div class="contact-page-details__content-text-box">
                  <p class="contact-page-details__content-text-1">
                    Latlong International est une entreprise de sécurité opérant dans
                    l'est de la RDC depuis 2012, avec une expertise dans la protection, la
                    technologie et les solutions de sécurité avancées.
                  </p>
                  <p class="contact-page-details__content-text-2">
                    Notre mission est de fournir des solutions de sécurité intégrées de
                    classe mondiale en dépassant constamment les attentes grâce à
                    l'innovation et l'excellence opérationnelle.
                  </p>
                  <h2 class="contact-page-details__sign">Équipe Latlong</h2>
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
                  <p><a href="mailto:info@latlongcongo.com">info@latlongcongo.com</a></p>
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
          <h2 class="section-title__title">Envoyez-nous un Message</h2>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="contact-page__form">
              <form
                action="/assets/inc/sendemail.php"
                class="comment-one__form contact-form-validated"
                novalidate="novalidate"
              >
                <div class="row">
                  <div class="col-xl-6">
                    <div class="comment-form__input-box">
                      <input type="text" placeholder="Votre Nom" name="name" />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="comment-form__input-box">
                      <input type="email" placeholder="Votre Email" name="email" />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="comment-form__input-box">
                      <input type="text" placeholder="Téléphone" name="phone" />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="comment-form__input-box">
                      <input type="text" placeholder="Sujet" name="subject" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-12">
                    <div class="comment-form__input-box">
                      <textarea name="message" placeholder="Votre Message"></textarea>
                    </div>
                    <button type="submit" class="thm-btn comment-form__btn">
                      Envoyer le message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
