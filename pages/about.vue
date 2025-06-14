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
          <h2>{{ t('about.pageHeader.title') }}</h2>
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="/">{{ t('about.pageHeader.breadcrumb.home') }}</a></li>
            <li class="active">{{ t('about.pageHeader.breadcrumb.current') }}</li>
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
                <span class="section-title__tagline">{{ t('about.getToKnow.tagline') }}</span>
                <h2 class="section-title__title">{{ t('about.getToKnow.title') }}</h2>
              </div>
              <p class="get-to-know__text">{{ t('about.getToKnow.description') }}</p>
              <ul class="list-unstyled get-to-know__points">
                <li>
                  <div class="icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <div class="text">
                    <p>{{ t('about.getToKnow.points.qualified') }}</p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <div class="text">
                    <p>{{ t('about.getToKnow.points.technology') }}</p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <div class="text">
                    <p>{{ t('about.getToKnow.points.approach') }}</p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <div class="text">
                    <p>{{ t('about.getToKnow.points.commitment') }}</p>
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
                      src="/assets/images/resources/blacks.jpg"
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
          <span class="section-title__tagline">{{ t('about.visionMission.tagline') }}</span>
          <h2 class="section-title__title text-3xl sm:text-5xl font-medium">{{ t('about.visionMission.title') }}</h2>
        </div>
        <div class="row space-y-4 md:space-y-0">
          <div class="col-xl-4 col-lg-4">
            <div class="vision-box">
              <h3 class="vision-title text-xl sm:text-2xl font-medium">{{ t('about.visionMission.vision.title') }}</h3>
              <p class="mt-2">{{ t('about.visionMission.vision.description') }}</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4">
            <div class="mission-box">
              <h3 class="mission-title text-xl sm:text-2xl font-medium">{{ t('about.visionMission.mission.title') }}</h3>
              <p class="mt-2">{{ t('about.visionMission.mission.description') }}</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4">
            <div class="objective-box">
              <h3 class="objective-title text-xl sm:text-2xl font-medium">{{ t('about.visionMission.objectives.title') }}</h3>
              <ul class="list-unstyled mt-2">
                <li>
                  <i class="fa fa-check-circle"></i> {{ t('about.visionMission.objectives.items.security') }}
                </li>
                <li>
                  <i class="fa fa-check-circle"></i> {{ t('about.visionMission.objectives.items.solutions') }}
                </li>
                <li>
                  <i class="fa fa-check-circle"></i> {{ t('about.visionMission.objectives.items.innovation') }}
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
          <h2 class="section-title__title">{{ t('about.operationalZone.title') }}</h2>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="operational-zone-map">
              <p class="text-center">{{ t('about.operationalZone.description') }}</p>
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
    <br />
    <br />

    <!--Testimonial One Start-->
    <section class="testimonial-onee">
      <div class="testimonial-onee-map" style="background-image: url(/assets/images/shapes/testimonial-onee-map.png)"></div>
      <div class="container">
        <div class="section-title text-center">
          <span class="section-title__tagline">{{ t('home.testimonials.tagline') }}</span>
          <h2 class="section-title__title">{{ t('home.testimonials.title') }}</h2>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <Swiper
              :slides-per-view="3"
              :loop="true"
              :autoplay="{ delay: 5000 }"
              :pagination="{ clickable: true }"
              :breakpoints="{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }"
              class="testimonial-onee__carousel"
            >
              <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
                <div class="testimonial-onee__single position: relative; display: flex; flex-direction: column; justify-content: flex-start; min-height: 380px; padding: 60px 60px 100px; background: #fff; box-shadow: 0px 10px 60px 0px rgb(0 0 0 / 5%);">
                  <div class="testimonial-onee__rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <p class="testimonial-onee__text">
                    <span class="leading-[1.5]">
                      {{ t(`home.testimonials.items.${index + 1}.text`) }}
                    </span>
                  </p>
                  <div class="testimonial-onee__author mt-8">
                    <div class="testimonial-onee__author-img">
                      <img :src="`/assets/images/testimonial/avatar${index + 3}.jpg`" alt="" />
                    </div>
                    <div class="testimonial-onee__author-details">
                      <h4 class="testimonial-onee__author-name">{{ t(`home.testimonials.items.${index + 1}.author`) }}</h4>
                      <p class="testimonial-onee__author-title">{{ t(`home.testimonials.items.${index + 1}.position`) }}</p>
                    </div>
                  </div>
                  <div class="testimonial-onee__quote-icon">
                    <img src="/assets/images/icon/quote-icon.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    <!--Testimonial One End-->
   <!--Counter One Start-->
		<section class="counter-one">
			<div class="counter-one-wrap px-8 relative">
				<div class="absolute top-0 z-10 opacity-40 left-0 right-0 bottom-0 bg-black" style="background-image: url(/assets/images/shapes/counter-one-shape.png)s"></div>
				<div class="counter-one-shape z-0" style="background-image: url(/assets/images/shapes/counter-one-shape.png)"></div>
				<div class="counter-one-img z-0" style="background-image: url(/assets/images/resources/ref.jpg)">
					
				</div>
				<div class="counter-one-shape-2 z-0">
					<img src="/assets/images/shapes/counter-one-shape-2.png" alt="" />
				</div>
				<div class="counter-one-shape-3 z-0">
					<img src="/assets/images/shapes/counter-one-shape-3.png" alt="" />
				</div>
				<div class="container z-50 relative">
					<div class="counter-one__top">
						<div class="row">
							<div class="col-xl-5 col-lg-6">
								<h2 class="counter-one__top-title">Votre référence en matière de sécurité.</h2>
							</div>
						</div>
					</div>
					<div class="counter-one__bottom">
						<div class="row">
							<div class="col-xl-12">
								<ul class="counter-one__list list-unstyled">
									<!-- Cas complétés -->
									<li class="counter-one__single wow fadeInUp" data-wow-delay="100ms">
										<div class="counter-one__icon">
											<span class="icon-help"></span>
										</div>
										<div class="counter-one__content">
											<h3 class="odometer" data-count="42">0</h3>
											<p class="counter-one__text">Partenaires</p>
										</div>
									</li>
									<!-- Clients satisfaits -->
									<li class="counter-one__single wow fadeInUp" data-wow-delay="200ms">
										<div class="counter-one__icon">
											<span class="icon-customer-review"></span>
										</div>
										<div class="counter-one__content">
											<h3 class="odometer" data-count="1500">0</h3>
											<p class="counter-one__text">Clients satisfaits</p>
										</div>
									</li>
									<!-- Experts en sécurité -->
									<li class="counter-one__single wow fadeInUp" data-wow-delay="300ms">
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

    <!--Team Two Start-->
    <section class="team-two">
      <div class="container">
        <div class="section-title text-center">
          <span class="section-title__tagline">{{ t('about.team.tagline') }}</span>
          <h2 class="section-title__title">{{ t('about.team.title') }}</h2>
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
                <img src="/assets/images/team/1723267753376.jpeg" alt="Roger Nde, DO" />
                <ul class="list-unstyled team-one__social">
                  <li>
                    <a href="mailto:roger.nde@latlongcongo.com"
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
                <h4 class="team-one__name">Roger Nde</h4>
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
              <h2 class="cta-one__title">{{ t('about.cta.title') }}</h2>
              <a href="/about" class="thm-btn cta-one__btn">{{ t('about.cta.button') }}</a>
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


    <!--Brand One Start-->
<section class="brand-one">
  <div class="container">
    <Swiper
      :modules="[Autoplay]"
      :slides-per-view="5"
      :space-between="100"
      :loop="true"
      :autoplay="{ delay: 5000 }"
      :breakpoints="{
        0: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        375: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        575: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        767: {
          slidesPerView: 4,
          spaceBetween: 50
        },
        991: {
          slidesPerView: 5,
          spaceBetween: 50
        },
        1199: {
          slidesPerView: 6,
          spaceBetween: 100
        }
      }"
      class="brand-one__carousel"
    >
      <SwiperSlide v-for="(brand, index) in brands" :key="index">
        <div class="brand-one__single">
          <img :src="brand.image" :alt="brand.name" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</section>
<!--Brand One End-->
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import mapboxgl from "mapbox-gl";
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { useI18n } from 'vue-i18n'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const { t } = useI18n()

const testimonials = ref([
  {
    text: 'home.testimonials.items.1.text',
    author: 'home.testimonials.items.1.author',
    position: 'home.testimonials.items.1.position'
  },
  {
    text: 'home.testimonials.items.2.text',
    author: 'home.testimonials.items.2.author',
    position: 'home.testimonials.items.2.position'
  },
  {
    text: 'home.testimonials.items.3.text',
    author: 'home.testimonials.items.3.author',
    position: 'home.testimonials.items.3.position'
  }
])

const brands = ref([
  {
    name: 'Brasimba',
    image: '/assets/images/brand/brasimba.png'
  },
  {
    name: 'Easter',
    image: '/assets/images/brand/easter.png'
  },
  {
    name: 'European Union',
    image: '/assets/images/brand/europeanunion.png'
  },
  {
    name: 'Institut Français',
    image: '/assets/images/brand/instituufrancais.png'
  },
  {
    name: 'Jane Goodall',
    image: '/assets/images/brand/janegoodall.png'
  },
  {
    name: 'OIM',
    image: '/assets/images/brand/oim.png'
  },
  {
    name: 'SGML',
    image: '/assets/images/brand/sgml.png'
  },
  {
    name: 'Skyborn',
    image: '/assets/images/brand/skyborn.png'
  },
  {
    name: 'Tearfund',
    image: '/assets/images/brand/tearfund.png'
  },
  {
    name: 'TMK',
    image: '/assets/images/brand/tmk.png'
  }
])

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
    coordinates: [15.3136, -4.3276],
    color: "#FF5733",
    description: "Capitale politique et économique de la RDC.",
  },
  {
    name: "Goma",
    coordinates: [29.2333, -1.6833],
    color: "#33C1FF",
    description: "Base principale de nos opérations.",
  },
  {
    name: "Lubumbashi",
    coordinates: [27.4794, -11.6609],
    color: "#76FF33",
    description: "Hub minier et centre économique du Katanga.",
  },
  {
    name: "Bisie",
    coordinates: [27.2500, -1.0000],
    color: "#FFB300",
    description: "Site minier important.",
  },
  {
    name: "Bukavu",
    coordinates: [28.8428, -2.4908],
    color: "#FFB300",
    description: "Ville du Sud-Kivu.",
  },
  {
    name: "Bule",
    coordinates: [30.6000, 1.9167],
    color: "#FFB300",
    description: "Localité de l'Ituri.",
  },
  {
    name: "Bunia",
    coordinates: [30.2522, 1.5594],
    color: "#FFB300",
    description: "Chef-lieu de l'Ituri.",
  },
  {
    name: "Butembo",
    coordinates: [29.2912, 0.1416],
    color: "#FFB300",
    description: "Ville commerciale du Nord-Kivu.",
  },
  {
    name: "Durba",
    coordinates: [28.0333, 3.4833],
    color: "#FFB300",
    description: "Ville minière du Haut-Uele.",
  },
  {
    name: "Geti",
    coordinates: [29.3167, -1.9500],
    color: "#FFB300",
    description: "Localité du Sud-Kivu.",
  },
  {
    name: "Kalemie",
    coordinates: [29.1947, -5.9475],
    color: "#FFB300",
    description: "Ville portuaire du Tanganyika.",
  },
  {
    name: "Kirumba",
    coordinates: [29.1667, -0.5833],
    color: "#FFB300",
    description: "Ville du Nord-Kivu.",
  },
  {
    name: "Kisangani",
    coordinates: [25.2001, 0.5153],
    color: "#FFB300",
    description: "Grande ville de la Tshopo.",
  },
  {
    name: "Kitshanga",
    coordinates: [28.5667, -1.0500],
    color: "#FFB300",
    description: "Localité du Nord-Kivu.",
  },
  {
    name: "Komanda",
    coordinates: [29.6167, 1.1833],
    color: "#FFB300",
    description: "Localité de l'Ituri.",
  },
  {
    name: "Mahagi",
    coordinates: [31.1500, 2.2833],
    color: "#FFB300",
    description: "Ville frontalière de l'Ituri.",
  },
  {
    name: "Minova",
    coordinates: [28.9667, -3.4000],
    color: "#FFB300",
    description: "Ville du Sud-Kivu.",
  },
  {
    name: "Niangara",
    coordinates: [27.7333, 3.3500],
    color: "#FFB300",
    description: "Ville du Haut-Uele.",
  },
  {
    name: "Nyunzu",
    coordinates: [27.2500, -6.1500],
    color: "#FFB300",
    description: "Ville du Tanganyika.",
  },
  {
    name: "Ramogi",
    coordinates: [28.0000, 2.8000],
    color: "#FFB300",
    description: "Localité du Haut-Uele.",
  },
  {
    name: "Uvira",
    coordinates: [29.1386, -3.3958],
    color: "#FFB300",
    description: "Ville du Sud-Kivu, au bord du lac Tanganyika.",
  },
  {
    name: "Walikale",
    coordinates: [27.9833, -0.6833],
    color: "#FFB300",
    description: "Ville du Nord-Kivu.",
  },
  {
    name: "Watsa",
    coordinates: [28.0000, 3.0333],
    color: "#FFB300",
    description: "Ville du Haut-Uele.",
  },
  {
    name: "Beni",
    coordinates: [29.4731, 0.4911],
    color: "#FFB300",
    description: "Ville du Nord-Kivu.",
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

/* Styles pour le carousel des marques */
.brand-one__carousel {
  padding: 20px 0;
}

.brand-one__single {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  transition: all 0.3s ease;
}

.brand-one__single img {
  max-width: 100%;
  max-height: 80px;
  object-fit: contain;
  transition: all 0.3s ease;
}

.brand-one__single:hover img {
  opacity: 1;
}

/* Ajustements pour Swiper */
.swiper-slide {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Styles pour les témoignages */
.testimonial-onee__single {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 380px;
  padding: 60px 60px 60px;
  background: #fff;
  box-shadow: 0px 10px 60px 0px rgb(0 0 0 / 5%);
}

.testimonial-onee__author {
  bottom: -50px;
  left: 60px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.testimonial-onee__author-img img {
  width: 50px !important;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

@media (max-width: 767px) {
  .testimonial-onee__author {
    left: 24px;
    bottom: -40px;
  }
  .testimonial-onee__single {
    padding: 32px 16px 80px;
    min-height: 320px;
  }
}

.testimonial-onee__carousel .swiper-wrapper {
  overflow: visible !important;
}

@media (max-width: 1024px) {
  .testimonial-onee__single {
    padding: 32px 12px 64px;
    min-height: 320px;
  }
  .testimonial-onee__author-img img {
    width: 64px !important;
    height: 64px;
  }
}

@media (max-width: 640px) {
  .testimonial-onee__single {
    padding: 20px 20px 20px;
    min-height: 220px;
  }
  .testimonial-onee__author-img img {
    width: 48px !important;
    height: 48px;
  }
  .testimonial-onee__text {
    font-size: 16px;
    line-height: 1.4;
  }
}
</style>
