import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OpinionsView from '@/views/OpinionsView.vue'
import AdministrationView from '@/views/AdministrationView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import EditarView from '@/views/EditarView.vue'

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
  },
  {
    path: '*',
    component: NotFoundView,
  },
  {
    path: '/editar/:id',
    props: true,
    component: EditarView,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
