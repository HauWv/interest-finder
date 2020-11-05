<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'Interests',
  components: {},
  data() {
    return {
      interests: []
    }
  },

  async created() {
    console.log('created')
    this.interests = await this.fetchStarredInterests()
  },

  methods: {
    ...mapActions(['fetchStarredInterests', 'toggleStarred'])
  }
}
</script>

<template lang="pug">
  .box
    h1 Starred Interests
    div(v-for="interest in interests")
      router-link(:to="`/interest-list/${interest._id}`") {{ interest.name }}
      button(@click="toggleStarred(interest)") star / unstar
      span {{ interest.starred }}
</template>
