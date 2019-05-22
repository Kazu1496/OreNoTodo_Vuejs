<template lang="pug">
  div.todo
    h1 {{ msg }}
    form(@submit.prevent="addItem")
      input(type="text", v-model="newItem")
      input(type="submit")
    button(@click="purgeItem") Purge
    ul(v-if="todos.length")
      p {{ remaining.length }}/{{ todos.length }}
      li(v-for="(todo, index) in todos")
        input(type="checkbox", v-model="todo.status")
        span(:class="{ done: todo.status }") {{ todo.name }}
        button(@click="deleteItem(index)") Delete
    p(v-else) Nothing Todo!!
</template>

<script>
import axios from 'axios';

export default {
  name: 'todo',
  props: {
    msg: String
  },
  data: () => {
    return {
      msg: "TodoList",
      newItem: '',
      todos: []
    }
  },
  methods: {
    addItem: function(){
      let item = {
        status: false,
        name: this.newItem
      }
      this.todos.push(item);
      this.newItem = ''
    },
    deleteItem: function(index){
      if(!confirm("削除しても大丈夫ですか？")){
        return;
      }
      this.todos.splice(index, 1);
    },
    purgeItem: function(){
      if(!confirm("一括削除しても大丈夫ですか？")){
        return;
      }
      this.todos = this.remaining
    }
  },
  computed: {
    remaining: function(){
      let items = this.todos.filter((todo) => {
        return !todo.status;
      });
      return items;
    }
  },
  watch: {
    todos: {
      handler: function(){
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      deep: true
    }
  },
  mounted: function(){
    axios.get('localhost:3000/todos')
    .then((res) => {
      this.todos = res.data;
    })
    .catch((res) => {
       alert(res);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/stylesheets/todo.scss';
</style>
