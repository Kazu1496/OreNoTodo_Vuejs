<template lang="pug">
  header
    router-link(:to="{ name: 'home' }")
      h1 俺の考えた最強のTODOリスト
    a(v-if="showButton" @click="signOut") ログアウト
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'GlobalHeader',
  data () {
    return {
      showButton: false
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.showButton = true
      }
    })
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut()
        .then(() => {
          window.location.reload()
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/Header.scss';
</style>
