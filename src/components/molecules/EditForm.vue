<template lang="pug">
  form(@submit.prevent="updateItem")
    input(type="text", v-model="todo.title", placeholder="Title")
    .score_area
      span Priority:{{ todo.score }}
      star-rating(:star-size="20", :show-rating="false", active-color="#FFA726", v-model="todo.score")
    .select_area
      span Status:
      select(v-model="todo.label")
        option(v-for="option in options") {{ option }}
    textarea(placeholder="Description", v-model="todo.description")
    input(type="submit", value="Update")
</template>

<script>
import axios from 'axios'

const URL = process.env.VUE_APP_API_URL_BASE
export default {
  name: 'EditForm',
  props: {
    todo: {
      type: Object,
      require: true,
      default: () => ({})
    }
  },
  data () {
    return {
      options: ['Todo', 'Doing', 'Done']
    }
  },
  methods: {
    updateItem () {
      if (this.title === '') {
        alert('値を入力してください。')
        return
      }
      const item = {
        score: this.todo.score,
        title: this.todo.title,
        description: this.todo.description,
        label: this.todo.label
      }
      axios.patch(`${URL}/cards/${this.todo.id}`, item)
        .then((res) => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylesheets/molecules/AddForm.scss';
</style>
