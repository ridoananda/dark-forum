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
          <form method="post" class="form" @submit.prevent="login">
            <h4 class="text-center fw-bold">Login</h4>
            <div class="input">
              <input
                type="text"
                class="form-control mb-4"
                placeholder="Email"
                v-model="email"
              />
              <input
                type="text"
                class="form-control mb-1"
                placeholder="Password"
                v-model="password"
              />
              <nuxt-link to="forgot-password">Forgot password ?</nuxt-link>
            </div>
            <div class="d-flex justify-content-center mt-3">
              <button type="submit" class="btn btn-login">Login</button>
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
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      try {
        await this.$axios.get('sanctum/csrf-cookie');
        await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.email,
            password: this.password
          }
        });
        this.$router.push('/')
          
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
