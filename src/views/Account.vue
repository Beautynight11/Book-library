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
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Account",
  computed: {
    ...mapState([
        'accountInfo',
        'tableColumns'
    ])
  }
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

  &__col
    flex: 1 0 20%
    width: 20%

  &__info
    display: flex
    align-items: center
    text-align: center
    border-bottom: 1px solid gray
    padding: 10px 0


  &__title, &__author, &__country, &__year, &__image
    flex: 1 0 20%
    width: 20%

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
</style>