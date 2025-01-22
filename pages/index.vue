<template>
  <div class="index-page">
    <!--Main Slider Start-->
    <section class="main-slider">
      <div
        class="swiper-container thm-swiper__slider"
        data-swiper-options='{"slidesPerView": 1, "loop": true,
    "effect": "fade",
     "pagination": {
        "el": "#main-slider-pagination",
        "type": "bullets",
        "clickable": true
      },
    "navigation": {
        "nextEl": "#main-slider__swiper-button-next",
        "prevEl": "#main-slider__swiper-button-prev"
    },
    "autoplay": {
        "delay": 5000
    }}'
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div
              class="image-layer"
              style="
                background-image: url(/assets/images/backgrounds/image1.png);
              "
            ></div>
            <div class="main-slider-shape-1">
              <img src="/assets/images/shapes/main-slider-shape-1.png" alt="" />
            </div>
            <div class="main-slider-shape-2">
              <img src="/assets/images/shapes/main-slider-shape-2.png" alt="" />
            </div>
            <div class="main-slider-shape-3">
              <img src="/assets/images/shapes/main-slider-shape-3.png" alt="" />
            </div>
            <div class="container">
              <div class="row">
                <div class="col-xl-7">
                  <div class="main-slider__content">
                    <h2>Solutions Adaptées</h2>
                    <p>Latlong, votre partenaire pour des solutions fiables.</p>
                    <a href="/about" class="thm-btn">En savoir plus</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- deuxieme slide -->
          <div class="swiper-slide">
            <div
              class="image-layer"
              style="
                background-image: url(/assets/images/backgrounds/image2.jpg);
              "
            ></div>
            <div class="main-slider-shape-1">
              <img src="/assets/images/shapes/main-slider-shape-1.png" alt="" />
            </div>
            <div class="main-slider-shape-2">
              <img src="/assets/images/shapes/main-slider-shape-2.png" alt="" />
            </div>
            <div class="main-slider-shape-3">
              <img src="/assets/images/shapes/main-slider-shape-3.png" alt="" />
            </div>
            <div class="container">
              <div class="row">
                <div class="col-xl-7">
                  <div class="main-slider__content">
                    <h2>Technologies Modernes</h2>
                    <p>Protégez vos actifs avec des solutions avancées.</p>
                    <a href="/services" class="thm-btn"
                      >Découvrez nos services</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- troisieme slide -->
          <div class="swiper-slide">
            <div
              class="image-layer"
              style="
                background-image: url(/assets/images/backgrounds/confbg.jpg);
              "
            ></div>
            <div class="main-slider-shape-1">
              <img src="/assets/images/shapes/main-slider-shape-1.png" alt="" />
            </div>
            <div class="main-slider-shape-2">
              <img src="/assets/images/shapes/main-slider-shape-2.png" alt="" />
            </div>
            <div class="main-slider-shape-3">
              <img src="/assets/images/shapes/main-slider-shape-3.png" alt="" />
            </div>
            <div class="container">
              <div class="row">
                <div class="col-xl-7">
                  <div class="main-slider__content">
                    <h2>
                      Une Équipe <br />
                      de Confiance
                    </h2>
                    <p>Des experts locaux au service de votre sécurité.</p>
                    <a href="/contact" class="thm-btn">Contactez-nous</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- If we need navigation buttons -->
        <div class="main-slider__nav">
          <div class="swiper-button-prev" id="main-slider__swiper-button-next">
            <i class="icon-right-arrow icon-left-arrow"></i>
          </div>
          <div class="swiper-button-next" id="main-slider__swiper-button-prev">
            <i class="icon-right-arrow"></i>
          </div>
        </div>
      </div>
    </section>
    <!--Main Slider End-->

    <!--Feature One Start-->
    <section class="feature-one">
      <div class="container">
        <div class="row flex flex-wrap">
          <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
            <!--Feature One Single-->
            <div class="feature-one__single">
              <div class="feature-one__img-box">
                <div class="feature-one__img h-64">
                  <img
                    src="/assets/images/resources/prot1.jpg"
                    alt=""
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="feature-one__icon-box">
                  <div class="feature-one__icon-title-box">
                    <h3 class="feature-one__icon-title">
                      <a href="#">Sécurité</a>
                    </h3>
                  </div>
                  <div class="feature-one__icon">
                    <span class="icon-strategy"></span>
                  </div>
                </div>
                <div class="feature-one__hover">
                  <div
                    class="feature-one__hover-bg"
                    style="
                      background-image: url(/assets/images/resources/consultances.jpg);
                    "
                  ></div>
                  <div class="feature-one__hover-icon">
                    <span class="icon-strategy"></span>
                  </div>
                  <h4 class="feature-one__hover-title">
                    <a href="#">Sécurité</a>
                  </h4>
                  <p class="feature-one__hover-text">
                    Transport de fonds, évacuations d’urgence, lutte contre
                    l’incendie, assistance médicale, rapports de sécurité,
                    alertes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
            <!--Feature One Single-->
            <div class="feature-one__single">
              <div class="feature-one__img-box">
                <div class="feature-one__img h-64">
                  <img
                    src="/assets/images/resources/protection.jpg"
                    alt=""
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="feature-one__icon-box">
                  <div class="feature-one__icon-title-box">
                    <h3 class="feature-one__icon-title">
                      <a href="/services/protection">Protection</a>
                    </h3>
                  </div>
                  <div class="feature-one__icon">
                    <span class="icon-point-of-sale"></span>
                  </div>
                </div>
                <div class="feature-one__hover">
                  <div
                    class="feature-one__hover-bg"
                    style="
                      background-image: url(/assets/images/resources/protections.jpg);
                    "
                  ></div>
                  <div class="feature-one__hover-icon">
                    <span class="icon-point-of-sale"></span>
                  </div>
                  <h4 class="feature-one__hover-title">
                    <a href="/services/protection">Protection</a>
                  </h4>
                  <p class="feature-one__hover-text">
                    Surveillance humaine, intervention, salle de contrôle,
                    escortes, protection VIP, sécurité événementielle, ...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
            <!--Feature One Single-->
            <div class="feature-one__single">
              <div class="feature-one__img-box">
                <div class="feature-one__img h-64">
                  <img
                    src="/assets/images/resources/lat1.jpg"
                    alt=""
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="feature-one__icon-box">
                  <div class="feature-one__icon-title-box">
                    <h3 class="feature-one__icon-title">
                      <a href="/services/consultancy">Consultance</a>
                    </h3>
                  </div>
                  <div class="feature-one__icon">
                    <span class="icon-consumer-behavior"></span>
                  </div>
                </div>
                <div class="feature-one__hover">
                  <div
                    class="feature-one__hover-bg"
                    style="
                      background-image: url(/assets/images/resources/consultances.jpg);
                    "
                  ></div>
                  <div class="feature-one__hover-icon">
                    <span class="icon-consumer-behavior"></span>
                  </div>
                  <h4 class="feature-one__hover-title">
                    <a href="/services/consultancy/">Consultance</a>
                  </h4>
                  <p class="feature-one__hover-text">
                    Évaluations de sécurité, gestion des missions, stratégie,
                    plans d’évacuation et gestion de crise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Feature One End-->

    <!--About One Start-->
    <section class="about-one">
      <div class="container">
        <div class="row">
          <!-- Image Section -->
          <div class="col-xl-6">
            <div
              class="about-one__left wow slideInLeft"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div class="about-one__img">
                <img
                  src="/assets/images/resources/pat.jpg"
                  alt="Map showing LatLong"
                />
              </div>
              <div class="about-one__shape">
                <img src="/assets/images/shapes/about-one-shape.png" alt="" />
              </div>
            </div>
          </div>

          <!-- Text Section -->
          <div class="col-xl-6">
            <div class="about-one__right">
              <div class="section-title text-left">
                <span class="section-title__tagline">Solutions innovantes</span>
                <h2 class="section-title__title">
                  Votre partenaire en gestion de sécurité
                </h2>
              </div>
              <p class="about-one__business-start-text">
                Latlong vous offre des outils modernes pour une sécurité
                renforcée et une gestion optimisée de vos opérations.
              </p>

              <div class="about-one__points-box">
                <!-- First Column -->
                <ul class="list-unstyled about-one__points">
                  <li>
                    <div class="icon">
                      <i class="fa fa-check"></i>
                    </div>
                    <div class="text">
                      <p>Surveillance en temps réel.</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fa fa-check"></i>
                    </div>
                    <div class="text">
                      <p>Protection des biens et des personnes.</p>
                    </div>
                  </li>
                </ul>
                <!-- Second Column -->
                <ul
                  class="list-unstyled about-one__points about-one__points-two"
                >
                  <li>
                    <div class="icon">
                      <i class="fa fa-check"></i>
                    </div>
                    <div class="text">
                      <p>Technologies avancées de suivi.</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fa fa-check"></i>
                    </div>
                    <div class="text">
                      <p>Solutions personnalisées.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="about-one__bottom">
                <div class="about-one__btn-box">
                  <a href="/about" class="thm-btn about-one__btn"
                    >En savoir plus</a
                  >
                </div>
                <div class="about-one__contact">
                  <div class="about-one__contact-icon">
                    <span class="icon-phone"></span>
                  </div>
                  <div class="about-one__contact-phone">
                    <p class="about-one__contact-text">Contactez-nous</p>
                    <a href="tel:+243820123456">+243 820 123 456</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--About One End-->

    <!--Our Mission Start-->
    <section class="our-mission">
      <div class="our-mission-bg-box">
        <div
          class="our-mission-bg jarallax"
          data-jarallax
          data-speed="0.2"
          data-imgPosition="50% 0%"
          style="
            background-image: url(/assets/images/backgrounds/nous_contacter.jpg);
          "
        ></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="our-mission__inner">
              <h2 class="our-mission__title">
                Garantir votre <br /><span>sécurité</span> est notre mission.
              </h2>
              <a href="/contact" class="thm-btn our-mission__btn"
                >Nous contacter</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Our Mission End-->

    <!--Building Experience Start-->
    <section class="building-experience">
      <div class="container">
        <div class="building-experience__top">
          <div class="row">
            <div class="col-xl-7">
              <div class="building-experience__top-left">
                <div class="section-title text-left">
                  <span class="section-title__tagline"
                    >Avantages & Solutions</span
                  >
                  <h2 class="section-title__title">
                    Expertise & <br />
                    Haute Satisfaction
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-xl-5">
              <div class="building-experience__top-right">
                <p class="building-experience__top-right-text">
                  Latlong offre des solutions de sécurité fiables, combinant
                  expertise locale et technologies avancées.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="building-experience__bottom">
          <div class="row">
            <div class="col-xl-6">
              <div class="building-experience__bottom-content">
                <div class="building-experience__bottom-img">
                  <img src="/assets/images/resources/exp.jpg" alt="" />
                </div>
                <div class="building-experience__progress">
                  <div class="building-experience__progress-wrap">
                    <div class="building-experience__progress-single">
                      <div class="building-experience__progress-box">
                        <div
                          class="circle-progress"
                          data-options='{ "value": 1.0,"thickness": 4,"emptyFill": "#edf3f6","lineCap": "square", "size": 122, "fill": { "color": "#00AEEF" } }'
                        ></div>
                        <!-- /.circle-progress -->
                        <span>100%</span>
                      </div>
                      <div class="building-experience__progress-content">
                        <h3>
                          Prix <br />
                          abordable
                        </h3>
                      </div>
                    </div>
                    <div
                      class="building-experience__progress-single building-experience__progress-single-last"
                    >
                      <div class="building-experience__progress-box">
                        <div
                          class="circle-progress"
                          data-options='{ "value": 1.0,"thickness": 4,"emptyFill": "#edf3f6","lineCap": "square", "size": 122, "fill": { "color": "#00AEEF" } }'
                        ></div>
                        <!-- /.circle-progress -->
                        <span>100%</span>
                      </div>
                      <!-- /.about-five__progress-box -->
                      <div class="building-experience__progress-content">
                        <h3>
                          Qualité <br />
                          des services
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="building-experience__bottom-faq">
                <div class="accrodion-grp" data-grp-name="faq-one-accrodion">
                  <div class="accrodion active">
                    <div class="accrodion-title">
                      <h4>Quels types de services offre Latlong ?</h4>
                    </div>
                    <div class="accrodion-content">
                      <div class="inner">
                        <p>
                          Latlong propose des services de sécurité physique, de
                          surveillance électronique, de gestion des risques et
                          de protection d'événements, adaptés aux besoins
                          spécifiques de ses clients dans l'Est de la RDC.
                        </p>
                      </div>
                      <!-- /.inner -->
                    </div>
                  </div>
                  <div class="accrodion">
                    <div class="accrodion-title">
                      <h4>
                        Latlong peut-il intervenir dans des zones éloignées ?
                      </h4>
                    </div>
                    <div class="accrodion-content">
                      <div class="inner">
                        <p>
                          Oui, Latlong est équipé pour fournir des services dans
                          des zones éloignées ou difficiles d'accès grâce à une
                          équipe expérimentée et des outils adaptés à ces
                          environnements.
                        </p>
                      </div>
                      <!-- /.inner -->
                    </div>
                  </div>
                  <div class="accrodion last-chiled">
                    <div class="accrodion-title">
                      <h4>
                        Comment Latlong garantit-il la qualité de ses services ?
                      </h4>
                    </div>
                    <div class="accrodion-content">
                      <div class="inner">
                        <p>
                          La qualité est assurée grâce à une formation continue
                          du personnel, l'utilisation de technologies de pointe,
                          et un suivi régulier pour s'assurer que les besoins
                          des clients sont toujours satisfaits.
                        </p>
                      </div>
                      <!-- /.inner -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Building Experience End-->

    <!--CTA One Start-->
    <section class="cta-one">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="cta-one__inner">
              <h2 class="cta-one__title">
                Des solutions de Sécurité <br />
                de Classe mondiale
              </h2>
              <a href="/about" class="thm-btn cta-one__btn">Nous contacter</a>
              <div
                class="cta-one__shape wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <img src="/assets/images/shapes/cta-one-shape.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--CTA One End-->

    <!--Testimonial One Start-->
    <section class="testimonial-one">
      <div
        class="testimonial-one-map"
        style="
          background-image: url(/assets/images/shapes/testimonial-one-map.png);
        "
      ></div>
      <div class="container">
        <div class="section-title text-center">
          <span class="section-title__tagline">Nos témoignages</span>
          <h2 class="section-title__title">Ce qu’ils disent</h2>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="testimonial-one__carousel owl-theme owl-carousel">
              <!--Testimonial One Single-->
              <div class="testimonial-one__single">
                <p class="testimonial-one__rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </p>
                <p class="testimonial-one__text">
                  LatLong a transformé notre gestion de sécurité. L’équipe est
                  proactive et toujours disponible pour répondre à nos besoins
                  spécifiques.
                </p>
                <div class="testimonial-one__author">
                  <div class="testimonial-one__author-img">
                    <img
                      src="/assets/images/testimonial/temoignage1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="testimonial-one__author-details">
                    <h4 class="testimonial-one__author-name">
                      Christine Muhindo
                    </h4>
                    <p class="testimonial-one__author-title">
                      CEO - Amaliza Store
                    </p>
                  </div>
                </div>
                <div class="testimonial-one__quote-icon">
                  <img src="/assets/images/icon/quote-icon.png" alt="" />
                </div>
              </div>
              <!--Testimonial One Single-->
              <div class="testimonial-one__single">
                <p class="testimonial-one__rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </p>
                <p class="testimonial-one__text">
                  Nous travaillons avec LatLong depuis plusieurs années. Leur
                  professionnalisme et leur engagement sont exceptionnels.
                </p>
                <div class="testimonial-one__author">
                  <div class="testimonial-one__author-img">
                    <img
                      src="/assets/images/testimonial/temoignage2.jpg"
                      alt=""
                    />
                  </div>
                  <div class="testimonial-one__author-details">
                    <h4 class="testimonial-one__author-name">Kevin Banza</h4>
                    <p class="testimonial-one__author-title">Client</p>
                  </div>
                </div>
                <div class="testimonial-one__quote-icon">
                  <img src="/assets/images/icon/quote-icon.png" alt="" />
                </div>
              </div>
              <!--Testimonial One Single-->
              <div class="testimonial-one__single">
                <p class="testimonial-one__rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </p>
                <p class="testimonial-one__text">
                  LatLong nous a aidés à sécuriser nos opérations. Nous
                  recommandons leurs services à toute organisation recherchant
                  une sécurité fiable.
                </p>
                <div class="testimonial-one__author">
                  <div class="testimonial-one__author-img">
                    <img
                      src="/assets/images/testimonial/temoignage3.jpg"
                      alt=""
                    />
                  </div>
                  <div class="testimonial-one__author-details">
                    <h4 class="testimonial-one__author-name">
                      Jessica Byamungu
                    </h4>
                    <p class="testimonial-one__author-title">
                      Directrice Habana Habi
                    </p>
                  </div>
                </div>
                <div class="testimonial-one__quote-icon">
                  <img src="/assets/images/icon/quote-icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Testimonial One End-->

    <!--Counter One Start-->
    <section class="counter-one">
      <div class="counter-one-wrap">
        <div
          class="counter-one-shape"
          style="
            background-image: url(/assets/images/shapes/counter-one-shape.png);
          "
        ></div>
        <div class="counter-one-img">
          <img src="/assets/images/resources/ref.jpg" alt="" />
        </div>
        <div class="counter-one-shape-2">
          <img src="/assets/images/shapes/counter-one-shape-2.png" alt="" />
        </div>
        <div class="counter-one-shape-3">
          <img src="/assets/images/shapes/counter-one-shape-3.png" alt="" />
        </div>
        <div class="container">
          <div class="counter-one__top">
            <div class="row">
              <div class="col-xl-5 col-lg-6">
                <h2 class="counter-one__top-title">
                  Votre référence en matière de sécurité.
                </h2>
              </div>
            </div>
          </div>
          <div class="counter-one__bottom">
            <div class="row">
              <div class="col-xl-12">
                <ul class="counter-one__list list-unstyled">
                  <!-- Cas complétés -->
                  <li
                    class="counter-one__single wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div class="counter-one__icon">
                      <span class="icon-help"></span>
                    </div>
                    <div class="counter-one__content">
                      <h3 class="odometer" data-count="42">0</h3>
                      <p class="counter-one__text">Partenaires</p>
                    </div>
                  </li>
                  <!-- Clients satisfaits -->
                  <li
                    class="counter-one__single wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div class="counter-one__icon">
                      <span class="icon-customer-review"></span>
                    </div>
                    <div class="counter-one__content">
                      <h3 class="odometer" data-count="1500">0</h3>
                      <p class="counter-one__text">Clients satisfaits</p>
                    </div>
                  </li>
                  <!-- Experts en sécurité -->
                  <li
                    class="counter-one__single wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div class="counter-one__icon">
                      <span class="icon-consultant"></span>
                    </div>
                    <div class="counter-one__content">
                      <h3 class="odometer" data-count="300">00</h3>
                      <p class="counter-one__text">Experts en sécurité</p>
                    </div>
                  </li>
                  <!-- Années d'expérience -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Counter One End-->
    <!--News One Start-->
    <section class="news-one">
      <div class="news-one__container">
        <div class="section-title text-center">
          <span class="section-title__tagline">Actualités récentes</span>
          <h2 class="section-title__title">Articles</h2>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="news-one__carousel owl-theme owl-carousel">
              <!--News One Single-->
              <div class="news-one__single">
                <div class="news-one__img">
                  <img src="/assets/images/blog/art1.jpg" alt="Actualités" />
                  <a href="/blog/details-id">
                    <span class="news-one__plus"></span>
                  </a>
                  <div class="news-one__date">
                    <p>15 Jan</p>
                  </div>
                </div>
                <div class="news-one__content">
                  <ul class="list-unstyled news-one__meta">
                    <li>
                      <a href="/blog/details-id"
                        ><i class="far fa-user-circle"></i> Par Latlong</a
                      >
                    </li>
                    <li>
                      <a href="/blog/details-id"
                        ><i class="far fa-comments"></i> 3 Commentaires</a
                      >
                    </li>
                  </ul>
                  <h3 class="news-one__title">
                    <a href="/blog/details-id"
                      >Nouvelles stratégies de sécurité</a
                    >
                  </h3>
                  <p class="news-one__text">
                    Découvrez nos approches innovantes pour sécuriser vos
                    opérations.
                  </p>
                  <div class="news-one__bottom">
                    <a href="/blog/details-id" class="news-one__btn"
                      >Lire plus</a
                    >
                    <a href="/blog/details-id" class="news-one__arrow"
                      ><span class="icon-right-arrow"></span
                    ></a>
                  </div>
                </div>
              </div>
              <!--News One Single-->
              <div class="news-one__single">
                <div class="news-one__img">
                  <img src="/assets/images/blog/art2.jpg" alt="Actualités" />
                  <a href="/blog/details-id">
                    <span class="news-one__plus"></span>
                  </a>
                  <div class="news-one__date">
                    <p>20 Fév</p>
                  </div>
                </div>
                <div class="news-one__content">
                  <ul class="list-unstyled news-one__meta">
                    <li>
                      <a href="/blog/details-id"
                        ><i class="far fa-user-circle"></i> Par Latlong</a
                      >
                    </li>
                    <li>
                      <a href="/blog/details-id"
                        ><i class="far fa-comments"></i> 5 Commentaires</a
                      >
                    </li>
                  </ul>
                  <h3 class="news-one__title">
                    <a href="/blog/details-id"
                      >Protection des zones sensibles</a
                    >
                  </h3>
                  <p class="news-one__text">
                    Nos services protègent les infrastructures critiques
                    efficacement.
                  </p>
                  <div class="news-one__bottom">
                    <a href="/blog/details-id" class="news-one__btn"
                      >Lire plus</a
                    >
                    <a href="/blog/details-id" class="news-one__arrow"
                      ><span class="icon-right-arrow"></span
                    ></a>
                  </div>
                </div>
              </div>
              <!--News One Single-->
              <div class="news-one__single">
                <div class="news-one__img">
                  <img src="/assets/images/blog/art3.jpg" alt="Actualités" />
                  <a href="/blog/details-id">
                    <span class="news-one__plus"></span>
                  </a>
                  <div class="news-one__date">
                    <p>10 Mar</p>
                  </div>
                </div>
                <div class="news-one__content">
                  <ul class="list-unstyled news-one__meta">
                    <li>
                      <a href="/blog/details-id"
                        ><i class="far fa-user-circle"></i> Par Latlong</a
                      >
                    </li>
                    <li>
                      <a href="/blog/details-id"
                        ><i class="far fa-comments"></i> 2 Commentaires</a
                      >
                    </li>
                  </ul>
                  <h3 class="news-one__title">
                    <a href="/blog/details-id">Renforcement des capacités</a>
                  </h3>
                  <p class="news-one__text">
                    Des formations spécialisées pour un personnel hautement
                    qualifié.
                  </p>
                  <div class="news-one__bottom">
                    <a href="/blog/details-id" class="news-one__btn"
                      >Lire plus</a
                    >
                    <a href="/blog/details-id" class="news-one__arrow"
                      ><span class="icon-right-arrow"></span
                    ></a>
                  </div>
                </div>
              </div>
              <!--News One Single-->
              <div class="news-one__single">
                <div class="news-one__img">
                  <img src="/assets/images/blog/art4.jpg" alt="Actualités" />
                  <a href="/blog/details-id">
                    <span class="news-one__plus"></span>
                  </a>
                  <div class="news-one__date">
                    <p>25 Mar</p>
                  </div>
                </div>
                <div class="news-one__content">
                  <ul class="list-unstyled news-one__meta">
                    <li>
                      <a href="/blog/details-id"
                        ><i class="far fa-user-circle"></i> Par Latlong</a
                      >
                    </li>
                    <li>
                      <a href="/blog/details-id"
                        ><i class="far fa-comments"></i> 1 Commentaire</a
                      >
                    </li>
                  </ul>
                  <h3 class="news-one__title">
                    <a href="/blog/details-id">Surveillance avancée</a>
                  </h3>
                  <p class="news-one__text">
                    Les nouvelles technologies révolutionnent nos systèmes de
                    surveillance.
                  </p>
                  <div class="news-one__bottom">
                    <a href="/blog/details-id" class="news-one__btn"
                      >Lire plus</a
                    >
                    <a href="/blog/details-id" class="news-one__arrow"
                      ><span class="icon-right-arrow"></span
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--News One End-->

    <!--Brand One Start-->
    <section class="brand-one">
      <div class="container">
        <div
          class="thm-swiper__slider swiper-container"
          data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
                    "0": {
                        "spaceBetween": 30,
                        "slidesPerView": 2
                    },
                    "375": {
                        "spaceBetween": 30,
                        "slidesPerView": 2
                    },
                    "575": {
                        "spaceBetween": 30,
                        "slidesPerView": 3
                    },
                    "767": {
                        "spaceBetween": 50,
                        "slidesPerView": 4
                    },
                    "991": {
                        "spaceBetween": 50,
                        "slidesPerView": 5
                    },
                    "1199": {
                        "spaceBetween": 100,
                        "slidesPerView": 5
                    }
                }}'
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="/assets/images/brand/brasimba.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/easter.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/europeanunion.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/instituufrancais.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/janegoodall.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/oim.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/sgml.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/skyborn.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/tearfund.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/tmk.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
          </div>
        </div>
      </div>
    </section>
    <!--Brand One End-->
  </div>
</template>

<script setup></script>
