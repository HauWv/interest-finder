<template lang="pug">
.container
  .col
    .row.main-row.d-flex.justify-content-center.align-items-center.p-3
      .text-container.p-4
        .text.p-4
          h1 About
          p This project came about as a way to make running ad campaigns on Facebook more efficient and cost-effective. It does this by showing you a much wider range of possible audiences to target.
          p If you are searching for audiences to target on Facebook Ads Manager, you've probably noticed that whatever interest you type in, you're only shown 25 suggestions. This is a problem because first of all, it stops you finding more niche audiences, and secondly, because everyone sees the same 25 suggestions it means you are competing with them, pushing your costs up.
          p This tool uses the Facebook Marketing API to fetch more results for you, so that you can discover new audiences and target interests that no one else is targeting.

</template>

<style lang="scss" scoped>

.container {
  background-color: #CEECEF;
  overflow-y: auto;
}

.main-row {
  height: 80vh;
}

.text-container {
  // width: auto;
  max-width: 50rem;
  background-color: white;
  border-radius: 1%;
  border-left: 5px solid #FFC52C;
  border-top: 5px solid #030D4F;
  box-shadow: 1px 2px 10px slategray;
}
</style>