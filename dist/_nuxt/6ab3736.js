(window.webpackJsonp=window.webpackJsonp||[]).push([[18,5,6],{325:function(t,n,e){},326:function(t,n,e){},328:function(t,n,e){"use strict";e.r(n);var c=e(333),r=e(334),o=e.n(r),l=e(335),d=e.n(l),v=e(336),m=e.n(v),f=e(337),_=e.n(f),C=e(338),x=e.n(C),h=e(339),k=e.n(h),w=e(340),y=e.n(w);Object(c.b)("home",o.a),Object(c.b)("plus",d.a),Object(c.b)("sword-line",m.a),Object(c.b)("chat-bubbles-question-16-regular",x.a),Object(c.b)("ci-notification",_.a),Object(c.b)("user-circle-duotone",y.a),Object(c.b)("people-audience-24-filled",k.a);var j={components:{Icon:c.a},props:{icon:{type:String,required:!0}}},z=(e(329),e(87)),component=Object(z.a)(j,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"icon d-flex text-center justify-content-center"},[e("Icon",{staticClass:"iconify",attrs:{icon:t.icon}})],1)}),[],!1,null,"354a0b36",null);n.default=component.exports},329:function(t,n,e){"use strict";e(325)},330:function(t,n,e){"use strict";e(326)},331:function(t,n,e){t.exports=e.p+"img/pajak_bertutur.546c93f.jpg"},332:function(t,n,e){"use strict";e.r(n);e(330);var c=e(87),component=Object(c.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"navbar navbar-bawah navbar-expand navbar-dark fixed-bottom"},[e("div",{staticClass:"container-fluid py-0"},[e("div",{staticClass:"collapse navbar-collapse justify-content-around navbar-nav",attrs:{id:"navbarText"}},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/",exact:""}},[e("Iconify",{attrs:{icon:"home"}}),t._v(" "),e("small",[t._v("Home")])],1),t._v(" "),e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/question"}},[e("Iconify",{attrs:{icon:"chat-bubbles-question-16-regular"}}),t._v(" "),e("small",[t._v("Question")])],1),t._v(" "),t._m(0),t._v(" "),e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],staticClass:"nav-link add-post",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[e("Iconify",{attrs:{icon:"plus"}})],1),t._v(" "),e("b-modal",{attrs:{id:"modal-center",centered:"","body-bg-variant":"soft","footer-bg-variant":"soft","footer-text-variant":"white","button-size":"sm","hide-header":""},scopedSlots:t._u([{key:"modal-footer",fn:function(n){var c=n.cancel;return[e("b-button",{attrs:{size:"sm",variant:"background"},on:{click:function(t){return c()}}},[t._v("\n            Cancel\n          ")])]}}])},[e("b-row",[e("b-col",[e("b-button",{staticClass:"my-3",attrs:{block:"",variant:"background",size:"sm"}},[e("nuxt-link",{staticClass:"text-white",attrs:{to:"/add-post"}},[t._v("\n                Add Post\n              ")])],1)],1)],1),t._v(" "),e("b-row",[e("b-col",[e("b-button",{attrs:{block:"",variant:"background",size:"sm"}},[e("nuxt-link",{staticClass:"text-white",attrs:{to:"/add-question"}},[t._v("\n                Add Question\n              ")])],1)],1)],1)],1),t._v(" "),e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/war"}},[e("Iconify",{attrs:{icon:"sword-line"}}),t._v(" "),e("small",[t._v("War")])],1),t._v(" "),e("nuxt-link",{staticClass:"nav-link",attrs:{to:"profil"}},[e("Iconify",{attrs:{icon:"user-circle-duotone"}}),t._v(" "),e("small",[t._v("Profile")])],1)],1)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"nav-link",attrs:{href:"#"}},[n("small")])}],!1,null,"47014af0",null);n.default=component.exports;installComponents(component,{Iconify:e(328).default})},347:function(t,n,e){},356:function(t,n,e){"use strict";e(347)},378:function(t,n,e){"use strict";e.r(n);e(356);var c=e(87),component=Object(c.a)({},(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{attrs:{id:"notification"}},[c("div",{staticClass:"container"},[c("div",{staticClass:"row justify-content-center"},[c("div",{staticClass:"col-sm-10 col-lg-8 px-0 px-md-2"},[c("div",{staticClass:"header"},[c("div",{staticClass:"d-flex justify-content-between align-items-center"},[c("h5",{staticClass:"font-weight-bold"},[t._v("Notification")]),t._v(" "),c("iconify",{attrs:{icon:"sword-line"}})],1)]),t._v(" "),c("div",{staticClass:" d-flex justify-content-center"},[c("div",{staticClass:"wrapper"},[c("div",{staticClass:"notif d-flex align-items-center"},[c("img",{staticClass:"rounded-circle mr-2",attrs:{src:e(331),width:"50",height:"50"}}),t._v(" "),c("div",{staticClass:"text-notif"},[t._m(0),t._v(" "),c("div",{staticClass:"action d-flex justify-content-between align-items-end"},[c("small",{staticClass:"text-muted d-flex align-items-center"},[c("b-icon",{staticClass:"mr-1",attrs:{icon:"clock"}}),t._v("22 minute ago\n\t\t\t\t\t\t\t\t\t")],1),t._v(" "),c("div",[c("b-button",{staticClass:"mr-1",attrs:{variant:"danger",size:"sm"}},[c("b-icon",{attrs:{icon:"x"}}),t._v(" Tolak\n\t\t\t\t\t\t\t\t\t\t")],1),t._v(" "),c("b-button",{attrs:{variant:"success",size:"sm"}},[c("b-icon",{attrs:{icon:"check"}}),t._v(" Terima\n\t\t\t\t\t\t\t\t\t\t")],1)],1)])])]),t._v(" "),c("hr"),t._v(" "),c("div",{staticClass:"d-flex align-items-center justify-content-start notif"},[c("img",{staticClass:"rounded-circle mr-2",attrs:{src:e(331),width:"50",height:"50"}}),t._v(" "),c("div",{staticClass:"text-notif"},[t._m(1),t._v(" "),c("div",{staticClass:"action d-flex justify-content-between align-items-end"},[c("small",{staticClass:"text-muted d-flex align-items-center"},[c("b-icon",{staticClass:"mr-1",attrs:{icon:"clock"}}),t._v("18 minute ago\n\t\t\t\t\t\t\t\t\t")],1),t._v(" "),c("div",[c("b-button",{staticClass:"mr-1",attrs:{variant:"danger",size:"sm"}},[c("b-icon",{attrs:{icon:"x"}}),t._v(" Tolak\n\t\t\t\t\t\t\t\t\t\t")],1),t._v(" "),c("b-button",{attrs:{variant:"success",size:"sm"}},[c("b-icon",{attrs:{icon:"check"}}),t._v(" Terima\n\t\t\t\t\t\t\t\t\t\t")],1)],1)])])]),t._v(" "),c("hr"),t._v(" "),c("div",{staticClass:"d-flex align-items-center justify-content-start notif"},[c("img",{staticClass:"rounded-circle mr-2",attrs:{src:e(331),width:"50",height:"50"}}),t._v(" "),c("div",{staticClass:"text-notif"},[t._m(2),t._v(" "),c("div",{staticClass:"action d-flex justify-content-between align-items-end"},[c("small",{staticClass:"text-muted d-flex align-items-center"},[c("b-icon",{staticClass:"mr-1",attrs:{icon:"clock"}}),t._v("4 minute ago\n\t\t\t\t\t\t\t\t\t")],1),t._v(" "),c("div",[c("b-button",{staticClass:"mr-1",attrs:{variant:"danger",size:"sm"}},[c("b-icon",{attrs:{icon:"x"}}),t._v(" Tolak\n\t\t\t\t\t\t\t\t\t\t")],1),t._v(" "),c("b-button",{attrs:{variant:"success",size:"sm"}},[c("b-icon",{attrs:{icon:"check"}}),t._v(" Terima\n\t\t\t\t\t\t\t\t\t\t")],1)],1)])])]),t._v(" "),c("hr"),t._v(" "),c("div",{staticClass:"d-flex align-items-center justify-content-start notif"},[c("img",{staticClass:"rounded-circle mr-2",attrs:{src:e(331),width:"50",height:"50"}}),t._v(" "),c("div",{staticClass:"text-notif"},[t._m(3),t._v(" "),c("div",{staticClass:"action d-flex justify-content-between align-items-end"},[c("small",{staticClass:"text-muted d-flex align-items-center"},[c("b-icon",{staticClass:"mr-1",attrs:{icon:"clock"}}),t._v("22 minute ago\n\t\t\t\t\t\t\t\t\t")],1),t._v(" "),c("div",[c("b-button",{staticClass:"mr-1",attrs:{variant:"danger",size:"sm"}},[c("b-icon",{attrs:{icon:"x"}}),t._v(" Tolak\n\t\t\t\t\t\t\t\t\t\t")],1),t._v(" "),c("b-button",{attrs:{variant:"success",size:"sm"}},[c("b-icon",{attrs:{icon:"check"}}),t._v(" Terima\n\t\t\t\t\t\t\t\t\t\t")],1)],1)])])]),t._v(" "),c("hr"),t._v(" "),c("div",{staticClass:"d-flex align-items-center justify-content-start notif"},[c("img",{staticClass:"rounded-circle mr-2",attrs:{src:e(331),width:"50",height:"50"}}),t._v(" "),c("div",{staticClass:"text-notif"},[t._m(4),t._v(" "),c("div",{staticClass:"action d-flex justify-content-between align-items-end"},[c("small",{staticClass:"text-muted d-flex align-items-center"},[c("b-icon",{staticClass:"mr-1",attrs:{icon:"clock"}}),t._v("1 hours ago\n\t\t\t\t\t\t\t\t\t")],1)])])])])])])])]),t._v(" "),c("NavbarAndroid")],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"mb-2"},[t._v("\n\t\t\t\t\t\t\t\t\tSeseorang bernama "),e("span",{staticClass:"text-icon"},[t._v("Rido Ananda")]),t._v(" menantang anda! wwkwk canda bang:V\n\t\t\t\t\t\t\t\t")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"mb-2"},[t._v("\n\t\t\t\t\t\t\t\t\tSeseorang bernama "),e("span",{staticClass:"text-icon"},[t._v("Rido Ananda")]),t._v(" menantang anda! wwkwk canda bang:V\n\t\t\t\t\t\t\t\t")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"mb-2"},[t._v("\n\t\t\t\t\t\t\t\t\tSeseorang bernama "),e("span",{staticClass:"text-icon"},[t._v("Rido Ananda")]),t._v(" menantang anda! wwkwk canda bang:V\n\t\t\t\t\t\t\t\t")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"mb-2"},[t._v("\n\t\t\t\t\t\t\t\t\tSeseorang bernama "),e("span",{staticClass:"text-icon"},[t._v("Rido Ananda")]),t._v(" menantang anda! wwkwk canda bang:V\n\t\t\t\t\t\t\t\t")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"mb-2"},[e("span",{staticClass:"text-icon"},[t._v("Cipto Ardian")]),t._v(" Mengomentari postingan anda.\n\t\t\t\t\t\t\t\t")])}],!1,null,"99188cfc",null);n.default=component.exports;installComponents(component,{Iconify:e(328).default,NavbarAndroid:e(332).default})}}]);