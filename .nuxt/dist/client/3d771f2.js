(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{338:function(t,e,r){t.exports=r.p+"img/logo.861fb2f.png"},379:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex justify-content-center"},[e("img",{staticClass:"logo",attrs:{src:r(338),alt:"Logo"}})])}],o=r(36),l=(r(69),r(32),{data:function(){return{email:"",password:"",loading:!1,errors:[],isInvalid:"form-control"}},methods:{login:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$auth.loginWith("laravelSanctum",{data:{email:t.email,password:t.password}});case 4:200===e.sent.status&&(t.loading=!1,t.$toast.show("Login success! welcome ".concat(t.$auth.user.name),{type:"success",action:{text:"Close",onClick:function(t,e){e.goAway(0)}},duration:5e3}),t.$router.push("/")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),422===e.t0.response.status?(t.$toast.error(e.t0.response.data.message,{type:"error",duration:3e3}),t.errors=e.t0.response.data.errors,t.isInvalid="form-control is-invalid"):t.$toast.error("Something went wrong:(",{type:"error",duration:3e3}),t.loading=!1;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}}),c=r(87),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"login"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"round"}),t._v(" "),r("div",{staticClass:"row justify-content-center py-4"},[r("div",{staticClass:"col-sm-10 col-md-7 col-lg-6"},[r("h3",{staticClass:"text-center fw-bold"},[t._v("DarkForum")]),t._v(" "),t._m(0),t._v(" "),r("form",{staticClass:"form",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[r("h4",{staticClass:"text-center fw-bold"},[t._v("Login")]),t._v(" "),r("div",{staticClass:"input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],class:t.isInvalid,attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t.errors.email?r("small",{staticClass:"invalid-feedback"},[t._v("\n              "+t._s(t.errors.email[0])+"\n            ")]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control mt-3",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t.errors.password?r("small",{staticClass:"invalid-feedback mb-2"},[t._v("\n              "+t._s(t.errors.password[0])+"\n            ")]):t._e(),t._v(" "),r("nuxt-link",{attrs:{to:"forgot-password"}},[t._v("Forgot password ?")])],1),t._v(" "),r("div",{staticClass:"d-flex justify-content-center mt-3"},[r("button",{staticClass:"btn btn-login",attrs:{type:"submit"}},[t.loading?r("span",[r("div",{staticClass:"d-flex align-items-center"},[r("b-spinner",{staticClass:"mr-2",attrs:{type:"grow",small:""}}),t._v(" "),r("strong",[t._v(" Verifying")])],1)]):r("span",[t._v("Login")])])])]),t._v(" "),r("div",{staticClass:"d-flex justify-content-center mt-3 register"},[r("div",[t._v("\n            Don't have an account?\n            "),r("nuxt-link",{staticClass:"d-block",attrs:{to:"register"}},[t._v(" Register here ")])],1)])])])])])}),n,!1,null,null,null);e.default=component.exports}}]);