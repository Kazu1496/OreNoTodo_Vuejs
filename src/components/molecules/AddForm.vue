<template lang="pug">
  form(@submit.prevent="addItem")
    input(type="text", v-model="newItem")
    input(type="submit", value="Add")
</template>

<script>
import axios from 'axios';

const URL = process.env.VUE_APP_API_URL_BASE;
export default {
  name: 'AddForm',
  props: {
    todos: Array
  },
  data() {
    return {
      newItem: ''
    }
  },
  methods: {
    addItem() {
      if(this.newItem === ''){
        alert('値を入力してください。');
        return;
      }
      const item = {
        status: false,
        score: 1,
        title: this.newItem
      }
      axios.post(URL, item)
        .then(res => {
          this.todos.push(res.data);
        })
        .catch(err => {
          console.log(err);
        })
      this.newItem = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylesheets/molecules/AddForm.scss';
</style>
