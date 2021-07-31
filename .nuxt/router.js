import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0e918e0a = () => interopDefault(import('..\\pages\\add.vue' /* webpackChunkName: "pages/add" */))
const _54e9ac1c = () => interopDefault(import('..\\pages\\change-password.vue' /* webpackChunkName: "pages/change-password" */))
const _0fe1ea8e = () => interopDefault(import('..\\pages\\edit-profil.vue' /* webpackChunkName: "pages/edit-profil" */))
const _4ca76542 = () => interopDefault(import('..\\pages\\forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _ff8af97a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _385c7201 = () => interopDefault(import('..\\pages\\notification.vue' /* webpackChunkName: "pages/notification" */))
const _9fbf255c = () => interopDefault(import('..\\pages\\profil.vue' /* webpackChunkName: "pages/profil" */))
const _3309de7c = () => interopDefault(import('..\\pages\\question.vue' /* webpackChunkName: "pages/question" */))
const _50fbaa8e = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _00a38e5d = () => interopDefault(import('..\\pages\\success.vue' /* webpackChunkName: "pages/success" */))
const _ffb1e07c = () => interopDefault(import('..\\pages\\war.vue' /* webpackChunkName: "pages/war" */))
const _0a6c0d44 = () => interopDefault(import('..\\pages\\post\\_slug.vue' /* webpackChunkName: "pages/post/_slug" */))
const _92da3fa8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/dist/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/add",
    component: _0e918e0a,
    name: "add"
  }, {
    path: "/change-password",
    component: _54e9ac1c,
    name: "change-password"
  }, {
    path: "/edit-profil",
    component: _0fe1ea8e,
    name: "edit-profil"
  }, {
    path: "/forgot-password",
    component: _4ca76542,
    name: "forgot-password"
  }, {
    path: "/login",
    component: _ff8af97a,
    name: "login"
  }, {
    path: "/notification",
    component: _385c7201,
    name: "notification"
  }, {
    path: "/profil",
    component: _9fbf255c,
    name: "profil"
  }, {
    path: "/question",
    component: _3309de7c,
    name: "question"
  }, {
    path: "/register",
    component: _50fbaa8e,
    name: "register"
  }, {
    path: "/success",
    component: _00a38e5d,
    name: "success"
  }, {
    path: "/war",
    component: _ffb1e07c,
    name: "war"
  }, {
    path: "/post/:slug?",
    component: _0a6c0d44,
    name: "post-slug"
  }, {
    path: "/",
    component: _92da3fa8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
