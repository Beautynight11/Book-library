<template>
   <div class="app">
     <HeaderMenu/>
     <CatalogTop
         :get-list="getList"
         :is-filter="this.isFilter"
         :options="this.options"
         :names="this.names"
         :toggle-filter="toggleFilter"
         :get-params="getParams"
         :filter-by-year="filterByYear"
     />
     <div class="container">
       <Home v-if="this.isMain"/>
       <Catalog :catalog="this.filteredData || this.data"/>
     </div>
   </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
import Home from "./components/Home.vue";
import Catalog from "./components/Catalog.vue";
import CatalogTop from "./components/CatalogTop.vue";

import books from './books.json';

export default {
  name: 'App',
  components: {CatalogTop, Catalog, Home, HeaderMenu },
  data () {
    return {
      data: books,
      isMain: false,
      options: ['Country', 'Language'],
      filter: {
        country: [],
        language: [],
      },
      isFilter: false,
      names: ['New', 'Old', 'More...'],
      filteredData: null,
    }
  },
  methods: {
    getList(data) {
      if (data.toLowerCase() === 'country') {
        return this.filter.country
      }
      if (data.toLowerCase() === 'language') {
        return this.filter.language
      }
    },
    toggleFilter() {
      this.isFilter = !this.isFilter
      if (this.isFilter === false) {
        this.filteredData = this.data
      }
    },
    getParams(el) {
      this.filteredData = this.data.filter(
          data =>
              data.country === el
              || data.language === el
      );
      this.isFilter = false
    },
    filterByYear(name) {
      this.filteredData = this.data.filter(
          data => {
            if(name.toLowerCase() === 'new') {
              return data.year > 1850 && data.year < 2000
            }
            if (name.toLowerCase() === 'old') {
              return data.year < 1849
            }
            if (name.toLowerCase() === 'more...') {
              this.isFilter = true
            }
          }
      )
    }
  },
  mounted() {
    for (let i = 0; i < this.data.length; i++) {
      if (!this.filter.country.includes(this.data[i].country)) {
        this.filter.country.sort().push(this.data[i].country);
      }
      if (!this.filter.language.includes(this.data[i].language)) {
        this.filter.language.push(this.data[i].language);
      }
    }
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
