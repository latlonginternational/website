<template>
	<div class="index-page">
		<!--Main Slider Start
		:autoplay="{
					delay: 5000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true
				}"
		-->
		<section class="main-slider">
			<swiper
				:modules="[Navigation, Autoplay, EffectFade]"
				:slides-per-view="1"
				:loop="true"
				:effect="'fade'"
				:fadeEffect="{
					crossFade: true
				}"
				
				:navigation="{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}"
				class="thm-swiper__slider"
			>
				<swiper-slide v-for="(slide, index) in slides" :key="index">
					<div class="image-layer" :style="{ backgroundImage: `url(${slide.image})` }"></div>
					
					<div class="container">
						<div class="row">
							<div class="col-xl-7 max-w-[600px] mx-auto text-center">
								<div class="main-slider__content">
									<h2> <span class="leading-[1.2]">{{ t(slide.title) }}</span> </h2>
									<p>{{ t(slide.description) }}</p>
									<a :href="slide.link" class="thm-btn">{{ t(slide.button) }}</a>
								</div>
							</div>
						</div>
					</div>
				</swiper-slide>

				<!-- Navigation buttons -->
				<div class="main-slider__nav">
					<div class="swiper-button-prev">
						<i class="icon-right-arrow icon-left-arrow"></i>
					</div>
					<div class="swiper-button-next">
						<i class="icon-right-arrow"></i>
					</div>
				</div>
			</swiper>
		</section>
		<!--Main Slider End-->

		<!--Feature One Start-->

		<section class="feature-one -mt-4">
			<div class="container">
				<div class="row flex flex-wrap">
					<div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
						<!--Feature One Single-->
						<div class="feature-one__single">
							<div class="feature-one__img-box">
								<div class="feature-one__img h-64">
									<img src="/assets/images/resources/prot1.jpg" alt="" class="h-full w-full object-cover" />
								</div>
								<div class="feature-one__icon-box">
									<div class="feature-one__icon-title-box">
										<h3 class="feature-one__icon-title">
											<a href="#">{{ t('home.features.security.title') }}</a>
										</h3>
									</div>
									<div class="feature-one__icon">
										<span class="icon-strategy"></span>
									</div>
								</div>
								<div class="feature-one__hover">
									<div class="feature-one__hover-bg" style="background-image: url(/assets/images/resources/consultances.jpg)"></div>
									<div class="feature-one__hover-icon">
										<span class="icon-strategy"></span>
									</div>
									<h4 class="feature-one__hover-title">
										<a href="#">{{ t('home.features.security.hover.title') }}</a>
									</h4>
									<p class="feature-one__hover-text">{{ t('home.features.security.hover.description') }}</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
						<!--Feature One Single-->
						<div class="feature-one__single">
							<div class="feature-one__img-box">
								<div class="feature-one__img h-64">
									<img src="/assets/images/resources/protection.jpg" alt="" class="h-full w-full object-cover" />
								</div>
								<div class="feature-one__icon-box">
									<div class="feature-one__icon-title-box">
										<h3 class="feature-one__icon-title">
											<a href="/services/protection">{{ t('home.features.protection.title') }}</a>
										</h3>
									</div>
									<div class="feature-one__icon">
										<span class="icon-point-of-sale"></span>
									</div>
								</div>
								<div class="feature-one__hover">
									<div class="feature-one__hover-bg" style="background-image: url(/assets/images/resources/protections.jpg)"></div>
									<div class="feature-one__hover-icon">
										<span class="icon-point-of-sale"></span>
									</div>
									<h4 class="feature-one__hover-title">
										<a href="/services/protection">{{ t('home.features.protection.hover.title') }}</a>
									</h4>
									<p class="feature-one__hover-text">{{ t('home.features.protection.hover.description') }}</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
						<!--Feature One Single-->
						<div class="feature-one__single">
							<div class="feature-one__img-box">
								<div class="feature-one__img h-64">
									<img src="/assets/images/resources/lat1.jpg" alt="" class="h-full w-full object-cover" />
								</div>
								<div class="feature-one__icon-box">
									<div class="feature-one__icon-title-box">
										<h3 class="feature-one__icon-title">
											<a href="/services/consultancy">{{ t('home.features.consultancy.title') }}</a>
										</h3>
									</div>
									<div class="feature-one__icon">
										<span class="icon-consumer-behavior"></span>
									</div>
								</div>
								<div class="feature-one__hover">
									<div class="feature-one__hover-bg" style="background-image: url(/assets/images/resources/consultances.jpg)"></div>
									<div class="feature-one__hover-icon">
										<span class="icon-consumer-behavior"></span>
									</div>
									<h4 class="feature-one__hover-title">
										<a href="/services/consultancy/">{{ t('home.features.consultancy.hover.title') }}</a>
									</h4>
									<p class="feature-one__hover-text">{{ t('home.features.consultancy.hover.description') }}</p>
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
						<div class="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
							<div class="about-one__img">
								<img class="sm:h-[520px] object-cover" src="/assets/images/blog/art2.jpg" alt="Map showing LatLong" />
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
								<span class="section-title__tagline">{{ t('home.about.tagline') }}</span>
								<h2 class="section-title__title">{{ t('home.about.title') }}</h2>
							</div>
							<p class="-about-one__business-start-text">
								<span class="text-lg leading-[1]">
									{{ t('home.about.description') }}
								</span>
							</p>

							<div class="about-one__points-box">
								<!-- First Column -->
								<ul class="list-unstyled about-one__points">
									<li>
										<div class="icon w-4">
											<i class="fa fa-check"></i>
										</div>
										<div class="text w-full">
											<p>{{ t('home.about.points.realtime') }}</p>
										</div>
									</li>
									<li>
										<div class="icon w-4">
											<i class="fa fa-check"></i>
										</div>
										<div class="text w-full">
											<p>{{ t('home.about.points.protection') }}</p>
										</div>
									</li>
								</ul>
								<!-- Second Column -->
								<ul class="list-unstyled about-one__points about-one__points-two">
									<li>
										<div class="icon w-4">
											<i class="fa fa-check"></i>
										</div>
										<div class="text w-full">
											<p>{{ t('home.about.points.technology') }}</p>
										</div>
									</li>
									<li>
										<div class="icon w-4">
											<i class="fa fa-check"></i>
										</div>
										<div class="text w-full">
											<p>{{ t('home.about.points.solutions') }}</p>
										</div>
									</li>
								</ul>
							</div>

							<div class="about-one__bottom">
								<div class="about-one__btn-box">
									<a href="/about" class="thm-btn about-one__btn">{{ t('home.about.button') }}</a>
								</div>
								<div class="about-one__contact">
									<div class="about-one__contact-icon">
										<span class="icon-phone"></span>
									</div>
									<div class="about-one__contact-phone">
										<p class="about-one__contact-text">{{ t('home.about.contact.text') }}</p>
										<a href="tel:+243820123456">{{ t('home.about.contact.phone') }}</a>
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
				<div class="our-mission-bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style="background-image: url(/assets/images/backgrounds/nous_contacter.jpg)"></div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-xl-12">
						<div class="our-mission__inner">
							<h2 class="our-mission__title">{{ t('home.mission.title') }}</h2>
							<a href="/contact" class="thm-btn our-mission__btn">{{ t('home.mission.button') }}</a>
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
									<span class="section-title__tagline">{{ t('home.experience.tagline') }}</span>
									<h2 class="section-title__title">{{ t('home.experience.title') }}</h2>
								</div>
							</div>
						</div>
						<div class="col-xl-5">
							<div class="building-experience__top-right">
								<p class="building-experience__top-right-text">{{ t('home.experience.description') }}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="building-experience__bottom">
					<div class="row">
						<div class="col-xl-6">
							<div class="building-experience__bottom-content">
								<div class="building-experience__bottom-img">
									<img src="/assets/images/resources/pat.jpg" class="max-h-[400px] sm:w-[300px] object-cover" alt="" />
								</div>
								<!--
								<div class="building-experience__progress">
									<div class="building-experience__progress-wrap"> 
										<div class="building-experience__progress-single">
											<div class="building-experience__progress-box">
												<div class="circle-progress" data-options='{ "value": 1.0,"thickness": 4,"emptyFill": "#edf3f6","lineCap": "square", "size": 122, "fill": { "color": "#00AEEF" } }'></div>
												<span>{{ t('home.experience.progress.affordable.title') }}</span>
											</div>
											<div class="building-experience__progress-content">
												<h3>{{ t('home.experience.progress.affordable.description') }}</h3>
											</div>
										</div>
										<div class="building-experience__progress-single building-experience__progress-single-last">
											<div class="building-experience__progress-box">
												<div class="circle-progress" data-options='{ "value": 1.0,"thickness": 4,"emptyFill": "#edf3f6","lineCap": "square", "size": 122, "fill": { "color": "#00AEEF" } }'></div>
												<span>{{ t('home.experience.progress.quality.title') }}</span>
											</div>
											<div class="building-experience__progress-content">
												<h3>{{ t('home.experience.progress.quality.description') }}</h3>
											</div>
										</div>
									</div>
								</div>
								-->

								<div class="building-experience__progress">
								
									<div class="building-experience__progress-wrap">
										<div class="flex flex-col items-center justify-center building-experience__progress-single building-experience__progress-single-last">
											<div class="border-conult-base border-2 w-[120px] h-[120px] flex items-center justify-center rounded-full ">
												<div class="circle-progress " data-options='{ "value": 1.0,"thickness": 4,"emptyFill": "#edf3f6","lineCap": "square", "size": 122, "fill": { "color": "#00AEEF" } }'></div>
												<!-- /.circle-progress -->
												<span class="text-black text-2xl">100%</span>
											</div>
											<div class="building-experience__progress-content">
												<h3>
													{{ t('home.experience.progress.affordable.title') }}
												</h3>
											</div>
										</div>
										<div class=" my-8 h-[1px] bg-gray-300 w-full">
											
										</div>
										<div class="flex flex-col items-center justify-center building-experience__progress-single building-experience__progress-single-last">
											<div class="border-conult-base border-2 w-[120px] h-[120px] flex items-center justify-center rounded-full ">
												<div class="circle-progress " data-options='{ "value": 1.0,"thickness": 4,"emptyFill": "#edf3f6","lineCap": "square", "size": 122, "fill": { "color": "#00AEEF" } }'></div>
												<!-- /.circle-progress -->
												<span class="text-black text-2xl">100%</span>
											</div>
											<!-- /.about-five__progress-box -->
											<div class="building-experience__progress-content">
												<h3>
													{{ t('home.experience.progress.quality.title') }}
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
											<h4>{{ t('home.experience.faq.services.question') }}</h4>
										</div>
										<div class="accrodion-content">
											<div class="inner">
												<p>{{ t('home.experience.faq.services.answer') }}</p>
											</div>
										</div>
									</div>
									<div class="accrodion">
										<div class="accrodion-title">
											<h4>{{ t('home.experience.faq.remote.question') }}</h4>
										</div>
										<div class="accrodion-content">
											<div class="inner">
												<p>{{ t('home.experience.faq.remote.answer') }}</p>
											</div>
										</div>
									</div>
									<div class="accrodion last-chiled">
										<div class="accrodion-title">
											<h4>{{ t('home.experience.faq.quality.question') }}</h4>
										</div>
										<div class="accrodion-content">
											<div class="inner">
												<p>{{ t('home.experience.faq.quality.answer') }}</p>
											</div>
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
							<h2 class="cta-one__title">{{ t('home.cta.title') }}</h2>
							<a href="/about" class="thm-btn cta-one__btn">{{ t('home.cta.button') }}</a>
							<div class="cta-one__shape wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
								<img src="/assets/images/shapes/cta-one-shape.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--CTA One End-->

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
				<div class="absolute top-0 z-10 opacity-40 left-0 right-0 bottom-0 bg-black" style="background-image: url(/assets/images/shapes/counter-one-shape.png) s"></div>
				<div class="counter-one-shape z-0" style="background-image: url(/assets/images/shapes/counter-one-shape.png)"></div>
				<div class="counter-one-img z-0" style="background-image: url(/assets/images/resources/ref.jpg)"></div>
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
								<h2 class="counter-one__top-title">{{ t('home.counter.title') }}</h2>
							</div>
						</div>
					</div>
					<div class="counter-one__bottom">
						<div class="row">
							<div class="col-xl-12">
								<ul class="counter-one__list list-unstyled">
									<li class="counter-one__single wow fadeInUp" data-wow-delay="100ms">
										<div class="counter-one__icon">
											<span class="icon-help"></span>
										</div>
										<div class="counter-one__content">
											<h3 class="odometer" data-count="42">0</h3>
											<p class="counter-one__text">{{ t('home.counter.stats.partners.label') }}</p>
										</div>
									</li>
									<li class="counter-one__single wow fadeInUp" data-wow-delay="200ms">
										<div class="counter-one__icon">
											<span class="icon-customer-review"></span>
										</div>
										<div class="counter-one__content">
											<h3 class="odometer" data-count="1500">0</h3>
											<p class="counter-one__text">{{ t('home.counter.stats.clients.label') }}</p>
										</div>
									</li>
									<li class="counter-one__single wow fadeInUp" data-wow-delay="300ms">
										<div class="counter-one__icon">
											<span class="icon-consultant"></span>
										</div>
										<div class="counter-one__content">
											<h3 class="odometer" data-count="300">00</h3>
											<p class="counter-one__text">{{ t('home.counter.stats.experts.label') }}</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--Counter One End-->
		<!--News One Start-->
		<section class="py-20">
			<div class="container mx-auto">
				<!-- Section Title -->
				<div class="text-center mb-12">
					<span class="text-conult-base font-conult text-sm uppercase tracking-wider mb-2 block">{{ t('home.ethics.tagline') }}</span>
					<h2 class="text-3xl md:text-4xl font-conult font-bold text-conult-black">{{ t('home.ethics.title') }}</h2>
				</div>

				<!-- News Carousel -->
				<div class="relative">
					<!-- Carousel Container -->
					<div class="overflow-hidden">
						<div class="flex transition-transform duration-500 ease-in-out space-x-4" :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }">
							<div v-for="(ethique, index) in ethiques" :key="ethique.id" class="w-full sm:w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
								<DefaultCard :data="{
									...ethique,
									titre: t(ethique.titre),
									description: t(ethique.description),
									date: t(ethique.date)
								}" />
							</div>
						</div>
					</div>

					<!-- Navigation Buttons -->
					<button @click="prevSlide" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-white border border-white flex items-center justify-center text-conult-base hover:bg-conult-base hover:text-white transition-colors z-10">
						<i class="fas fa-arrow-left"></i>
					</button>
					<button @click="nextSlide" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-white border border-white flex items-center justify-center text-conult-base hover:bg-conult-base hover:text-white transition-colors z-10">
						<i class="fas fa-arrow-right"></i>
					</button>

					<!-- Dots Navigation -->
					<div class="flex justify-center mt-8 gap-2">
						<button v-for="(_, index) in totalSlides" :key="index" @click="currentSlide = index" class="w-3 h-3 rounded-full transition-colors" :class="currentSlide === index ? 'bg-conult-base' : 'bg-gray-300 hover:bg-conult-base/50'"></button>
					</div>
				</div>
			</div>
		</section>
		<!--News One End-->

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

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
import type { NavigationOptions, AutoplayOptions } from 'swiper/types'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules'
import { useI18n } from 'vue-i18n'
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

const { t } = useI18n()

interface Slide {
	image: string
	title: string
	description: string
	button: string
	link: string
}

interface Testimonial {
	text: string
	author: string
	position: string
}

interface Ethique {
	id: number
	image: string
	date: string
	auteur: string
	commentaires: number
	titre: string
	description: string
	lien: string
}

const slides = ref<Slide[]>([
	{
		image: '/assets/images/backgrounds/blo.jpg',
		title: 'home.slider.slide1.title',
		description: 'home.slider.slide1.description',
		button: 'home.slider.slide1.button',
		link: '/about'
	},
	{
		image: '/assets/images/backgrounds/image2.jpg',
		title: 'home.slider.slide2.title',
		description: 'home.slider.slide2.description',
		button: 'home.slider.slide2.button',
		link: '/services'
	},
	{
		image: '/assets/images/backgrounds/eq.jpg',
		title: 'home.slider.slide3.title',
		description: 'home.slider.slide3.description',
		button: 'home.slider.slide3.button',
		link: '/contact'
	}
])

const testimonials = ref<Testimonial[]>([
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

const ethiques = ref<Ethique[]>([
	{
		id: 1,
		image: "/assets/images/blog/ethique-conseils.jpg",
		date: 'home.ethics.items.councils.date',
		auteur: "LatLong",
		commentaires: 0,
		titre: 'home.ethics.items.councils.title',
		description: 'home.ethics.items.councils.description',
		lien: "/ethique/conseils"
	},
	{
		id: 2,
		image: "/assets/images/blog/ethique-rse.jpg",
		date: 'home.ethics.items.csr.date',
		auteur: "LatLong",
		commentaires: 0,
		titre: 'home.ethics.items.csr.title',
		description: 'home.ethics.items.csr.description',
		lien: "/ethique/rse"
	},
	{
		id: 3,
		image: "/assets/images/blog/ethique-termes.jpg",
		date: 'home.ethics.items.terms.date',
		auteur: "LatLong",
		commentaires: 0,
		titre: 'home.ethics.items.terms.title',
		description: 'home.ethics.items.terms.description',
		lien: "/ethique/termes-conditions"
	},
	{
		id: 4,
		image: "/assets/images/blog/ethique-code.jpg",
		date: 'home.ethics.items.code.date',
		auteur: "LatLong",
		commentaires: 0,
		titre: 'home.ethics.items.code.title',
		description: 'home.ethics.items.code.description',
		lien: "/ethique/code-conduite"
	},
	{
		id: 5,
		image: "/assets/images/blog/ethique-icoca.jpg",
		date: 'home.ethics.items.icoca.date',
		auteur: "LatLong",
		commentaires: 0,
		titre: 'home.ethics.items.icoca.title',
		description: 'home.ethics.items.icoca.description',
		lien: "/ethique/icoca"
	}
]);

const currentSlide = ref(0)
const autoplayInterval = ref<number | null>(null)
const windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : 0)

// Calcul du nombre d'éléments par slide selon la largeur de l'écran
const itemsPerSlide = computed(() => {
	if (windowWidth.value >= 1024) return 3; // lg
	if (windowWidth.value >= 768) return 2; // md
	return 1; // sm et en dessous
});

// Calcul du nombre total de slides
const totalSlides = computed(() => {
	return Math.ceil(ethiques.value.length / itemsPerSlide.value);
});

// Calcul de la largeur de déplacement pour chaque slide
const slideWidth = computed(() => {
	return 100 / itemsPerSlide.value;
});

// Mise à jour de la largeur de la fenêtre
const updateWindowWidth = () => {
	windowWidth.value = window.innerWidth;
	// Réinitialiser le slide courant si nécessaire
	if (currentSlide.value >= totalSlides.value) {
		currentSlide.value = 0;
	}
};

const nextSlide = () => {
	currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
};

const prevSlide = () => {
	currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value;
};

const startAutoplay = () => {
	if (autoplayInterval.value) {
		clearInterval(autoplayInterval.value)
	}
	autoplayInterval.value = window.setInterval(() => {
		nextSlide()
	}, 5000)
}

// Surveiller les changements de taille d'écran
onMounted(() => {
	window.addEventListener("resize", updateWindowWidth);
	startAutoplay();
});

onUnmounted(() => {
	window.removeEventListener("resize", updateWindowWidth);
	if (autoplayInterval.value) {
		clearInterval(autoplayInterval.value)
	}
});

// Réinitialiser l'autoplay quand on change manuellement de slide
watch(currentSlide, () => {
	if (autoplayInterval.value) {
		clearInterval(autoplayInterval.value)
	}
	startAutoplay();
});

// Définition des options Swiper
const swiperModules = [Navigation, Autoplay, EffectFade]
const swiperOptions = {
	modules: swiperModules,
	slidesPerView: 1,
	loop: true,
	effect: 'fade' as const,
	fadeEffect: {
		crossFade: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	} as NavigationOptions,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	} as AutoplayOptions
}

// Options du slider des marques
const brandSwiperOptions = {
	spaceBetween: 100,
	slidesPerView: 5,
	autoplay: { delay: 5000 },
	breakpoints: {
		"0": {
			spaceBetween: 30,
			slidesPerView: 2
		},
		"375": {
			spaceBetween: 30,
			slidesPerView: 2
		},
		"575": {
			spaceBetween: 30,
			slidesPerView: 3
		},
		"767": {
			spaceBetween: 50,
			slidesPerView: 4
		},
		"991": {
			spaceBetween: 50,
			slidesPerView: 5
		},
		"1199": {
			spaceBetween: 100,
			slidesPerView: 5
		}
	}
};

// Ajout des marques
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
</script>

<style scoped>
	/* Styles pour le carousel personnalisé */
	.carousel-container {
		@apply relative overflow-hidden;
	}

	.carousel-slide {
		@apply transition-transform duration-500 ease-in-out;
	}

	/* Styles pour les boutons de navigation */
	.carousel-button {
		@apply absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full  border border-gray-200 flex items-center justify-center text-conult-base hover:bg-conult-base hover:text-white transition-colors z-10;
	}

	.carousel-button-prev {
		@apply -left-6;
	}

	.carousel-button-next {
		@apply -right-6;
	}

	/* Styles pour les points de navigation */
	.carousel-dots {
		@apply flex justify-center mt-8 gap-2;
	}

	.carousel-dot {
		@apply w-3 h-3 rounded-full transition-colors;
	}

	.carousel-dot-active {
		@apply bg-conult-base;
	}

	/* Ajustements pour le responsive */
	@media (max-width: 640px) {
		.carousel-button {
			@apply w-10 h-10;
		}

		.carousel-button-prev {
			@apply -left-4;
		}

		.carousel-button-next {
			@apply -right-4;
		}
	}

	.main-slider {
		position: relative;
	}

	.main-slider :deep(.swiper) {
		width: 100%;
		height: 100%;
	}

	.main-slider :deep(.swiper-slide) {
		position: relative;
		overflow: hidden;
		opacity: 0;
		transition: opacity 0.5s ease;
	}

	.main-slider :deep(.swiper-slide-active) {
		opacity: 1;
	}

	.image-layer {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-size: cover;
		background-position: center;
		transform: scale(1.1);
		transition: transform 10000ms ease;
	}

	.main-slider__content {
		position: relative;
		z-index: 2;
	}

	.main-slider__content h2 {
		font-size: 60px;
		color: #ffffff;
		font-weight: 700;
		line-height: 1.2em;
		margin-bottom: 20px;
		opacity: 0;
		transform: translateY(30px);
		transition: transform 1000ms ease, opacity 1000ms ease;
	}

	.main-slider__content p {
		font-size: 20px;
		color: #ffffff;
		line-height: 34px;
		margin-bottom: 30px;
		opacity: 0;
		transform: translateY(30px);
		transition: transform 1000ms ease, opacity 1000ms ease;
		transition-delay: 100ms;
	}

	.main-slider__content .thm-btn {
		opacity: 0;
		transform: translateY(30px);
		transition: transform 1000ms ease, opacity 1000ms ease;
		transition-delay: 200ms;
	}

	.main-slider :deep(.swiper-slide-active) .main-slider__content h2,
	.main-slider :deep(.swiper-slide-active) .main-slider__content p,
	.main-slider :deep(.swiper-slide-active) .main-slider__content .thm-btn {
		opacity: 1;
		transform: translateY(0);
	}

	.main-slider__nav {
		position: absolute;
		top: 20px;
		left: 0;
		right: 0;
		transform: none;
		display: flex;
		justify-content: center;
		gap: 1rem;
		z-index: 10;
		padding: 0 1rem;
		width: 100%;
		max-width: 100%;
	}

	.main-slider__nav :deep(.swiper-button-next),
	.main-slider__nav :deep(.swiper-button-prev) {
		position: relative;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 1);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
		margin: 0;
		flex: 0 0 auto;
	}

	.main-slider__nav :deep(.swiper-button-next:hover),
	.main-slider__nav :deep(.swiper-button-prev:hover) {
		background-color: var(--conult-base);
	}

	.main-slider__nav :deep(.swiper-button-next:hover i),
	.main-slider__nav :deep(.swiper-button-prev:hover i) {
		color: #ffffff;
	}

	.main-slider__nav :deep(.swiper-button-next i),
	.main-slider__nav :deep(.swiper-button-prev i) {
		font-size: 16px;
		color: var(--conult-base);
		transition: all 0.3s ease;
	}

	@media (min-width: 768px) {
		.main-slider__nav {
			top: 50%;
			left: 0;
			right: 0;
			transform: none;
			justify-content: space-between;
			padding: 0 2rem;
			max-width: 1320px; /* Largeur standard du container */
			margin: 0 auto;
		}

		.main-slider__nav :deep(.swiper-button-next),
		.main-slider__nav :deep(.swiper-button-prev) {
			width: 50px;
			height: 50px;
		}

		.main-slider__nav :deep(.swiper-button-next i),
		.main-slider__nav :deep(.swiper-button-prev i) {
			font-size: 18px;
		}
	}

	.main-slider-shape-1,
	.main-slider-shape-2,
	.main-slider-shape-3 {
		position: absolute;
		z-index: 1;
	}

	.main-slider-shape-1 {
		top: 0;
		right: 0;
	}

	.main-slider-shape-2 {
		bottom: 0;
		left: 0;
	}

	.main-slider-shape-3 {
		top: 50%;
		right: 0;
		transform: translateY(-50%);
	}

	@media (max-width: 991px) {
		.main-slider__content {
			padding-top: 0px;
			padding-bottom: 0px;
		}

		.main-slider__content h2 {
			font-size: 40px;
		}
	}

	@media (max-width: 767px) {
		.main-slider__content {
			padding-top: 0px;
			padding-bottom: 0px;
		}

		.main-slider__content h2 {
			font-size: 30px;
		}

		.main-slider__content p {
			font-size: 16px;
			line-height: 28px;
		}
	}

	.testimonial-onee__single {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		min-height: 380px; /* Ajuste selon le contenu */
		padding: 60px 60px 60px; /* padding-bottom augmenté */
		background: #fff;
		box-shadow: 0px 10px 60px 0px rgb(0 0 0 / 5%);
	}

	.testimonial-onee__author {
		bottom: -50px; /* Ajuste selon la taille de l'avatar */
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
		opacity: 0.7;
		filter: grayscale(0%);

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
</style>
