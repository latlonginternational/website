<template>
  <!--Brand One Start-->
  <section class="brand-onee">
    <div class="container">
      <div class="flex justify-center items-center pt-8">
        <h2 class="text-xl font-bold">{{ t("partners.title") }}</h2>
      </div>
      <Swiper
        :modules="[Autoplay]"
        :slides-per-view="5"
        :space-between="100"
        :loop="true"
        :autoplay="{ delay: 1000 }"
        :breakpoints="{
          0: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          991: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1199: {
            slidesPerView: 7,
            spaceBetween: 100,
          },
        }"
        class="brand-one__carousel"
      >
        <SwiperSlide v-for="(brand, index) in brands" :key="index">
          <div class="brand-one__single">
            <a
              :href="brand.website"
              target="_blank"
              rel="noopener noreferrer"
              :title="brand.name"
            >
              <img :src="brand.image" :alt="brand.name" />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>

             <div class="flex justify-center flex-col sm:flex-row items-center pb-8 space-y-4 sm:space-y-0 sm:space-x-6 text-sm">
         <a
           href="https://icoca.ch/"
           class="text-conult-base flex items-center gap-2"
           target="_blank"
           rel="noopener noreferrer"
         >
           <span class="underline font-medium">{{ t("partners.discoverIcoca") }}</span>
           <span>
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="2"
               stroke="currentColor"
               class="size-4"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
               />
             </svg>
           </span>
         </a>

         <a
           href="/docs/doc-2025_LLI ICoCAAffiliateCertificate.pdf"
           class="text-conult-base flex items-center gap-2"
           target="_blank"
           rel="noopener noreferrer"
         >
           <span class="underline font-medium">{{ t("partners.ourCertificate") }}</span>
           <span>
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="2"
               stroke="currentColor"
               class="size-4"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
               />
             </svg>
           </span>
         </a>
       </div>
    </div>
  </section>
  <!--Brand One End-->
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import "swiper/css";
import "swiper/css/autoplay";

const { t } = useI18n();

interface Brand {
  name: string;
  image: string;
  website: string;
}

const brands = ref<Brand[]>([
  {
    name: "Brasimba",
    image: "/assets/images/brand/brasimba.png",
    website: "https://www.brasimba.com",
  },
  {
    name: "Easter",
    image: "/assets/images/brand/easter.png",
    website: "https://www.easter.com",
  },
  {
    name: "European Union",
    image: "/assets/images/brand/europeanunion.png",
    website: "https://european-union.europa.eu",
  },
  {
    name: "Institut français de Goma",
    image: "/assets/images/brand/instituufrancais.png",
    website: "https://www.ifrdc.org/",
  },
  {
    name: "Jane Goodall",
    image: "/assets/images/brand/janegoodall.png",
    website: "https://www.janegoodall.org",
  },
  {
    name: "OIM",
    image: "/assets/images/brand/oim.png",
    website: "https://www.iom.int",
  },
  {
    name: "SGML",
    image: "/assets/images/brand/sgml.png",
    website: "https://www.sgml.com",
  },
  {
    name: "Skyborn",
    image: "/assets/images/brand/skyborn.png",
    website: "https://skybornegroupofhospitals.com/",
  },
  {
    name: "Tearfund",
    image: "/assets/images/brand/tearfund.png",
    website: "https://www.tearfund.org",
  },
  {
    name: "TMK",
    image: "/assets/images/brand/tmk.png",
    website: "https://www.tmk.com",
  },
]);
</script>

<style scoped>
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
  opacity: 0.5;
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
</style>
