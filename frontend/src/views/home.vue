<script>
// @ is an alias to /src
// import axios from 'axios'
// import UserCard from '@/components/user-card.vue' // @ means we are referencing the source directory.
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      keyword: '',
      searchType: '',
      locale: '',
      response: null
    }
  },
  computed: {
    formattedKeyword() {
      // console.log(this.keyword)
      return this.keyword.charAt(0).toUpperCase() + this.keyword.slice(1)
    },

    formattedSearchType() {
      let formattedType

      if (this.searchType == 'Associated Interests') {
        formattedType = 'adinterestsuggestion'
      } else {
        formattedType = 'adinterest'
      }

      // console.log(formattedType)
      return formattedType
    },

    formattedLocale() {
      let formattedLocale

      if (this.locale == 'Spanish') {
        formattedLocale = 'es_ES'
      } else if (this.locale == 'German') {
        formattedLocale = 'de_DE'
      } else {
        formattedLocale = 'en_US'
      }
      // console.log(formattedLocale)
      return formattedLocale
    }
  },

  methods: {
    ...mapActions(['getInterests', 'toggleStarred']),

    formatAudienceSize(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },

    async handleSubmit() {
      const res = await this.getInterests({
        keyword: this.formattedKeyword,
        searchType: this.formattedSearchType,
        locale: this.formattedLocale
      })
      this.response = res.data.data
      console.log(this.response)
    }
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
          form(@submit.prevent='handleSubmit').p-4
            .form-group.p-2
              label Keyword
              input#keyword.form-control(v-model='keyword' type='text' placeholder='' name='keyword')
            .form-group.p-2
              label Search Type
              select#search-type.form-control(v-model='searchType')
                option Ad Interest
                option Associated Interests
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
        p.result-heading.ml-5 Interest
      .col.p-4.text-right.border-bottom
        p.result-heading.mr-5 Audience Size
    .row
      .col
        #results.mx-5(v-for="result in response")
          .result-card.d-flex.justify-content-between
            span.mr-5 {{ result.name }} 
            span {{ formatAudienceSize(result.audience_size) }}
</template>

<style scoped>
.result-card {
  padding: 12px;
}
.result-card:hover {
  background-color: #ededed;
}
</style>
