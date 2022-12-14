import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/InfoView.vue'),
  },
  {
    path: '/usuarios/:id',
    name: 'usuarios-editar',
    component: () => import('../views/UserEditView.vue'),
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: () => import('../views/ProdutoView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
