(window.webpackJsonp=window.webpackJsonp||[]).push([[17,4,5,6],{325:function(t,n,e){},326:function(t,n,e){},327:function(t,n,e){t.exports=e.p+"img/logo.861fb2f.png"},328:function(t,n,e){"use strict";e.r(n);var o=e(333),r=e(334),c=e.n(r),l=e(335),d=e.n(l),v=e(336),f=e.n(v),m=e(337),_=e.n(m),h=e(338),C=e.n(h),k=e(339),x=e.n(k),w=e(340),y=e.n(w);Object(o.b)("home",c.a),Object(o.b)("plus",d.a),Object(o.b)("sword-line",f.a),Object(o.b)("chat-bubbles-question-16-regular",C.a),Object(o.b)("ci-notification",_.a),Object(o.b)("user-circle-duotone",y.a),Object(o.b)("people-audience-24-filled",x.a);var j={components:{Icon:o.a},props:{icon:{type:String,required:!0}}},I=(e(329),e(87)),component=Object(I.a)(j,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"icon d-flex text-center justify-content-center"},[e("Icon",{staticClass:"iconify",attrs:{icon:t.icon}})],1)}),[],!1,null,"354a0b36",null);n.default=component.exports},329:function(t,n,e){"use strict";e(325)},330:function(t,n,e){"use strict";e(326)},331:function(t,n,e){"use strict";e.r(n);e(330);var o=e(87),component=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"navbar navbar-bawah navbar-expand navbar-dark fixed-bottom"},[e("div",{staticClass:"container-fluid py-0"},[e("div",{staticClass:"collapse navbar-collapse justify-content-around navbar-nav",attrs:{id:"navbarText"}},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/",exact:""}},[e("Iconify",{attrs:{icon:"home"}}),t._v(" "),e("small",[t._v("Home")])],1),t._v(" "),e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/question"}},[e("Iconify",{attrs:{icon:"chat-bubbles-question-16-regular"}}),t._v(" "),e("small",[t._v("Question")])],1),t._v(" "),t._m(0),t._v(" "),e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],staticClass:"nav-link add-post",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[e("Iconify",{attrs:{icon:"plus"}})],1),t._v(" "),e("b-modal",{attrs:{id:"modal-center",centered:"","body-bg-variant":"soft","footer-bg-variant":"soft","footer-text-variant":"white","button-size":"sm","hide-header":""},scopedSlots:t._u([{key:"modal-footer",fn:function(n){var o=n.cancel;return[e("b-button",{attrs:{size:"sm",variant:"background"},on:{click:function(t){return o()}}},[t._v("\n            Cancel\n          ")])]}}])},[e("b-row",[e("b-col",[e("b-button",{staticClass:"my-3",attrs:{block:"",variant:"background",size:"sm"}},[e("nuxt-link",{staticClass:"text-white",attrs:{to:"/add-post"}},[t._v("\n                Add Post\n              ")])],1)],1)],1),t._v(" "),e("b-row",[e("b-col",[e("b-button",{attrs:{block:"",variant:"background",size:"sm"}},[e("nuxt-link",{staticClass:"text-white",attrs:{to:"/add-question"}},[t._v("\n                Add Question\n              ")])],1)],1)],1)],1),t._v(" "),e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/war"}},[e("Iconify",{attrs:{icon:"sword-line"}}),t._v(" "),e("small",[t._v("War")])],1),t._v(" "),e("nuxt-link",{staticClass:"nav-link",attrs:{to:"profil"}},[e("Iconify",{attrs:{icon:"user-circle-duotone"}}),t._v(" "),e("small",[t._v("Profile")])],1)],1)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"nav-link",attrs:{href:"#"}},[n("small")])}],!1,null,"47014af0",null);n.default=component.exports;installComponents(component,{Iconify:e(328).default})},332:function(t,n,e){t.exports=e.p+"img/pajak_bertutur.546c93f.jpg"},342:function(t,n,e){},344:function(t,n,e){"use strict";e(342)},348:function(t,n,e){},350:function(t,n,e){"use strict";e.r(n);var o={props:["title","createdAt","userName","slug"]},r=(e(344),e(87)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"card-post mx-2 mx-sm-0"},[o("div",{staticClass:"info"},[o("nuxt-link",{staticClass:"text-decoration-none",attrs:{to:"/profil"}},[o("img",{staticClass:"logo rounded-circle float-left mr-2",attrs:{src:e(327),width:"55",height:"55"}})]),t._v(" "),o("div",{staticClass:"uploader"},[o("nuxt-link",{staticClass:"text-decoration-none text",attrs:{to:"/post/"+t.slug}},[o("p",[t._v(t._s(t.title))])]),t._v(" "),o("div",{staticClass:"info-post d-flex justify-content-between align-items-center"},[o("small",{staticClass:"d-block"},[o("nuxt-link",{staticClass:"text-decoration-none date",attrs:{to:"/post/"+t.slug}},[o("b-icon",{staticClass:"mr-1",attrs:{icon:"calendar4"}}),t._v(t._s(t.createdAt)+"\n            ")],1),t._v(" "),o("nuxt-link",{staticClass:"text-decoration-none text d-block",attrs:{to:"/post/"+t.slug}},[o("b-icon",{staticClass:"mr-1",attrs:{icon:"chat-square-text"}}),t._v("2 comment\n            ")],1)],1),t._v(" "),o("div",{staticClass:"add text-center"},[o("b-icon",{staticClass:"mr-2",attrs:{icon:"heart"}}),t._v(" "),o("span",[o("b-icon",{attrs:{icon:"bookmark"}})],1)],1)])],1)],1),t._v(" "),o("nuxt-link",{attrs:{to:"/post/"+t.slug}},[o("img",{staticClass:"thumbnail img-fluid",attrs:{src:e(332)}})]),t._v(" "),t._m(0)],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"btn-tags mt-2"},[e("a",{staticClass:"btn",attrs:{href:"#"}},[t._v(" bug hunter ")]),t._v(" "),e("a",{staticClass:"btn",attrs:{href:"#"}},[t._v(" programming ")]),t._v(" "),e("a",{staticClass:"btn",attrs:{href:"#"}},[t._v(" hacking ")])])}],!1,null,"079f38e2",null);n.default=component.exports},360:function(t,n,e){"use strict";e(348)},373:function(t,n,e){"use strict";e.r(n);var o=e(39),r=(e(75),e(56),{data:function(){return{loading:!1,loadingTime:0,posts:[]}},watch:{loading:function(t,n){var e=this;t!==n&&(this.clearLoadingTimeInterval(),t&&(this.$_loadingTimeInterval=setInterval((function(){e.loadingTime++}),1e3)))}},created:function(){this.$_loadingTimeInterval=null},mounted:function(){this.startLoading(),this.getPost()},methods:{clearLoadingTimeInterval:function(){clearInterval(this.$_loadingTimeInterval),this.$_loadingTimeInterval=null},startLoading:function(){this.loading=!0,this.loadingTime=0},getPost:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.get("post");case 2:e=n.sent,t.posts=e.data.data,console.log(e),200===e.status&&(t.loading=!1);case 6:case"end":return n.stop()}}),n)})))()}}}),c=(e(360),e(87)),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center",attrs:{id:"home"}},[e("div",{staticClass:"col-sm-10 col-lg-8 px-0 px-md-2"},[e("div",{staticClass:"navbar-atas fixed-top"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("h4",{staticClass:"font-weight-bold"},[t._v("DarkForum")]),t._v(" "),e("div",{staticClass:"notification",on:{click:function(n){return t.$router.push("/notification")}}},[e("Iconify",{attrs:{icon:"ci-notification"}}),t._v(" "),e("div",{staticClass:"count-notif"},[t._v("3")])],1)]),t._v(" "),t._m(0)]),t._v(" "),e("b-skeleton-wrapper",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"loading",fn:function(){return t._l(6,(function(n){return e("b-card",{key:n,attrs:{id:"card-loader"}},[e("b-skeleton",{attrs:{width:"85%"}}),t._v(" "),e("b-skeleton",{attrs:{width:"60%"}}),t._v(" "),e("b-skeleton",{attrs:{width:"70%"}}),t._v(" "),e("b-skeleton-img",{staticClass:"mt-2",attrs:{"no-aspect":"",height:"150px"}})],1)}))},proxy:!0}])},[t._v(" "),t._l(t.posts,(function(t){return e("div",{key:t.id},[e("CardPost",{attrs:{title:t.title,createdAt:t.created_at.month,userName:t.user.name,slug:t.slug}})],1)}))],2)],1)])]),t._v(" "),e("NavbarAndroid")],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"swipe"},[e("a",{staticClass:"btn active",attrs:{href:"#"}},[t._v(" All Post ")]),t._v(" "),e("a",{staticClass:"btn",attrs:{href:"#"}},[t._v(" Popular Post ")]),t._v(" "),e("a",{staticClass:"btn",attrs:{href:"#"}},[t._v(" Recent Post ")]),t._v(" "),e("a",{staticClass:"btn",attrs:{href:"#"}},[t._v(" Bookmark ")])])}],!1,null,"16ea7f42",null);n.default=component.exports;installComponents(component,{Iconify:e(328).default,CardPost:e(350).default,NavbarAndroid:e(331).default})}}]);