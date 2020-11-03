<script>
export default {
  name: 'InterestCard',
  props: ['interest']
}
</script>

<template lang="pug">
.box
    h1 {{interest.name}} 
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid black;
}
</style>
