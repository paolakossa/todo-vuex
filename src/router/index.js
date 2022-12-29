import Vue from 'vue'
import VueRouter from 'vue-router'
import Tarefas from '../views/Tarefas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
