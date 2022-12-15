<template>
  <div class="container">
    <div class="bookPage">
      <router-link :to="{path: '/catalog'}">
        <div class="bookPage__prev">
          <div class="bookPage__arrow"></div>
        </div>
      </router-link>
      <div class="bookPage__image">
        <div
            class="bookPage__img"
            :style="`background-image: url(${imgBook})`"
        >
        </div>
      </div>
      <div class="bookPage__description">
          <div
              class="bookPage__info"
              v-for="(item, index) in newBook"
              :key="index"
          >
            {{ index }}:
            <router-link :to="{path: '/catalog'}">
              <span @click="filterByParams(item)">{{ item }}</span>
            </router-link>
          </div>
        <button
            class="bookPage__btn"
            @click="getAccountInfo({item: newBook, img: imgBook})"
        >
          Add at the library
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "BookPage",
  methods: {
    ...mapMutations([
        'filterByParams',
        'getAccountInfo',
    ])
  },
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
  padding-top: 40px
  position: relative
  padding-bottom: 40px

  &__prev
    position: absolute
    top: 20px
    left: 0
    width: 35px
    height: 17px
    cursor: pointer

  &__arrow
    width: 100%
    height: 100%
    background-image: url("../../public/icons/1491254409-leftarrowbackwardsign_82959.png")
    background-position: center
    background-repeat: no-repeat
    background-size: cover

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
    max-width: 300px
    font-weight: 700

  &__info
    font-size: 20px
    margin-bottom: 20px

  &__btn
    outline: none
    border: 1px solid #111546
    background-color: #111546
    font-size: 14px
    color: #ffffff
    padding: 15px
    width: 100%
    cursor: pointer
    margin-top: 40px

    &:hover
      color: #000000
      background-color: #d7d040
      border: 1px solid #d7d040

span
  cursor: pointer
  color: #1726e0
  font-weight: 500

  &:hover
    color: #d7d040
</style>