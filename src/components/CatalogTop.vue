<template>
  <div class="catalog__top">
    <div class="catalog__filter"
         v-if="!isFilter">
      <div
          class="catalog__name"
      >
        Filter:
      </div>
      <div
          class="catalog__list"
          v-for="(name, index) in names"
          :key="index"
          @click="filterByYear(name)"
      >
        {{ name }}</div>
    </div>
    <div class="catalog__select"
         v-if="isFilter"
    >
      <FilterForm
          title="Country"
          :filter="filters.country"
          :get-params="getParams"
      />
      <FilterForm
          title="Language"
          :filter="filters.language"
          :get-params="getParams"
      />
      <div
          class="catalog__btn"
          v-if="isFilter"
          @click="toggleFilter"
      >
        <div class="catalog__cross"></div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterForm from "./FilterForm.vue";

export default {
  name: "CatalogTop",
  components: {FilterForm},
  props: {
    names: {
      required: true,
      type: Array,
    },
    isFilter: {
      required: true,
      type: Boolean,
    },
    options: {
      required: true,
      type: Array,
    },
    filters: {
      required: true,
      type: Object,
    },
    toggleFilter: {
      required: true,
      type: Function,
    },
    getParams: {
      required: true,
      type: Function,
    },
    filterByYear: {
      required: true,
      type: Function,
    },
  },
}
</script>

<style scoped lang="sass">
.catalog
  &__top
    margin-bottom: 50px
    background-color: #d7d2d2
    width: 100%
    height: 50px
    position: relative
    z-index: 2

  &__filter
    display: flex
    align-items: center

  &__select
    background-color: #ffffff
    width: 100%
    display: flex
    z-index: 2
    padding: 25px

  &__name
    margin: 15px

  &__list
    cursor: pointer
    margin-right: 15px

    &:hover
      color: #d7d040


  &__btn
    width: 15px
    height: 15px
    position: absolute
    top: 10px
    right: 10px
    cursor: pointer
    z-index: 2

  &__cross
    width: 100%
    height: 100%
    background-image: url("../public/images/cross-symbol_icon-icons.com_74149.png")
    background-position: center
    background-size: contain
    background-repeat: no-repeat

</style>