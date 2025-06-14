<template>
  <div>
    <!--Page Header Start-->
    <section class="page-header">
      <div
        class="page-header-bg"
        style="background-image: url(/assets/images/services/consbg.png)"
      ></div>
      <div class="container">
        <div class="page-header__inner">
          <h2>{{ t('services.consultancy.pageHeader.title') }}</h2>
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="/">{{ t('services.consultancy.pageHeader.breadcrumb.home') }}</a></li>
            <li><a href="/services">{{ t('services.consultancy.pageHeader.breadcrumb.services') }}</a></li>
            <li class="active">{{ t('services.consultancy.pageHeader.breadcrumb.current') }}</li>
          </ul>
        </div>
      </div>
    </section>
    <!--Page Header End-->

    <!--Service Details Start-->
    <section class="service-details" ref="serviceSection">
      <div class="container">
        <div class="row">
          <ServiceSidebar :serviceSection="serviceSection">
            <div class="service-details__sidebar-service">
              <ul class="service-details__sidebar-service-list list-unstyled">
                <li>
                  <a href="/services/protection"
                    >{{ t('services.consultancy.sidebar.menu.protection') }} <span class="icon-right-arrow"></span
                  ></a>
                </li>
                <li>
                  <a href="/services/technology"
                    >{{ t('services.consultancy.sidebar.menu.technology') }} <span class="icon-right-arrow"></span
                  ></a>
                </li>
                <li class="current">
                  <a href="/services/consultancy"
                    >{{ t('services.consultancy.sidebar.menu.consultancy') }} <span class="icon-right-arrow"></span
                  ></a>
                </li>
                <li>
                  <a href="/services/trainings"
                    >{{ t('services.consultancy.sidebar.menu.training') }} <span class="icon-right-arrow"></span
                  ></a>
                </li>
                <li>
                  <a href="/services/others-security-services"
                    >{{ t('services.consultancy.sidebar.menu.others') }}
                    <span class="icon-right-arrow"></span
                  ></a>
                </li>
              </ul>
            </div>
            <div class="service-details__need-help">
              <div
                class="service-details__need-help-bg"
                style="background-image: url(/assets/images/services/conta.jpg)"
              ></div>
              <h2 class="service-details__need-help-title">{{ t('services.consultancy.sidebar.contact.title') }}</h2>
              <div class="service-details__need-help-icon">
                <span class="icon-phone"></span>
              </div>
              <div class="service-details__need-help-contact">
                <p>{{ t('services.consultancy.sidebar.contact.anytime') }}</p>
                <a href="tel:243810041500">+243810041500</a>
              </div>
            </div>
          </ServiceSidebar>
          <div class="col-xl-8 col-lg-7">
            <div class="service-details__right">
              <div class="service-details__img">
                <img src="/assets/images/services/cons.jpg" class="w-full max-h-[400px] object-cover" :alt="t('services.consultancy.content.title')" />
                <div class="service-details__img-icon">
                  <span :class="service_info[0].icon"></span>
                </div>
              </div>
              <div class="service-details__content">
                <h3 class="service-details__title">
                  {{ t('services.consultancy.content.title') }}
                </h3>
                <div class="space-y-6">
                  <p
                    v-for="i in 4"
                    :key="i"
                    :class="[
                      i === 1 ? 'text-blue-forced' : '',
                      'service-details__text-1',
                    ]"
                  >
                    {{ t(`services.consultancy.content.details.detail${i}`) }}
                  </p>
                </div>
              </div>
              <div class="service-details__bottom">
                <div class="service-details__bottom-icon">
                  <span :class="service_info[0].icon"></span>
                </div>
                <p class="service-details__bottom-text">
                  {{ t('services.consultancy.content.approach') }}
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
                        {{ t('services.consultancy.content.howToProceed.title') }}
                      </h3>
                      <br />
                      <ul class="service-details__how-we-help-points list-unstyled">
                        <li v-for="i in 5" :key="i">
                          <div class="icon">
                            <i class="fa fa-arrow-right"></i>
                          </div>
                          <div class="text">
                            <p>{{ t(`services.consultancy.content.howToProceed.steps.step${i}`) }}</p>
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
                    v-for="i in 3"
                    :key="i"
                    class="accrodion"
                    :class="[i === 1 ? 'active' : '']"
                  >
                    <div class="accrodion-title">
                      <h4>{{ t(`services.consultancy.content.faq.questions.question${i}.question`) }}</h4>
                    </div>
                    <div class="accrodion-content">
                      <div class="inner">
                        <p>
                          {{ t(`services.consultancy.content.faq.questions.question${i}.answer`) }}
                        </p>
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
    <!--Service Details End-->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import ServiceSidebar from '~/components/ServiceSidebar.vue'

const { t } = useI18n()

const serviceSection = ref(null)
const isSidebarFixed = ref(false)
const isSidebarBottom = ref(false)
const isScrollingUp = ref(false)
const lastScrollY = ref(0)
const scrollThreshold = 5
const sectionOffset = ref(0)
const sidebarHeight = ref(0)
const sectionBottom = ref(0)
const sidebarWidth = ref(0)
const sidebarLeft = ref(0)
const originalStyles = ref(null)

const sidebarStyle = computed(() => {
  if (isSidebarFixed.value) {
    return {
      position: 'fixed',
      top: '150px',
      left: `${sidebarLeft.value}px`,
      width: `${sidebarWidth.value}px`,
      marginTop: isScrollingUp.value ? '0px' : '90px',
      ...originalStyles.value
    }
  }
  return originalStyles.value || {}
})

const captureOriginalStyles = () => {
  if (serviceSection.value) {
    const rect = serviceSection.value.getBoundingClientRect()
    sidebarHeight.value = rect.height
    sidebarWidth.value = rect.width
    sidebarLeft.value = rect.left
    sectionOffset.value = rect.top
    sectionBottom.value = rect.top + rect.height

    if (!originalStyles.value) {
      originalStyles.value = {
        padding: window.getComputedStyle(serviceSection.value).padding,
        margin: window.getComputedStyle(serviceSection.value).margin,
        border: window.getComputedStyle(serviceSection.value).border,
        boxShadow: window.getComputedStyle(serviceSection.value).boxShadow,
        backgroundColor: window.getComputedStyle(serviceSection.value).backgroundColor
      }
    }
  }
}

const handleScroll = () => {
  if (!serviceSection.value) return

  const scrollPosition = window.scrollY
  const headerHeight = 100
  const sectionRect = serviceSection.value.getBoundingClientRect()

  const scrollDifference = lastScrollY.value - scrollPosition
  if (Math.abs(scrollDifference) > scrollThreshold) {
    isScrollingUp.value = scrollDifference > 0
    lastScrollY.value = scrollPosition
  }

  const topLimit = sectionOffset.value - headerHeight
  const bottomLimit = sectionBottom.value - sidebarHeight.value - headerHeight

  if (scrollPosition >= topLimit && scrollPosition <= bottomLimit) {
    isSidebarFixed.value = true
    isSidebarBottom.value = false
  } else if (scrollPosition > bottomLimit) {
    isSidebarFixed.value = false
    isSidebarBottom.value = true
  } else {
    isSidebarFixed.value = false
    isSidebarBottom.value = false
  }
}

watch(isScrollingUp, (newValue) => {
  console.log('Direction du défilement changée:', newValue ? 'vers le haut' : 'vers le bas')
})

onMounted(() => {
  setTimeout(() => {
    captureOriginalStyles()
    lastScrollY.value = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', captureOriginalStyles)
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', captureOriginalStyles)
})

// dd
const service_info = [
  {
    title: "Consultance",
    icon: "icon-consultant",
    approach:
      "Une stratégie solide est la clé d'une sécurité réussie. Nous pouvons vous accompagner.",

    details: [
      "LatLong International propose des services de conseil adaptés pour analyser vos besoins, concevoir des stratégies de sécurité, et gérer efficacement les crises.",
      "Nos évaluations de sécurité approfondies identifient les vulnérabilités potentielles pour anticiper les menaces.",
      "Des stratégies d'évacuation et de gestion de crise sur mesure garantissent une réponse rapide et coordonnée.",
      "Nos experts collaborent avec vos équipes pour assurer une préparation optimale, incluant santé et sécurité, enquêtes et audits complets.",
    ],
    process: [
      "Demandez une consultation initiale.",
      "Partagez vos besoins et vos préoccupations.",
      "Recevez un rapport d'analyse personnalisé.",
      "Implémentez les recommandations avec notre support.",
      "Profitez d'un suivi post-implémentation.",
    ],
    faq: [
      {
        question: "Proposez-vous des audits de sécurité complètes ?",
        answer:
          "Oui, nous effectuons des audits sur site avec des recommandations concrètes.",
      },
      {
        question: "Vos plans de gestion de crise incluent-ils des exercices pratiques ?",
        answer: "Absolument, nous organisons des simulations régulières.",
      },
      {
        question: "Combien de temps faut-il pour une évaluation de sécurité ? ",
        answer:
          "Cela dépend de la taille du site, mais en général, une évaluation peut être complétée en 1 à 2 semaines.",
      },
    ],
  },
];
</script>
<style scoped>
.text-blue-forced {
  color: #031430 !important;
}

.service-details__sidebar {
  background: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
}

.service-details__sidebar.fixed {
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  z-index: 100;
  transition: margin-top 0.3s ease;
}

.service-details__sidebar.bottom {
  position: absolute;
  bottom: 0;
  left: 20px;
  right: 20px;
}

/* Style pour le défilement fluide */
.service-details__sidebar::-webkit-scrollbar {
  width: 6px;
}

.service-details__sidebar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.service-details__sidebar::-webkit-scrollbar-thumb {
  background: var(--conult-base);
  border-radius: 3px;
}

.service-details__sidebar::-webkit-scrollbar-thumb:hover {
  background: var(--conult-black);
}

/* Assurez-vous que le contenu principal ne chevauche pas la sidebar */
.service-details__right {
  position: relative;
  z-index: 1;
}

/* Conteneur de la sidebar */
.col-xl-4.col-lg-5 {
  position: relative;
}
</style>
