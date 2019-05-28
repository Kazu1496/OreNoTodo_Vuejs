<template lang="pug">
  header
    router-link(:to="{ name: 'home' }")
      h1 俺の考えた最強のTODOリスト
</template>

<script>
export default {
  name: 'GlobalHeader'
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/Header.scss';
</style>
