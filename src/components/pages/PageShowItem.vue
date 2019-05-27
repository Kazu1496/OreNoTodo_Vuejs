<template lang="pug">
  .show_item-container
    .item_header
      h1 {{ todo.title }}
    .status_area
      p.area_title Status
      p {{ todo.label }}
    .priority_area
      p.area_title Priority
      font-awesome-icon(icon="star", v-for="n in todo.score")
    .description_area
      p.area_title Description
      p.text {{ todo.description ? todo.description : 'Descriptionがありません' }}
    .link_area
      router-link(:to="{ name: 'home' }") Back
      button(@click="showModal = true") Edit
    edit-item-modal(v-show="showModal", @close="showModal = false", :todo="todo")
</template>

<script>
import TodoItem from '../molecules/TodoItem.vue'
import EditItemModal from '../modal/EditItemModal.vue'
import axios from 'axios'

const URL = process.env.VUE_APP_API_URL_BASE
export default {
  name: 'PageShowItem',
  components: {
    TodoItem,
    EditItemModal
  },
  data () {
    return {
      showModal: false,
      todo: {}
    }
  },
  created () {
    axios.get(`${URL}/cards/${this.$route.params.card_id}`)
      .then(res => {
        this.todo = res.data
      })
  },
  methods: {
    filtering (label) {
      const todos = this.todos.filter(todoObj => todoObj.label === label)
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
@import '../../assets/stylesheets/pages/PageShowItem.scss';
</style>
