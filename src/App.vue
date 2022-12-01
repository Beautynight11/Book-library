<template>
   <div class="app">
     <HeaderMenu/>
     </div>
  <router-view/>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";

export default {
  name: 'App',
  components: {
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
