<template lang="pug">
  ul(v-if="todos.length")
    todo-item(:todos="todos")
  p(v-else) Nothing Todo!!
</template>

<script>
import TodoItem from '../molecules/TodoItem.vue'

export default {
  name: 'TodoList',
  props: {
    todos: Array
  },
  components: {
    TodoItem
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylesheets/organisms/TodoList.scss';
</style>
