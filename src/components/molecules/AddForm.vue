<template lang="pug">
  form(@submit.prevent="addItem")
    input(type="text", v-model="newItem")
    input(type="submit", value="Add")
</template>

<script>
export default {
  props: {
    todos: Array
  },
  data() {
    return {
      newItem: ''
    }
  },
  methods: {
    addItem() {
      let item = {
        status: false,
        title: this.newItem
      }
      this.todos.push(item);
      this.newItem = ''
    }
  }
}
</script>

<style lang="css" scoped>
</style>
