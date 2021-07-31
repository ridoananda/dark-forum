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
                v-model="email"
                type="text"
                :class="isInvalid"
                placeholder="Email"
              />
              <small class="invalid-feedback" v-if="errors.email">
                {{ errors.email[0] }}
              </small>
              <input
                v-model="password"
                type="password"
                class="form-control mt-3"
                placeholder="Password"
              />
              <small class="invalid-feedback mb-2" v-if="errors.password">
                {{ errors.password[0] }}
              </small>
              <nuxt-link to="forgot-password">Forgot password ?</nuxt-link>
            </div>
            <div class="d-flex justify-content-center mt-3">
              <button type="submit" class="btn btn-login">
                <span v-if="loading">
                  <div class="d-flex align-items-center">
                    <b-spinner class="mr-2" type="grow" small></b-spinner>
                    <strong> Verifying</strong>
                  </div>
                </span>
                <span v-else>Login</span>
              </button>
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
      loading: false,
      errors: [],
      isInvalid: 'form-control'
    }
  },
  methods: {
    async login() {
      this.loading = true
      try {
        const response = await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.email,
            password: this.password
          }
        });
        if (response.status === 200) {
          this.loading = false
          this.$toast.show(`Login success! welcome ${this.$auth.user.name}`, {
            type: 'success',
            action : {
              text : 'Close',
              onClick : (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
            duration: 5000
          })
          this.$router.push('/')
        }
      } catch (e) {
        if (e.response.status === 422) {
          this.$toast.error(e.response.data.message, {
            type: 'error',
            duration: 3000,
          })
          this.errors = e.response.data.errors
          this.isInvalid = 'form-control is-invalid'
        } else {
          this.$toast.error('Something went wrong:(', {
            type: 'error',
            duration: 3000
          })
        }
        this.loading = false
      }
    }
  }
}
</script>
