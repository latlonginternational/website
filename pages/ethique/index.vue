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
          <h2>Éthique et Responsabilité</h2>
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="/">Accueil</a></li>
            <li class="active">Éthique</li>
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
          <span class="text-conult-base font-conult text-sm uppercase tracking-wider mb-2 block">Notre engagement</span>
          <h2 class="text-3xl md:text-4xl font-conult font-bold text-conult-black">Nos Principes Éthiques</h2>
        </div>

        <!-- Grid des articles -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DefaultCard v-for="article in articles" :key="article.id" :data="article" />
        </div>
      </div>
    </section>
    <!--Section Content End-->
  </div>
</template>

<script setup lang="ts">
import DefaultCard from '~/components/DefaultCard.vue'

const articles = [
  {
    id: 1,
    image: '/assets/images/blog/ethique-conseils.jpg',
    date: '15 Mars 2024',
    auteur: 'LatLong',
    commentaires: 0,
    titre: 'Conseils',
    description: 'Nos principes directeurs et conseils pour maintenir les plus hauts standards éthiques dans nos opérations quotidiennes.',
    lien: '/ethique/conseils'
  },
  {
    id: 2,
    image: '/assets/images/blog/ethique-rse.jpg',
    date: '20 Mars 2024',
    auteur: 'LatLong',
    commentaires: 0,
    titre: 'Responsabilité sociétale de l\'Entreprise',
    description: 'Notre engagement envers le développement durable, l\'impact social positif et la protection de l\'environnement.',
    lien: '/ethique/rse'
  },
  {
    id: 3,
    image: '/assets/images/blog/ethique-termes.jpg',
    date: '25 Mars 2024',
    auteur: 'LatLong',
    commentaires: 0,
    titre: 'Termes et conditions',
    description: 'Les conditions générales qui régissent nos services et notre relation avec nos clients et partenaires.',
    lien: '/ethique/termes-conditions'
  },
  {
    id: 4,
    image: '/assets/images/blog/ethique-code.jpg',
    date: '30 Mars 2024',
    auteur: 'LatLong',
    commentaires: 0,
    titre: 'Code de conduite',
    description: 'Notre Code de conduite professionnel qui guide le comportement de nos employés et partenaires.',
    lien: '/ethique/code-conduite'
  },
  {
    id: 5,
    image: '/assets/images/blog/ethique-icoca.jpg',
    date: '5 Avril 2024',
    auteur: 'LatLong',
    commentaires: 0,
    titre: 'ICoCA - International Code of Conduct Association',
    description: 'Notre adhésion et conformité aux standards internationaux de l\'ICoCA pour les services de sécurité privée.',
    lien: '/ethique/icoca'
  }
]
</script>
