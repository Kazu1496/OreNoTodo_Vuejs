<template lang="pug">
  div#app
    page-header
    page-top
</template>

<script>
import PageTop from './components/pages/PageTop.vue'
import PageHeader from './components/pages/PageHeader.vue'

export default {
  name: 'App',
  components: {
    PageTop,
    PageHeader
  }
}
</script>

<style lang="scss">
@import './assets/stylesheets/Reset.scss';
@import './assets/stylesheets/Setting.scss';
</style>
