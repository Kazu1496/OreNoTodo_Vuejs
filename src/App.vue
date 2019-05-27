<template lang="pug">
  div#app
    global-header
    transition(name="fade", mode="out-in")
      router-view
</template>

<script>
import PageTop from './components/pages/PageTop.vue'
import GlobalHeader from './components/GlobalHeader.vue'

export default {
  name: 'App',
  components: {
    PageTop,
    GlobalHeader
  }
}
</script>

<style lang="scss">
@import './assets/stylesheets/Reset.scss';
@import './assets/stylesheets/Setting.scss';
.fade-enter-active, .fade-leave-active{
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
