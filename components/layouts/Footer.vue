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
									<a :href="'mailto:info@latlongcongo.com'" class="hover:text-conult-base transition-colors">
										info@latlongcongo.com
									</a>
								</p>
								<p class="text-conult-gray">{{ t('footer.contact.address') }}</p>
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
								<h3 class="text-lg font-conult font-bold text-conult-white whitespace-nowrap">{{ t('footer.explore.title') }}</h3>
								<ul class="space-y-2">
									<li>
										<a href="/" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ t('footer.explore.home') }}</a>
									</li>
									<li>
										<a href="/about" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ t('footer.explore.about') }}</a>
									</li>
									<li>
										<a href="/ethique" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ t('footer.explore.ethics') }}</a>
									</li>
									<li>
										<a href="/contact" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ t('footer.explore.contact') }}</a>
									</li>
								</ul>
							</div>

							<!-- Services -->
							<div class="space-y-4">
								<h3 class="text-lg font-conult font-bold text-conult-white whitespace-nowrap">{{ t('footer.services.title') }}</h3>
								<ul class="space-y-2">
									<li>
										<a href="/services/protection" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ t('footer.services.protection') }}</a>
									</li>
									<li>
										<a href="/services/technology" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ t('footer.services.technology') }}</a>
									</li>
									<li>
										<a href="/services/consultancy" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ t('footer.services.consultancy') }}</a>
									</li>
									<li>
										<a href="/services/trainings" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ t('footer.services.trainings') }}</a>
									</li>
									<li>
										<a href="/services/others-security-services" class="text-conult-gray hover:text-conult-base transition-colors whitespace-nowrap block">{{ t('footer.services.others') }}</a>
									</li>
								</ul>
							</div>

							<!-- Contact -->
							<div class="space-y-4">
								<h3 class="text-lg font-conult font-bold text-conult-white whitespace-nowrap">{{ t('footer.contact.title') }}</h3>
								<ul class="space-y-2">
									<li class="flex items-start space-x-2">
										<div class="text-conult-base mt-1">
											<span class="icon-email"></span>
										</div>
										<p class="text-conult-gray">
											<a :href="'mailto:info@latlongcongo.com'" class="hover:text-conult-base transition-colors">
												info@latlongcongo.com
											</a>
										</p>
									</li>
									<li class="flex items-start space-x-2">
										<div class="text-conult-base mt-1">
											<span class="icon-phone"></span>
										</div>
										<p class="text-conult-gray">
											<a :href="'tel:' + t('footer.contact.phone.primary')" class="hover:text-conult-base transition-colors">{{ t('footer.contact.phone.primary') }}</a>
										</p>
									</li>
									<li class="flex items-start space-x-2">
										<div class="text-conult-base mt-1">
											<span class="icon-phone"></span>
										</div>
										<p class="text-conult-gray whitespace-nowrap">
											<a :href="'tel:' + t('footer.contact.phone.secondary')" class="hover:text-conult-base transition-colors">{{ t('footer.contact.phone.secondary') }}</a>
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
					{{ t('footer.copyright.text', { year: new Date().getFullYear() }) }}
					<span class="mx-1">{{ t('footer.copyright.developedBy') }}</span>
					<a href="https://www.witoxr.studio" target="_blank" rel="noopener noreferrer" class="hover:underline text-conult-base transition-colors">{{ t('footer.copyright.developer') }}</a>
				</p>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
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
