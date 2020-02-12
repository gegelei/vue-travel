<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!--      <swiper-slide>-->
      <!--        <img class="swiper-img" src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/0b26e9760c2673c63c05e1efce1275ea.jpg_750x200_495c0a72.jpg">-->
      <!--      </swiper-slide>-->
      <!--      <swiper-slide>-->
      <!--        <img class="swiper-img" src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/be6871c9b0b0ffab3ef2a86fa9688677.jpg">-->
      <!--      </swiper-slide>-->
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,
        },
        swiperList: [{
          id: '1',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/0b26e9760c2673c63c05e1efce1275ea.jpg_750x200_495c0a72.jpg'
        }, {
          id: '2',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/be6871c9b0b0ffab3ef2a86fa9688677.jpg'
        },]
      }
    }
  }
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background #ffffff !important
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%

    .swiper-img
      width 100%
</style>
