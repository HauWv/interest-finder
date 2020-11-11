<script>
export default {
  name: 'ProjectCard',
  props: ['project']
}
</script>

<template lang="pug">
  .box
    h1 {{project.name}} 

</template>
