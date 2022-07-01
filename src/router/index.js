import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OpinionsView from '@/views/OpinionsView.vue'
import AdministrationView from '@/views/AdministrationView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/opiniones',
    component: OpinionsView,
  },
  {
    path: '/administracion',
    component: AdministrationView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
