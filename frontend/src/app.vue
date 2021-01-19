<script>
import { mapActions, mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'App',
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['logout', 'clearResponse']),
    async doLogout() {
      await this.clearResponse()
      await this.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<template lang="pug">
  #app
    #nav
        nav.navbar.fixed-top.navbar-expand-sm.navbar-light
            a.navbar-brand.ml-4.mt-2(href='#')
              img.logo(src='../public/img/cocktail.svg' alt='drink logo')
            p.mt-4 Tonik
            button.navbar-toggler.ml-auto(type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation')
                span.navbar-toggler-icon
            #navbarSupportedContent.collapse.navbar-collapse
                ul.navbar-nav.ml-auto.mx-5.p-2
                    li.nav-item.p-2
                        router-link.nav-link(to="/") Home
                    li.nav-item.p-2
                        router-link.nav-link(to="/about") About
                    li.nav-item.p-2(v-if='this.user')
                        router-link.nav-link(to="/profile") Profile
                    li.nav-item.p-2(v-if='this.user')
                        router-link.nav-link(to="/projects") Projects
                    li.nav-item.p-2(v-if='this.user')
                        router-link.nav-link(to="/interest-list") Starred
                    li.nav-item.p-2(v-if='this.user')
                        a.nav-link(@click="doLogout" href="#") Logout
                    li.nav-item.p-2(v-if='!this.user')
                        router-link.nav-link(to="/register") Sign up
                    li.nav-item.p-2(v-if='!this.user')
                        router-link.nav-link(to="/login") Login
    router-view
</template>

<style lang="scss">
// @import '@/assets/theme.scss';
@import 'bootstrap/scss/bootstrap.scss';
@import url('https://fonts.googleapis.com/css2?family=Leckerli+One&family=Imbue&family=Roboto:wght@400;500;700&display=swap');

#app {
  // font-family: 'Roboto', sans-serif;
  font-family: "Helvetica Neu", Helvetica, Arial, sans-serif;
  // font-family: 'Imbue', serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 10px;

  nav {
    background-color: white;
  }

  a {
    color: #030D4F;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;

    &.router-link-exact-active {
      color: #17a2b8;
    }
  }

  .logo {
    width: 60px;
  }

  p {
    color: #030D4F;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    // font-family: 'Leckerli One', cursive;
  }
}
</style>
