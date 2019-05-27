<template lang="pug">
  transition(name="modal")
    .modal-wrapper
      .modal-container
        button(@click="$emit('close')")
          font-awesome-icon(icon="times", size="2x")
        h2 {{ todo.title }}
</template>

<script>
export default {
  name: 'ItemModal'
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylesheets/Modal.scss';
</style>
