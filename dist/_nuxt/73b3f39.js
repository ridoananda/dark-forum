(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4,5],{336:function(t,n,e){},337:function(t,n,e){},338:function(t,n,e){t.exports=e.p+"img/logo.861fb2f.png"},339:function(t,n,e){"use strict";e.r(n);var o=e(343),r=e(344),c=e.n(r),l=e(345),d=e.n(l),v=e(346),f=e.n(v),m=e(347),_=e.n(m),h=e(348),C=e.n(h),k=e(349),x=e.n(k),w=e(350),y=e.n(w);Object(o.b)("home",c.a),Object(o.b)("plus",d.a),Object(o.b)("sword-line",f.a),Object(o.b)("chat-bubbles-question-16-regular",C.a),Object(o.b)("ci-notification",_.a),Object(o.b)("user-circle-duotone",y.a),Object(o.b)("people-audience-24-filled",x.a);var j={components:{Icon:o.a},props:{icon:{type:String,required:!0}}},$=(e(340),e(87)),component=Object($.a)(j,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"icon d-flex text-center justify-content-center"},[e("Icon",{staticClass:"iconify",attrs:{icon:t.icon}})],1)}),[],!1,null,"354a0b36",null);n.default=component.exports},340:function(t,n,e){"use strict";e(336)},341:function(t,n,e){"use strict";e(337)},342:function(t,n,e){"use strict";e.r(n);var o={methods:{getPost:function(){this.loading=!0}},computed:{loading:function(){return this.$store.state.loadSkeleton}}},r=(e(341),e(87)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"navbar navbar-bawah navbar-expand navbar-dark fixed-bottom"},[e("div",{staticClass:"container-fluid py-0"},[e("div",{staticClass:"collapse navbar-collapse justify-content-around navbar-nav",attrs:{id:"navbarText"}},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/",exact:""},on:{click:t.getPost}},[e("Iconify",{attrs:{icon:"home"}}),t._v(" "),e("small",[t._v("Home")])],1),t._v(" "),e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/question"}},[e("Iconify",{attrs:{icon:"chat-bubbles-question-16-regular"}}),t._v(" "),e("small",[t._v("Question")])],1),t._v(" "),t._m(0),t._v(" "),e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],staticClass:"nav-link add-post",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[e("Iconify",{attrs:{icon:"plus"}})],1),t._v(" "),e("b-modal",{attrs:{id:"modal-center",centered:"","body-bg-variant":"soft","footer-bg-variant":"soft","footer-text-variant":"white","button-size":"sm","hide-header":""},scopedSlots:t._u([{key:"modal-footer",fn:function(n){var o=n.cancel;return[e("b-button",{attrs:{size:"sm",variant:"background"},on:{click:function(t){return o()}}},[t._v("\n            Cancel\n          ")])]}}])},[e("b-row",[e("b-col",[e("b-button",{staticClass:"my-3",attrs:{block:"",variant:"background",size:"sm"}},[e("nuxt-link",{staticClass:"text-white",attrs:{to:"/add-post"}},[t._v("\n                Add Post\n              ")])],1)],1)],1),t._v(" "),e("b-row",[e("b-col",[e("b-button",{attrs:{block:"",variant:"background",size:"sm"}},[e("nuxt-link",{staticClass:"text-white",attrs:{to:"/add-question"}},[t._v("\n                Add Question\n              ")])],1)],1)],1)],1),t._v(" "),e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/war"}},[e("Iconify",{attrs:{icon:"sword-line"}}),t._v(" "),e("small",[t._v("War")])],1),t._v(" "),e("nuxt-link",{staticClass:"nav-link",attrs:{to:"profil"}},[e("Iconify",{attrs:{icon:"user-circle-duotone"}}),t._v(" "),e("small",[t._v("Profile")])],1)],1)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"nav-link",attrs:{href:"#"}},[n("small")])}],!1,null,"107f4b71",null);n.default=component.exports;installComponents(component,{Iconify:e(339).default})},353:function(t,n,e){},355:function(t,n,e){"use strict";e(353)},359:function(t,n,e){},361:function(t,n,e){"use strict";e.r(n);var o={props:["title","createdAt","userName","slug","thumbnail"]},r=(e(355),e(87)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"card-post mx-2 mx-sm-0"},[o("div",{staticClass:"info"},[o("nuxt-link",{staticClass:"text-decoration-none",attrs:{to:"/profil"}},[o("img",{staticClass:"logo rounded-circle float-left mr-2",attrs:{src:e(338),width:"55",height:"55"}})]),t._v(" "),o("div",{staticClass:"uploader"},[o("nuxt-link",{staticClass:"text-decoration-none text",attrs:{to:"/post/"+t.slug}},[o("p",[t._v(t._s(t.title))])]),t._v(" "),o("div",{staticClass:"info-post d-flex justify-content-between align-items-center"},[o("small",{staticClass:"d-block"},[o("nuxt-link",{staticClass:"text-decoration-none date",attrs:{to:"/post/"+t.slug}},[o("b-icon",{staticClass:"mr-1",attrs:{icon:"calendar4"}}),t._v(t._s(t.createdAt)+"\n          ")],1),t._v(" "),o("nuxt-link",{staticClass:"text-decoration-none text d-block",attrs:{to:"/post/"+t.slug}},[o("b-icon",{staticClass:"mr-1",attrs:{icon:"chat-square-text"}}),t._v("2 comment\n          ")],1)],1),t._v(" "),o("div",{staticClass:"add text-center"},[o("b-icon",{staticClass:"mr-2",attrs:{icon:"heart"}}),t._v(" "),o("span",[o("b-icon",{attrs:{icon:"bookmark"}})],1)],1)])],1)],1),t._v(" "),o("nuxt-link",{attrs:{to:"/post/"+t.slug}},[t.thumbnail?o("div",[o("img",{staticClass:"thumbnail img-fluid",attrs:{src:t.thumbnail}})]):t._e()]),t._v(" "),t._m(0)],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"btn-tags mt-2"},[e("a",{staticClass:"btn",attrs:{href:"#"}},[t._v(" bug hunter ")]),t._v(" "),e("a",{staticClass:"btn",attrs:{href:"#"}},[t._v(" programming ")]),t._v(" "),e("a",{staticClass:"btn",attrs:{href:"#"}},[t._v(" hacking ")])])}],!1,null,"136af911",null);n.default=component.exports},369:function(t,n,e){"use strict";e(359)},383:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{loadingTime:2e3}},created:function(){this.$_loadingTimeInterval=null},mounted:function(){this.startLoading(),this.$store.dispatch("getPost")},methods:{clearLoadingTimeInterval:function(){clearInterval(this.$_loadingTimeInterval),this.$_loadingTimeInterval=null},startLoading:function(){this.$store.commit("SET_SKELETON",!0),this.loadingTime=0}},computed:{posts:function(){return this.$store.state.posts},loading:function(){return this.$store.state.skeleton}}},r=(e(369),e(87)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center",attrs:{id:"home"}},[e("div",{staticClass:"col-sm-10 col-lg-8 px-0 px-md-2"},[e("div",{staticClass:"navbar-atas fixed-top"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("h4",{staticClass:"font-weight-bold"},[t._v("DarkForum")]),t._v(" "),e("div",{staticClass:"notification",on:{click:function(n){return t.$router.push("/notification")}}},[e("Iconify",{attrs:{icon:"ci-notification"}}),t._v(" "),e("div",{staticClass:"count-notif"},[t._v("3")])],1)]),t._v(" "),t._m(0)]),t._v(" "),e("b-skeleton-wrapper",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"loading",fn:function(){return t._l(6,(function(n){return e("b-card",{key:n,attrs:{id:"card-loader"}},[e("b-skeleton",{staticClass:"float-left mr-2",attrs:{type:"avatar"}}),t._v(" "),e("b-skeleton",{attrs:{width:"70%"}}),t._v(" "),e("b-skeleton",{attrs:{width:"50%"}}),t._v(" "),e("b-skeleton-img",{attrs:{"no-aspect":"",height:"150px"}})],1)}))},proxy:!0}])},[t._v(" "),t._l(t.posts,(function(t){return e("div",{key:t.id},[e("CardPost",{attrs:{title:t.title.limit,createdAt:t.created_at.month,userName:t.user.name,slug:t.slug,thumbnail:t.thumbnail}})],1)}))],2)],1)])]),t._v(" "),e("NavbarAndroid")],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"swipe"},[e("a",{staticClass:"btn active",attrs:{href:"#"}},[t._v(" All Post ")]),t._v(" "),e("a",{staticClass:"btn",attrs:{href:"#"}},[t._v(" Popular Post ")]),t._v(" "),e("a",{staticClass:"btn",attrs:{href:"#"}},[t._v(" Recent Post ")]),t._v(" "),e("a",{staticClass:"btn",attrs:{href:"#"}},[t._v(" Bookmark ")])])}],!1,null,"9b8fb0ce",null);n.default=component.exports;installComponents(component,{Iconify:e(339).default,CardPost:e(361).default,NavbarAndroid:e(342).default})}}]);