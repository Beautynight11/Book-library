<template>
  <form>
    <input
        :type="type"
        :placeholder="placeholder"
        v-model="this.info"
    />
    <button
        :type="typeBtn"
        @click="buttonFunc(this.info)"
    >
      {{ text }}
    </button>
  </form>
</template>

<script>
export default {
  name: "InputForm",
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
    buttonFunc: {
      required: false,
      type: Function,
    },
    text: {
      required: false,
      type: String,
      default: null
    },
  },
  data() {
    return {
      info: null
    }
  },
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

button
  outline: none
  border: none
</style>