<script>
// @ is an alias to /src
import axios from 'axios'
import UserCard from '@/components/user-card.vue' // @ means we are referencing the source directory.
import { mapActions } from 'vuex'

export default {
  name: 'Users',
  components: { Counter },
  components: {
    UserCard
  },
  data() {
    return {
      users: []
    }
  },
  async created() {
    const usersRequest = await axios.get('/api/users')

    this.users = usersRequest.data
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
