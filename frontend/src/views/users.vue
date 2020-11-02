<script>
// @ is an alias to /src
import axios from 'axios'
import Counter from '@/components/counter.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Users',
  components: { Counter },
  data() {
    return {
      users: []
    }
  },
  async created() {
    this.users = await this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers'])
  }
}
</script>

<template lang="pug">
  .home
    h1 List of users
    div(v-for="user in users" :user="user")
      router-link(:to="`/users/${user._id}`") {{ user.name }}
    Counter
</template>
