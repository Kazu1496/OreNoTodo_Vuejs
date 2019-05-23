<template lang="pug">
  form(@submit.prevent="addItem")
    input(type="text", v-model="newItem")
    input(type="submit", value="Add")
</template>

<script>
export default {
  name: 'AddForm',
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
      if(this.newItem === ''){
        alert('値を入力してください。');
        return;
      }
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

<style lang="scss" scoped>
@import '../../assets/stylesheets/molecules/AddForm.scss';
</style>
