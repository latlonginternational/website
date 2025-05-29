<template>
  <div>
    <!--Page Header Start-->
    <section class="page-header">
      <div
        class="page-header-bg"
        style="background-image: url(/assets/images/services/p.jpg)"
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
    <section class="service-details" ref="serviceSection">
      <div class="container">
        <div class="row">
          <div ref="sidebarElement" class="service-details__sidebar">
            <div class="service-details__sidebar-service">
              <ul class="service-details__sidebar-service-list list-unstyled">
                <li class="current">
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
                style="background-image: url(/assets/images/services/conta.jpg)"
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
          <div class="col-xl-8 col-lg-7">
            <div class="service-details__right">
              <div class="service-details__img">
                <img src="/assets/images/services/prot2.jpg" alt="" />
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
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import ServiceSidebar from '~/components/ServiceSidebar.vue'

const serviceSection = ref(null)
const isSidebarFixed = ref(false)
const isSidebarBottom = ref(false)
const isScrollingUp = ref(false)
const lastScrollY = ref(0)
const scrollThreshold = 5 // Seuil minimal pour considérer un défilement
const sectionOffset = ref(0)
const sidebarHeight = ref(0)
const sectionBottom = ref(0)
const sidebarWidth = ref(0)
const sidebarLeft = ref(0)
const originalStyles = ref(null)
const isMobile = ref(false)
const sidebarElement = ref(null)

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
  if (sidebarElement.value) {
    const computedStyle = window.getComputedStyle(sidebarElement.value)
    originalStyles.value = {
      padding: computedStyle.padding,
      margin: computedStyle.margin,
      border: computedStyle.border,
      boxShadow: computedStyle.boxShadow,
      backgroundColor: computedStyle.backgroundColor
    }
  }
}

const updateDimensions = () => {
  if (sidebarElement.value && serviceSection.value && sidebarContainer.value) {
    const rect = sidebarElement.value.getBoundingClientRect()
    sidebarHeight.value = rect.height
    sidebarWidth.value = rect.width
    sidebarLeft.value = sidebarContainer.value.getBoundingClientRect().left
    sectionOffset.value = serviceSection.value.offsetTop
    sectionBottom.value = serviceSection.value.offsetTop + serviceSection.value.offsetHeight

    if (!originalStyles.value) {
      captureOriginalStyles()
    }
  }
}

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 1100
}

const handleScroll = () => {
  if (!sidebarElement.value || !serviceSection.value || isMobile.value) return

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

// Ajout d'un watcher pour déboguer les changements
watch(isScrollingUp, (newValue) => {
  console.log('Direction du défilement changée:', newValue ? 'vers le haut' : 'vers le bas')
})

onMounted(() => {
  setTimeout(() => {
    checkScreenSize()
    updateDimensions()
    captureOriginalStyles()
    lastScrollY.value = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', () => {
      checkScreenSize()
      updateDimensions()
    })
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateDimensions)
})

const service_info = [
  {
    title: "Protection",
    icon: "icon-strategy",
    approach:
      "Assurez une sécurité optimale avec nos solutions de protection complètes adaptées à vos besoins.",

    details: [
      "Nous offrons des services de protection avancés incluant le contrôle d'accès, des patrouilles stratégiques, et des escortes pour garantir la sécurité de vos biens, personnes et événements.",
      "Nos agents de sécurité assurent un contrôle rigoureux des accès et des sorties, incluant la gestion des clés, la vérification des identités, et la mise à disposition d'escortes pour vos besoins spécifiques.",
      "Patrouilles adaptées à chaque environnement : qu'elles soient statiques, mobiles ou à pied, nos équipes s'assurent de détecter et réagir rapidement à toute anomalie.",
      "La présence d'agents à chaque point stratégique (entreposage, inventaire, expédition) garantit un contrôle optimal des stocks.",
    ],
    process: [
      "Contactez-nous via le formulaire en ligne ou par téléphone.",
      "Décrivez vos besoins spécifiques (type de site, événement, etc.).",
      "Recevez une proposition personnalisée.",
      "Planifiez une visite préparatoire si nécessaire.",
      "Lancez le service en toute sérénité.",
    ],
    faq: [
      {
        question: "Quels types d'événements couvrez-vous ?",
        answer:
          "Nous assurons la sécurité des événements publics, privés et professionnels.",
      },
      {
        question: "Les escortes sont-elles disponibles 24/7 ?",
        answer:
          "Oui, nos escortes peuvent être programmées à tout moment selon vos besoins.",
      },
      {
        question:
          "Vos patrouilles s'adaptent-elles aux grands sites industriels ?",
        answer:
          "Absolument, nos patrouilles sont personnalisées pour couvrir de vastes installations industrielles.",
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

@media (max-width: 1100px) {
  .service-details__sidebar {
    position: static !important;
    margin-top: 0 !important;
    width: 100% !important;
    left: 0 !important;
  }
  
  .service-details__sidebar.fixed {
    position: static !important;
    max-height: none;
    overflow-y: visible;
  }
}
</style>
