<template>
  <nav class="navbar navbar-bawah navbar-expand navbar-dark fixed-bottom">
    <div class="container-fluid py-0">
      <div
        id="navbarText"
        class="collapse navbar-collapse justify-content-around navbar-nav"
      >
        <nuxt-link class="nav-link active" to="/">
          <i class="bi bi-house-door"></i>
          <small>Home</small>
        </nuxt-link>
        <a class="nav-link" href="chat.html">
          <i class="bi bi-chat"></i>
          <small>Question</small>
        </a>
        <a class="nav-link" href="#">
          <small></small>
        </a>
        <a class="nav-link add-post" href="add-post.html">
          <i class="bi bi-plus"></i>
        </a>
        <a class="nav-link" href="storage.html">
          <i class="bi bi-person"></i>
          <small>Storage</small>
        </a>
        <nuxt-link class="nav-link" to="profil">
          <i class="bi bi-person"></i>
          <small>Profile</small>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>
