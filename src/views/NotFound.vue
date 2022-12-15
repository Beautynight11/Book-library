<template>
  <div class="notFound">
    <h1>Page is not found!</h1>
    <p>Ooops. Something went wrong!</p>
    <p>Please go to <router-link :to="{path: '/'}">"home"</router-link> page</p>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped lang="sass">
.notFound
  text-align: center
  padding-top: 40px
  height: 100%

h1
  margin-bottom: 40px
  color: red

p
  font-size: 20px

a:hover
  color: #d7d040
</style>