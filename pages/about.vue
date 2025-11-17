<template>
	<div>
		<!--Page Header Start-->
		<section class="page-header">
			<div class="page-header-bg" style="background-image: url(/assets/images/backgrounds/image1.png)"></div>
			<div class="container">
				<div class="page-header__inner">
					<h2>{{ t("about.pageHeader.title") }}</h2>
					<ul class="thm-breadcrumb list-unstyled">
						<li>
							<a href="/">{{ t("about.pageHeader.breadcrumb.home") }}</a>
						</li>
						<li class="active">{{ t("about.pageHeader.breadcrumb.current") }}</li>
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
								<span class="section-title__tagline">{{ t("about.getToKnow.tagline") }}</span>
								<h2 class="section-title__title">{{ t("about.getToKnow.title") }}</h2>
							</div>
							<p class="get-to-know__text">{{ t("about.getToKnow.description") }}</p>
							<ul class="list-unstyled get-to-know__points">
								<li>
									<div class="icon">
										<i class="fa fa-check"></i>
									</div>
									<div class="text">
										<p>{{ t("about.getToKnow.points.qualified") }}</p>
									</div>
								</li>
								<li>
									<div class="icon">
										<i class="fa fa-check"></i>
									</div>
									<div class="text">
										<p>{{ t("about.getToKnow.points.technology") }}</p>
									</div>
								</li>
								<li>
									<div class="icon">
										<i class="fa fa-check"></i>
									</div>
									<div class="text">
										<p>{{ t("about.getToKnow.points.approach") }}</p>
									</div>
								</li>
								<li>
									<div class="icon">
										<i class="fa fa-check"></i>
									</div>
									<div class="text">
										<p>{{ t("about.getToKnow.points.commitment") }}</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-xl-7">
						<div class="get-to-know__right">
							<ul class="get-to-know__images list-unstyled">
								<li>
									<div class="get-to-know__img-1 sm:block hidden">
										<img src="/assets/images/resources/blacks.jpg" alt="Équipe Latlong" />
									</div>
								</li>
								<li>
									<div class="get-to-know__img-2">
										<img src="/assets/images/resources/a propos-partmatsec1.png" alt="Opérations Latlong" />
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
					<span class="section-title__tagline">{{ t("about.visionMission.tagline") }}</span>
					<h2 class="section-title__title text-3xl sm:text-5xl font-medium">{{ t("about.visionMission.title") }}</h2>
				</div>
				<div class="row space-y-4 md:space-y-0">
					<div class="col-xl-4 col-lg-4">
						<div class="vision-box">
							<h3 class="vision-title text-xl sm:text-2xl font-medium">{{ t("about.visionMission.vision.title") }}</h3>
							<p class="mt-2">{{ t("about.visionMission.vision.description") }}</p>
						</div>
					</div>
					<div class="col-xl-4 col-lg-4">
						<div class="mission-box">
							<h3 class="mission-title text-xl sm:text-2xl font-medium">{{ t("about.visionMission.mission.title") }}</h3>
							<p class="mt-2">{{ t("about.visionMission.mission.description") }}</p>
						</div>
					</div>
					<div class="col-xl-4 col-lg-4">
						<div class="objective-box">
							<h3 class="objective-title text-xl sm:text-2xl font-medium">{{ t("about.visionMission.objectives.title") }}</h3>
							<ul class="list-unstyled mt-2">
								<li class="flex items-start gap-2">
									<i class="fa fa-check-circle"></i>
									<span class="-mt-1">{{ t("about.visionMission.objectives.items.integrity") }}</span>
								</li>

								<li class="flex items-start gap-2 mt-2">
									<i class="fa fa-check-circle"></i>
									<span class="-mt-1">{{ t("about.visionMission.objectives.items.excellence") }}</span>
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
					<h2 class="section-title__title">{{ t("about.operationalZone.title") }}</h2>
				</div>
				<div class="row">
					<div class="col-xl-12">
						<div class="operational-zone-map relative border border-gray-300 rounded-lg">
							<div class="p-4">
								<p class="text-center">{{ t("about.operationalZone.description") }}</p>
							</div>
							<div id="map" style="height: 500px; width: 100%; margin-top: 20px; overflow: hidden"></div>

							<!-- Div pour afficher les données de la ville -->
							<div id="city-popup" class="city-popup" style="display: none">
								<div class="city-popup-content">
									<button class="city-popup-close" onclick="closeCityPopup()" :title="t('map.close')">×</button>
									<h4 id="city-name"></h4>
									<p id="city-province"></p>
									<p id="city-description"></p>
								</div>
							</div>
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
					<span class="section-title__tagline">{{ t("home.testimonials.tagline") }}</span>
					<h2 class="section-title__title">{{ t("home.testimonials.title") }}</h2>
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
											<img :src="`${t(`home.testimonials.items.${index + 1}.image`)}`" alt="" />
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
								<h2 class="counter-one__top-title">{{ t("home.counter.title") }}</h2>
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
											<h3 class="odometer" data-count="52">0</h3>
											<p class="counter-one__text">{{ t("home.counter.stats.partners.label") }}</p>
										</div>
									</li>
									<li class="counter-one__single wow fadeInUp" data-wow-delay="200ms">
										<div class="counter-one__icon">
											<span class="icon-customer-review"></span>
										</div>
										<div class="counter-one__content">
											<h3 class="odometer" data-count="304">0</h3>
											<p class="counter-one__text">{{ t("home.counter.stats.clients.label") }}</p>
										</div>
									</li>
									<li class="counter-one__single wow fadeInUp" data-wow-delay="300ms">
										<div class="counter-one__icon">
											<span class="icon-consultant"></span>
										</div>
										<div class="counter-one__content">
											<h3 class="odometer" data-count="1517">00</h3>
											<p class="counter-one__text">{{ t("home.counter.stats.experts.label") }}</p>
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

		<!--Team Two Start-->
		<section class="team-two">
			<div class="container">
				<div class="section-title text-center">
					<span class="section-title__tagline">{{ t("about.team.tagline") }}</span>
					<h2 class="section-title__title">{{ t("about.team.title") }}</h2>
				</div>
				<div class="row">
					<div v-for="(member, index) in teamMembers" :key="index" class="col-xl-3 col-lg-3 wow fadeInUp" :data-wow-delay="`${(index + 1) * 100}ms`">
						<div class="team-one__single">
							<div class="team-one__img">
								<img :src="member.image" :alt="`${member.name}, ${member.position}`" />
								<ul class="list-unstyled team-one__social">
									<li>
										<a :href="`mailto:${member.email}`">
											<i class="fas fa-envelope"></i>
										</a>
									</li>
									<li>
										<a :href="`tel:${member.tel}`">
											<i class="fas fa-phone"></i>
										</a>
									</li>
									<li>
										<a :href="member.linkedin" target="_blank"><i class="fab fa-linkedin"></i></a>
									</li>
								</ul>
							</div>
							<div class="team-one__content">
								<h4 class="team-one__name">{{ member.name }}</h4>
								<p class="team-one__title">{{ member.position }}</p>
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
							<h2 class="cta-one__title">{{ t("about.cta.title") }}</h2>
							<a href="/contact" class="thm-btn cta-one__btn">{{ t("about.cta.button") }}</a>
							<div class="cta-one__shape wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
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
	import { onMounted, ref } from "vue";
	import mapboxgl from "mapbox-gl";
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Autoplay, Pagination } from "swiper/modules";
	import { useI18n } from "vue-i18n";
	import "swiper/css";
	import "swiper/css/pagination";
	import "swiper/css/autoplay";

	const { t } = useI18n();

	const testimonials = ref([
		{
			text: "home.testimonials.items.1.text",
			author: "home.testimonials.items.1.author",
			position: "home.testimonials.items.1.position"
		},
		{
			text: "home.testimonials.items.2.text",
			author: "home.testimonials.items.2.author",
			position: "home.testimonials.items.2.position"
		},
		{
			text: "home.testimonials.items.3.text",
			author: "home.testimonials.items.3.author",
			position: "home.testimonials.items.3.position"
		}
	]);

	const teamMembers = ref([
		{
			name: t("about.team.items.1.name"),
			position: t("about.team.items.1.position"),
			image: t("about.team.items.1.image"),
			tel: t("about.team.items.1.tel"),
			email: `${t("about.team.items.1.email.name")}@${t("about.team.items.1.email.domain")}`,
			linkedin: t("about.team.items.1.linkedin")
		},
		{
			name: t("about.team.items.2.name"),
			position: t("about.team.items.2.position"),
			image: t("about.team.items.2.image"),
			tel: t("about.team.items.2.tel"),
			email: `${t("about.team.items.2.email.name")}@${t("about.team.items.2.email.domain")}`,
			linkedin: t("about.team.items.2.linkedin")
		},
		{
			name: t("about.team.items.3.name"),
			position: t("about.team.items.3.position"),
			image: t("about.team.items.3.image"),
			tel: t("about.team.items.3.tel"),
			email: `${t("about.team.items.3.email.name")}@${t("about.team.items.3.email.domain")}`,
			linkedin: t("about.team.items.3.linkedin")
		},
		{
			name: t("about.team.items.4.name"),
			position: t("about.team.items.4.position"),
			image: t("about.team.items.4.image"),
			tel: t("about.team.items.4.tel"),
			email: `${t("about.team.items.4.email.name")}@${t("about.team.items.4.email.domain")}`,
			linkedin: t("about.team.items.4.linkedin")
		},
		{
			name: t("about.team.items.5.name"),
			position: t("about.team.items.5.position"),
			image: t("about.team.items.5.image"),
			tel: t("about.team.items.5.tel"),
			email: `${t("about.team.items.5.email.name")}@${t("about.team.items.5.email.domain")}`,
			linkedin: t("about.team.items.5.linkedin")
		}
	]);

	useHead({
		link: [
			{
				rel: "stylesheet",
				href: "https://api.mapbox.com/mapbox-gl-js/v3.8.0/mapbox-gl.css"
			}
		]
	});

	onMounted(() => {
		// Fonction globale pour fermer le popup
		window.closeCityPopup = function () {
			const cityPopup = document.getElementById("city-popup");
			if (cityPopup) {
				cityPopup.style.display = "none";
			}
		};

		// Initialiser le token d'accès Mapbox
		mapboxgl.accessToken = "pk.eyJ1IjoiY2FwdGFpbnZpbmNlIiwiYSI6ImNtZGs4NThqeDBuMzIyc3F5eHdwZmllamYifQ.tKseNa9WiD6oUe72PMDTNA";

		// Initialiser la carte
		const map = new mapboxgl.Map({
			container: "map", // L'ID ou la classe de l'élément HTML contenant la carte
			style: "mapbox://styles/captainvince/cmdk7nec9007z01r1bd5ifwtj",
			center: [23.656, -2.882], // Centré sur la RDC
			zoom: 4,
			maxBounds: [
				[8.0, -16.0], // Sud-ouest (longitude, latitude) - très large pour voir toute la RDC
				[35.0, 8.0] // Nord-est (longitude, latitude) - très large pour voir toute la RDC
			],
			minZoom: 3,
			maxZoom: 8
		});

		// Données pour les marqueurs des villes
		const cities = [
			{
				name: "Kinshasa",
				province: "Kinshasa",
				coordinates: [15.3136, -4.3276],
				color: "#00AEEF",
				description: "Capitale politique et économique de la RDC."
			},
			{
				name: "Goma",
				province: "Nord-Kivu",
				coordinates: [29.2333, -1.6833],
				color: "#00AEEF",
				description: "Base principale de nos opérations."
			},
			{
				name: "Lubumbashi",
				province: "Haut-Katanga",
				coordinates: [27.4794, -11.6609],
				color: "#00AEEF",
				description: "Hub minier et centre économique du Katanga."
			},
			{
				name: "Bisie",
				province: "Nord-Kivu",
				coordinates: [27.25, -1.0],
				color: "#00AEEF",
				description: "Site minier important."
			},
			{
				name: "Bukavu",
				province: "Sud-Kivu",
				coordinates: [28.8428, -2.4908],
				color: "#00AEEF",
				description: "Ville du Sud-Kivu."
			},
			{
				name: "Bule",
				province: "Ituri",
				coordinates: [30.6, 1.9167],
				color: "#00AEEF",
				description: "Localité de l'Ituri."
			},
			{
				name: "Bunia",
				province: "Ituri",
				coordinates: [30.2522, 1.5594],
				color: "#00AEEF",
				description: "Chef-lieu de l'Ituri."
			},
			{
				name: "Butembo",
				province: "Nord-Kivu",
				coordinates: [29.2912, 0.1416],
				color: "#00AEEF",
				description: "Ville commerciale du Nord-Kivu."
			},
			{
				name: "Durba",
				province: "Haut-Uele",
				coordinates: [28.0333, 3.4833],
				color: "#00AEEF",
				description: "Ville minière du Haut-Uele."
			},
			{
				name: "Geti",
				province: "Ituri",
				coordinates: [30.0900882, 1.1658949],
				color: "#00AEEF",
				description: "Ville du territoire d'Irumu dans la province de l'Ituri."
			},
			{
				name: "Kalemie",
				province: "Tanganyika",
				coordinates: [29.1947, -5.9475],
				color: "#00AEEF",
				description: "Ville portuaire du Tanganyika."
			},
			{
				name: "Kirumba",
				province: "Nord-Kivu",
				coordinates: [29.1667, -0.5833],
				color: "#00AEEF",
				description: "Ville du Nord-Kivu."
			},
			{
				name: "Kisangani",
				province: "Tshopo",
				coordinates: [25.2001, 0.5153],
				color: "#00AEEF",
				description: "Grande ville de la Tshopo."
			},
			{
				name: "Kitshanga",
				province: "Nord-Kivu",
				coordinates: [28.5667, -1.05],
				color: "#00AEEF",
				description: "Localité du Nord-Kivu."
			},
			{
				name: "Komanda",
				province: "Ituri",
				coordinates: [29.6167, 1.1833],
				color: "#00AEEF",
				description: "Localité de l'Ituri."
			},
			{
				name: "Mahagi",
				province: "Ituri",
				coordinates: [31.15, 2.2833],
				color: "#00AEEF",
				description: "Ville frontalière de l'Ituri."
			},
			{
				name: "Minova",
				province: "Sud-Kivu",
				coordinates: [28.9667, -3.4],
				color: "#00AEEF",
				description: "Ville du Sud-Kivu."
			},
			{
				name: "Niangara",
				province: "Haut-Uele",
				coordinates: [27.7333, 3.35],
				color: "#00AEEF",
				description: "Ville du Haut-Uele."
			},
			{
				name: "Nyunzu",
				province: "Tanganyika",
				coordinates: [27.25, -6.15],
				color: "#00AEEF",
				description: "Ville du Tanganyika."
			},
			{
				name: "Ramogi",
				province: "Haut-Uele",
				coordinates: [28.0, 2.8],
				color: "#00AEEF",
				description: "Localité du Haut-Uele."
			},
			{
				name: "Uvira",
				province: "Sud-Kivu",
				coordinates: [29.1386, -3.3958],
				color: "#00AEEF",
				description: "Ville du Sud-Kivu, au bord du lac Tanganyika."
			},
			{
				name: "Walikale",
				province: "Nord-Kivu",
				coordinates: [27.9833, -0.6833],
				color: "#00AEEF",
				description: "Ville du Nord-Kivu."
			},
			{
				name: "Watsa",
				province: "Haut-Uele",
				coordinates: [28.0, 3.0333],
				color: "#00AEEF",
				description: "Ville du Haut-Uele."
			},
			{
				name: "Beni",
				province: "Nord-Kivu",
				coordinates: [29.4731, 0.4911],
				color: "#00AEEF",
				description: "Ville du Nord-Kivu."
			}
		];

		// Fonction pour créer un marqueur coloré avec nom
		function createColoredMarker(color, name) {
			const markerContainer = document.createElement("div");
			markerContainer.style.display = "flex";
			markerContainer.style.flexDirection = "column";
			markerContainer.style.alignItems = "center";
			markerContainer.style.cursor = "pointer";

			const marker = document.createElement("div");
			marker.className = "marker";
			marker.style.backgroundColor = color;
			marker.style.width = "20px";
			marker.style.height = "20px";
			marker.style.borderRadius = "50%";
			marker.style.marginBottom = "5px";

			const nameLabel = document.createElement("div");
			nameLabel.textContent = name;
			nameLabel.style.fontSize = "12px";
			nameLabel.style.fontWeight = "bold";
			nameLabel.style.color = "#333";
			nameLabel.style.textAlign = "center";
			nameLabel.style.whiteSpace = "nowrap";
			nameLabel.style.backgroundColor = "rgba(255,255,255,0.9)";
			nameLabel.style.padding = "2px 6px";
			nameLabel.style.borderRadius = "3px";
			nameLabel.style.boxShadow = "0 1px 3px rgba(0,0,0,0.2)";

			markerContainer.appendChild(marker);
			markerContainer.appendChild(nameLabel);
			return markerContainer;
		}

		// Ajouter les marqueurs sur la carte avec clustering
		map.on("load", () => {
			// Créer une source GeoJSON pour les marqueurs
			map.addSource("cities", {
				type: "geojson",
				data: {
					type: "FeatureCollection",
					features: cities.map((city) => ({
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: city.coordinates
						},
						properties: {
							name: city.name,
							province: city.province,
							description: city.description,
							color: city.color
						}
					}))
				},
				cluster: true,
				clusterMaxZoom: 14,
				clusterRadius: 50
			});

			// Ajouter le layer pour les clusters
			map.addLayer({
				id: "clusters",
				type: "circle",
				source: "cities",
				filter: ["has", "point_count"],
				paint: {
					"circle-color": "#00AEEF",
					"circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40]
				}
			});

			// Ajouter le layer pour le nombre de points dans les clusters
			map.addLayer({
				id: "cluster-count",
				type: "symbol",
				source: "cities",
				filter: ["has", "point_count"],
				layout: {
					"text-field": "{point_count_abbreviated}",
					"text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
					"text-size": 16,
					"font-weight": "bold"
				},
				paint: {
					"text-color": "#ffffff"
				}
			});

			// Ajouter le layer pour les marqueurs individuels
			map.addLayer({
				id: "unclustered-point",
				type: "circle",
				source: "cities",
				filter: ["!", ["has", "point_count"]],
				paint: {
					"circle-color": ["get", "color"],
					"circle-radius": 10,
					"circle-stroke-width": 3,
					"circle-stroke-color": "#ffffff"
				}
			});

			// Ajouter les labels pour les marqueurs individuels avec style rectangulaire
			map.addLayer({
				id: "point-labels-bg",
				type: "symbol",
				source: "cities",
				filter: ["!", ["has", "point_count"]],
				layout: {
					"text-field": ["get", "name"],
					"text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
					"text-size": 12,
					"text-offset": [0, 1.5],
					"text-anchor": "top"
				},
				paint: {
					"text-color": "#333333",
					"text-halo-color": "rgba(255,255,255,0.9)",
					"text-halo-width": 8,
					"text-halo-blur": 2
				}
			});

			// Gestion des clics sur les clusters
			map.on("click", "clusters", (e) => {
				const features = map.queryRenderedFeatures(e.point, {
					layers: ["clusters"]
				});
				const clusterId = features[0].properties.cluster_id;
				map.getSource("cities").getClusterExpansionZoom(clusterId, (err, zoom) => {
					if (err) return;

					map.easeTo({
						center: features[0].geometry.coordinates,
						zoom: zoom
					});
				});
			});

			// Gestion des clics sur les marqueurs individuels
			map.on("click", "unclustered-point", (e) => {
				console.log("Clic sur un point détecté:", e.features[0].properties.name);

				const properties = e.features[0].properties;

				// Afficher les données dans notre div personnalisé
				const cityPopup = document.getElementById("city-popup");
				const cityName = document.getElementById("city-name");
				const cityProvince = document.getElementById("city-province");
				const cityDescription = document.getElementById("city-description");

				cityName.textContent = properties.name;
				cityProvince.textContent = `${t("map.province")}: ${properties.province}`;

				// Utiliser la traduction pour la description
				const cityKey = properties.name.toLowerCase();
				const translatedDescription = t(`map.cities.${cityKey}`);
				cityDescription.textContent = translatedDescription || properties.description;

				cityPopup.style.display = "block";

				// Fonction pour fermer le popup
				const closePopup = () => {
					cityPopup.style.display = "none";
				};

				// Écouter les mouvements de la carte pour fermer le popup
				const moveHandler = () => {
					closePopup();
					map.off("move", moveHandler);
					map.off("zoom", moveHandler);
					map.off("drag", moveHandler);
				};

				map.on("move", moveHandler);
				map.on("zoom", moveHandler);
				map.on("drag", moveHandler);

				console.log("Données affichées pour:", properties.name);
			});

			// Changer le curseur au survol
			map.on("mouseenter", "clusters", () => {
				map.getCanvas().style.cursor = "pointer";
			});
			map.on("mouseleave", "clusters", () => {
				map.getCanvas().style.cursor = "";
			});
			map.on("mouseenter", "unclustered-point", () => {
				map.getCanvas().style.cursor = "pointer";
			});
			map.on("mouseleave", "unclustered-point", () => {
				map.getCanvas().style.cursor = "";
			});

			// Fermer les popups quand on clique ailleurs sur la carte
			map.on("click", (e) => {
				const features = map.queryRenderedFeatures(e.point, {
					layers: ["unclustered-point", "clusters"]
				});

				if (features.length === 0) {
					const existingPopups = document.querySelectorAll(".mapboxgl-popup");
					existingPopups.forEach((popup) => popup.remove());
				}
			});

			// Test pour vérifier que la carte est bien chargée
			console.log("Carte Mapbox chargée avec succès");
			console.log("Nombre de villes:", cities.length);
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

	/* Styles pour les popups personnalisées */
	.custom-popup .mapboxgl-popup-content {
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		border: none;
		padding: 0;
	}

	.custom-popup .mapboxgl-popup-tip {
		border-top-color: #fff;
	}

	.custom-popup .mapboxgl-popup-close-button {
		color: #666;
		font-size: 18px;
		padding: 8px;
		right: 8px;
		top: 8px;
	}

	.custom-popup .mapboxgl-popup-close-button:hover {
		color: #00aeef;
		background-color: transparent;
	}

	/* Empêcher le scroll sur la carte */
	#map {
		overflow: hidden !important;
		position: relative;
	}

	#map canvas {
		pointer-events: auto;
	}

	/* Empêcher le scroll de la page lors des clics sur la carte */
	.operational-zone-map {
		overflow: hidden;
	}

	/* Styles pour les popups accessibles */
	.accessible-popup {
		z-index: 50 !important;
	}

	.accessible-popup .mapboxgl-popup-content {
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		border: none;
		padding: 0;
		background: white !important;
		color: #333 !important;
	}

	.accessible-popup .mapboxgl-popup-tip {
		border-top-color: #fff;
	}

	.accessible-popup .mapboxgl-popup-close-button {
		color: #666;
		font-size: 18px;
		padding: 8px;
		right: 8px;
		top: 8px;
		background: transparent;
		border: none;
		cursor: pointer;
	}

	.accessible-popup .mapboxgl-popup-close-button:hover {
		color: #00aeef;
		background-color: rgba(0, 174, 239, 0.1);
		border-radius: 4px;
	}

	.accessible-popup .mapboxgl-popup-close-button:focus {
		outline: 2px solid #00aeef;
		outline-offset: 2px;
	}

	/* Assurer que toutes les popups Mapbox sont visibles */
	.mapboxgl-popup {
		z-index: 9999 !important;
		display: block !important;
		visibility: visible !important;
		opacity: 1 !important;
		position: absolute !important;
		pointer-events: auto !important;
	}

	.mapboxgl-popup-content {
		background: white !important;
		color: #333 !important;
		border: 2px solid #00aeef !important;
		border-radius: 8px !important;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
		padding: 15px !important;
		min-width: 250px !important;
		min-height: 120px !important;
		position: relative !important;
	}

	.mapboxgl-popup-tip {
		border-top-color: #00aeef !important;
		border-bottom-color: transparent !important;
	}

	/* Styles améliorés pour le bouton de fermeture */
	.mapboxgl-popup-close-button {
		position: absolute !important;
		top: 8px !important;
		right: 8px !important;
		width: 30px !important;
		height: 30px !important;
		background: #00aeef !important;
		color: white !important;
		border: none !important;
		border-radius: 50% !important;
		font-size: 18px !important;
		font-weight: bold !important;
		cursor: pointer !important;
		display: flex !important;
		align-items: center !important;
		justify-content: center !important;
		z-index: 10000 !important;
		transition: all 0.3s ease !important;
	}

	.mapboxgl-popup-close-button:hover {
		background: #ff4444 !important;
		transform: scale(1.1) !important;
	}

	.mapboxgl-popup-close-button:active {
		transform: scale(0.95) !important;
	}

	/* Styles pour le popup personnalisé */
	.city-popup {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 9999;
		background: white;
		border: 2px solid #00aeef;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		min-width: 250px;
		max-width: 300px;
	}

	.city-popup-content {
		padding: 20px;
		position: relative;
	}

	.city-popup-close {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 30px;
		height: 30px;
		background: #00aeef;
		color: white;
		border: none;
		border-radius: 50%;
		font-size: 18px;
		font-weight: bold;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
	}

	.city-popup-close:hover {
		background: #ff4444;
		transform: scale(1.1);
	}

	.city-popup-close:active {
		transform: scale(0.95);
	}

	#city-name {
		margin: 0 0 8px 0;
		color: #00aeef;
		font-size: 18px;
		font-weight: bold;
	}

	#city-province {
		margin: 0 0 12px 0;
		color: #666;
		font-size: 14px;
		font-style: italic;
	}

	#city-description {
		margin: 0;
		color: #333;
		font-size: 14px;
		line-height: 1.4;
	}

	/* Styles pour le carousel des marques */
	.brand-one__carousel {
		padding: 20px 0;
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
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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
