<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
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
          autoplay: {
            delay: 1500
          },
          loop: true,
        },
        swiperList: [{
          id: '1',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/0b26e9760c2673c63c05e1efce1275ea.jpg_750x200_495c0a72.jpg'
        }, {
          id: '2',
          imgUrl: 'http://source.qunarzz.com/site/images/wns/20200602_qunar_dujia_homepage_750x192_6.jpg'
        }, {
          id: '3',
          imgUrl: 'http://source.qunarzz.com/site/images/wns/20200608_qunar_dujia_750x192_1.jpg'
        }]
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
