<template>
  <div>
    <div class="preloader">
      <img class="preloader__image" width="60" src="/assets/images/loader.png" alt="" />
    </div>
    <div class="page-wrapper">
      <LayoutsHeader />
      <NuxtPage />
      <LayoutsFooter />

      <div class="mobile-nav__wrapper">
        <div class="mobile-nav__overlay mobile-nav__toggler"></div>
        <!-- /.mobile-nav__overlay -->
        <div class="mobile-nav__content">
          <span class="mobile-nav__close mobile-nav__toggler"
            ><i class="fa fa-times"></i
          ></span>

          <div class="logo-box">
            <a href="/" aria-label="logo image"
              ><img src="/assets/images/resources/logo-1.png" width="155" alt=""
            /></a>
          </div>
          <!-- /.logo-box -->
          <div class="mobile-nav__container"></div>
          <!-- /.mobile-nav__container -->

          <ul class="mobile-nav__contact list-unstyled">
            <li>
              <i class="fa fa-envelope"></i>
              <a href="mailto:info@latlongcongo.com">info@latlongcongo.com</a>
            </li>
            <li>
              <i class="fa fa-phone-alt"></i>
              <a href="tel:+243 810 041 500">+243 810 041 500</a>
            </li>
            <li>
              <i class="fa fa-phone-alt"></i>
              <a href="tel:+243 993 400 082">+243 993 400 082</a>
            </li>
          </ul>
          <!-- /.mobile-nav__contact -->
          <div class="mobile-nav__top mt-2">
            <div class="mobile-nav__social">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/LatlongInternational/" aria-label="Facebook" class="fab fa-facebook-square"></a>
              <a target="_blank" rel="noopener noreferrer" href="https://wa.me/243993400082" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
								<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/latlong-international/" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
							    
            </div>
            <!-- /.mobile-nav__social -->
          </div>
          <!-- /.mobile-nav__top -->
        </div>
        <!-- /.mobile-nav__content -->
      </div>
      <!-- /.mobile-nav__wrapper -->

      <div class="search-popup">
        <div class="search-popup__overlay search-toggler"></div>
        <!-- /.search-popup__overlay -->
        <div class="search-popup__content">
          <form action="#">
            <label for="search" class="sr-only">search here</label
            ><!-- /.sr-only -->
            <input type="text" id="search" placeholder="Search Here..." />
            <button type="submit" aria-label="search submit" class="thm-btn">
              <i class="icon-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <!-- /.search-popup__content -->
      </div>
      <!-- /.search-popup -->

      <a href="#" data-target="html" class="scroll-to-target scroll-to-top"
        ><i class="fa fa-angle-up"></i
      ></a>
    </div>
  </div>
</template>

<script setup lang="ts">
const cookie = useCookie<'fr' | 'en'>('i18n_redirected', {
	maxAge: 365 * 24 * 60 * 60,
	path: '/',
	sameSite: 'lax'
})

const { locale } = useI18n()

// Initialiser la locale depuis le cookie au chargement
onMounted(() => {
	if (cookie.value) {
		locale.value = cookie.value
	}
})
</script>
