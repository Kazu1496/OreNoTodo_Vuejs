<template lang="pug">
  div.todo
    h1 {{ msg }}
    add-form(:todos="todos")
    p {{ remaining.length }}/{{ todos.length }}
    button(@click="purgeItem") Purge
    todo-list(:todos="todos")
</template>

<script>
import AddForm from '../molecules/AddForm.vue'
import TodoList from '../organisms/TodoList.vue'

export default {
  name: 'PageTop',
  props: {
    msg: String
  },
  components: {
    AddForm,
    TodoList
  },
  data() {
    return {
      newItem: '',
      todos: []
    }
  },
  methods: {
    purgeItem() {
      if(this.remaining.length >= this.todos.length){
        alert('終わったTodoがありません。');
        return;
      }else{
        if(!confirm("一括削除しても大丈夫ですか？")){
          return;
        }
      }
      this.todos = this.remaining;
    }
  },
  computed: {
    remaining() {
      let items = this.todos.filter((todo) => {
        return !todo.status;
      });
      return items;
    }
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      deep: true
    }
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem('todos'));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/stylesheets/pages/TodoIndex.scss';
</style>
