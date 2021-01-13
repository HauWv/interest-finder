<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      backendError: null
    }
  },
  methods: {
    ...mapActions(['login', 'loginFacebook']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.login({
          email: this.email,
          password: this.password
        })

        this.$router.push('/profile')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    }
  }
}
</script>

<template lang="pug">
//- .login.border.p-3
//-     form(@submit="submitLogin")
//-       h1 Log in to your account
//-       label(for="email") Email:&nbsp;
//-         input(v-model="email" id="email" type="email" placeholder="Your email" required)
//-       label(for="password") Password:&nbsp;
//-         input(v-model="password" id="password" type="password" placeholder="Your password" required)
//-       input(type="submit" value="Log in")
//-     div(v-if="backendError") {{ backendError }}
//-     div Don't have an account yet? <router-link to="/register">Register</router-link>
//-     a(href='https://backend-5i4olyndpa-ew.a.run.app/api/accounts/auth/facebook') Login with Facebook

.container
  .col
    .row.vh-100.d-flex.justify-content-center.align-items-center
      .form-container.h-40
        form.login-form.d-flex.flex-column.m-4.p-5
          h1.mb-4 Log in
          input#email.form-elem.my-2.p-2(type='email' placeholder='Email address')
          input#password.form-elem.my-2.p-2(type='password' placeholder='Password')
          input.form-elem.my-2.p-2(type='submit' value='Log in')
          p.form-elem.my-2.p-1
            | Don't have an account yet?
            a(href='/register') Register
          a.form-elem.my-2.p-2.fb(href='https://backend-5i4olyndpa-ew.a.run.app/api/accounts/auth/facebook')
            i.fa.fa-facebook.fa-fw.mr-2
            | Log in with Facebook

</template>

<style lang="scss" scoped>
// label {
//   display: block;
//   margin: 1rem 0;
// }

body {
    background-color: #CEECEF !important;
}

.form-container {
    background-color: #030D4F;
    border-radius: 2%;
}

form {
    background-color: white;
}

.btn {
    padding: 12px;
    border: none;
    border-radius: 4px;
    margin: 5px 0;
    opacity: 0.85;
    display: inline-block;
    font-size: 17px;
    line-height: 20px;
  }

.fb {
    background-color: #1877F2;
    color: white;
    border-radius: 4px;
    font-size: 17px;
    text-decoration: none;
  }

.fb:hover {
    color: white;
    text-decoration: none;
}
</style>
