<template lang="pug">
  li
    input(type="checkbox" v-model="todo.status" @click="toggleStatus")
    span(:class="{ done: todo.status }") {{ todo.title }}
    button(@click="deleteItem(index)") Delete
</template>

<script>
import axios from 'axios';

const URL = process.env.VUE_APP_API_URL_BASE;
export default {
  name: 'TodoItem',
  props: {
    index: {
      type: Number,
      require: false,
      default: 0
    },
    todo: {
      type: Object,
      require: false,
      default: () => ({})
    },
    todos: {
      type: Array,
      require: false,
      default: () => ([])
    }
  },
  methods: {
    deleteItem(index) {
      if(!confirm("削除しても大丈夫ですか？")){
        return;
      }
      axios.delete(URL + "/todos/" + this.todo.id)
      this.todos.splice(index, 1);
    },
    toggleStatus() {
      this.todo.status = !this.todo.status
      axios.patch(URL + "/todos/" + this.todo.id, this.todo)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylesheets/molecules/TodoItem.scss';
</style>
