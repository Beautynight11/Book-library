<template>
  <div class="filter">
    <div class="filter__title">{{ title }}</div>
    <div class="filter__list">
      <div
          class="filter__item"
          v-for="(item, index) in filter"
          :key="index"
      >
        {{ item }}
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "InputCheckbox",
  props: {
    title: {
      required: true,
      type: String,
    },
    filter: {
      required: false,
      type: Object,
    },
  },
  data () {
    return {
      list: null,
    }
  },

}
</script>

<style scoped lang="sass">
.filter
  padding-right: 60px

  &__title
    font-size: 18px
    font-weight: 900
    border-bottom: 1px solid #000
    padding-bottom: 10px
    margin-bottom: 20px

  &__item
    margin-bottom: 7px
    cursor: pointer

    &:hover
      color: #d7d040
</style>