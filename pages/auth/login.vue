<template>
  <div id="login">
    <div class="container">
      <div class="round"></div>
      <div class="row justify-content-center py-4">
        <div class="col-sm-10 col-md-7 col-lg-6">
          <h3 class="text-center fw-bold">DarkForum</h3>
          <div class="d-flex justify-content-center">
            <img src="~/assets/img/logo.png" alt="Logo" class="logo" />
          </div>
          <form method="post" action="" class="form">
            <h4 class="text-center fw-bold">Login</h4>
            <div class="input">
              <input
                type="text"
                class="form-control mb-4"
                placeholder="Username"
              />
              <input
                type="text"
                class="form-control mb-1"
                placeholder="Password"
              />
              <nuxt-link to="forgot-password">Forgot password ?</nuxt-link>
            </div>
            <div class="d-flex justify-content-center mt-3">
              <button type="button" class="btn btn-login">Login</button>
            </div>
          </form>
          <div class="d-flex justify-content-center mt-3 register">
            <div>
              Don't have an account?
              <nuxt-link class="d-block" to="register"> Register here </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
