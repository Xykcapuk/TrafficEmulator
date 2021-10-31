import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/runEmulator',
    name: 'RunEmulator',
    component: () => import('../views/RunEmulator.vue')
  },
  {
    path: '/red',
    name: 'red',
    component: () => import('../views/RunEmulator.vue'),
    props: { currentColorIs: 'red', time: 9000 },
  },
  {
    path: '/yellow',
    name: 'yellow',
    component: () => import('../views/RunEmulator.vue'),
    props: { currentColorIs: 'yellow', time: 4000 },
  },
  {
    path: '/green',
    name: 'green',
    component: () => import('../views/RunEmulator.vue'),
    props: { currentColorIs: 'green', time: 6000 },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.name === 'RunEmulator') {
    router.push('red');
  } else {
    next();
  }
});
export default router
