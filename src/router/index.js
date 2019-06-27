import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/About',
      component: () => import('../views/About.vue')
    },
    {
      path: '*',
      redirect: '/Home'
    }
  ]
})