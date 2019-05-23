<template lang="pug">
  div#app
    img(src="./assets/logo.png")
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

<style lang="scss">
@import './assets/stylesheets/Reset.scss';
#app{
  width: 350px;
  text-align: center;
  margin: 20px auto;
  img{
    width: 100px;
    height: auto;
  }
}
</style>
