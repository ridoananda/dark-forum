<template>
	<div id="login">
    <div class="container">
      <div class="round"></div>
      <div class="row justify-content-center py-4">
        <div class="col-sm-10 col-md-7 col-lg-6">
          <h3 class="text-center fw-bold">DarkForum</h3>
          <div class="d-flex justify-content-center">
            <img src="~/assets/img/logo.png" alt="Logo" class="logo">
          </div>
          <form method="post" action="" class="form">
            <h4 class="text-center fw-bold">Register</h4>
            <div class="input mb-4">
              <input type="text" class="form-control mb-4" placeholder="Username">
              <input type="text" class="form-control mb-4" placeholder="Email">
              <input type="password" class="form-control mb-4" placeholder="Password">
              <input type="password" class="form-control mb-2" placeholder="Re-type Password">
            </div>
            <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-login">Sign up</button>
            </div>
          </form>
          <div class="d-flex justify-content-center mt-3 register">
            <div>
              Already have an account?
              <nuxt-link class="d-block" to="login">
                Login here
              </nuxt-link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>