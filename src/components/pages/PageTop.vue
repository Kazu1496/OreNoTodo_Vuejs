<template lang="pug">
  .todo
    .button_area
      button(@click="showModal = true") Add Todo
      button(@click="purgeItem") Purge
    .list-container
      todo-list(v-for="label in labels", :todos="todos", :label="label")
    add-item-modal(v-if="showModal", @close="showModal = false", :todos="todos")
</template>

<script>
import axios from 'axios';
import AddForm from '../molecules/AddForm.vue';
import TodoList from '../organisms/TodoList.vue';
import AddItemModal from '../modal/AddItemModal.vue';


const URL = process.env.VUE_APP_API_URL_BASE;
export default {
  name: 'PageTop',
  components: {
    AddForm,
    TodoList,
    AddItemModal,
  },
  data() {
    return {
      newItem: '',
      todos: [],
      labels: [],
      showModal: false,
    };
  },
  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.status);
    }
  },
  mounted() {
    axios.get(`${URL}/cards`)
      .then(res => {
        this.todos = res.data;
      })
    axios.get(`${URL}/card_labels`)
      .then(res => {
        this.labels = res.data;
      })
  },
  methods: {
    purgeItem() {
      if (this.remaining.length >= this.todos.length) {
        alert('終わったTodoがありません。');
        return;
      }
      if (!confirm('一括削除しても大丈夫ですか？')) {
        return;
      }
      this.todos.forEach((todo) => {
        if (todo.status) {
          axios.delete(`${URL}/cards/${todo.id}`)
            .catch((err) => {
              alert(err);
            });
        }
      });
      this.todos = this.remaining;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/stylesheets/pages/PageTop.scss';
</style>
