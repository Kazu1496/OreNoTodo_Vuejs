<template lang="pug">
  ul(v-if="filtering(label).length")
    p.label {{ label.name }}
    .list_item-container(v-model="todos")
      todo-item(
        v-for="todo in filtering(label)"
        :todo="todo"
        @delete="deleteItem(todo)"
      )
  .nothing_list(v-else)
    p.label {{ label.name }}
    p.message Nothing {{ label.name }} Todo!!
</template>

<script>
import axios from 'axios'
import TodoItem from '../molecules/TodoItem.vue'

const URL = process.env.VUE_APP_API_URL_BASE
export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array,
      require: true,
      default: () => ([])
    },
    label: {
      type: Object,
      require: true,
      default: () => ({})
    }
  },
  methods: {
    deleteItem (todo) {
      if (!confirm('削除しても大丈夫ですか？')) {
        return
      }
      axios.delete(`${URL}/cards/${todo.id}`)
      this.todos = this.todos.filter(todoObj => todoObj.id !== todo.id)
    },
    filtering (label) {
      const todos = this.todos.filter(todoObj => todoObj.label === label.name)
      todos.sort((a, b) => {
        if (a.score > b.score) return -1
        if (a.score < b.score) return 1
        return 0
      })
      return todos
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylesheets/organisms/TodoList.scss';
</style>
