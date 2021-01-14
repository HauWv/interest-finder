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
        nav.navbar.sticky-top.navbar-expand-sm.navbar-light.mx-5
            //- a.navbar-brand(href='#') Logo
            button.navbar-toggler.ml-auto(type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation')
                span.navbar-toggler-icon
            #navbarSupportedContent.collapse.navbar-collapse
                ul.navbar-nav.ml-auto
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
                        router-link.nav-link(to="/register") Register
                    li.nav-item.p-2(v-if='!this.user')
                        router-link.nav-link(to="/login") Login
    router-view
</template>

<style lang="scss">
// @import '@/assets/theme.scss';
@import 'bootstrap/scss/bootstrap.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #17a2b8;
    }
  }
}
</style>
