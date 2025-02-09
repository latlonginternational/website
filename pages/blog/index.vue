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
          <h2>Latest News</h2>
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="/">Home</a></li>
            <li class="active">News</li>
          </ul>
        </div>
      </div>
    </section>
    <!--Page Header End-->

    <!--News Page Start-->
    <section class="news-page">
      <div class="container">
        <div class="row">
          <div
            v-for="(item, index) in 6"
            :key="item"
            class="col-xl-4 col-lg-4 wow fadeInUp"
            :data-wow-delay="100 * index + 'ms'"
          >
            <!--News One Single-->
            <div class="news-one__single">
              <div class="news-one__img">
                <img src="/assets/images/blog/news-page-img-1.jpg" alt="" />
                <a href="/blog/details-id">
                  <span class="news-one__plus"></span>
                </a>
                <div class="news-one__date">
                  <p>20 oct</p>
                </div>
              </div>
              <div class="news-one__content">
                <ul class="list-unstyled news-one__meta">
                  <li>
                    <a href="/blog/details-id"
                      ><i class="far fa-user-circle"></i> Admin</a
                    >
                  </li>
                  <li>
                    <a href="/blog/details-id"
                      ><i class="far fa-comments"></i> 2 Comments</a
                    >
                  </li>
                </ul>
                <h3 class="news-one__title">
                  <a href="/blog/details-id">Je suis un titre de cet article</a>
                </h3>
                <p class="news-one__text">
                  Je suis la brève description de cet article publié sur le site
                  de LatLong International SARL
                </p>
                <div class="news-one__bottom">
                  <a href="/blog/details-id" class="news-one__btn">Lire plus</a>
                  <a href="/blog/details-id" class="news-one__arrow"
                    ><span class="icon-right-arrow"></span
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--News Page End-->
  </div>
</template>

<script const>
const blog_data = [{}];
</script>
