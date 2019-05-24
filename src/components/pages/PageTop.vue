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

import axios from 'axios';

const URL = process.env.VUE_APP_API_URL_BASE;
export default {
  name: 'PageTop',
  components: {
    AddForm,
    TodoList
  },
  props: {
    msg: {
      type: String,
      require: false,
      default: ''
    }
  },
  data: function() {
    return {
      newItem: '',
      todos: []
    }
  },
  computed: {
    remaining() {
      let items = this.todos.filter(todo => {
        return !todo.status;
      });
      return items;
    }
  },
  mounted() {
    axios.get(URL + "/todos")
      .then(res => {
        this.todos = res.data
      })
      .catch(err => {
        console.log(err);
      })
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
      this.todos.forEach(todo => {
        if(todo.status){
          axios.delete(URL + "/todos/" + todo.id)
            .catch(err => {
              alert(err);
            })
        }
      })
      this.todos = this.remaining;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/stylesheets/pages/TodoIndex.scss';
</style>
