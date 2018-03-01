<template>
  <div class="card ">
  <div class="card-content">
    <p class="title">{{article.title}}</p>
    <p class="content">
      “{{article.content.substr(0,100)}} ..”
    </p>
    <p class="subtitle">
      by: {{article.author.name}}
    </p>
  </div>
  <footer class="card-footer">
    <p v-if="false" class="card-footer-item">
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        <a> Read </a>
      </span>
    </p>
  </footer>
</div>
</template>

<script>
export default {
  props: ['article'],
  name: 'blogcard'
}
</script>

<style>

</style>
