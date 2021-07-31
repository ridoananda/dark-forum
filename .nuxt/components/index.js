import { wrapFunctional } from './utils'

export { default as CardPost } from '../..\\components\\CardPost.vue'
export { default as Iconify } from '../..\\components\\Iconify.vue'
export { default as NavbarAndroid } from '../..\\components\\NavbarAndroid.vue'
export { default as NavbarComment } from '../..\\components\\NavbarComment.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'

export const LazyCardPost = import('../..\\components\\CardPost.vue' /* webpackChunkName: "components/card-post" */).then(c => wrapFunctional(c.default || c))
export const LazyIconify = import('../..\\components\\Iconify.vue' /* webpackChunkName: "components/iconify" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbarAndroid = import('../..\\components\\NavbarAndroid.vue' /* webpackChunkName: "components/navbar-android" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbarComment = import('../..\\components\\NavbarComment.vue' /* webpackChunkName: "components/navbar-comment" */).then(c => wrapFunctional(c.default || c))
export const LazyNuxtLogo = import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
