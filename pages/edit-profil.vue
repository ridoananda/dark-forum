<template>
	<div>
		<div class="container">
    <div class="row justify-content-center" id="profil">
      <div class="col-sm-10 col-lg-8 px-0 px-md-2">
      	<div class="back" @click="$router.back()">
          <i class="bi bi-chevron-left"></i>
        </div>
        <div class="text-center info-user">
          <h5>Ardyan Vicky Ramadhan</h5>
          <img src="~/assets/img/logo.png" alt="profil" class="rounded-circle logo" width="80" height="80">
        </div>
        <form action="" method="post" class="wrapper">
          <label for="nama">Nama</label>
          <input type="text" class="form-control" id="nama">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email">
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-save">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <NavbarAndroid/>
	</div>
</template>