<template>
  <button :type="type">{{text}}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      required: true,
      type: String,
    },
    text: {
      required: false,
      type: String,
      default: null
    },
  }
}
</script>

<style scoped lang="sass">
button
  outline: none
  border: none
  cursor: pointer
</style>