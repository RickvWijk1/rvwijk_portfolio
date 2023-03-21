import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d56d31b8 = () => interopDefault(import('..\\node_modules\\@nuxtjs\\svg-sprite\\lib\\pages\\icons-list.vue' /* webpackChunkName: "" */))
const _3d143d61 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _1cc58746 = () => interopDefault(import('..\\pages\\interests.vue' /* webpackChunkName: "pages/interests" */))
const _12f15ed6 = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages/projects" */))
const _d9e128ea = () => interopDefault(import('..\\pages\\semesters\\semesterSix.vue' /* webpackChunkName: "pages/semesters/semesterSix" */))
const _7e72f821 = () => interopDefault(import('..\\pages\\modals\\interests\\vfx.vue' /* webpackChunkName: "pages/modals/interests/vfx" */))
const _2b9cc52c = () => interopDefault(import('..\\pages\\modals\\projects\\fect.vue' /* webpackChunkName: "pages/modals/projects/fect" */))
const _9eb4cdac = () => interopDefault(import('..\\pages\\modals\\projects\\graduation.vue' /* webpackChunkName: "pages/modals/projects/graduation" */))
const _65b5496f = () => interopDefault(import('..\\pages\\modals\\projects\\mft.vue' /* webpackChunkName: "pages/modals/projects/mft" */))
const _189e2486 = () => interopDefault(import('..\\pages\\modals\\projects\\quaquiz.vue' /* webpackChunkName: "pages/modals/projects/quaquiz" */))
const _ab2769c2 = () => interopDefault(import('..\\pages\\modals\\projects\\solid.vue' /* webpackChunkName: "pages/modals/projects/solid" */))
const _43c6bfea = () => interopDefault(import('..\\pages\\modals\\semesterSix\\architecture.vue' /* webpackChunkName: "pages/modals/semesterSix/architecture" */))
const _72a62ba8 = () => interopDefault(import('..\\pages\\modals\\semesterSix\\delivery.vue' /* webpackChunkName: "pages/modals/semesterSix/delivery" */))
const _16f4ae6a = () => interopDefault(import('..\\pages\\modals\\semesterSix\\designTesting.vue' /* webpackChunkName: "pages/modals/semesterSix/designTesting" */))
const _fa41c738 = () => interopDefault(import('..\\pages\\modals\\semesterSix\\flutterNotifications.vue' /* webpackChunkName: "pages/modals/semesterSix/flutterNotifications" */))
const _35536616 = () => interopDefault(import('..\\pages\\modals\\semesterSix\\indDesign.vue' /* webpackChunkName: "pages/modals/semesterSix/indDesign" */))
const _cbef8e6e = () => interopDefault(import('..\\pages\\modals\\semesterSix\\indInterviews.vue' /* webpackChunkName: "pages/modals/semesterSix/indInterviews" */))
const _7444551c = () => interopDefault(import('..\\pages\\modals\\semesterSix\\indProject.vue' /* webpackChunkName: "pages/modals/semesterSix/indProject" */))
const _5979ae9a = () => interopDefault(import('..\\pages\\modals\\semesterSix\\indRecommendations.vue' /* webpackChunkName: "pages/modals/semesterSix/indRecommendations" */))
const _3fcb864a = () => interopDefault(import('..\\pages\\modals\\semesterSix\\interviews.vue' /* webpackChunkName: "pages/modals/semesterSix/interviews" */))
const _0e374e28 = () => interopDefault(import('..\\pages\\modals\\semesterSix\\learning-outcomes.vue' /* webpackChunkName: "pages/modals/semesterSix/learning-outcomes" */))
const _0616843b = () => interopDefault(import('..\\pages\\modals\\semesterSix\\metaconcept.vue' /* webpackChunkName: "pages/modals/semesterSix/metaconcept" */))
const _12a56f8e = () => interopDefault(import('..\\pages\\modals\\semesterSix\\metavideo.vue' /* webpackChunkName: "pages/modals/semesterSix/metavideo" */))
const _b606c39c = () => interopDefault(import('..\\pages\\modals\\semesterSix\\notificationSystem.vue' /* webpackChunkName: "pages/modals/semesterSix/notificationSystem" */))
const _21253882 = () => interopDefault(import('..\\pages\\modals\\semesterSix\\portfolio-abstract.vue' /* webpackChunkName: "pages/modals/semesterSix/portfolio-abstract" */))
const _63679359 = () => interopDefault(import('..\\pages\\modals\\semesterSix\\prepweek.vue' /* webpackChunkName: "pages/modals/semesterSix/prepweek" */))
const _0993244c = () => interopDefault(import('..\\pages\\modals\\semesterSix\\projectPlan.vue' /* webpackChunkName: "pages/modals/semesterSix/projectPlan" */))
const _8fb60bee = () => interopDefault(import('..\\pages\\modals\\semesterSix\\techResearch.vue' /* webpackChunkName: "pages/modals/semesterSix/techResearch" */))
const _137dd7ae = () => interopDefault(import('..\\pages\\modals\\semesterSix\\trends.vue' /* webpackChunkName: "pages/modals/semesterSix/trends" */))
const _37276f20 = () => interopDefault(import('..\\pages\\modals\\semesterSix\\userstories.vue' /* webpackChunkName: "pages/modals/semesterSix/userstories" */))
const _559c019c = () => interopDefault(import('..\\pages\\semesters\\graduation\\home.vue' /* webpackChunkName: "pages/semesters/graduation/home" */))
const _715fb756 = () => interopDefault(import('..\\pages\\semesters\\graduation\\leeruitkomsten.vue' /* webpackChunkName: "pages/semesters/graduation/leeruitkomsten" */))
const _b655e81a = () => interopDefault(import('..\\pages\\semesters\\graduation\\leeswijzer.vue' /* webpackChunkName: "pages/semesters/graduation/leeswijzer" */))
const _54de84a7 = () => interopDefault(import('..\\pages\\semesters\\graduation\\learningoutcomes\\adviseren.vue' /* webpackChunkName: "pages/semesters/graduation/learningoutcomes/adviseren" */))
const _30244af8 = () => interopDefault(import('..\\pages\\semesters\\graduation\\learningoutcomes\\analyseren.vue' /* webpackChunkName: "pages/semesters/graduation/learningoutcomes/analyseren" */))
const _8bd209e2 = () => interopDefault(import('..\\pages\\semesters\\graduation\\learningoutcomes\\beheren.vue' /* webpackChunkName: "pages/semesters/graduation/learningoutcomes/beheren" */))
const _612d2eca = () => interopDefault(import('..\\pages\\semesters\\graduation\\learningoutcomes\\communicatie.vue' /* webpackChunkName: "pages/semesters/graduation/learningoutcomes/communicatie" */))
const _e8df8f66 = () => interopDefault(import('..\\pages\\semesters\\graduation\\learningoutcomes\\leervermogen.vue' /* webpackChunkName: "pages/semesters/graduation/learningoutcomes/leervermogen" */))
const _bfce4344 = () => interopDefault(import('..\\pages\\semesters\\graduation\\learningoutcomes\\ontwerpen.vue' /* webpackChunkName: "pages/semesters/graduation/learningoutcomes/ontwerpen" */))
const _d8d2516e = () => interopDefault(import('..\\pages\\semesters\\graduation\\learningoutcomes\\oordeelsvorming.vue' /* webpackChunkName: "pages/semesters/graduation/learningoutcomes/oordeelsvorming" */))
const _4075f19a = () => interopDefault(import('..\\pages\\semesters\\graduation\\learningoutcomes\\realiseren.vue' /* webpackChunkName: "pages/semesters/graduation/learningoutcomes/realiseren" */))
const _5ccc1826 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _d56d31b8,
    name: "icons-list"
  }, {
    path: "/about",
    component: _3d143d61,
    name: "about"
  }, {
    path: "/interests",
    component: _1cc58746,
    name: "interests"
  }, {
    path: "/projects",
    component: _12f15ed6,
    name: "projects"
  }, {
    path: "/semesters/semesterSix",
    component: _d9e128ea,
    name: "semesters-semesterSix"
  }, {
    path: "/modals/interests/vfx",
    component: _7e72f821,
    name: "modals-interests-vfx"
  }, {
    path: "/modals/projects/fect",
    component: _2b9cc52c,
    name: "modals-projects-fect"
  }, {
    path: "/modals/projects/graduation",
    component: _9eb4cdac,
    name: "modals-projects-graduation"
  }, {
    path: "/modals/projects/mft",
    component: _65b5496f,
    name: "modals-projects-mft"
  }, {
    path: "/modals/projects/quaquiz",
    component: _189e2486,
    name: "modals-projects-quaquiz"
  }, {
    path: "/modals/projects/solid",
    component: _ab2769c2,
    name: "modals-projects-solid"
  }, {
    path: "/modals/semesterSix/architecture",
    component: _43c6bfea,
    name: "modals-semesterSix-architecture"
  }, {
    path: "/modals/semesterSix/delivery",
    component: _72a62ba8,
    name: "modals-semesterSix-delivery"
  }, {
    path: "/modals/semesterSix/designTesting",
    component: _16f4ae6a,
    name: "modals-semesterSix-designTesting"
  }, {
    path: "/modals/semesterSix/flutterNotifications",
    component: _fa41c738,
    name: "modals-semesterSix-flutterNotifications"
  }, {
    path: "/modals/semesterSix/indDesign",
    component: _35536616,
    name: "modals-semesterSix-indDesign"
  }, {
    path: "/modals/semesterSix/indInterviews",
    component: _cbef8e6e,
    name: "modals-semesterSix-indInterviews"
  }, {
    path: "/modals/semesterSix/indProject",
    component: _7444551c,
    name: "modals-semesterSix-indProject"
  }, {
    path: "/modals/semesterSix/indRecommendations",
    component: _5979ae9a,
    name: "modals-semesterSix-indRecommendations"
  }, {
    path: "/modals/semesterSix/interviews",
    component: _3fcb864a,
    name: "modals-semesterSix-interviews"
  }, {
    path: "/modals/semesterSix/learning-outcomes",
    component: _0e374e28,
    name: "modals-semesterSix-learning-outcomes"
  }, {
    path: "/modals/semesterSix/metaconcept",
    component: _0616843b,
    name: "modals-semesterSix-metaconcept"
  }, {
    path: "/modals/semesterSix/metavideo",
    component: _12a56f8e,
    name: "modals-semesterSix-metavideo"
  }, {
    path: "/modals/semesterSix/notificationSystem",
    component: _b606c39c,
    name: "modals-semesterSix-notificationSystem"
  }, {
    path: "/modals/semesterSix/portfolio-abstract",
    component: _21253882,
    name: "modals-semesterSix-portfolio-abstract"
  }, {
    path: "/modals/semesterSix/prepweek",
    component: _63679359,
    name: "modals-semesterSix-prepweek"
  }, {
    path: "/modals/semesterSix/projectPlan",
    component: _0993244c,
    name: "modals-semesterSix-projectPlan"
  }, {
    path: "/modals/semesterSix/techResearch",
    component: _8fb60bee,
    name: "modals-semesterSix-techResearch"
  }, {
    path: "/modals/semesterSix/trends",
    component: _137dd7ae,
    name: "modals-semesterSix-trends"
  }, {
    path: "/modals/semesterSix/userstories",
    component: _37276f20,
    name: "modals-semesterSix-userstories"
  }, {
    path: "/semesters/graduation/home",
    component: _559c019c,
    name: "semesters-graduation-home"
  }, {
    path: "/semesters/graduation/leeruitkomsten",
    component: _715fb756,
    name: "semesters-graduation-leeruitkomsten"
  }, {
    path: "/semesters/graduation/leeswijzer",
    component: _b655e81a,
    name: "semesters-graduation-leeswijzer"
  }, {
    path: "/semesters/graduation/learningoutcomes/adviseren",
    component: _54de84a7,
    name: "semesters-graduation-learningoutcomes-adviseren"
  }, {
    path: "/semesters/graduation/learningoutcomes/analyseren",
    component: _30244af8,
    name: "semesters-graduation-learningoutcomes-analyseren"
  }, {
    path: "/semesters/graduation/learningoutcomes/beheren",
    component: _8bd209e2,
    name: "semesters-graduation-learningoutcomes-beheren"
  }, {
    path: "/semesters/graduation/learningoutcomes/communicatie",
    component: _612d2eca,
    name: "semesters-graduation-learningoutcomes-communicatie"
  }, {
    path: "/semesters/graduation/learningoutcomes/leervermogen",
    component: _e8df8f66,
    name: "semesters-graduation-learningoutcomes-leervermogen"
  }, {
    path: "/semesters/graduation/learningoutcomes/ontwerpen",
    component: _bfce4344,
    name: "semesters-graduation-learningoutcomes-ontwerpen"
  }, {
    path: "/semesters/graduation/learningoutcomes/oordeelsvorming",
    component: _d8d2516e,
    name: "semesters-graduation-learningoutcomes-oordeelsvorming"
  }, {
    path: "/semesters/graduation/learningoutcomes/realiseren",
    component: _4075f19a,
    name: "semesters-graduation-learningoutcomes-realiseren"
  }, {
    path: "/",
    component: _5ccc1826,
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
