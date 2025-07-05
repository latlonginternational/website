<template>
  <div>
    <!--Page Header Start-->
    <section class="page-header">
      <div class="page-header-bg" style="background-image: url(/assets/images/backgrounds/blo.jpg)"></div>
      <div class="container">
        <div class="page-header__inner">
          <h2>{{ t('ethics.icoca.pageHeader.title') }}</h2>
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="/">{{ t('ethics.icoca.pageHeader.breadcrumb.home') }}</a></li>
            <li><a href="/ethique">{{ t('ethics.icoca.pageHeader.breadcrumb.ethics') }}</a></li>
            <li class="active">{{ t('ethics.icoca.pageHeader.breadcrumb.current') }}</li>
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
                <img src="/assets/images/ethique/lp-1-400.jpeg" :alt="t('ethics.icoca.content.title')" />
                <div class="news-details__date-box">
                  <p>{{ t('ethics.icoca.content.date') }}</p>
                </div>
              </div>
              <div class="news-details__content">
                <h3 class="news-details__title">{{ t('ethics.icoca.content.title') }}</h3>
                <p class="news-details__text-1">
                  {{ t('ethics.icoca.content.intro') }}
                </p>
                <div class="space-y-6 mt-6">
                  <template v-for="i in 4" :key="i">
                    <p class="news-details__text-3" v-if="t(`ethics.icoca.content.sections.${i}.title`)">
                      <strong>{{ t(`ethics.icoca.content.sections.${i}.title`) }}</strong><br>
                      {{ t(`ethics.icoca.content.sections.${i}.description`) }}
                    </p>
                  </template>
                </div>
              </div>
              <div class="news-details__bottom">
                <p class="news-details__tags">
                  <span>{{ t('ethics.icoca.meta.tags.title') }}</span>
                  <template v-for="i in 3" :key="i">
                    <a v-if="t(`ethics.icoca.meta.tags.items.${i}`)" href="#">{{ t(`ethics.icoca.meta.tags.items.${i}`) }}</a>
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
                  <h3>{{ t('ethics.icoca.content.author.name') }}</h3>
                  <p>
                    {{ t('ethics.icoca.content.author.description') }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-5">
            <div class="sidebar">
              <div class="sidebar__single sidebar__post">
                <h3 class="sidebar__title">{{ t('ethics.icoca.sidebar.relatedPages.title') }}</h3>
                <ul class="sidebar__post-list list-unstyled">
                  <template v-for="i in 4" :key="i">
                    <li v-if="t(`ethics.icoca.sidebar.relatedPages.items.${i}.title`)">
                    <div class="sidebar__post-image">
                        <img :src="`/assets/images/ethique/lp-1-${getImageIndex(t(`ethics.icoca.sidebar.relatedPages.items.${i}.key`))}.jpg`" 
                             :alt="t(`ethics.icoca.sidebar.relatedPages.items.${i}.title`)" />
                    </div>
                    <div class="sidebar__post-content">
                      <h3>
                          <span class="sidebar__post-content-meta">
                            <i class="far fa-user-circle"></i>{{ t(`ethics.icoca.sidebar.relatedPages.items.${i}.author`) }}
                          </span>
                          <a :href="getPageUrl(t(`ethics.icoca.sidebar.relatedPages.items.${i}.key`))">
                            {{ t(`ethics.icoca.sidebar.relatedPages.items.${i}.title`) }}
                          </a>
                      </h3>
                    </div>
                  </li>
                  </template>
                </ul>
              </div>

              <div class="sidebar__single sidebar__tags">
                <h3 class="sidebar__title">{{ t('ethics.icoca.sidebar.tags.title') }}</h3>
                <div class="sidebar__tags-list">
                  <template v-for="i in 5" :key="i">
                    <a v-if="t(`ethics.icoca.sidebar.tags.items.${i}`)" href="#">
                      {{ t(`ethics.icoca.sidebar.tags.items.${i}`) }}
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

const getImageIndex = (key: string): string => {
  switch (key) {
    case 'icoca':
    case 'terms':
      return '3'
    case 'code':
      return '2'
    default:
      return '1'
  }
}

const getPageUrl = (key: string): string => {
  switch (key) {
    case 'conseils':
      return '/ethique/conseils'
    case 'csr':
      return '/ethique/rse'
    case 'code':
      return '/ethique/code-conduite'
    case 'terms':
      return '/ethique/termes-conditions'
    default:
      return '/ethique'
  }
}

definePageMeta({
  title: 'ICoCA - Latlong',
  description: 'Découvrez notre engagement en tant que membre de l\'International Code of Conduct Association (ICoCA) et nos standards internationaux.'
})
</script> 