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
      vue-markdown(
        :source="todo.description? todo.description : '説明文がありません。' "
        class="markdown-body"
      )
    .link_area
      router-link(:to="{ name: 'home' }") Back
      a(@click="showModal = true") Edit
    edit-item-modal(v-show="showModal", @close="showModal = false", :todo="todo")
</template>

<script>
import EditItemModal from '../modal/EditItemModal.vue'
import axios from 'axios'
import VueMarkdown from 'vue-markdown'

const URL = process.env.VUE_APP_API_URL_BASE
export default {
  name: 'PageShowItem',
  components: {
    EditItemModal,
    VueMarkdown
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
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylesheets/pages/PageShowItem.scss';
</style>
