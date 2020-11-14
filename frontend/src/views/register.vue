<script>
// import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      age: null,
      email: '',
      password: '',

      backendError: null
    }
  },
  methods: {
    ...mapActions(['register']),
    async submitRegister(e) {
      e.preventDefault()

      try {
        await this.register({
          name: this.name,
          age: this.age,
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
    .container.border
        .row
            .col
                form.p-5(@submit='submitRegister')
                    h4.mb-4.text-center Sign up
                    input#defaultRegisterFormFirstName.form-control.mb-3(v-model='name' type='text' name='name' placeholder='Name')
                    input#defaultRegisterFormEmail.form-control.mb-4(v-model='email' type='email' name='email' placeholder='E-mail')
                    input#defaultRegisterFormPassword.form-control(v-model='password' type='password' name='password' placeholder='Password' aria-describedby='defaultRegisterFormPasswordHelpBlock')
                    small#defaultRegisterFormPhoneHelpBlock.form-text.text-muted.mb-4 Min 8 characters 
                    button.btn.btn-info.my-4.btn-block(type='submit') Sign up
                    .text-center
                        p
                        | By clicking 
                        em Sign up
                        |  you agree to our 
                        a(href='' target='_blank') terms of service
                        |.
</template>
