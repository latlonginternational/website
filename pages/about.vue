<template>
  <div>
    <!--Page Header Start-->
    <section class="page-header">
      <div
        class="page-header-bg"
        style="background-image: url(/assets/images/backgrounds/image1.png)"
      ></div>
      <div class="container">
        <div class="page-header__inner">
          <h2>A propos de nous</h2>
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="/">Accueil</a></li>
            <li class="active">A propos de nous</li>
          </ul>
        </div>
      </div>
    </section>
    <!--Page Header End-->

    <!--Faites connaissance avec nous Début-->
    <section class="get-to-know">
      <div class="container">
        <div class="row">
          <div class="col-xl-5">
            <div class="get-to-know__left">
              <div class="section-title text-left">
                <span class="section-title__tagline"
                  >Faites connaissance avec nous</span
                >
                <h2 class="section-title__title">
                  Votre partenaire pour une sécurité fiable
                </h2>
              </div>
              <p class="get-to-know__text">
                LatLong Congo, fondée en 2012, est un leader en solutions de
                sécurité dans l’est de la RDC. Nous combinons expertise locale
                et technologie moderne pour protéger vos biens et vos intérêts.
              </p>
              <ul class="list-unstyled get-to-know__points">
                <li>
                  <div class="icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <div class="text">
                    <p>Personnel qualifié et expérimenté.</p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <div class="text">
                    <p>Technologies modernes de surveillance.</p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <div class="text">
                    <p>Approche adaptée à chaque client.</p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <div class="text">
                    <p>Engagement envers la responsabilité sociale.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-7">
            <div class="get-to-know__right">
              <ul class="get-to-know__images list-unstyled">
                <li>
                  <div class="get-to-know__img-1">
                    <img
                      src="/assets/images/resources/a propos-partmatsec2.png"
                      alt="Équipe LatLong"
                    />
                  </div>
                </li>
                <li>
                  <div class="get-to-know__img-2">
                    <img
                      src="/assets/images/resources/a propos-partmatsec1.png"
                      alt="Opérations LatLong"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Faites connaissance avec nous Fin-->

    <!-- Vision, Mission, Objective Section Start -->
    <section class="vision-mission-objective">
      <div class="container">
        <div class="section-title text-center">
          <span class="section-title__tagline">Notre Engagement</span>
          <h2 class="section-title__title">Vision, Mission & Objectifs</h2>
        </div>
        <div class="row">
          <div class="col-xl-4 col-lg-4">
            <div class="vision-box">
              <h3 class="vision-title">Vision</h3>
              <p>Être l’entreprise de sécurité de référence en Afrique.</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4">
            <div class="mission-box">
              <h3 class="mission-title">Mission</h3>
              <p>
                Offrir des solutions de sécurité innovantes et performantes.
              </p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4">
            <div class="objective-box">
              <h3 class="objective-title">Objectifs</h3>
              <ul class="list-unstyled">
                <li>
                  <i class="fa fa-check-circle"></i> Garantir la sécurité de nos
                  clients.
                </li>
                <li>
                  <i class="fa fa-check-circle"></i> Proposer des solutions
                  adaptées.
                </li>
                <li>
                  <i class="fa fa-check-circle"></i> Innover avec des
                  technologies avancées.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Vision, Mission, Objective Section End -->

    <br />

    <!-- Operational Zone Section Start -->
    <section class="operational-zone">
      <div class="container">
        <div class="section-title text-center">
          <span class="section-title__tagline"></span>
          <h2 class="section-title__title">Zone d’Opération</h2>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="operational-zone-map">
              <p class="text-center">
                Nous opérons principalement dans l'Est de la République
                Démocratique du Congo, avec une présence stratégique dans les
                provinces du Nord et du Sud-Kivu. Notre expansion nationale nous
                permet de répondre efficacement à une clientèle diversifiée.
              </p>
              <div
                id="map"
                style="height: 500px; width: 100%; margin-top: 20px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Operational Zone Section End -->

    <br />

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
              <img src="/assets/images/brand/brand-1-1.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/brand-1-2.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/brand-1-3.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/brand-1-4.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/brand-1-5.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/brand-1-1.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/brand-1-2.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/brand-1-3.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/brand-1-4.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
            <div class="swiper-slide">
              <img src="/assets/images/brand/brand-1-5.png" alt="" />
            </div>
            <!-- /.swiper-slide -->
          </div>
        </div>
      </div>
    </section>
    <!--Brand One End-->

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
                      src="/assets/images/testimonial/testi-author-1.jpg"
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
                      src="/assets/images/testimonial/testi-author-2.jpg"
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
                      src="/assets/images/testimonial/testi-author-3.jpg"
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
          <img src="/assets/images/resources/counter-one-img.jpg" alt="" />
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

    <!--Team Two Start-->
    <section class="team-two">
      <div class="container">
        <div class="section-title text-center">
          <span class="section-title__tagline">Equipe de Direction</span>
          <h2 class="section-title__title">Rencontrez nos experts</h2>
        </div>
        <div class="row">
          <!-- Katja Reith -->
          <div class="col-xl-3 col-lg-3 wow fadeInUp" data-wow-delay="100ms">
            <div class="team-one__single">
              <div class="team-one__img">
                <img src="/assets/images/team/4.png" alt="Katja Reith, CEO" />
                <ul class="list-unstyled team-one__social">
                  <li>
                    <a href="mailto:katja@latlongcongo.com"
                      ><i class="fas fa-envelope"></i
                    ></a>
                  </li>
                  <li>
                    <a href="tel:+243811442569"><i class="fas fa-phone"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                  </li>
                </ul>
              </div>
              <div class="team-one__content">
                <h4 class="team-one__name">Katja Reith</h4>
                <p class="team-one__title">CEO</p>
              </div>
            </div>
          </div>
          <!-- Marcellin Kabundi -->
          <div class="col-xl-3 col-lg-3 wow fadeInUp" data-wow-delay="200ms">
            <div class="team-one__single">
              <div class="team-one__img">
                <img
                  src="/assets/images/team/2.png"
                  alt="Marcellin Kabundi, DG"
                />
                <ul class="list-unstyled team-one__social">
                  <li>
                    <a href="mailto:admin@latlongcongo.com"
                      ><i class="fas fa-envelope"></i
                    ></a>
                  </li>
                  <li>
                    <a href="tel:+243823916727"><i class="fas fa-phone"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                  </li>
                </ul>
              </div>
              <div class="team-one__content">
                <h4 class="team-one__name">Marcellin Kabundi</h4>
                <p class="team-one__title">DG</p>
              </div>
            </div>
          </div>
          <!-- Gilbert Dilis -->
          <div class="col-xl-3 col-lg-3 wow fadeInUp" data-wow-delay="300ms">
            <div class="team-one__single">
              <div class="team-one__img">
                <img src="/assets/images/team/3.png" alt="Gilbert Dilis, DO" />
                <ul class="list-unstyled team-one__social">
                  <li>
                    <a href="mailto:gilbert@latlongcongo.com"
                      ><i class="fas fa-envelope"></i
                    ></a>
                  </li>
                  <li>
                    <a href="tel:+243992971952"><i class="fas fa-phone"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                  </li>
                </ul>
              </div>
              <div class="team-one__content">
                <h4 class="team-one__name">Gilbert Dilis</h4>
                <p class="team-one__title">DO</p>
              </div>
            </div>
          </div>
          <!-- Mack Mupita Henry -->
          <div class="col-xl-3 col-lg-3 wow fadeInUp" data-wow-delay="400ms">
            <div class="team-one__single">
              <div class="team-one__img">
                <img
                  src="/assets/images/team/1.png"
                  alt="Mack Mupita Henry, BM"
                />
                <ul class="list-unstyled team-one__social">
                  <li>
                    <a href="mailto:henry@latlongcongo.com"
                      ><i class="fas fa-envelope"></i
                    ></a>
                  </li>
                  <li>
                    <a href="tel:+243993400082"><i class="fas fa-phone"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                  </li>
                </ul>
              </div>
              <div class="team-one__content">
                <h4 class="team-one__name">Mack Mupita Henry</h4>
                <p class="team-one__title">BM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Team Two End-->

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
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import mapboxgl from "mapbox-gl";

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://api.mapbox.com/mapbox-gl-js/v3.8.0/mapbox-gl.css",
    },
  ],
});

onMounted(() => {
  // Initialiser le token d'accès Mapbox
  mapboxgl.accessToken =
    "pk.eyJ1Ijoia2J1bGFidWxhIiwiYSI6ImNtNHR1N2FybzBlbXkyaXNpMmNiYm54a2MifQ.pqKC_ay2GLvkQ6yt3yxZGw";

  // Initialiser la carte
  const map = new mapboxgl.Map({
    container: "map", // L'ID ou la classe de l'élément HTML contenant la carte
    style: "mapbox://styles/mapbox/light-v11",
    center: [23.656, -2.882], // Centré sur la RDC
    zoom: 5,
  });

  // Données pour les marqueurs des villes
  const cities = [
    {
      name: "Kinshasa",
      coordinates: [15.2258, -4.4447],
      color: "#FF5733", // Couleur du marqueur pour Kinshasa
      description: "Capitale politique et économique de la RDC.",
    },
    {
      name: "Goma",
      coordinates: [29.2192, -1.6768],
      color: "#33C1FF", // Couleur du marqueur pour Goma
      description: "Base principale de nos opérations.",
    },
    {
      name: "Lubumbashi",
      coordinates: [27.4348, -11.6477],
      color: "#76FF33", // Couleur du marqueur pour Lubumbashi
      description: "Hub minier et centre économique du Katanga.",
    },
  ];

  // Fonction pour créer un marqueur coloré
  function createColoredMarker(color) {
    const el = document.createElement("div");
    el.className = "marker";
    el.style.backgroundColor = color;
    el.style.width = "20px";
    el.style.height = "20px";
    el.style.borderRadius = "50%";
    el.style.cursor = "pointer";
    return el;
  }

  // Ajouter les marqueurs sur la carte
  map.on("load", () => {
    cities.forEach((city) => {
      // Créer un marqueur coloré
      const marker = new mapboxgl.Marker({
        element: createColoredMarker(city.color),
      })
        .setLngLat(city.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // Ajoute une popup au marqueur
            .setHTML(`<h4>${city.name}</h4><p>${city.description}</p>`)
        )
        .addTo(map);
    });
  });
});
</script>

<style>
/* Style pour les marqueurs personnalisés */
.marker {
  display: block;
  border: none;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}
</style>
