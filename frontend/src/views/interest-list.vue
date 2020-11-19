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
  .box.m-5
    h1 Starred Interests
    div(v-for="interest in interests" :interest="interest")(v-if="interest.starred")
      span.star.p-1(@click="toggleStarred(interest)") &#11088;
      router-link.interest.mx-3.my-5(:to="`/interest-list/${interest._id}`") {{interest.name}}
</template>

<style scoped>
.star {
  cursor: pointer;
  display: inline-block;
  transition: 0.2s;
}

.star:hover {
  transform: scale(1.4);
}

.interest {
  text-decoration: none;
  font-size: 1.2rem;
}
</style>
