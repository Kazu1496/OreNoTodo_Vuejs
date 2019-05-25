<template lang="pug">
  ul(v-if="todos.length")
    draggable(v-model="todos" @end="draggableEnd")
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

import draggable from 'vuedraggable'
import axios from 'axios';

const URL = process.env.VUE_APP_API_URL_BASE;
export default {
  name: 'TodoList',
  components: {
    TodoItem,
    draggable
  },
  props: {
    todos: {
      type: Array,
      require: false,
      default: () => ([])
    }
  },
  methods: {
    draggableEnd() {
      this.todos.forEach((todo, index) => {
        todo.order = index
        axios.patch(URL + "/todos/" + todo.id, todo)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylesheets/organisms/TodoList.scss';
</style>
