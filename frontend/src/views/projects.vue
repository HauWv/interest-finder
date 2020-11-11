<script>
import axios from 'axios'
import ProjectCard from '@/components/project-card.vue'

import { mapActions } from 'vuex'

export default {
  name: 'Projects',
  components: { ProjectCard },
  data() {
    return {
      projects: []
      // project: null
    }
  },

  async created() {
    this.projects = await this.fetchProjects()
    // console.log(this.projects)
  },

  methods: {
    ...mapActions(['fetchProjects'])
  }
}
</script>

<template lang="pug">
  .box
    h1 My Projects
    div(v-for="project in projects" :project="project")
      p {{project.name}}
</template>
