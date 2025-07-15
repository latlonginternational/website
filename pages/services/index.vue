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
          <h2>{{ t('services.pageHeader.title') }}</h2>
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="/">{{ t('services.pageHeader.breadcrumb.home') }}</a></li>
            <li class="active">{{ t('services.pageHeader.breadcrumb.current') }}</li>
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
            :key="item.id"
            class="col-xl-4 col-lg-4 wow fadeInUp"
            :data-wow-delay="100 * index + 'ms'"
          >
            <!--Services One Single-->
            <div class="services-one__single">
              <div class="services-one__img-box">
                <div class="services-one__img">
                  <img :src="item.image" class="max-h-[250px] object-cover" :alt="t(`services.items.${item.id}.title`)" />
                </div>
                <div class="services-one__icon">
                  <span :class="item.icon"></span>
                </div>
              </div>
              <div class="services-one__content">
                <h3 class="services-one__title">
                  <a :href="item.link">{{ t(`services.items.${item.id}.title`) }}</a>
                </h3>
                <p class="services-one__text">
                  {{ t(`services.items.${item.id}.description`) }}
                </p>
                <div class="services-one__bottom">
                  <a :href="item.link" class="services-one__btn">
                    {{ t(`services.items.${item.id}.button`) }}
                  </a>
                  <a :href="item.link" class="services-one__arrow">
                    <span class="icon-right-arrow"></span>
                  </a>
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
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const services_data = [
  {
    id: "protection",
    image: "/assets/images/services/serv.jpg",
    icon: "icon-strategy",
    link: "/services/protection"
  },
  {
    id: "technology",
    image: "/assets/images/services/tech.png",
    icon: "icon-mobile-analytics",
    link: "/services/technology"
  },
  {
    id: "consultancy",
    image: "/assets/images/services/consultance-1.png",
    icon: "icon-consultant",
    link: "/services/consultancy"
  },
  {
    id: "training",
    image: "/assets/images/services/formation.jpeg",
    icon: "icon-creative",
    link: "/services/training"
  },
  {
    id: "others",
    image: "/assets/images/services/other.jpg",
    icon: "icon-analysis",
    link: "/services/others-security-services"
  }
];
</script>
