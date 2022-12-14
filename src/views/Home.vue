<template>
  <div class="main">
    <div class="main__title">Welcome to the book library!</div>
    <div class="main__text">
      <p>Here you can find a large number of different literature.</p>
      <p>To get started, click
        <router-link :to="{path: '/catalog'}">
          "catalog"
        </router-link>
        or use the search</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: "MainPage",
  methods: {
    ...mapMutations([
        "getBookInfo"
    ])
  },
  computed: mapState([
      "filteredData",
  ])
}
</script>

<style scoped lang="sass">
.main
  color: #111546
  text-align: center
  padding: 200px 0


  &__title
    font-size: 40px
    margin-bottom: 40px
    font-weight: bold

  &__text
    font-size: 20px

a
  color: inherit
  text-decoration: none

  &:hover
    color: #d7d040
</style>