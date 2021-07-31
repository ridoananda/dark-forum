exports.ids = [11];
exports.modules = {

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.861fb2f.png";

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=9e9587d8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"login"}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"round\"></div> "),_vm._ssrNode("<div class=\"row justify-content-center py-4\">","</div>",[_vm._ssrNode("<div class=\"col-sm-10 col-md-7 col-lg-6\">","</div>",[_vm._ssrNode("<h3 class=\"text-center fw-bold\">DarkForum</h3> <div class=\"d-flex justify-content-center\"><img"+(_vm._ssrAttr("src",__webpack_require__(41)))+" alt=\"Logo\" class=\"logo\"></div> "),_vm._ssrNode("<form method=\"post\" class=\"form\">","</form>",[_vm._ssrNode("<h4 class=\"text-center fw-bold\">Login</h4> "),_vm._ssrNode("<div class=\"input\">","</div>",[_vm._ssrNode("<input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.email)))+(_vm._ssrClass(null,_vm.isInvalid))+"> "+((_vm.errors.email)?("<small class=\"invalid-feedback\">"+_vm._ssrEscape("\n              "+_vm._s(_vm.errors.email[0])+"\n            ")+"</small>"):"<!---->")+" <input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"form-control mt-3\"> "+((_vm.errors.password)?("<small class=\"invalid-feedback mb-2\">"+_vm._ssrEscape("\n              "+_vm._s(_vm.errors.password[0])+"\n            ")+"</small>"):"<!---->")+" "),_c('nuxt-link',{attrs:{"to":"forgot-password"}},[_vm._v("Forgot password ?")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"d-flex justify-content-center mt-3\">","</div>",[_vm._ssrNode("<button type=\"submit\" class=\"btn btn-login\">","</button>",[(_vm.loading)?_vm._ssrNode("<span>","</span>",[_vm._ssrNode("<div class=\"d-flex align-items-center\">","</div>",[_c('b-spinner',{staticClass:"mr-2",attrs:{"type":"grow","small":""}}),_vm._ssrNode(" <strong> Verifying</strong>")],2)]):_vm._ssrNode(("<span>Login</span>"))])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"d-flex justify-content-center mt-3 register\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("\n            Don't have an account?\n            "),_c('nuxt-link',{staticClass:"d-block",attrs:{"to":"register"}},[_vm._v(" Register here ")])],2)])],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=9e9587d8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      errors: [],
      isInvalid: 'form-control'
    };
  },

  methods: {
    async login() {
      this.loading = true;

      try {
        const response = await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.email,
            password: this.password
          }
        });

        if (response.status === 200) {
          this.loading = false;
          this.$toast.show(`Login success! welcome ${this.$auth.user.name}`, {
            type: 'success',
            action: {
              text: 'Close',
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
            duration: 5000
          });
          this.$router.push('/');
        }
      } catch (e) {
        if (e.response.status === 422) {
          this.$toast.error(e.response.data.message, {
            type: 'error',
            duration: 3000
          });
          this.errors = e.response.data.errors;
          this.isInvalid = 'form-control is-invalid';
        } else {
          this.$toast.error('Something went wrong:(', {
            type: 'error',
            duration: 3000
          });
        }

        this.loading = false;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5108595e"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map