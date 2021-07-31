import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  CardPost: () => import('../..\\components\\CardPost.vue' /* webpackChunkName: "components/card-post" */).then(c => wrapFunctional(c.default || c)),
  Iconify: () => import('../..\\components\\Iconify.vue' /* webpackChunkName: "components/iconify" */).then(c => wrapFunctional(c.default || c)),
  NavbarAndroid: () => import('../..\\components\\NavbarAndroid.vue' /* webpackChunkName: "components/navbar-android" */).then(c => wrapFunctional(c.default || c)),
  NavbarComment: () => import('../..\\components\\NavbarComment.vue' /* webpackChunkName: "components/navbar-comment" */).then(c => wrapFunctional(c.default || c)),
  NuxtLogo: () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
