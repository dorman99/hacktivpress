<template>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title">Section</h1>
      <h2 class="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      <div class="columns is-6" style="flex-wrap: wrap">
        <div v-for="article in arrArticles" :key="article._id" class="column is-4">
        <blogcard :article="article"/>
        </div>
      </div>
      </h2>
    </div>
  </section>
</body>
</template>

<script>
import blogcard from './blogcard.vue'
export default {
  name: 'bodyvue',
  components: {
    blogcard
  },
  computed: {
    arrArticles () {
      return this.$store.state.Articles
    }
  },
  created () {
    this.$store.dispatch('getAllArticles')
  }
}
</script>

<style>
 .section{
   background-color: grey
 }
</style>
