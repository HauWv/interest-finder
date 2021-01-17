<script>
// import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      backendError: null,
    }
  },
  methods: {
    ...mapActions(['register']),
    async submitRegister(e) {
      e.preventDefault()

      try {
        await this.register({
          name: this.name,
          email: this.email,
          password: this.password
        })

        this.$router.push('/login')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    }
  }
}
</script>

<template lang="pug">
//- .container
//-     .row
//-         .col
//-             form.p-5(@submit='submitRegister')
//-                 h4.mb-4.text-center Sign up
//-                 input#defaultRegisterFormFirstName.form-control.mb-3(v-model='name' type='text' name='name' placeholder='Name')
//-                 input#defaultRegisterFormEmail.form-control.mb-4(v-model='email' type='email' name='email' placeholder='E-mail')
//-                 input#defaultRegisterFormPassword.form-control(v-model='password' type='password' name='password' placeholder='Password' aria-describedby='defaultRegisterFormPasswordHelpBlock')
//-                 small#defaultRegisterFormPhoneHelpBlock.form-text.text-muted.mb-4 Min 8 characters 
//-                 button.btn.btn-info.my-4.btn-block(type='submit') Sign up
//-                 .text-center
//-                     p
//-                     | By clicking 
//-                     em Sign up
//-                     |  you agree to our 
//-                     a(href='' target='_blank') terms of service
//-                     |.

.container
  .col
    .row.main-row.d-flex.justify-content-center.align-items-center
      .form-container
        form.signup-form.d-flex.flex-column.mx-4.p-5(@submit="submitRegister")
          h1.mb-4 Sign up
          input#name.form-elem.my-2.p-2(v-model='name' type='text' name='name' placeholder='Your name' required)
          input#email.form-elem.my-2.p-2(v-model='email' type='email' name='email' placeholder='Email address' required)
          input#password.form-elem.my-2.p-2(v-model='password' type='password' name='password' placeholder='Password' required)
          input.form-elem.my-2.p-2(type='submit' value='Sign up')
          p.form-elem.my-2.p-1
            | Already have an account? 
            <router-link to="/login">Login</router-link>
          a.form-elem.my-2.p-2.pr-4.fb(href='https://backend-5i4olyndpa-ew.a.run.app/api/accounts/auth/facebook')
            i.fa.fa-facebook.fa-fw.mr-2
            | Continue with Facebook
</template>

<style lang="scss" scoped>

.container {
  background-color: #CEECEF;
}

.main-row {
  height: 80vh;
}

.form-container {
    width: auto;
    background-color: white;
    border-radius: 6%;
    box-shadow: 5px 10px 20px darkslategray;
}

form {
    background-color: white;
}

.fb {
    background-color: #1877F2;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    font-size: 17px;
    text-decoration: none;
    // width: auto;
  }

  .fb:hover {
      color: white;
      text-decoration: none;
  }
</style>
