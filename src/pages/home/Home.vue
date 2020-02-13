<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <icons-list></icons-list>
      <recommand></recommand>
    </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import IconsList from './components/icons-list'
  import Recommand from './components/Recommand'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      IconsList,
      Recommand,
    }
  }
</script>

<style scoped>

</style>
