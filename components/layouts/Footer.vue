<template>
	<footer class="bg-conult-black text-conult-white py-16">
		<div class="container mx-auto px-4">
			<!-- Footer Top -->
			<div class="mb-12">
				<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
					<!-- Logo and Social Section -->
					<div class="lg:col-span-4">
						<div class="space-y-8">
							<!-- Logo -->
							<div>
								<a href="/" class="inline-block">
									<img src="/assets/images/logo-light-1.png" width="146" alt="LatLong Logo" class="h-auto" />
								</a>
							</div>

							<div class="space-y-2">
								<p class="text-conult-gray whitespace-nowrap">
									<a :href="'mailto:' + $i18n.__('contact.email')" class="hover:text-conult-base transition-colors">{{ $i18n.__('contact.email') }}</a>
								</p>
								<p class="text-conult-gray">{{ $i18n.__('contact.address') }}</p>
							</div>

							<!-- Social Links -->
							<div class="site-footer__top-right-social">
								<a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
								<a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
								<a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
							</div>
						</div>
					</div>

					<!-- Navigation and Contact Section -->
					<div class="lg:col-span-8 lg:pl-32">
						<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
							<!-- Explore -->
							<div class="space-y-4">
								<h3 class="text-lg font-conult font-bold text-conult-white whitespace-nowrap">{{ $i18n.__('footer.explore') }}</h3>
								<ul class="space-y-2">
									<li>
										<a href="/" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ $i18n.__('navigation.home') }}</a>
									</li>
									<li>
										<a href="/about" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ $i18n.__('navigation.about') }}</a>
									</li>
									<li>
										<a href="/ethique" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ $i18n.__('navigation.ethics.title') }}</a>
									</li>
									<li>
										<a href="/contact" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ $i18n.__('navigation.contact') }}</a>
									</li>
								</ul>
							</div>

							<!-- Services -->
							<div class="space-y-4">
								<h3 class="text-lg font-conult font-bold text-conult-white whitespace-nowrap">{{ $i18n.__('footer.services') }}</h3>
								<ul class="space-y-2">
									<li>
										<a href="/services/protection" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ $i18n.__('navigation.services.protection') }}</a>
									</li>
									<li>
										<a href="/services/technology" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ $i18n.__('navigation.services.technology') }}</a>
									</li>
									<li>
										<a href="/services/consultancy" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ $i18n.__('navigation.services.consultancy') }}</a>
									</li>
									<li>
										<a href="/services/trainings" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ $i18n.__('navigation.services.trainings') }}</a>
									</li>
									<li>
										<a href="/services/others-security-services" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ $i18n.__('navigation.services.others') }}</a>
									</li>
								</ul>
							</div>

							<!-- Contact -->
							<div class="space-y-4">
								<h3 class="text-lg font-conult font-bold text-conult-white whitespace-nowrap">{{ $i18n.__('footer.contact') }}</h3>
								<ul class="space-y-2">
									<li class="flex items-start space-x-2">
										<div class="text-conult-base mt-1">
											<span class="icon-email"></span>
										</div>
										<p class="text-conult-gray">
											<a :href="'mailto:' + $i18n.__('contact.email')" class="hover:text-conult-base transition-colors">{{ $i18n.__('contact.email') }}</a>
										</p>
									</li>
									<li class="flex items-start space-x-2">
										<div class="text-conult-base mt-1">
											<span class="icon-phone"></span>
										</div>
										<p class="text-conult-gray">
											<a :href="'tel:' + $i18n.__('contact.phone').replace(/\s+/g, '')" class="hover:text-conult-base transition-colors">{{ $i18n.__('contact.phone') }}</a>
										</p>
									</li>
									<li class="flex items-start space-x-2">
										<div class="text-conult-base mt-1">
											<span class="icon-phone"></span>
										</div>
										<p class="text-conult-gray whitespace-nowrap">
											<a href="tel:+243993400082" class="hover:text-conult-base transition-colors">+243 993 400 082</a>
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Footer Bottom -->
			<div class="pt-8 border-t border-conult-gray/20">
				<p class="text-center text-conult-gray text-sm whitespace-nowrap">
					{{ $i18n.__('footer.copyright', { year: new Date().getFullYear().toString() }) }}
					<span class="mx-1">{{ $i18n.__('footer.developedBy') }}</span>
					<a href="https://www.witoxr.studio" target="_blank" rel="noopener noreferrer" class="hover:underline text-conult-base transition-colors">Wito XR Studio</a>
				</p>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app'

const { $i18n } = useNuxtApp()
</script>

<style scoped>
	/* Styles spécifiques qui ne peuvent pas être gérés par Tailwind */
	@font-face {
		font-family: "reeyregular";
		src: url("/assets/fonts/reey-regular-webfont.woff2") format("woff2");
		font-weight: normal;
		font-style: normal;
	}
</style>
