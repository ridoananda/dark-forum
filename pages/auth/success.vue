<template>
	<div id="forgot-password">
    <div class="container">
      <div class="row justify-content-center py-4">
        <div class="col-md-6 col-lg-4 text-center">
          <h3 class="mb-4 mt-3 fw-bold">Success!</h3>
          <img src="~/assets/ilustration/success.svg" class="img-fluid">
          <p class="my-4">
            Your password has been changed
            <span class="d-block">Let's enjoy the forum!</span>
          </p>
          <form method="post" action="" class="form">
            <div class="d-flex justify-content-center">
              <button class="btn mt-4 btn-shadow" @click="$router.push('/')" type="button">
                Go to Dashboard
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>