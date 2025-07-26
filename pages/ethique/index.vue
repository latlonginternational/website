<template>
  <div>
    <!--Page Header Start-->
    <section class="page-header">
      <div
        class="page-header-bg"
        style="background-image: url(/assets/images/backgrounds/blo.jpg)"
      ></div>
      <div class="container">
        <div class="page-header__inner">
          <h2>{{ t('ethics.pageHeader.title') }}</h2>
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="/">{{ t('ethics.pageHeader.breadcrumb.home') }}</a></li>
            <li class="active">{{ t('ethics.pageHeader.breadcrumb.current') }}</li>
          </ul>
        </div>
      </div>
    </section>
    <!--Page Header End-->

    <!--Section Content Start-->
    <section class="py-20">
      <div class="container mx-auto">
        <!-- Section Title -->
        <div class="text-center mb-12">
          <span class="text-conult-base font-conult text-sm uppercase tracking-wider mb-2 block">{{ t('ethics.content.commitment.subtitle') }}</span>
          <h2 class="text-3xl md:text-4xl font-conult font-bold text-conult-black">{{ t('ethics.content.commitment.title') }}</h2>
        </div>

        <!-- Grid des articles -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DefaultCard v-for="article in articles" :key="article.id" :data="article" />
        </div>
      </div>
    </section>
    <!--Section Content End-->

    <!--CTA One Start-->
    <section class="cta-one">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="cta-one__inner">
              <h2 class="cta-one__title" v-html="t('ethics.cta.title').replace('\n', '<br />')"></h2>
              <a href="/contact" class="thm-btn cta-one__btn">{{ t('ethics.cta.button') }}</a>
              <div
                class="cta-one__shape wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <img src="/assets/images/shapes/cta-one-shape.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--CTA One End-->
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DefaultCard from '~/components/DefaultCard.vue'

const { t } = useI18n()

const articles = [
  {
    id: 1,
    image: '/assets/images/blog/renforcement des capacites370-307.jpg',
    date: t('ethics.content.articles.advice.date'),
    auteur: t('ethics.content.articles.advice.author'),
    commentaires: 0,
    titre: t('ethics.content.articles.advice.title'),
    description: t('ethics.content.articles.advice.description'),
    lien: '/ethique/conseils'
  },
  {
    id: 2,
    image: '/assets/images/ethique/art2.jpg',
    date: t('ethics.content.articles.csr.date'),
    auteur: t('ethics.content.articles.csr.author'),
    commentaires: 0,
    titre: t('ethics.content.articles.csr.title'),
    description: t('ethics.content.articles.csr.description'),
    lien: '/ethique/rse'
  },
  {
    id: 3,
    image: '/assets/images/ethique/nouvellesst.png',
    date: t('ethics.content.articles.terms.date'),
    auteur: t('ethics.content.articles.terms.author'),
    commentaires: 0,
    titre: t('ethics.content.articles.terms.title'),
    description: t('ethics.content.articles.terms.description'),
    lien: '/ethique/termes-conditions'
  },
  {
    id: 4,
    image: '/assets/images/ethique/cont.jpg',
    date: t('ethics.content.articles.code.date'),
    auteur: t('ethics.content.articles.code.author'),
    commentaires: 0,
    titre: t('ethics.content.articles.code.title'),
    description: t('ethics.content.articles.code.description'),
    lien: '/ethique/code-conduite'
  },
  {
    id: 5,
    image: '/assets/images/ethique/lp-1-400.jpeg',
    date: t('ethics.content.articles.icoca.date'),
    auteur: t('ethics.content.articles.icoca.author'),
    commentaires: 0,
    titre: t('ethics.content.articles.icoca.title'),
    description: t('ethics.content.articles.icoca.description'),
    lien: '/ethique/icoca'
  }
]
</script>
