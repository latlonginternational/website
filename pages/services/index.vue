<template>
  <div>
    <!--Page Header Start-->
    <section class="page-header">
      <div
        class="page-header-bg"
        style="background-image: url(/assets/images/services/bgg.png)"
      ></div>
      <div class="container">
        <div class="page-header__inner">
          <h2>Nos services</h2>
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="/">Acceuil</a></li>
            <li class="active">Services</li>
          </ul>
        </div>
      </div>
    </section>
    <!--Page Header End-->

    <!--Services Page Start-->
    <section class="services-page">
      <div class="container">
        <div class="row">
          <div
            v-for="(item, index) in services_data"
            :key="item"
            class="col-xl-4 col-lg-4 wow fadeInUp"
            :data-wow-delay="100 * index + 'ms'"
          >
            <!--Services One Single-->
            <div class="services-one__single">
              <div class="services-one__img-box">
                <div class="services-one__img">
                  <img :src="item.image" alt="" />
                </div>
                <div class="services-one__icon">
                  <span :class="item.icon"></span>
                </div>
              </div>
              <div class="services-one__content">
                <h3 class="services-one__title">
                  <a :href="item.link">{{ item.name }}</a>
                </h3>
                <p class="services-one__text">
                  {{ item.description }}
                </p>
                <div class="services-one__bottom">
                  <a :href="item.link" class="services-one__btn"
                    >En savoir plus</a
                  >
                  <a :href="item.link" class="services-one__arrow"
                    ><span class="icon-right-arrow"></span
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Services Page End-->
  </div>
</template>

<script setup>
const services_data = [
  {
    name: "Protection",
    description:
      "Assurez une sécurité optimale avec nos solutions de protection complètes adaptées à vos besoins.",
    link: "/services/protection",
    image: "/assets/images/services/protection.png",
    icon: "icon-strategy",
  },
  {
    name: "Technologie",
    description:
      "Transformez votre sécurité avec des solutions technologiques de pointe avec notre expertise averée.",
    link: "/services/technology",
    image: "/assets/images/services/technologie.png",

    icon: "icon-mobile-analytics",
  },
  {
    name: "Consultance",
    description:
      "Une stratégie solide est la clé d'une sécurité réussie. Nous pouvons vous accompagner.",
    link: "/services/consultancy",
    image: "/assets/images/services/consultance.png",
    icon: "icon-consultant",
  },
  {
    name: "Formation",
    description:
      "Soyez prêt à faire face aux défis de sécurité grâce à nos formations professionnelles et pratiques.",
    link: "/services/training",
    image: "/assets/images/services/formation.png",
    icon: "icon-creative",
  },
  {
    name: "Autres services",
    description:
      "Une sécurité globale avec des solutions complémentaires adaptées à vos besoins spécifiques.",
    link: "/services/others-security-services",
    image: "/assets/images/services/autres services.png",
    icon: "icon-analysis",
  },
];
</script>
