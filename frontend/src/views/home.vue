<script>
// @ is an alias to /src
// import axios from 'axios'
// import UserCard from '@/components/user-card.vue' // @ means we are referencing the source directory.

export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  }
}
</script>

<template lang="pug">
  .container
    .row
      .col.d-flex.justify-content-center.mt-5
        h1 Find Hidden Interests
    .row
      .col
        .form-container.mx-5.px-5
          form.p-4
            .form-group.p-2
              label Keyword
              input#key-input.form-control(type='text' placeholder='' name='keyword')
            .form-group.p-2
              label Search Type
              select#search-type.form-control
                option Ad Interest
                option Associated Interests *
            .form-group.p-2
              label Language
              select#locale.form-control
                option English
                option German
                option Spanish
            .btn-container.d-flex.justify-content-center
              button.btn.btn-primary.px-5.my-3(type='submit') Go!
          .note-container.mb-3.text-right
            p.note
              | * Note:
              i Associated interests
              |  may not return any results.
    .row
      .col.p-4.border-bottom
        p.result-heading.ml-2 Interest
      .col.p-4.text-right.border-bottom
        p.result-heading Audience Size
    .row
      .col
        #results
</template>
