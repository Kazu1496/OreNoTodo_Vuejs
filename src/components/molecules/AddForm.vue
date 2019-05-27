<template lang="pug">
  form(@submit.prevent="addItem")
    input(type="text", v-model="title", placeholder="Title")
    .score_area
      span Priority:{{ score }}
      star-rating(:star-size="20", :show-rating="false", active-color="#FFA726", v-model="score")
    .select_area
      span Status:
      select(v-model="selected")
        option(v-for="option in options") {{ option }}
    textarea(placeholder="Description", v-model="description")
    input(type="submit", value="Add")
</template>

<script>
import axios from 'axios'

const URL = process.env.VUE_APP_API_URL_BASE
export default {
  name: 'AddForm',
  props: {
    todos: {
      type: Array,
      require: false,
      default: () => ([])
    }
  },
  data () {
    return {
      title: '',
      description: '',
      score: 1,
      selected: 'Todo',
      options: ['Todo', 'Doing']
    }
  },
  methods: {
    addItem () {
      if (this.title === '') {
        alert('値を入力してください。')
        return
      }
      const item = {
        status: false,
        score: this.score,
        title: this.title,
        description: this.description,
        label: this.selected
      }
      axios.post(`${URL}/cards`, item)
        .then((res) => {
          this.todos.push(res.data)
        })
      this.title = ''
      this.score = 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylesheets/molecules/AddForm.scss';
</style>
