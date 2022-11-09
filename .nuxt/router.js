import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _044e5802 = () => interopDefault(import('../node_modules/@nuxtjs/svg-sprite/lib/pages/icons-list.vue' /* webpackChunkName: "" */))
const _4cf94632 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _033f74ae = () => interopDefault(import('../pages/interests.vue' /* webpackChunkName: "pages/interests" */))
const _7e234f36 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _1ef7a6db = () => interopDefault(import('../pages/semesters/semesterSix.vue' /* webpackChunkName: "pages/semesters/semesterSix" */))
const _5b77ef88 = () => interopDefault(import('../pages/test/testToggle.vue' /* webpackChunkName: "pages/test/testToggle" */))
const _40f61967 = () => interopDefault(import('../pages/modals/projects/fect.vue' /* webpackChunkName: "pages/modals/projects/fect" */))
const _1c1301d4 = () => interopDefault(import('../pages/modals/projects/mft.vue' /* webpackChunkName: "pages/modals/projects/mft" */))
const _7eef226b = () => interopDefault(import('../pages/modals/projects/quaquiz.vue' /* webpackChunkName: "pages/modals/projects/quaquiz" */))
const _403d7e44 = () => interopDefault(import('../pages/modals/projects/solid.vue' /* webpackChunkName: "pages/modals/projects/solid" */))
const _0f7f28b4 = () => interopDefault(import('../pages/modals/semesterSix/architecture.vue' /* webpackChunkName: "pages/modals/semesterSix/architecture" */))
const _9cb68972 = () => interopDefault(import('../pages/modals/semesterSix/delivery.vue' /* webpackChunkName: "pages/modals/semesterSix/delivery" */))
const _414a562f = () => interopDefault(import('../pages/modals/semesterSix/designTesting.vue' /* webpackChunkName: "pages/modals/semesterSix/designTesting" */))
const _5911c602 = () => interopDefault(import('../pages/modals/semesterSix/flutterNotifications.vue' /* webpackChunkName: "pages/modals/semesterSix/flutterNotifications" */))
const _59589f3a = () => interopDefault(import('../pages/modals/semesterSix/indDesign.vue' /* webpackChunkName: "pages/modals/semesterSix/indDesign" */))
const _77443ee4 = () => interopDefault(import('../pages/modals/semesterSix/indInterviews.vue' /* webpackChunkName: "pages/modals/semesterSix/indInterviews" */))
const _5bb46866 = () => interopDefault(import('../pages/modals/semesterSix/indProject.vue' /* webpackChunkName: "pages/modals/semesterSix/indProject" */))
const _1f88940e = () => interopDefault(import('../pages/modals/semesterSix/indRecommendations.vue' /* webpackChunkName: "pages/modals/semesterSix/indRecommendations" */))
const _4c137ca5 = () => interopDefault(import('../pages/modals/semesterSix/interviews.vue' /* webpackChunkName: "pages/modals/semesterSix/interviews" */))
const _42398b6d = () => interopDefault(import('../pages/modals/semesterSix/learning-outcomes.vue' /* webpackChunkName: "pages/modals/semesterSix/learning-outcomes" */))
const _fa654d80 = () => interopDefault(import('../pages/modals/semesterSix/metaconcept.vue' /* webpackChunkName: "pages/modals/semesterSix/metaconcept" */))
const _f2b07c5a = () => interopDefault(import('../pages/modals/semesterSix/metavideo.vue' /* webpackChunkName: "pages/modals/semesterSix/metavideo" */))
const _1d7bece6 = () => interopDefault(import('../pages/modals/semesterSix/notificationSystem.vue' /* webpackChunkName: "pages/modals/semesterSix/notificationSystem" */))
const _3bb2cf1a = () => interopDefault(import('../pages/modals/semesterSix/portfolio-abstract.vue' /* webpackChunkName: "pages/modals/semesterSix/portfolio-abstract" */))
const _4e5f6474 = () => interopDefault(import('../pages/modals/semesterSix/prepweek.vue' /* webpackChunkName: "pages/modals/semesterSix/prepweek" */))
const _77ed42df = () => interopDefault(import('../pages/modals/semesterSix/projectPlan.vue' /* webpackChunkName: "pages/modals/semesterSix/projectPlan" */))
const _5b6e74b8 = () => interopDefault(import('../pages/modals/semesterSix/techResearch.vue' /* webpackChunkName: "pages/modals/semesterSix/techResearch" */))
const _4e4598ee = () => interopDefault(import('../pages/modals/semesterSix/trends.vue' /* webpackChunkName: "pages/modals/semesterSix/trends" */))
const _984377b6 = () => interopDefault(import('../pages/modals/semesterSix/userstories.vue' /* webpackChunkName: "pages/modals/semesterSix/userstories" */))
const _1d6d65b1 = () => interopDefault(import('../pages/semesters/graduation/home.vue' /* webpackChunkName: "pages/semesters/graduation/home" */))
const _16f275aa = () => interopDefault(import('../pages/semesters/graduation/leeruitkomsten.vue' /* webpackChunkName: "pages/semesters/graduation/leeruitkomsten" */))
const _5c236770 = () => interopDefault(import('../pages/semesters/graduation/leeswijzer.vue' /* webpackChunkName: "pages/semesters/graduation/leeswijzer" */))
const _9e49d314 = () => interopDefault(import('../pages/semesters/graduation/learningoutcomes/analyseren.vue' /* webpackChunkName: "pages/semesters/graduation/learningoutcomes/analyseren" */))
const _6cb120f7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/rvwijk_portfolio/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/_icons",
    component: _044e5802,
    name: "icons-list"
  }, {
    path: "/_icons",
    component: _044e5802,
    name: "icons-list"
  }, {
    path: "/about",
    component: _4cf94632,
    name: "about"
  }, {
    path: "/interests",
    component: _033f74ae,
    name: "interests"
  }, {
    path: "/projects",
    component: _7e234f36,
    name: "projects"
  }, {
    path: "/semesters/semesterSix",
    component: _1ef7a6db,
    name: "semesters-semesterSix"
  }, {
    path: "/test/testToggle",
    component: _5b77ef88,
    name: "test-testToggle"
  }, {
    path: "/modals/projects/fect",
    component: _40f61967,
    name: "modals-projects-fect"
  }, {
    path: "/modals/projects/mft",
    component: _1c1301d4,
    name: "modals-projects-mft"
  }, {
    path: "/modals/projects/quaquiz",
    component: _7eef226b,
    name: "modals-projects-quaquiz"
  }, {
    path: "/modals/projects/solid",
    component: _403d7e44,
    name: "modals-projects-solid"
  }, {
    path: "/modals/semesterSix/architecture",
    component: _0f7f28b4,
    name: "modals-semesterSix-architecture"
  }, {
    path: "/modals/semesterSix/delivery",
    component: _9cb68972,
    name: "modals-semesterSix-delivery"
  }, {
    path: "/modals/semesterSix/designTesting",
    component: _414a562f,
    name: "modals-semesterSix-designTesting"
  }, {
    path: "/modals/semesterSix/flutterNotifications",
    component: _5911c602,
    name: "modals-semesterSix-flutterNotifications"
  }, {
    path: "/modals/semesterSix/indDesign",
    component: _59589f3a,
    name: "modals-semesterSix-indDesign"
  }, {
    path: "/modals/semesterSix/indInterviews",
    component: _77443ee4,
    name: "modals-semesterSix-indInterviews"
  }, {
    path: "/modals/semesterSix/indProject",
    component: _5bb46866,
    name: "modals-semesterSix-indProject"
  }, {
    path: "/modals/semesterSix/indRecommendations",
    component: _1f88940e,
    name: "modals-semesterSix-indRecommendations"
  }, {
    path: "/modals/semesterSix/interviews",
    component: _4c137ca5,
    name: "modals-semesterSix-interviews"
  }, {
    path: "/modals/semesterSix/learning-outcomes",
    component: _42398b6d,
    name: "modals-semesterSix-learning-outcomes"
  }, {
    path: "/modals/semesterSix/metaconcept",
    component: _fa654d80,
    name: "modals-semesterSix-metaconcept"
  }, {
    path: "/modals/semesterSix/metavideo",
    component: _f2b07c5a,
    name: "modals-semesterSix-metavideo"
  }, {
    path: "/modals/semesterSix/notificationSystem",
    component: _1d7bece6,
    name: "modals-semesterSix-notificationSystem"
  }, {
    path: "/modals/semesterSix/portfolio-abstract",
    component: _3bb2cf1a,
    name: "modals-semesterSix-portfolio-abstract"
  }, {
    path: "/modals/semesterSix/prepweek",
    component: _4e5f6474,
    name: "modals-semesterSix-prepweek"
  }, {
    path: "/modals/semesterSix/projectPlan",
    component: _77ed42df,
    name: "modals-semesterSix-projectPlan"
  }, {
    path: "/modals/semesterSix/techResearch",
    component: _5b6e74b8,
    name: "modals-semesterSix-techResearch"
  }, {
    path: "/modals/semesterSix/trends",
    component: _4e4598ee,
    name: "modals-semesterSix-trends"
  }, {
    path: "/modals/semesterSix/userstories",
    component: _984377b6,
    name: "modals-semesterSix-userstories"
  }, {
    path: "/semesters/graduation/home",
    component: _1d6d65b1,
    name: "semesters-graduation-home"
  }, {
    path: "/semesters/graduation/leeruitkomsten",
    component: _16f275aa,
    name: "semesters-graduation-leeruitkomsten"
  }, {
    path: "/semesters/graduation/leeswijzer",
    component: _5c236770,
    name: "semesters-graduation-leeswijzer"
  }, {
    path: "/semesters/graduation/learningoutcomes/analyseren",
    component: _9e49d314,
    name: "semesters-graduation-learningoutcomes-analyseren"
  }, {
    path: "/",
    component: _6cb120f7,
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
