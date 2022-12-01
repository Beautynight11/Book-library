<template>
  <div class="catalog">
    <CatalogTop
        :filter-by-year="filterByYear"
        :get-params="getParams"
        :toggle-filter="toggleFilter"
        :names="names"
        :options="options"
        :is-filter="isFilter"
        :filters="filters"
    />
    <div class="container">
    <div class="catalog__books">
      <router-link :to="{path: '/book'}"
          class="catalog__book"
          v-for="(book, index) in filteredData || list"
          :key="index"
          :style="`background-image: url(${book.imageLink})`"
          @click="getBookInfo(
              {img: book.imageLink,
              obj: {
              Name: book.title,
              Author: book.author,
              Country: book.country,
              Year: book.year,
              Pages: book.pages,
              Language: book.language,
              }
              })"
      >
        <div class="catalog__description">
          <div class="catalog__title">Author: {{book.author}}</div>
          <div class="catalog__text">Title: {{book.title}}</div>
          <div class="catalog__country">Country: {{book.country}}</div>
        </div>
      </router-link>
    </div>
  </div>
  </div>
</template>

<script>
import CatalogTop from "../components/CatalogTop.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Catalog",
  components: { CatalogTop },
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations([
      'getBookInfo',
      'toggleFilter',
      'getParams',
      'filterByYear',
    ])
  },
  computed: mapState([
    'filteredData',
    'list',
    'names',
    'isFilter',
    'options',
    'filters'
  ])
}
</script>

<style scoped lang="sass">
.catalog

  &__books
    display: flex
    flex-wrap: wrap
    justify-content: center
    margin-right: -40px

  &__book
    width: 220px
    height: 340px
    cursor: pointer
    margin-bottom: 20px
    position: relative
    background-repeat: no-repeat
    background-size: contain
    background-position: center
    margin-right: 40px

  &__description
    background-color: #000
    color: #ffffff
    padding: 5px
    font-size: 12px
    position: absolute
    left: 0
    bottom: 0
    width: 100%
    transition: 300ms opacity
    opacity: 0

  &__book:hover > &__description
    opacity: 1

  &__title, &__text
    margin-bottom: 5px

</style>