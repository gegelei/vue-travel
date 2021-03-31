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
          imgUrl: '/static/image/banner/1.jpg'
        }, {
          id: '2',
          imgUrl: '/static/image/banner/2.jpg'
        }, {
          id: '3',
          imgUrl: '/static/image/banner/3.jpg'
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
