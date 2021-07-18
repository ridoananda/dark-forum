<template>
  <div>
    <div class="container">
      <div id="home" class="row justify-content-center">
        <div class="col-sm-10 col-lg-8 px-0 px-md-2">
          <div class="navbar-atas fixed-top">
            <div class="d-flex justify-content-between align-items-center">
              <h3 class="fw-bold">DarkForum</h3>
              <i class="bi bi-bell h4"></i>
            </div>
            <div class="swipe">
              <a href="#" class="btn active"> All Post </a>
              <a href="#" class="btn"> Popular Post </a>
              <a href="#" class="btn"> Recent Post </a>
              <a href="#" class="btn"> Bookmark </a>
            </div>
          </div>
          <CardPost></CardPost>
          <CardPost></CardPost>
          <CardPost></CardPost>
        </div>
      </div>
    </div>

    <!-- NAVBAR ANDROID -->
    <NavbarAndroid />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss"></style>
