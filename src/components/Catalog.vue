<template>
  <div class="catalog">
    <div class="catalog__top">
      <div class="catalog__filter">Filter</div>
    </div>
    <div class="catalog__books">
      <div
          class="catalog__book"
          v-for="(book, index) in catalog"
          :key="index"
          :style="`background-image: url(${book.imageLink})`"
      >
        <div class="catalog__description">
          <div class="catalog__title">Author: {{book.author}}</div>
          <div class="catalog__text">Title: {{book.title}}</div>
          <div class="catalog__country">Country: {{book.country}}</div>
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
    }
  }
}
</script>

<style scoped lang="sass">
.catalog

  &__top
    margin-bottom: 50px
    background-color: #d7d2d2
    padding: 20px
    width: 100vw
    margin-left: -15px

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