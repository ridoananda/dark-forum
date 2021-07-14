<template>
  <div class="card-post mx-2 mx-sm-0">
    <div class="d-flex justify-content-between">
      <div class="info d-flex align-items-center">
        <nuxt-link to="/profil" class="text-decoration-none">
          <img
            src="~/assets/img/logo.png"
            width="60"
            height="60"
            class="logo rounded-circle"
          />
        </nuxt-link>
        <div class="uploader">
          <nuxt-link to="/post" class="text-decoration-none text">
            <p>Bypass 403 Forbidden!</p>
          </nuxt-link>
          <nuxt-link to="/profil" class="text-decoration-none">
            <small>Ardyan Vicky Ramadhan</small>
          </nuxt-link>
          <div class="info-post">
            <a href="/post" class="text-decoration-none text">
              <i class="bi bi-chat-square-text"></i> 2 comments
            </a>
          </div>
        </div>
      </div>
      <div class="add">
        <span>
          <i class="bi bi-bookmark"></i>
        </span>
        <i class="bi bi-heart"></i>
        <div>
          <nuxt-link to="/post" class="text-decoration-none text">
            1 Juli 2021
          </nuxt-link>
        </div>
      </div>
    </div>
    <nuxt-link to="/post">
      <img src="~/assets/img/pajak_bertutur.jpg" class="thumbnail img-fluid" />
    </nuxt-link>
    <div class="btn-tags mt-2">
      <a href="#" class="btn"> #bypass </a>
      <a href="#" class="btn"> #forbidden </a>
      <a href="#" class="btn"> #403 </a>
    </div>
  </div>
</template>
