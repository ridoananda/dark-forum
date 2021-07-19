<template>
  <div>
    <div class="container">
      <div class="row justify-content-center" id="detail-post">
        <div class="col-sm-10 col-lg-8 px-0 px-md-2">
          <div class="back" @click="$router.back()">
            <b-icon icon="chevron-left"></b-icon>
          </div>
          <img
            src="~/assets/img/pajak_bertutur.jpg"
            class="img-fluid thumbnail-post"
          />
          <div class="info-detail px-3 px-md-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <div class="d-flex align-items-center">
                  <img
                    src="~/assets/img/logo.png"
                    alt=""
                    class="logo rounded-circle"
                    width="50"
                    height="50"
                  />
                  <a
                    href="profil.html"
                    class="ml-2 d-block text-decoration-none uploader"
                  >
                    <span>Ardyan Vicky Ramadhan</span>
                    <div>Information</div>
                  </a>
                </div>
              </div>
              <div class="love-comment-bookmark">
                <span class="love bg-background">
                  <b-icon icon="heart"></b-icon> 16
                </span>
                <span class="bookmark bg-background">
                  <b-icon icon="bookmark"></b-icon>
                </span>
                <div class="comments pt-2 d-sm-inline">
                  <b-icon icon="chat-square-text"></b-icon> 3
                </div>
              </div>
            </div>
            <h5 class="mt-3 font-weight-bold">Bypass 404 Forbidden!</h5>
            <div class="mt-3 mb-2 tags">
              <span>Tags : </span>
              <div class="btn-tags d-inline">
                <a href="#" class="btn">bypass</a>
                <a href="#" class="btn">forbidden</a>
                <a href="#" class="btn">403</a>
              </div>
            </div>
            <p class="text mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              ab, tempora veritatis quo assumenda accusamus doloribus illum,
              quidem magni exercitationem pariatur sapiente voluptas impedit
              commodi rerum fuga itaque nihil quia. Sint, quam amet debitis
              voluptatum et quidem quaerat in totam culpa dolorem a ratione
              obcaecati officiis excepturi veniam, quisquam sed doloremque ipsa.
              Modi sed, aliquid possimus officiis aut voluptatem illo, itaque,
              ex doloremque nulla doloribus labore provident iusto qui autem
              minima rerum expedita id cupiditate. Veniam soluta molestias nulla
              est placeat, optio reiciendis quo assumenda rerum doloremque ab.
              Corrupti ducimus, soluta placeat quas optio eos consequatur
              distinctio et eligendi tempore!
            </p>
            
            <hr class="mt-2" />
            <h5 class="my-3 header-comment">
              <b-icon icon="chat-left-text"></b-icon> 3 Comments
            </h5>
            <div class="comments">
              <div class="d-flex align-items-start mt-3">
                <img
                  src="~/assets/img/logo.png"
                  alt=""
                  class="logo rounded-circle"
                  width="55"
                  height="55"
                />
                <div class="wrap-comment ml-2">
                  <a href="profil.html" class="username text-decoration-none"
                    >Rido Ananda</a
                  >
                  <p class="mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa asperiores, neque fuga repellendus eius consequatur
                    dolore veniam itaque harum officia ipsum aspernatur officiis
                    earum at molestias amet nostrum et cupiditate.
                  </p>
                </div>
              </div>
            </div>
            <div class="comments">
              <div class="d-flex align-items-start mt-3">
                <img
                  src="~/assets/img/logo.png"
                  alt=""
                  class="logo rounded-circle"
                  width="55"
                  height="55"
                />
                <div class="wrap-comment ml-2">
                  <a
                    href="profil.html"
                    class="username text-decoration-none is_posted"
                    >Ardyan Vicky Ramadhan</a
                  >
                  <p class="mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa asperiores, neque fuga repellendus eius consequatur
                    dolore veniam itaque harum officia ipsum aspernatur officiis
                    earum at molestias amet nostrum et cupiditate.
                  </p>
                </div>
              </div>
            </div>
            <div class="comments">
              <div class="d-flex align-items-start mt-3">
                <img
                  src="~/assets/img/logo.png"
                  alt=""
                  class="logo rounded-circle"
                  width="55"
                  height="55"
                />
                <div class="wrap-comment ml-2">
                  <a href="profil.html" class="username text-decoration-none"
                    >Rido Ananda</a
                  >
                  <p class="mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa asperiores, neque fuga repellendus eius consequatur
                    dolore veniam itaque harum officia ipsum aspernatur officiis
                    earum at molestias amet nostrum et cupiditate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavbarComment></NavbarComment>
  </div>
</template>
<script></script>
