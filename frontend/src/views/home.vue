<script>
// @ is an alias to /src
// import axios from 'axios'
// import UserCard from '@/components/user-card.vue' // @ means we are referencing the source directory.

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      keyword: '',
      searchType: '',
      locale: '',
      results: []
    }
  },

  methods: {
    getKeyword: function() {
      this.keyword = this.keyword.charAt(0).toUpperCase() + this.keyword.slice(1)
      console.log(this.keyword)
    },

    getSearchType: function() {
      let formattedType

      if (this.searchType == 'Ad Interest') {
        formattedType = 'adinterest'
      } else {
        formattedType = 'adinterestsuggestion'
      }

      this.searchType = formattedType
      console.log(formattedType)
    },

    getLocale: function() {
      let formattedLocale

      if (this.locale == 'English') {
        formattedLocale = 'en_US'
      } else if (this.locale == 'German') {
        formattedLocale = 'de_DE'
      } else {
        formattedLocale = 'es_ES'
      }

      this.locale = formattedLocale
      console.log(formattedLocale)
    }
    // submitFormInputs: function() {
    //   this.getKeyword()
    //   this.getSearchType()
    //   this.getLocale()
    // }
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
          form(@submit.prevent='getKeyword(); getSearchType(); getLocale(); setUrlParams(keyword, searchType, locale); callApi()').p-4
            .form-group.p-2
              label Keyword
              input#keyword.form-control(v-model='keyword' type='text' placeholder='' name='keyword')
              p Keyword: {{ keyword }}
            .form-group.p-2
              label Search Type
              select#search-type.form-control(v-model='searchType')
                option Ad Interest
                option Associated Interests *
            .form-group.p-2
              label Language
              select#locale.form-control(v-model='locale')
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
