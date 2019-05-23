<template lang="pug">
  div#app
    page-top(msg="Todo List")
</template>

<script>
import PageTop from './components/pages/PageTop.vue'

export default {
  name: 'app',
  components: {
    PageTop
  }
}
</script>

<style>
@import './assets/stylesheets/Reset.scss';
#app {
  display: flex;
  justify-content: center;
  width: 500px;
  text-align: center;
  margin: auto;
}
</style>
