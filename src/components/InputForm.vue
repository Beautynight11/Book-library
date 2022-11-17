<template>
  <form>
    <input :type="type" :placeholder="placeholder"/>
    <Button :type="typeBtn"/>
  </form>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "InputForm",
  components: {Button},
  props: {
    placeholder: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
    typeBtn: {
      required: true,
      type: String,
    },
  }
}
</script>

<style scoped lang="sass">
form
  display: flex

input
  width: 100%
  height: 100%
  padding: 10px
  outline: none
  border: none

</style>