<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      keyword: '',
      searchType: '',
      locale: ''
    }
  },

  computed: {
    ...mapState(['response', 'user']),

    formattedKeyword() {
      return this.keyword.charAt(0).toUpperCase() + this.keyword.slice(1)
    },

    formattedSearchType() {
      let formattedType

      if (this.searchType == 'Associated Interests') {
        formattedType = 'adinterestsuggestion'
      } else {
        formattedType = 'adinterest'
      }

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
      return formattedLocale
    }
  },

  methods: {
    ...mapActions(['getInterests', 'toggleStarred']),

    formatAudienceSize(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },

    async handleSubmit() {
      await this.getInterests({
        keyword: this.formattedKeyword,
        searchType: this.formattedSearchType,
        locale: this.formattedLocale
      })
    },
    async handleStar(interest) {
      if (!this.user) {
        console.log('Must be logged in to star items!')
        return
      }
      await this.toggleStarred(interest)
    }
  }
}
</script>

<template lang="pug">
.container
  .row
    .col.d-flex.justify-content-center
      h1 Find Hidden Interests
  .row
    .col.d-flex.justify-content-center
      .form-container.m-4
        form.d-flex.flex-column(@submit.prevent='handleSubmit')
          label(for='keyword') Keyword
          input#keyword.form-control.mb-3.p-2(v-model='keyword' type='text' name='keyword' placeholder='Type something...')
          label(for='search-type') Search Type
          select#search-type.form-control.mb-3.p-2(v-model='searchType')
            option Ad Interest
            option Associated Interests
          label(for='locale') Language
          select#locale.form-control.mb-3.p-2(v-model='locale')
            option(selected='selected') English
            option German
            option Spanish
          .btn-container.d-flex.justify-content-center
            button.btn.btn-primary.px-5.m-3(type='submit') Go!
        .note-container.m-3.text-right
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
            span.result-name(@click="handleStar(result)") {{ result.name }} {{result.starred ? '&#11088' : ''}}
            span {{ formatAudienceSize(result.audience_size) }}
</template>

<style lang="scss" scoped>

// .form-container {
//   width: auto;
//   max-width: 40rem;
// }

.result-card {
  padding: 12px;
}
.result-card:hover {
  background-color: #ededed;
}

.result-name {
  cursor: pointer;
}
</style>
