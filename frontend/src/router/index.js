import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Profile from '../views/profile.vue'
import Starred from '../views/interest-list.vue'
import Projects from '../views/projects.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/users/:id',
    name: 'UserDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/user-detail.vue')
  },
  {
    path: '/interest-list',
    name: 'Starred',
    component: Starred
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
