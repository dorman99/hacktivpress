<template>
  <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="../assets/fox.png" alt="Bulma: a modern CSS framework based on Flexbox" width="auto" height="auto">
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a  class="navbar-item" href="#">
        <i class="fas fa-home"></i>
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="/documentation/overview/start/">
          <i class="fas fa-newspaper"></i>
        </a>
        <div class="navbar-dropdown is-boxed">
          <a v-for="cate in categories" :key="cate._id" class="navbar-item" href="/documentation/overview/start/">
            {{cate.category}}
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a v-if="buttonstat" class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>
                Post Something
              </span>
            </a>
          </p>
          <p class="control">
            <a v-if="this.$route.path === '/' && buttonstat" class="button is-primary" @click.prevent="logout">
              <span class="icon">
                <i class="far fa-sign-out"></i>
              </span>
              <span>Logout</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'navbarvue',
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  },
  computed: {
    categories () {
      return this.$store.state.Articles
    },
    buttonstat () {
      return this.$store.state.buttonpost
    }
	},
}
</script>

<style>

</style>
