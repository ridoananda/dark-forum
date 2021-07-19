<template>
  <nav class="navbar navbar-bawah navbar-expand navbar-dark fixed-bottom">
    <div class="container-fluid py-0">
      <div
        id="navbarText"
        class="collapse navbar-collapse justify-content-around navbar-nav"
      >
        <nuxt-link class="nav-link" to="/" exact>
          <span class="iconify" data-icon="eva:home-outline"></span>
          <small>Home</small>
        </nuxt-link>
        <nuxt-link class="nav-link" to="/question">
          <span class="iconify" data-icon="fluent:chat-bubbles-question-16-regular"></span>
          <small>Question</small>
        </nuxt-link>
        <a class="nav-link" href="#">
          <small></small>
        </a>
        <nuxt-link class="nav-link add-post" to="/add">
          <span class="iconify" data-icon="bi:plus"></span>
        </nuxt-link>
        <nuxt-link class="nav-link" to="/war">
          <span class="iconify" data-icon="ri:sword-line"></span>
          <small>War</small>
        </nuxt-link>
        <nuxt-link class="nav-link" to="profil">
          <span class="iconify" data-icon="ph:user-circle-duotone"></span>
          <small>Profile</small>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>
