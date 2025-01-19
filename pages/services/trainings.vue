<template>
  <div>
    <!--Page Header Start-->
    <section class="page-header">
      <div
        class="page-header-bg"
        style="background-image: url(/assets/images/backgrounds/page-header-bg.jpg)"
      ></div>
      <div class="container">
        <div class="page-header__inner">
          <h2>{{ service_info[0].title }}</h2>
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="/">Accueil</a></li>
            <li><a href="/services">Services</a></li>
            <li class="active">{{ service_info[0].title }}</li>
          </ul>
        </div>
      </div>
    </section>
    <!--Page Header End-->

    <!--Service Details Start-->
    <section class="service-details">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-5">
            <div class="service-details__sidebar">
              <div class="service-details__sidebar-service">
                <ul class="service-details__sidebar-service-list list-unstyled">
                  <li>
                    <a href="/services/protection"
                      >Protection <span class="icon-right-arrow"></span
                    ></a>
                  </li>
                  <li>
                    <a href="/services/technology"
                      >Technologie <span class="icon-right-arrow"></span
                    ></a>
                  </li>
                  <li>
                    <a href="/services/consultancy"
                      >Consultance <span class="icon-right-arrow"></span
                    ></a>
                  </li>
                  <li class="current">
                    <a href="/services/trainings"
                      >Formations <span class="icon-right-arrow"></span
                    ></a>
                  </li>
                  <li>
                    <a href="/services/others-security-services"
                      >Autres services de sécurité <span class="icon-right-arrow"></span
                    ></a>
                  </li>
                </ul>
              </div>
              <div class="service-details__need-help">
                <div
                  class="service-details__need-help-bg"
                  style="
                    background-image: url(/assets/images/backgrounds/service-details-need-help-bg.jpg);
                  "
                ></div>
                <h2 class="service-details__need-help-title">Nous contacter</h2>
                <div class="service-details__need-help-icon">
                  <span class="icon-phone"></span>
                </div>
                <div class="service-details__need-help-contact">
                  <p>À tout moment</p>
                  <a href="tel:243810041500">+243810041500</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8 col-lg-7">
            <div class="service-details__right">
              <div class="service-details__img">
                <img src="/assets/images/services/service-details-img-6.jpg" alt="" />
                <div class="service-details__img-icon">
                  <span :class="service_info[0].icon"></span>
                </div>
              </div>
              <div class="service-details__content">
                <h3 class="service-details__title">{{ service_info[0].title }}</h3>
                <p
                  v-for="(p, index) in service_info[0].details"
                  :class="[
                    index == 0 ? 'text-blue-forced' : '',
                    'service-details__text-' + index + 1,
                  ]"
                  :key="p"
                >
                  {{ p }}
                </p>
              </div>
              <div class="service-details__bottom">
                <div class="service-details__bottom-icon">
                  <span :class="service_info[0].icon"></span>
                </div>
                <p class="service-details__bottom-text">
                  {{ service_info[0].approach }}
                </p>
              </div>
              <div class="service-details__how-we-help">
                <div class="row">
                  <div class="col-xl-4">
                    <div class="service-details__how-we-help-img">
                      <img
                        src="/assets/images/services/service-details-how-we-help-img.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-xl-8">
                    <div class="service-details__how-we-help-content">
                      <h3 class="service-details__how-we-help-title">
                        Comment proceder ?
                      </h3>
                      <br />
                      <ul class="service-details__how-we-help-points list-unstyled">
                        <li v-for="item in service_info[0].process" :key="item">
                          <div class="icon">
                            <i class="fa fa-arrow-right"></i>
                          </div>
                          <div class="text">
                            <p>{{ item }}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="service-details__faq">
                <div class="accrodion-grp" data-grp-name="faq-one-accrodion">
                  <div
                    v-for="(item, index) in service_info[0].faq"
                    :key="item"
                    class="accrodion"
                    :class="[index == 0 ? 'active' : '']"
                  >
                    <div class="accrodion-title">
                      <h4>{{ item.question }}</h4>
                    </div>
                    <div class="accrodion-content">
                      <div class="inner">
                        <p>
                          {{ item.answer }}
                        </p>
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
    <!--Service Details End-->
  </div>
</template>

<script setup>
const service_info = [
  {
    title: "Formations",
    icon: "icon-creative",
    approach:
      "Soyez prêt à faire face aux défis de sécurité grâce à nos formations professionnelles et pratiques.",

    details: [
      "Latlong International propose des formations spécialisées pour sensibiliser, préparer et renforcer les compétences de vos équipes face aux situations de risque.",
      "Nous mettons l'accent sur la prévention et la collecte de renseignements pour anticiper les menaces avant qu'elles ne se manifestent.",
      "Nos formations incluent des sessions sur les premiers secours, la conduite défensive, et la gestion de la sécurité en cas de crise.",
      "Nos programmes sont adaptés à chaque client pour répondre aux besoins spécifiques de leur environnement et secteur.",
    ],
    process: [
      "Identifiez vos besoins de formation avec notre équipe.",
      "Choisissez parmi notre catalogue de formations ou demandez un programme sur mesure.",
      "Planifiez les sessions selon vos disponibilités.",
      "Participez aux formations sur site ou en ligne.",
      "Recevez un suivi et des conseils post-formation.",
    ],
    faq: [
      {
        question: "Vos formations sont-elles certifiées ?",
        answer: "Oui, toutes nos formations incluent une certification reconnue.",
      },
      {
        question: "Pouvez-vous former de grandes équipes ?",
        answer:
          "Absolument, nous pouvons adapter nos formations à des groupes de toute taille.",
      },
      {
        question: "Offrez-vous des formations sur site ?",
        answer:
          "Oui, nos équipes peuvent se déplacer pour assurer la formation directement chez vous.",
      },
    ],
  },
];
</script>

<style scoped>
.text-blue-forced {
  color: #031430 !important;
}
</style>
