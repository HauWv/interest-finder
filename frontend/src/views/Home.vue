<template lang="pug">
  .home
    img(alt="Vue logo" src="../assets/logo.png")
    HelloWorld(msg="Welcome to Your Vue.js App")
    div(v-for="user in users") {{ user.name }} has {{ user.projects.length }} projects
    div(v-for="user in users") {{ user.name }} has {{ user.starredInterests.length }} starredInterests
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
