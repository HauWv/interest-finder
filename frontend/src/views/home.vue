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
  .home
    h1 Interest Finder
    user-card(v-for="user in users" :user="user") 
</template>
