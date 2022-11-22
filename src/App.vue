<template>
   <div class="app">
     <HeaderMenu/>
     <div class="container">
       <Home v-if="this.isMain"/>
       <Catalog :catalog="this.data"/>
     </div>
   </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
import Home from "./components/Home.vue";
import Catalog from "./components/Catalog.vue";

import books from './books.json';

export default {
  name: 'App',
  components: {Catalog, Home, HeaderMenu },
  data () {
    return {
      data: books,
      isMain: false,
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
