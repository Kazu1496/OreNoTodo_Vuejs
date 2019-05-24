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
    index: Number,
    todo: Object,
    todos: Array
  },
  methods: {
    deleteItem(index) {
      if(!confirm("削除しても大丈夫ですか？")){
        return;
      }
      axios.delete(URL + "/todos/" + this.todo.id)
        .catch(err => {
          alert("削除処理が失敗しました");
          console.log(err);
        })
      this.todos.splice(index, 1);
    },
    toggleStatus() {
      axios.patch(URL + "/todos/" + this.todo.id, {
        status: !this.todo.status
      })
      .catch(err => {
        alert("削除処理が失敗しました");
        console.log(err);
      })
      this.todo.status = !this.todo.status
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylesheets/molecules/TodoItem.scss';
</style>
