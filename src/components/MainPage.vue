<template>
  <div class="main">
    <div class="main__title">Welcome to the book library!</div>
    <div class="main__text">
      <p>Here you can find a large number of different literature.</p>
      <p>To get started, click <b>'catalog of books'</b> or use the search</p>
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
  position: relative

  &:after
    content: ''
    width: 100%
    height: 100%
    background-image: url("../../public/images/stars-png-transparent-13.png")
    background-repeat: no-repeat
    position: absolute
    top: 0
    left: 0
    opacity: .1


  &__title
    font-size: 40px
    margin-bottom: 40px
    font-weight: bold

  &__text
    font-size: 20px
</style>