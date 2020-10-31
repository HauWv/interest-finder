<script>
export default {
  name: 'UserCard',
  props: ['user']
}
</script>

<template lang="pug">
.box
    h1 {{user.name}} 
    h2 Projects ({{user.projects.length}})

    .projects(v-for="project in user.projects")
        h3 {{project.name}}
    h2 Favourites:

    .favourites(v-for="interest in user.starredInterests")
        h3 {{interest.name}}
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid black;
}
</style>
