<template lang="pug">
  ul(v-if="todos.length")
    todo-item(
      v-for="(todo, index) in todos"
      :index="index"
      :todo="todo"
      :todos="todos"
    )
  p(v-else) Nothing Todo!!
</template>

<script>
import TodoItem from '../molecules/TodoItem.vue'

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array,
      require: false,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylesheets/organisms/TodoList.scss';
</style>
