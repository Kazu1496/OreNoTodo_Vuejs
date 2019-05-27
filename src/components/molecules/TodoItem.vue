<template lang="pug">
  li
    .todo_elements
      span.title(:class="{ done: todo.status }") {{ todo.title }}
      .priority_area
        font-awesome-icon(icon="star", v-for="n in todo.score")
    select(v-model="todo.label", @change="changeLabel")
      option(v-for="option in options") {{ option }}
</template>

<script>
import axios from 'axios'

const URL = process.env.VUE_APP_API_URL_BASE
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
    }
  },
  data () {
    return {
      options: ['Todo', 'Doing', 'Done']
    }
  },
  methods: {
    changeLabel () {
      axios.patch(`${URL}/cards/${this.todo.id}`, this.todo)
    },
    callDelete (todo) {
      this.$emit('delete', todo)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylesheets/molecules/TodoItem.scss';
</style>
