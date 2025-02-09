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
          <h2>Détails de l'article</h2>
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="/">Accueil</a></li>
            <li class="active">Blog</li>
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
                <img src="/assets/images/blog/news-details-img-1.jpg" alt="" />
                <div class="news-details__date-box">
                  <p>20 Oct</p>
                </div>
              </div>
              <div class="news-details__content">
                <ul class="list-unstyled news-details__meta">
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
                <h3 class="news-details__title">Long Term Advice to Grow Businesses</h3>
                <p class="news-details__text-1">
                  Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum.
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have alteration in some injected or words which don't look even
                  slightly believable. If you are going to use a passage of Lorem Ipsum,
                  you need to be sure there isn't anything embarrang hidden in the middle
                  of text. All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true generator on
                  the Internet. It uses a dictionary of over 200 Latin words, combined
                  with a handful of model sentence structures, to generate Lorem Ipsum
                  which looks reasonable.
                </p>
                <p class="news-details__text-2">
                  Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type simen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting.
                </p>
                <p class="news-details__text-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. orem Ipsum has been the industry's standard dummy text ever
                  since the when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five centuries,
                  but also the leap into unchanged.
                </p>
              </div>
              <div class="news-details__bottom">
                <p class="news-details__tags">
                  <span>Tags</span>
                  <a href="#">consulting</a>
                  <a href="#">advice</a>
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
                  <img src="/assets/images/blog/author-1-1.jpg" alt="" />
                </div>
                <div class="author-one__content">
                  <h3>Christine Eve</h3>
                  <p>
                    Lorem ipsum is simply free text by copytyping refreshing. Neque porro
                    est qui dolorem ipsum quia quaed veritatis et quasi architecto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-5">
            <div class="sidebar">
              <div class="sidebar__single sidebar__search">
                <form action="#" class="sidebar__search-form">
                  <input type="search" placeholder="Faire une recherche" />
                  <button type="submit"><i class="icon-magnifying-glass"></i></button>
                </form>
              </div>
              <div class="sidebar__single sidebar__post">
                <h3 class="sidebar__title">Publication récentes</h3>
                <ul class="sidebar__post-list list-unstyled">
                  <li>
                    <div class="sidebar__post-image">
                      <img src="/assets/images/blog/lp-1-1.jpg" alt="" />
                    </div>
                    <div class="sidebar__post-content">
                      <h3>
                        <span class="sidebar__post-content-meta"
                          ><i class="far fa-user-circle"></i>Admin</span
                        >
                        <a href="/blog/details-id">Je suis un titre de cet article</a>
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div class="sidebar__post-image">
                      <img src="/assets/images/blog/lp-1-2.jpg" alt="" />
                    </div>
                    <div class="sidebar__post-content">
                      <h3>
                        <span class="sidebar__post-content-meta"
                          ><i class="far fa-user-circle"></i>Admin</span
                        >
                        <a href="/blog/details-id">Je suis un titre de cet article</a>
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div class="sidebar__post-image">
                      <img src="/assets/images/blog/lp-1-3.jpg" alt="" />
                    </div>
                    <div class="sidebar__post-content">
                      <h3>
                        <span class="sidebar__post-content-meta"
                          ><i class="far fa-user-circle"></i>Admin</span
                        >
                        <a href="/blog/details-id">Je suis un titre de cet article</a>
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="sidebar__single sidebar__tags">
                <h3 class="sidebar__title">Étiquettes</h3>
                <div class="sidebar__tags-list">
                  <a href="#">Consulting</a>
                  <a href="#">Advice</a>
                  <a href="#">bank</a>
                  <a href="#">Marketing</a>
                  <a href="#">Finance</a>
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
