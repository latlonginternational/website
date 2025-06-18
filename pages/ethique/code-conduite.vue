<template>
  <div>
    <!--Page Header Start-->
    <section class="page-header">
      <div class="page-header-bg" style="background-image: url(/assets/images/backgrounds/page-header-bg.jpg)"></div>
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
                <img src="/assets/images/blog/news-details-img-1.jpg" :alt="t('ethics.code.content.title')" />
                <div class="news-details__date-box">
                  <p>{{ t('ethics.code.content.date') }}</p>
                </div>
              </div>
              <div class="news-details__content">
                <h3 class="news-details__title">{{ t('ethics.code.content.title') }}</h3>
                <p class="news-details__text-1">
                  {{ t('ethics.code.content.intro') }}
                </p>
                <div class="space-y-6 mt-6">
                  <template v-for="i in 4" :key="i">
                    <p class="news-details__text-3" v-if="t(`ethics.code.content.sections.${i}.title`)">
                      <strong>{{ t(`ethics.code.content.sections.${i}.title`) }}</strong><br>
                      {{ t(`ethics.code.content.sections.${i}.description`) }}
                    </p>
                  </template>
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
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-facebook"></i></a>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
              <div class="author-one">
                <div class="author-one__image">
                  <img src="/assets/images/blog/author-1-1.jpg" :alt="t('ethics.code.content.author.name')" />
                </div>
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
                        <img :src="`/assets/images/blog/lp-1-${getImageIndex(t(`ethics.code.sidebar.relatedPages.items.${i}.key`))}.jpg`" 
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
    case 'terms':
      return '/ethique/termes-conditions'
    case 'icoca':
      return '/ethique/icoca'
    default:
      return '/ethique'
  }
}

definePageMeta({
  title: 'Code de conduite - LatLong',
  description: 'Découvrez notre Code de conduite professionnel qui guide le comportement de nos employés et partenaires.'
})
</script> 