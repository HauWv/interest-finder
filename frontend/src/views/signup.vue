<script>
// import axios from 'axios'

export default {
  name: 'SignUp',
  components: {},
  data() {
    return {}
  }
}
</script>

<template lang="pug">
    .container.border
        .row
            .col
                form.p-5(method='POST' action='/signup')
                    h4.mb-4.text-center Sign up
                    input#defaultRegisterFormFirstName.form-control.mb-3(type='text' name='name' placeholder='Name')
                    input#defaultRegisterFormEmail.form-control.mb-4(type='email' name='email' placeholder='E-mail')
                    input#defaultRegisterFormPassword.form-control(type='password' name='password' placeholder='Password' aria-describedby='defaultRegisterFormPasswordHelpBlock')
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
