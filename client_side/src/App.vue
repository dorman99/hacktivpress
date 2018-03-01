<template>
  <div id="app">
    <navbarvue/>
    <router-view/>
  </div>
</template>

<script>
import navbarvue from './components/navbarvue.vue'
import bodyvue from './components/bodyvue.vue'
export default {
  components: {
    navbarvue,
    bodyvue
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
