<template>
  <div class="container">
    <div class="bookPage">
      <div class="bookPage__image">
        <div
            class="bookPage__img"
            :style="`background-image: url(${imgBook})`">
        </div>
      </div>
      <div class="bookPage__description">
        <div
            class="bookPage__info"
            v-for="(item, index) in newBook"
            :key="index"
        >
          {{ index }}: {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "BookPage",
  computed: mapState([
      'newBook',
      'imgBook'
  ])
}
</script>

<style scoped lang="sass">
.bookPage
  display: flex
  align-items: center
  justify-content: center
  padding-top: 20px

  &__image
    width: 300px
    height: 500px
    position: relative
    margin-right: 50px

  &__img
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    background-repeat: no-repeat
    background-size: cover
    background-position: center

  &__description
    color: #111546

  &__info
    font-size: 20px
    margin-bottom: 20px

</style>