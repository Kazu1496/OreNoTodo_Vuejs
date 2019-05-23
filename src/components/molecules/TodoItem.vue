<template lang="pug">
  div.todos
    li(v-for="(todo, index) in todos")
      input(type="checkbox", v-model="todo.status")
      span(:class="{ done: todo.status }") {{ todo.title }}
      button(@click="deleteItem(index)") Delete
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todos: Array
  },
  methods: {
    deleteItem(index) {
      if(!confirm("削除しても大丈夫ですか？")){
        return;
      }
      this.todos.splice(index, 1);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylesheets/molecules/TodoItem.scss';
</style>
