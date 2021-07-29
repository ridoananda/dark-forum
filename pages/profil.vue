<template>
  <div>
    <div class="container">
      <div class="row justify-content-center" id="profil">
        <div class="col-sm-10 col-lg-8 px-0 px-md-2">
          <div class="text-center info-user">
            <h5>Ardyan Vicky Ramadhan</h5>
            <img
              src="~/assets/img/logo.png"
              alt="profil"
              class="rounded-circle logo"
              width="80"
              height="80"
            />
          </div>
          <div class="wrapper">
            <a href="#" class="btn btn-edit" @click.prevent="logout">Logout</a>
            <nuxt-link to="/edit-profil" class="btn btn-edit">Edit profil</nuxt-link>
            <h5 class="your-post">Your post</h5>
            <div class="card-post">
              <div class="d-flex justify-content-between">
                <div class="info d-flex align-items-center">
                  <a href="profil.html" class="text-decoration-none">
                    <img
                      src="~/assets/img/logo.png"
                      width="60"
                      height="60"
                      class="logo rounded-circle"
                    />
                  </a>
                  <div class="uploader">
                    <a
                      href="detail-video.html"
                      class="text-decoration-none text"
                    >
                      <p>Bypass 403 Forbidden!</p>
                    </a>
                    <a href="profil.html" class="text-decoration-none">
                      <small>Ardyan Vicky Ramadhan</small>
                    </a>
                    <div class="info-post">
                      <a
                        href="detail-video.html"
                        class="text-decoration-none text"
                      >
                        <i class="bi bi-chat-square-text"></i> 2 comments
                      </a>
                    </div>
                  </div>
                </div>
                <div class="action">
                  <button class="btn btn-sm text-info d-block">
                    <i class="bi bi-pencil"></i> Edit
                  </button>
                  <button class="btn btn-sm text-danger">
                    <i class="bi bi-trash"></i> Delete
                  </button>
                  <div>
                    <a
                      href="detail-video.html"
                      class="text-decoration-none text"
                    >
                      1 Juli 2021
                    </a>
                  </div>
                </div>
              </div>
              <a href="detail-video.html">
                <img
                  src="~/assets/img/pajak_bertutur.jpg"
                  class="thumbnail img-fluid"
                />
              </a>
              <div class="btn-tags mt-2">
                <a href="#" class="btn"> #bypass </a>
                <a href="#" class="btn"> #forbidden </a>
                <a href="#" class="btn"> #403 </a>
              </div>
            </div>
            <hr />
            <div class="card-post">
              <div class="d-flex justify-content-between">
                <div class="info d-flex align-items-center">
                  <a href="profil.html" class="text-decoration-none">
                    <img
                      src="~/assets/img/logo.png"
                      width="60"
                      height="60"
                      class="logo rounded-circle"
                    />
                  </a>
                  <div class="uploader">
                    <a
                      href="detail-video.html"
                      class="text-decoration-none text"
                    >
                      <p>Bypass 403 Forbidden!</p>
                    </a>
                    <a href="profil.html" class="text-decoration-none">
                      <small>Ardyan Vicky Ramadhan</small>
                    </a>
                    <div class="info-post">
                      <a
                        href="detail-video.html"
                        class="text-decoration-none text"
                      >
                        <i class="bi bi-chat-square-text"></i> 2 comments
                      </a>
                    </div>
                  </div>
                </div>
                <div class="action">
                  <button class="btn btn-sm text-info d-block">
                    <i class="bi bi-pencil"></i> Edit
                  </button>
                  <button class="btn btn-sm text-danger">
                    <i class="bi bi-trash"></i> Delete
                  </button>
                  <div>
                    <a
                      href="detail-video.html"
                      class="text-decoration-none text"
                    >
                      1 Juli 2021
                    </a>
                  </div>
                </div>
              </div>
              <a href="detail-video.html">
                <img
                  src="~/assets/img/pajak_bertutur.jpg"
                  class="thumbnail img-fluid"
                />
              </a>
              <div class="btn-tags mt-2">
                <a href="#" class="btn"> #bypass </a>
                <a href="#" class="btn"> #forbidden </a>
                <a href="#" class="btn"> #403 </a>
              </div>
            </div>
            <hr />
            <div class="card-post">
              <div class="d-flex justify-content-between">
                <div class="info d-flex align-items-center">
                  <a href="profil.html" class="text-decoration-none">
                    <img
                      src="~/assets/img/logo.png"
                      width="60"
                      height="60"
                      class="logo rounded-circle"
                    />
                  </a>
                  <div class="uploader">
                    <a
                      href="detail-video.html"
                      class="text-decoration-none text"
                    >
                      <p>Bypass 403 Forbidden!</p>
                    </a>
                    <a href="profil.html" class="text-decoration-none">
                      <small>Ardyan Vicky Ramadhan</small>
                    </a>
                    <div class="info-post">
                      <a
                        href="detail-video.html"
                        class="text-decoration-none text"
                      >
                        <i class="bi bi-chat-square-text"></i> 2 comments
                      </a>
                    </div>
                  </div>
                </div>
                <div class="action">
                  <button class="btn btn-sm text-info d-block">
                    <i class="bi bi-pencil"></i> Edit
                  </button>
                  <button class="btn btn-sm text-danger">
                    <i class="bi bi-trash"></i> Delete
                  </button>
                  <div>
                    <a
                      href="detail-video.html"
                      class="text-decoration-none text"
                    >
                      1 Juli 2021
                    </a>
                  </div>
                </div>
              </div>
              <a href="detail-video.html">
                <img
                  src="~/assets/img/pajak_bertutur.jpg"
                  class="thumbnail img-fluid"
                />
              </a>
              <div class="btn-tags mt-2">
                <a href="#" class="btn"> #bypass </a>
                <a href="#" class="btn"> #forbidden </a>
                <a href="#" class="btn"> #403 </a>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <NavbarAndroid />
  </div>
</template>

<script>
export default {
  methods: {
    async logout () {
      await this.$auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style></style>
