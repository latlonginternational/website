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
						<div class="image-layer" style="background-image: url(/assets/images/backgrounds/blo.jpg)"></div>
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

					
										<h2>Des solutions adaptées</h2>
										<p>LatLong, votre partenaire pour des solutions de sécurité fiables.</p>
										<a href="/about" class="thm-btn">En savoir plus</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- deuxieme slide -->
					<div class="swiper-slide">
						<div class="image-layer" style="background-image: url(/assets/images/backgrounds/image2.jpg)"></div>
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
										<h2>Des technologies modernes</h2>
										<p>Protégez vos actifs avec des solutions avancées.</p>
										<a href="/services" class="thm-btn">Découvrez nos services</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- troisieme slide -->
					<div class="swiper-slide">
						<div class="image-layer" style="background-image: url(/assets/images/backgrounds/eq.jpg)"></div>
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
											Une équipe <br />
											de confiance
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
									<img src="/assets/images/resources/prot1.jpg" alt="" class="h-full w-full object-cover" />
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
									<div class="feature-one__hover-bg" style="background-image: url(~/assets/images/resources/consultances.jpg)"></div>
									<div class="feature-one__hover-icon">
										<span class="icon-strategy"></span>
									</div>
									<h4 class="feature-one__hover-title">
										<a href="#">Sécurité</a>
									</h4>
									<p class="feature-one__hover-text">Transport de fonds, évacuations d'urgence, lutte contre l'incendie, assistance médicale, rapports de sécurité, alertes.</p>
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
											<a href="/services/protection">Protection</a>
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
										<a href="/services/protection">Protection</a>
									</h4>
									<p class="feature-one__hover-text">Surveillance humaine, intervention, salle de contrôle, escortes, protection VIP, sécurité événementielle, ...</p>
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
											<a href="/services/consultancy">Consultance</a>
										</h3>
									</div>
									<div class="feature-one__icon">
										<span class="icon-consumer-behavior"></span>
									</div>
								</div>
								<div class="feature-one__hover">
									<div class="feature-one__hover-bg" style="background-image: url(~/assets/images/resources/consultances.jpg)"></div>
									<div class="feature-one__hover-icon">
										<span class="icon-consumer-behavior"></span>
									</div>
									<h4 class="feature-one__hover-title">
										<a href="/services/consultancy/">Consultance</a>
									</h4>
									<p class="feature-one__hover-text">Évaluations de sécurité, gestion des missions, stratégie, plans d'évacuation et gestion de crise.</p>
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
								<img class="h-[520px] object-cover" src="/assets/images/blog/art2.jpg" alt="Map showing LatLong" />
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
								<span class="section-title__tagline">Notre offre</span>
								<h2 class="section-title__title">Votre partenaire en gestion de sécurité</h2>
							</div>
							<p class="about-one__business-start-text">LatLong vous offre des outils modernes pour une sécurité renforcée et une gestion optimisée de vos opérations.</p>

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
								<ul class="list-unstyled about-one__points about-one__points-two">
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
									<a href="/about" class="thm-btn about-one__btn">En savoir plus</a>
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
				<div class="our-mission-bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style="background-image: url(/assets/images/backgrounds/nous_contacter.jpg)"></div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-xl-12">
						<div class="our-mission__inner">
							<h2 class="our-mission__title">Garantir votre <br /><span>sécurité</span> est notre mission.</h2>
							<a href="/contact" class="thm-btn our-mission__btn">Nous contacter</a>
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
									<span class="section-title__tagline">Avantages & Solutions</span>
									<h2 class="section-title__title">
										Expertise & <br />
										Haute Satisfaction
									</h2>
								</div>
							</div>
						</div>
						<div class="col-xl-5">
							<div class="building-experience__top-right">
								<p class="building-experience__top-right-text">LatLong offre des solutions de sécurité fiables, combinant expertise locale et technologies avancées.</p>
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
												<div class="circle-progress" data-options='{ "value": 1.0,"thickness": 4,"emptyFill": "#edf3f6","lineCap": "square", "size": 122, "fill": { "color": "#00AEEF" } }'></div>
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
										<div class="building-experience__progress-single building-experience__progress-single-last">
											<div class="building-experience__progress-box">
												<div class="circle-progress" data-options='{ "value": 1.0,"thickness": 4,"emptyFill": "#edf3f6","lineCap": "square", "size": 122, "fill": { "color": "#00AEEF" } }'></div>
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
											<h4>Quels types de services offre LatLong ?</h4>
										</div>
										<div class="accrodion-content">
											<div class="inner">
												<p>LatLong propose des services de sécurité physique, de surveillance électronique, de gestion des risques et de protection d'événements, adaptés aux besoins spécifiques de ses clients.</p>
											</div>
											<!-- /.inner -->
										</div>
									</div>
									<div class="accrodion">
										<div class="accrodion-title">
											<h4>LatLong peut-il intervenir dans des zones éloignées ?</h4>
										</div>
										<div class="accrodion-content">
											<div class="inner">
												<p>Oui, LatLong est équipé pour fournir des services dans des zones éloignées ou difficiles d'accès grâce à une équipe expérimentée et des outils adaptés à ces environnements.</p>
											</div>
											<!-- /.inner -->
										</div>
									</div>
									<div class="accrodion last-chiled">
										<div class="accrodion-title">
											<h4>Comment LatLong garantit-il la qualité de ses services ?</h4>
										</div>
										<div class="accrodion-content">
											<div class="inner">
												<p>La qualité est assurée grâce à une formation continue du personnel, l'utilisation de technologies de pointe, et un suivi régulier pour s'assurer que les besoins des clients sont toujours satisfaits.</p>
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
		<section class="testimonial-one">
			<div class="testimonial-one-map" style="background-image: url(/assets/images/shapes/testimonial-one-map.png)"></div>
			<div class="container">
				<div class="section-title text-center">
					<span class="section-title__tagline">Nos témoignages</span>
					<h2 class="section-title__title">Ce qu'ils disent</h2>
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
								<p class="testimonial-one__text">LatLong a transformé notre gestion de sécurité. L'équipe est proactive et toujours disponible pour répondre à nos besoins spécifiques.</p>
								<div class="testimonial-one__author">
									<div class="testimonial-one__author-img">
										<img src="/assets/images/testimonial/avatar3.jpg" alt="" />
									</div>
									<div class="testimonial-one__author-details">
										<h4 class="testimonial-one__author-name">Christine Muhindo</h4>
										<p class="testimonial-one__author-title">CEO - Amaliza Store</p>
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
								<p class="testimonial-one__text">Nous travaillons avec LatLong depuis plusieurs années. Leur professionnalisme et leur engagement sont exceptionnels.</p>
								<div class="testimonial-one__author">
									<div class="testimonial-one__author-img">
										<img src="/assets/images/testimonial/avatar6.jpg" alt="" />
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
								<p class="testimonial-one__text">LatLong nous a aidés à sécuriser nos opérations. Nous recommandons leurs services à toute organisation recherchant une sécurité fiable.</p>
								<div class="testimonial-one__author">
									<div class="testimonial-one__author-img">
										<img src="/assets/images/testimonial/avatar5.jpg" alt="" />
									</div>
									<div class="testimonial-one__author-details">
										<h4 class="testimonial-one__author-name">Jessica Byamungu</h4>
										<p class="testimonial-one__author-title">Directrice Habana Habi</p>
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
		<!--Counter One End-->
		<!--News One Start-->
		<section class="py-20">
			<div class="container mx-auto">
				<!-- Section Title -->
				<div class="text-center mb-12">
					<span class="text-conult-base font-conult text-sm uppercase tracking-wider mb-2 block">Éthiques</span>
					<h2 class="text-3xl md:text-4xl font-conult font-bold text-conult-black">Nos principes éthiques</h2>
				</div>

				<!-- News Carousel -->
				<div class="relative">
					<!-- Carousel Container -->
					<div class="overflow-hidden">
						<div class="flex transition-transform duration-500 ease-in-out space-x-4" 
							 :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }">
							<div v-for="ethique in ethiques" :key="ethique.id" 
								 class="w-full sm:w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
								<DefaultCard :data="ethique" />
							</div>
						</div>
					</div>

					<!-- Navigation Buttons -->
					<button @click="prevSlide" 
							class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-conult-base hover:bg-conult-base hover:text-white transition-colors z-10">
						<i class="fas fa-arrow-left"></i>
					</button>
					<button @click="nextSlide" 
							class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-conult-base hover:bg-conult-base hover:text-white transition-colors z-10">
						<i class="fas fa-arrow-right"></i>
					</button>

					<!-- Dots Navigation -->
					<div class="flex justify-center mt-8 gap-2">
						<button v-for="(_, index) in totalSlides" 
								:key="index"
								@click="currentSlide = index"
								class="w-3 h-3 rounded-full transition-colors"
								:class="currentSlide === index ? 'bg-conult-base' : 'bg-gray-300 hover:bg-conult-base/50'">
						</button>
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

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

const ethiques = [
	{
		id: 1,
		image: '/assets/images/blog/ethique-conseils.jpg',
		date: '15 Mars 2024',
		auteur: 'LatLong',
		commentaires: 0,
		titre: 'Conseils',
		description: 'Nos principes directeurs et conseils pour maintenir les plus hauts standards éthiques dans nos opérations quotidiennes.',
		lien: '/ethique/conseils'
	},
	{
		id: 2,
		image: '/assets/images/blog/ethique-rse.jpg',
		date: '20 Mars 2024',
		auteur: 'LatLong',
		commentaires: 0,
		titre: 'Responsabilité sociétale de l\'Entreprise',
		description: 'Notre engagement envers le développement durable, l\'impact social positif et la protection de l\'environnement.',
		lien: '/ethique/rse'
	},
	{
		id: 3,
		image: '/assets/images/blog/ethique-termes.jpg',
		date: '25 Mars 2024',
		auteur: 'LatLong',
		commentaires: 0,
		titre: 'Termes et conditions',
		description: 'Les conditions générales qui régissent nos services et notre relation avec nos clients et partenaires.',
		lien: '/ethique/termes-conditions'
	},
	{
		id: 4,
		image: '/assets/images/blog/ethique-code.jpg',
		date: '30 Mars 2024',
		auteur: 'LatLong',
		commentaires: 0,
		titre: 'Code de conduite',
		description: 'Notre Code de conduite professionnel qui guide le comportement de nos employés et partenaires.',
		lien: '/ethique/code-conduite'
	},
	{
		id: 5,
		image: '/assets/images/blog/ethique-icoca.jpg',
		date: '5 Avril 2024',
		auteur: 'LatLong',
		commentaires: 0,
		titre: 'ICoCA - International Code of Conduct Association',
		description: 'Notre adhésion et conformité aux standards internationaux de l\'ICoCA pour les services de sécurité privée.',
		lien: '/ethique/icoca'
	}
];

const currentSlide = ref(0)
const autoplayInterval = ref(null)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0)

// Calcul du nombre d'éléments par slide selon la largeur de l'écran
const itemsPerSlide = computed(() => {
	if (windowWidth.value >= 1024) return 3 // lg
	if (windowWidth.value >= 768) return 2  // md
	return 1 // sm et en dessous
})

// Calcul du nombre total de slides
const totalSlides = computed(() => {
	return Math.ceil(ethiques.length / itemsPerSlide.value)
})

// Calcul de la largeur de déplacement pour chaque slide
const slideWidth = computed(() => {
	return (100 / itemsPerSlide.value)
})

// Mise à jour de la largeur de la fenêtre
const updateWindowWidth = () => {
	windowWidth.value = window.innerWidth
	// Réinitialiser le slide courant si nécessaire
	if (currentSlide.value >= totalSlides.value) {
		currentSlide.value = 0
	}
}

const nextSlide = () => {
	currentSlide.value = (currentSlide.value + 1) % totalSlides.value
}

const prevSlide = () => {
	currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value
}

const startAutoplay = () => {
	autoplayInterval.value = setInterval(() => {
		nextSlide()
	}, 5000)
}

const stopAutoplay = () => {
	if (autoplayInterval.value) {
		clearInterval(autoplayInterval.value)
	}
}

// Surveiller les changements de taille d'écran
onMounted(() => {
	window.addEventListener('resize', updateWindowWidth)
	startAutoplay()
})

onUnmounted(() => {
	window.removeEventListener('resize', updateWindowWidth)
	stopAutoplay()
})

// Réinitialiser l'autoplay quand on change manuellement de slide
watch(currentSlide, () => {
	stopAutoplay()
	startAutoplay()
})
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
	@apply absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-conult-base hover:bg-conult-base hover:text-white transition-colors z-10;
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
</style>
