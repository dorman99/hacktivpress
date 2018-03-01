<template>
  <body>
  <section class="section">
    <div class="container">
      <h2 class="subtitle">
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
    if (localStorage.getItem('token')) {
      this.$store.dispatch('getAllArticles')
    } else {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
 .section{
   background-color: grey
 }
</style>
