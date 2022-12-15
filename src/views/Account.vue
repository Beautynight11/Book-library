<template>
  <div class="account">
    <div class="container">
      <div class="account__table">
        <div
            class="account__col"
            v-for="(name, index) in tableColumns"
            :key="index"
        >{{name}}</div>
      </div>
      <div class="account__error" v-if="isAccount">
        Nothing selected!
        <p>Please go to <router-link :to="{path: '/catalog'}">"catalog"</router-link> to choose your books</p>
      </div>
      <div
          class="account__info"
          v-for="(item, index) in accountInfo"
          :key="index"
      >
        <div class="account__image">
          <div
              class="account__img"
              :style="`background-image: url(${item.img})`"
          ></div>
        </div>
        <div class="account__title">{{ item.Name }}</div>
        <div class="account__author">{{ item.Author }}</div>
        <div class="account__country">{{ item.Country }}</div>
        <div class="account__year">{{ item.Year }}</div>
        <div class="account__remove" @click="deleteFromLibrary(item)">
          <div class="account__img"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Account",
  methods: {
    ...mapMutations([
        'deleteFromLibrary'
    ])
  },
  computed: {
    ...mapState([
        'accountInfo',
        'tableColumns',
        'isAccount'
    ])
  },
}
</script>

<style scoped lang="sass">
.account
  padding-bottom: 20px
  margin-top: 20px

  &__table
    display: flex
    align-items: center
    padding-bottom: 20px
    color: gray
    text-align: center
    border-bottom: 1px solid gray
    padding-right: 20px

  &__col
    flex: 1 0 16.666%
    width: 16.666%

  &__error
    font-size: 20px
    text-align: center
    padding: 50px 0

    a:hover
      color: #d7d040

  &__info
    display: flex
    align-items: center
    text-align: center
    border-bottom: 1px solid gray
    padding: 10px 0


  &__title, &__author, &__country, &__year, &__image
    flex: 1 0 16.666%
    width: 16.666%

  &__image
    width: 70px
    height: 140px
    position: relative

  &__img
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    background-repeat: no-repeat
    background-size: contain
    background-position: center

  &__remove
    width: 10px
    height: 10px
    position: relative
    padding-right: 20px
    cursor: pointer

  &__remove &__img
    background-image: url("../public/icons/cross-symbol_icon-icons.com_74149.png")
</style>