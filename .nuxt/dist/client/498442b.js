(window.webpackJsonp=window.webpackJsonp||[]).push([[16,6],{338:function(t,e,n){t.exports=n.p+"img/logo.861fb2f.png"},352:function(t,e,n){},354:function(t,e,n){"use strict";n(352)},358:function(t,e,n){},362:function(t,e,n){"use strict";n.r(e);n(354);var r=n(87),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-comment navbar-dark fixed-bottom"},[n("form",{staticClass:"container-fluid",attrs:{action:""}},[n("div",{staticClass:"input-group"},[n("input",{staticClass:"form-control form-control-sm mr-2",attrs:{type:"text",placeholder:"Comment here ...","aria-label":"Username","aria-describedby":"basic-addon1"}}),t._v(" "),n("button",{staticClass:"btn bg-transparent",attrs:{type:"button"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 35 35",fill:"none"}},[n("path",{attrs:{d:"M2.93121 30.625L33.5416 17.5L2.93121 4.375L2.91663 14.5833L24.7916 17.5L2.91663 20.4167L2.93121 30.625Z",fill:"#949EB9"}})])])])])])}),[],!1,null,"3c6b64bb",null);e.default=component.exports},368:function(t,e,n){"use strict";n(358)},382:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-2 tags"},[n("span",{staticClass:"mr-2"},[t._v("Tags")]),t._v(" "),n("div",{staticClass:"btn-tags d-inline"},[n("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("bypass")]),t._v(" "),n("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("forbidden")]),t._v(" "),n("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("403")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"comments"},[r("div",{staticClass:"d-flex align-items-start mt-3"},[r("img",{staticClass:"logo rounded-circle",attrs:{src:n(338),alt:"",width:"55",height:"55"}}),t._v(" "),r("div",{staticClass:"wrap-comment ml-2"},[r("a",{staticClass:"username text-decoration-none is_posted",attrs:{href:"profil.html"}},[t._v("Ardyan Vicky Ramadhan")]),t._v(" "),r("p",{staticClass:"mb-1"},[t._v("\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                    Ipsa asperiores, neque fuga repellendus eius consequatur\n                    dolore veniam itaque harum officia ipsum aspernatur officiis\n                    earum at molestias amet nostrum et cupiditate.\n                  ")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"comments"},[r("div",{staticClass:"d-flex align-items-start mt-3"},[r("img",{staticClass:"logo rounded-circle",attrs:{src:n(338),alt:"",width:"55",height:"55"}}),t._v(" "),r("div",{staticClass:"wrap-comment ml-2"},[r("a",{staticClass:"username text-decoration-none",attrs:{href:"profil.html"}},[t._v("Rido Ananda")]),t._v(" "),r("p",{staticClass:"mb-1"},[t._v("\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                    Ipsa asperiores, neque fuga repellendus eius consequatur\n                    dolore veniam itaque harum officia ipsum aspernatur officiis\n                    earum at molestias amet nostrum et cupiditate.\n                  ")])])])])}],c=n(36),o=(n(69),{asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.$axios,e.next=3,r.get("api/post/".concat(n.slug));case 3:return c=e.sent,console.log(c),e.abrupt("return",{post:c.data.data});case 6:case"end":return e.stop()}}),e)})))()}}),l=(n(368),n(87)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center",attrs:{id:"detail-post"}},[r("div",{staticClass:"col-sm-10 col-lg-8 px-0 px-md-2"},[r("div",{attrs:{id:"column"}},[r("div",{staticClass:"back",on:{click:function(e){return t.$router.back()}}},[r("b-icon",{attrs:{icon:"chevron-left"}})],1),t._v(" "),r("div",{staticClass:"info-uploader"},[r("img",{staticClass:"logo rounded-circle",attrs:{src:n(338),alt:"",width:"50",height:"50"}}),t._v(" "),r("div",{staticClass:"date"},[t._v("\n              "+t._s(t.post.created_at.month)+"\n              "),r("div",[t._v("2021")])])]),t._v(" "),t.post.thumbnail?r("div",[r("img",{staticClass:"thumbnail-post img-fluid",attrs:{src:t.post.thumbnail,alt:""}})]):r("div",[r("img",{staticClass:"thumbnail-post img-fluid",attrs:{src:n(338),alt:""}})]),t._v(" "),r("div",{staticClass:"info-detail px-3 px-md-3"},[r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("div",[r("div",{staticClass:"d-flex align-items-center"},[r("h5",{staticClass:"post-title mt-2 font-weight-bold"},[t._v(t._s(t.post.title.full))])])]),t._v(" "),r("div",{staticClass:"love-comment-bookmark w-100 text-right"},[r("span",{staticClass:"comments mr-1"},[r("b-icon",{attrs:{icon:"chat-square-text"}}),t._v(" 3\n                ")],1),t._v(" "),r("span",{staticClass:"love bg-background mr-2"},[r("b-icon",{attrs:{icon:"heart"}}),t._v(" 16\n                ")],1),t._v(" "),r("span",{staticClass:"bookmark bg-background"},[r("b-icon",{attrs:{icon:"bookmark"}})],1)])]),t._v(" "),t._m(0),t._v(" "),r("p",{staticClass:"text mb-2"},[t._v("\n              "+t._s(t.post.text)+"\n            \n            ")]),r("hr",{staticClass:"mt-2"}),t._v(" "),r("h5",{staticClass:"my-3 header-comment"},[r("b-icon",{attrs:{icon:"chat-left-text"}}),t._v(" 3 Comments\n            ")],1),t._v(" "),r("div",{staticClass:"comments"},[r("div",{staticClass:"d-flex align-items-start mt-3"},[r("img",{staticClass:"logo rounded-circle",attrs:{src:n(338),alt:"",width:"55",height:"55"}}),t._v(" "),r("div",{staticClass:"wrap-comment ml-2"},[r("a",{staticClass:"username text-decoration-none",attrs:{href:"profil.html"}},[t._v(t._s(t.post.title.full))]),t._v(" "),r("p",{staticClass:"mb-1"},[t._v("\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                    Ipsa asperiores, neque fuga repellendus eius consequatur\n                    dolore veniam itaque harum officia ipsum aspernatur officiis\n                    earum at molestias amet nostrum et cupiditate.\n                  ")])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])])]),t._v(" "),r("NavbarComment")],1)}),r,!1,null,"cdab8804",null);e.default=component.exports;installComponents(component,{NavbarComment:n(362).default})}}]);