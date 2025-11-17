<template>
  <div>
    <!--Page Header Start-->
    <section class="page-header">
      <div
        class="page-header-bg"
        style="background-image: url(/assets/images/backgrounds/cont.jpg)"
      ></div>
      <div class="container">
        <div class="page-header__inner">
          <h2>{{ t("contact.pageHeader.title") }}</h2>
          <ul class="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">{{ t("contact.pageHeader.breadcrumb.home") }}</a>
            </li>
            <li class="active">
              {{ t("contact.pageHeader.breadcrumb.current") }}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!--Page Header End-->

    <!--Contact Page Google Map Start-->
    <section class="contact-page-google-map py-16">
      <div class="container">
        <div class="flex justify-between flex-col-reverse lg:flex-row pb-16 lg:space-y-0 lg:space-x-8">
          <div class="custom-shadow w-full border-t-4 border-t-conult-base">
            <ContactForm />
          </div>

          <div class="w-full lg:max-w-[400px] lg:mb-8">
            <div class="custom-shadow border-t-4 border-t-conult-base">
              <div class="form-header">
                <h2 class="form-title">
                  {{ t('contact.details.title') }}
                </h2>
                <p class="form-subtitle">
                  {{ t('contact.details.subtitle') }}
                </p>
              </div>
              <ul class="list-unstyled contact-page-details__list mt-8">
                <li>
                  <span>{{ t("common.callUs_control_room") }}</span>
                  <p><a href="tel:+243810041500">+243 810 041 500</a></p>
                </li>
                <li>
                  <span>{{ t("common.callUs_business_manager") }}</span>
                  <p><a href="tel:+243993400082">+243 993 400 082</a></p>
                </li>
                <li>
                  <span>{{ t("contact.details.email.label") }}</span>
                  <p>
                    <a :href="'mailto:info@latlongcongo.com'">
                      info@latlongcongo.com
                    </a>
                  </p>
                </li>
                <li>
                  <span>{{ t("contact.details.visit.label") }}</span>
                  <p
                    v-html="
                      t('contact.details.visit.address').replace('\n', '<br />')
                    "
                  ></p>
                </li>
              </ul>
              <div class="contact-page-details__social">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/LatlongInternational/"
                  ><i class="fab fa-facebook"></i
                ></a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/latlong-international/"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/243993400082"
                  ><i class="fab fa-whatsapp"></i
                ></a>
              </div>

              <div>
                <h2 class="contact-page-details__sign">
                  {{ t("contact.about.content.signature") }}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="pb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.0928352617248!2d29.232973510331743!3d-1.6851257982921726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd058b19d64465%3A0x5391a088885468ce!2sLATLONG%20INTERNATIONAL!5e0!3m2!1sfr!2scd!4v1737188255317!5m2!1sfr!2scd"
            class="contact-page-google-map__one"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
    <!--Contact Page Google Map End-->
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import ContactForm from "~/components/ContactForm.vue";

const { t } = useI18n();
</script>

<style scoped>
.form-title {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px 0;
  background: linear-gradient(135deg, #00aeef 0%, #0066cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.form-subtitle {
  font-size: 16px;
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.contact-page {
  padding: 120px 0;
}

.contact-page__content {
  background-color: #ffffff;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.1);
}

@media (max-width: 767px) {
  .contact-page {
    padding: 80px 0;
  }

  .contact-page__content {
    padding: 30px;
  }
}

.custom-shadow {
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 10px 60px 0px rgb(0, 0, 0, 0.05);
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 32px;
}

@media (max-width: 600px) {
  .custom-shadow {
    padding: 16px;
  }
}
</style>
