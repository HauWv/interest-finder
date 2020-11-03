<script>
import InterestCard from '@/components/interest-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'InterestDetail',
  components: { InterestCard },
  data() {
    return {
      interest: null // why do we need this as null?
    }
  },
  async created() {
    this.interest = await this.fetchStarredInterest(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchStarredInterest'])
  }
}
</script>

<template lang="pug">
  div
    h1 This is an interest detail
    InterestCard(:interest="interest" v-if="interest")
</template>
