<template>
  <div>
    <!--Page Header Start-->
    <section class="page-header">
      <div class="page-header-bg" style="background-image: url(/assets/images/backgrounds/blo.jpg)"></div>
      <div class="container">
        <div class="page-header__inner">
          <h2>{{ t('ethics.code.pageHeader.title') }}</h2>
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="/">{{ t('ethics.code.pageHeader.breadcrumb.home') }}</a></li>
            <li><a href="/ethique">{{ t('ethics.code.pageHeader.breadcrumb.ethics') }}</a></li>
            <li class="active">{{ t('ethics.code.pageHeader.breadcrumb.current') }}</li>
          </ul>
        </div>
      </div>
    </section>
    <!--Page Header End-->

    <!--News Details Start-->
    <section class="news-details">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-7">
            <div class="news-details__left">
              <div class="news-details__img">
                <img src="/assets/images/ethique/lp-1-3.jpg" class="max-h-[500px] object-cover" :alt="t('ethics.code.content.title')" />
                <div class="news-details__date-box">
                  <p>{{ t('ethics.code.content.date') }}</p>
                </div>
              </div>
              <div class="news-details__content">
                <h3 class="news-details__title">{{ t('ethics.code.content.title') }}</h3>
                <h4 class="news-details__subtitle text-lg font-medium text-conult-base mb-4">{{ t('ethics.code.content.subtitle') }}</h4>
                <p class="news-details__text-1">
                  {{ t('ethics.code.content.intro') }}
                </p>
                <div class="space-y-6 mt-6">
                  <template v-for="i in 4" :key="i">
                    <div class="news-details__text-3" v-if="t(`ethics.code.content.sections.${i}.title`)">
                      <h5 class="font-semibold text-lg mb-2">{{ t(`ethics.code.content.sections.${i}.title`) }}</h5>
                      <p>{{ t(`ethics.code.content.sections.${i}.description`) }}</p>
                    </div>
                  </template>

                  <div class="mt-8">
                    <p class="news-details__text-3 mb-4">{{ t('ethics.code.content.download.title') }}</p>
                    <a target="_blank" rel="noopener noreferrer" href="/docs/LLI-Code-of-Conduct.pdf" class="thm-btn flex max-w-[300px] justify-center items-center gap-2">
                      <div class="w-4 h-4"><img class="w-4 h-4" src="/docs/pdf-101.svg" alt="PDF"></div>
                      <div class="text-center">{{ t('ethics.code.content.download.button') }}</div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="news-details__bottom">
                <p class="news-details__tags">
                  <span>{{ t('ethics.code.meta.tags.title') }}</span>
                  <template v-for="i in 3" :key="i">
                    <a v-if="t(`ethics.code.meta.tags.items.${i}`)" href="#">{{ t(`ethics.code.meta.tags.items.${i}`) }}</a>
                  </template>
                </p>
                <div class="news-details__social-list">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/LatlongInternational/"><i class="fab fa-facebook"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/latlong-international/"><i class="fab fa-linkedin-in"></i></a>
                <a  target="_blank" rel="noopener noreferrer" href="https://wa.me/243993400082"><i class="fab fa-whatsapp"></i></a>
              
                </div>
              </div>
              <div class="author-one">
                
                <div class="author-one__content">
                  <h3>{{ t('ethics.code.content.author.name') }}</h3>
                  <p>
                    {{ t('ethics.code.content.author.description') }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-5">
            <div class="sidebar">
              <div class="sidebar__single sidebar__post">
                <h3 class="sidebar__title">{{ t('ethics.code.sidebar.relatedPages.title') }}</h3>
                <ul class="sidebar__post-list list-unstyled">
                  <template v-for="i in 4" :key="i">
                    <li v-if="t(`ethics.code.sidebar.relatedPages.items.${i}.title`)">
                    <div class="sidebar__post-image">
                        <img :src="getImageSrc(t(`ethics.code.sidebar.relatedPages.items.${i}.key`))" 
                             :alt="t(`ethics.code.sidebar.relatedPages.items.${i}.title`)" />
                    </div>
                    <div class="sidebar__post-content">
                      <h3>
                          <span class="sidebar__post-content-meta">
                            <i class="far fa-user-circle"></i>{{ t(`ethics.code.sidebar.relatedPages.items.${i}.author`) }}
                          </span>
                          <a :href="getPageUrl(t(`ethics.code.sidebar.relatedPages.items.${i}.key`))">
                            {{ t(`ethics.code.sidebar.relatedPages.items.${i}.title`) }}
                          </a>
                      </h3>
                    </div>
                  </li>
                  </template>
                </ul>
              </div>

              <div class="sidebar__single sidebar__tags">
                <h3 class="sidebar__title">{{ t('ethics.code.sidebar.tags.title') }}</h3>
                <div class="sidebar__tags-list">
                  <template v-for="i in 5" :key="i">
                    <a v-if="t(`ethics.code.sidebar.tags.items.${i}`)" href="#">
                      {{ t(`ethics.code.sidebar.tags.items.${i}`) }}
                    </a>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--News Details End-->
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const getImageSrc = (key: string): string => {
  switch (key) {
    case 'conseils':
      return '/assets/images/ethique/consultance.png'
    case 'csr':
      return '/assets/images/ethique/lp-1-2.jpg'
    case 'code':
      return '/assets/images/ethique/lp-1-3.jpg'
    case 'icoca':
      return '/assets/images/ethique/lp-1-400.jpeg'
    case 'terms':
      return '/assets/images/ethique/nouvellesst.png'
    default:
      return '/assets/images/ethique/consultance.png'
  }
}

const getPageUrl = (key: string): string => {
  switch (key) {
    case 'conseils':
      return '/ethique/conseils'
    case 'csr':
      return '/ethique/rse'
    case 'terms':
      return '/ethique/termes-conditions'
    case 'icoca':
      return '/ethique/icoca'
    default:
      return '/ethique'
  }
}

definePageMeta({
  title: 'Code de conduite - Latlong',
  description: 'Découvrez notre Code de conduite professionnel qui guide le comportement de nos employés et partenaires.'
})
</script> 