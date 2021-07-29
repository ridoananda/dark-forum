<template>
	<div id="forgot-password">
    <div class="container">
      <div class="row justify-content-center py-4">
        <div class="col-md-6 col-lg-4 text-center">
          <nuxt-link class="text-decoration-none text small" to="login">
            <b-icon icon="arrow-left"></b-icon> Back
          </nuxt-link>

          <h3 class="mb-4 mt-3 fw-bold">Forgot Password?</h3>
          <img src="~/assets/ilustration/smile 2.svg" class="img-fluid">
          <p class="my-4">
            Enter the email address
            <span class="d-block">
              associated with your account.
            </span>
          </p>
          <form method="post" action="" class="form">
            <input type="email" class="form-control" placeholder="Enter email address">
            <div class="d-flex justify-content-center">
              <button class="btn mt-4 btn-shadow" @click="$router.push('change-password')" type="button">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>