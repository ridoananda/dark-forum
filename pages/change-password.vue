<template>
	<div id="change-password">
    <div class="container">
      <div class="row justify-content-center py-4">
        <div class="col-md-6 col-lg-4">
          <nuxt-link class="text-decoration-none text small text-center d-block" to="login">
          	<b-icon icon="arrow-left"></b-icon> Back
          </nuxt-link>

          <h3 class="mb-4 mt-3 fw-bold text-center">Change Password!</h3>
          <img src="~/assets/ilustration/authentication 2.svg" class="img-fluid">
          <p class="mt-3 mb-4 text-center">
            Just create a new password.
            </span>
          </p>
          <form method="post" action="" class="form">
            <label for="password">New password</label>
            <input type="password" class="form-control mb-2" id="password">
            <label for="confirm-password">Confirm new password</label>
            <input type="password" class="form-control" id="confirm-password">
            <div class="d-flex justify-content-center">
              <button class="btn mt-4 btn-shadow" @click="$router.push('success')" type="button">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>