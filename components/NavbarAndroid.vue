<template>
  <nav class="navbar navbar-bawah navbar-expand navbar-dark fixed-bottom">
    <div class="container-fluid py-0">
      <div
        id="navbarText"
        class="collapse navbar-collapse justify-content-around navbar-nav"
      >
        <nuxt-link class="nav-link" to="/" exact>
          <Iconify icon="home"/>
          <small>Home</small>
        </nuxt-link>
        <nuxt-link class="nav-link" to="/question">
          <Iconify icon="chat-bubbles-question-16-regular" />
          <small>Question</small>
        </nuxt-link>
        <a class="nav-link" href="#">
          <small></small>
        </a>
        <nuxt-link class="nav-link add-post" to="/add">
          <Iconify icon="plus" />
        </nuxt-link>
        <nuxt-link class="nav-link" to="/war">
          <Iconify icon="sword-line" />
          <small>War</small>
        </nuxt-link>
        <nuxt-link class="nav-link" to="profil">
          <Iconify icon="user-circle-duotone" />
          <small>Profile</small>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
@import '~/assets/scss/bootstrap.scss';
// NAVBAR BAWAH
nav.navbar-bawah {
  @media (min-width: 576px) and (max-width: 992px) {
    width: 70%;
    margin: auto;
  }
  @media (min-width: 992px) {
    width: 55%;
    margin: auto;
  }
  background-color: $navbar;
  text-align: center;
  padding:0 0 0 0;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;

  a {
    &.add-post {
      position: absolute;
      top: -1.6em;
      border-radius: 50%;
      background: #0a223a;
      width: 3.2em;
      height: 3.2em;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.63);
      text-align: center;
      .icon {
        font-size: 2.4em;
        position: absolute;
        top: -.22em;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
    &.active {
      color: #2458d6;
    }
    padding: .1em 0 .3em 0;
    .icon {
      font-size: 1.4em;
    }
    small {
      display: block;
      font-size: 0.7em;
      margin-top: -2px;
    }
  }
}
</style>