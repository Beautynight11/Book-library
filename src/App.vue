<template>
 <div>
   <button @click="getData">CLICK ME</button>
 </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      error: 'Error',
      data: null,
      errored: false,
    }
  },
  methods: {

  }
}
</script>

<style lang="sass">

</style>
