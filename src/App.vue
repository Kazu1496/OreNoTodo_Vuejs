<template lang="pug">
  div#app
    page-top(msg="Todo List")
</template>

<script>
import PageTop from './components/PageTop.vue'

export default {
  name: 'app',
  components: {
    PageTop
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  width: 500px;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
}
</style>
