<template>
  <div class="main">
    <div class="main__title">Welcome to the book library!</div>
    <div class="main__text">
      <p>Here you can find a large number of different literature.</p>
      <p>To get started, click <span>'catalog of books'</span> or use the search</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage"
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

span
  cursor: pointer

  &:hover
    color: #d7d040
</style>