import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Profile from '../views/profile.vue'
import Starred from '../views/interest-list.vue'
import Projects from '../views/projects.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'

Vue.use(VueRouter)

export default function init(store) {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
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
        component: Profile,
        beforeEnter(to, from, next) {
          if (!store.state.user) return next('/login')
          return next()
        }
      },
      {
        path: '/users/:id',
        name: 'UserDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/user-detail.vue')
      },
      {
        path: '/interest-list',
        name: 'Starred',
        component: Starred,
        beforeEnter(to, from, next) {
          if (!store.state.user) return next('/login')
          return next()
        }
      },
      {
        path: '/projects',
        name: 'Projects',
        component: Projects,
        beforeEnter(to, from, next) {
          if (!store.state.user) return next('/login')
          return next()
        }
      },
      {
        path: '/register',
        name: 'Register',
        component: Register,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        }
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        }
      }
    ]
  })
}
