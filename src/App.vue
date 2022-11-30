<template>
   <div class="app">
     <HeaderMenu/>
<!--     <BookPage-->
<!--         :books="newBook"-->
<!--         :img-book="imgBook"-->
<!--     />-->
     </div>
  <router-view/>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
import BookPage from "./components/BookPage.vue";

export default {
  name: 'App',
  components: {
    BookPage,
    HeaderMenu
  },
}
</script>

<style lang="sass">
.container
  margin-left: auto
  margin-right: auto
  padding-left: 15px
  padding-right: 15px
  max-width: 1140px
</style>
