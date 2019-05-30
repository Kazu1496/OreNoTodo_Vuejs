<template lang="pug">
  ul(v-if="filtering(label).length")
    p.label {{ label.name }}
    .list_item-container
      todo-item(
        v-for="todo in filtering(label)"
        :todo="todo"
      )
  .nothing_item(v-else)
    p.label {{ label.name }}
    p.message Nothing {{ label.name }} Todo!!
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
    filtering (label) {
      const todos = this.todos.filter(todoObj => todoObj.label === label.name)
      todos.sort((a, b) => {
        if (a.score > b.score) return -1
        if (a.score < b.score) return 1
        return 0
      })
      return todos
    },
    draggableEnd () {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylesheets/organisms/TodoList.scss';
</style>
