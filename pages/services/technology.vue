<template>
  <div>
    <!--Page Header Start-->
    <section class="page-header">
      <div
        class="page-header-bg"
        style="background-image: url(/assets/images/services/tech.jpg)"
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
                  <li class="current">
                    <a href="/services/technology"
                      >Technologie <span class="icon-right-arrow"></span
                    ></a>
                  </li>
                  <li>
                    <a href="/services/consultancy"
                      >Consultance <span class="icon-right-arrow"></span
                    ></a>
                  </li>
                  <li>
                    <a href="/services/trainings"
                      >Formations <span class="icon-right-arrow"></span
                    ></a>
                  </li>
                  <li>
                    <a href="/services/others-security-services"
                      >Autres services de sécurité
                      <span class="icon-right-arrow"></span
                    ></a>
                  </li>
                </ul>
              </div>
              <div class="service-details__need-help">
                <div
                  class="service-details__need-help-bg"
                  style="
                    background-image: url(/assets/images/services/conta.jpg);
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
                <img src="/assets/images/services/te.png" alt="" />
                <div class="service-details__img-icon">
                  <span :class="service_info[0].icon"></span>
                </div>
              </div>
              <div class="service-details__content">
                <h3 class="service-details__title">
                  {{ service_info[0].title }}
                </h3>
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
                      <img src="/assets/images/services/proc.png" alt="" />
                    </div>
                  </div>
                  <div class="col-xl-8">
                    <div class="service-details__how-we-help-content">
                      <h3 class="service-details__how-we-help-title">
                        Comment proceder ?
                      </h3>
                      <br />
                      <ul
                        class="service-details__how-we-help-points list-unstyled"
                      >
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
    title: "Technologie",
    icon: "icon-mobile-analytics",

    details: [
      "Latlong International intègre les technologies les plus modernes pour renforcer votre sécurité, notamment le suivi en temps réel, les systèmes d'alarme et les solutions de cybersécurité.",
      "Nous sélectionnons et formons des agents de sécurité hautement qualifiés à l’utilisation de technologies avancées telles que les systèmes de suivi GPS et les boutons d’alarme d'urgence.",

      "Nos infrastructures technologiques, comme les systèmes de détection de fumée et d'intrusion, garantissent une surveillance permanente et réactive. La cybersécurité est au cœur de nos priorités, avec des solutions avancées pour protéger vos données et réseaux.",
    ],
    approach:
      "Transformez votre sécurité avec des solutions technologiques de pointe.",
    process: [
      "Prenez rendez-vous pour une consultation technique.",
      "Identifiez vos besoins en sécurité technologique.",
      "Recevez un plan d'installation détaillé.",
      "Assistez à une formation à l'utilisation des équipements.",
      "Bénéficiez d'une assistance technique 24/7.",
    ],
    faq: [
      {
        question: "Vos systèmes de suivi fonctionnent-ils hors connexion ?",
        answer:
          "Oui, nos équipements peuvent fonctionner en mode offline pour assurer une continuité.",
      },
      {
        question: "Proposez-vous des services pour la sécurité informatique ?",
        answer:
          "Absolument, nos solutions couvrent la cybersécurité et la protection des infrastructures digitales.",
      },
      {
        question: "Pouvez-vous installer des systèmes dans des zones isolées ?",
        answer:
          "Oui, nous intervenons dans des environnements variés, y compris les sites difficiles d’accès.",
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
