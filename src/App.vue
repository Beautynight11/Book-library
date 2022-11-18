<template>
   <div class="app">
     <HeaderMenu/>
     <div class="container">
       <MainPage v-if="this.isMain"/>
     </div>
   </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
import MainPage from "./components/MainPage.vue";

import books from './books.json';

export default {
  name: 'App',
  components: {MainPage, HeaderMenu },
  data () {
    return {
      data: books,
      isMain: true,
    }
  },
  methods: {
  }
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
