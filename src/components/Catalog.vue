<template>
  <div class="container">
    <div class="catalog">
    <div class="catalog__books">
      <div
          class="catalog__book"
          v-for="(book, index) in catalog"
          :key="index"
          :style="`background-image: url(${book.imageLink})`"
          @click="this.getBookInfo(book.imageLink,{
              Name: book.title,
              Author: book.author,
              Country: book.country,
              Year: book.year,
              Pages: book.pages,
              Language: book.language,
              })"
      >
        <div class="catalog__description">
          <div class="catalog__title">Author: {{book.author}}</div>
          <div class="catalog__text">Title: {{book.title}}</div>
          <div class="catalog__country">Country: {{book.country}}</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: "Catalog",
  props: {
    catalog: {
      required: true,
      type: Array,
    },
    getBookInfo: {
      required: true,
      type: Function,
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },

}
</script>

<style scoped lang="sass">
.catalog

  &__books
    display: flex
    flex-wrap: wrap
    justify-content: space-between

  &__book
    width: 220px
    height: 340px
    cursor: pointer
    margin-bottom: 20px
    position: relative
    background-repeat: no-repeat
    background-size: contain
    background-position: center

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