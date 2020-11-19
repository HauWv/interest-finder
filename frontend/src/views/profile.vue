<script>
// @ is an alias to /src
import axios from 'axios'
import Counter from '@/components/counter.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Profile',
  components: { Counter },
  data() {
    return {
      users: []
    }
  },
  async created() {
    this.users = await this.fetchUsers()
  },

  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['fetchUsers'])
  }
}
</script>

<template lang="pug">
  .home
    h1 Account: {{user.name}}
    p More info coming soon...
    //- div(v-for="user in users" :user="user")
    //-   router-link(:to="`/users/${user._id}`") {{ user.name }}
    //- Counter
</template>
