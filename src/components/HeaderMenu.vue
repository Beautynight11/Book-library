<template>
  <div class="header">
    <div class="header__logo">
      <div class="header__title">Book library</div>
      <div class="header__image">
        <div class="header__img"></div>
      </div>
    </div>
    <div class="header__search">
      <InputForm
          placeholder="Book, author, genre..."
          type="text"
          type-btn="button"
          :button-func="getInfo"
      />
    </div>
    <div class="header__account">Mary</div>
  </div>
</template>

<script>
import InputForm from "./InputForm.vue";

export default {
  name: "HeaderMenu",
  components: {InputForm},
  data () {
    return {
      info: null
    }
  },
  methods: {
    getInfo(info) {
      this.info = info;
    }
  }
}
</script>

<style lang="sass">
.header
  background-color: #111546
  color: white
  display: flex
  justify-content: space-between
  align-items: center
  padding: 30px 20px

  &__logo
    display: flex
    font-size: 32px

  &__title
    margin-right: 20px

  &__image
    width: 50px
    height: 50px

  &__img
    width: 100%
    height: 100%
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23fff%22%20viewBox%3D%220%200%2022.17%2022.18%22%3E%3Cg%20data-name%3D%22Layer%202%22%3E%3Cpath%20d%3D%22M21.84%2014.6h-.52a7.86%207.86%200%200%201%200-6.25h.52a.34.34%200%200%200%200-.67h-2.85a2.63%202.63%200%200%200%20.88-1.97V2.64A2.64%202.64%200%200%200%2017.23%200H.33a.34.34%200%200%200%200%20.67H.8a8.16%208.16%200%200%201%200%207.01H.34a.34.34%200%200%200%200%20.67h2.85a2.63%202.63%200%200%200-.89%201.97c.05%201.3-.32%203.36.89%204.27A2.74%202.74%200%200%200%200%2017.23v2.3a2.64%202.64%200%200%200%202.64%202.64h16.9a.34.34%200%200%200%200-.67h-.52a7.85%207.85%200%200%201%200-6.24h2.82a.34.34%200%200%200%200-.67ZM17.86.78a1.96%201.96%200%200%201%201.34%201.85v3.07a1.96%201.96%200%200%201-1.33%201.86%209.23%209.23%200%200%201%200-6.78ZM1.53%207.68a8.73%208.73%200%200%200%20.58-1.94h12.63a.34.34%200%200%200%200-.67H2.2a8.94%208.94%200%200%200%200-1.79h10.73a.34.34%200%201%200%200-.67H2.11A8.74%208.74%200%200%200%201.53.67H17.2a9.94%209.94%200%200%200%200%207Zm1.45%204.94v-2.3a1.97%201.97%200%200%201%201.27-1.84%207.4%207.4%200%200%201%200%205.98%201.97%201.97%200%200%201-1.27-1.84Zm-1.03%208.75a1.96%201.96%200%200%201-1.28-1.83v-2.3a1.97%201.97%200%200%201%201.28-1.84%207.4%207.4%200%200%201%200%205.97Zm3.02-3.43h12.75a8.62%208.62%200%200%200%20.03%201.34H6.32a.34.34%200%201%200%200%20.67h11.53a8.44%208.44%200%200%200%20.44%201.55H2.62a8.07%208.07%200%200%200%200-6.23h15.67a8.36%208.36%200%200%200-.5%202H4.96a.34.34%200%200%200%200%20.67Zm3.14-6.92h11.92a8.6%208.6%200%200%200%20.09%201.8H6.76a.34.34%200%200%200%200%20.67h13.5a8.38%208.38%200%200%200%20.34%201.1H4.92a8.08%208.08%200%200%200%200-6.24s15.67%200%2015.68%200a8.42%208.42%200%200%200-.51%202H8.1a.34.34%200%200%200%200%20.67Z%22%20data-name%3D%22Layer%201%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")
    background-position: center
    background-repeat: no-repeat

  &__search
    width: 450px

  &__search button
    padding: 10px
    background-color: #d7d040
    width: 40px
    position: relative

    &:after
      content: ''
      background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20fill%3D%22%23fff%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20d%3D%22m27.41%2024.59-5.07-5.08A10.01%2010.01%200%201%200%204%2014a10.01%2010.01%200%200%200%2015.5%208.33l5.09%205.07a2%202%200%201%200%202.82-2.82zM7%2014a7%207%200%201%201%2014.02.02A7%207%200%200%201%207%2014z%22%2F%3E%3C%2Fsvg%3E")
      width: 20px
      height: 20px
      background-position: center
      background-repeat: no-repeat
      position: absolute
      top: 50%
      left: 50%
      margin-left: -10px
      margin-top: -10px

</style>