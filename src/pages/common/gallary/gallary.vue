<template>
    <div class="container" @click="handleClose()">
      <div class="wrapper">
        <swiper :options="swiperOptions" >
          <!-- slides -->
          <swiper-slide v-for="(item, index) of imgs" :key="index">
            <img class="gallary-img" :src="item.imgUrl" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
<!--          <div class="swiper-scrollbar" slot="scrollbar"></div>-->
        </swiper>

      </div>
    </div>
</template>

<script>
  export default {
    name: 'gallary',
    props: {
      imgs: Array,
    },
    data () {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            type : 'fraction',
          },

            observeParents: true,
            observer: true

        }
      }
    },
    methods: {
      handleClose () {
        this.$emit('close');
      }
    }

  }
</script>

<style scoped lang="stylus">
.container >>> .swiper-container
    overflow: inherit
.container
  position: fixed
  display: flex
  flex-direction: column
  justify-content: center
  z--index: 99
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: black
  .wrapper
    width: 100%
    /*height: 0*/
    /*padding-bottom: 100%*/
    .gallary-img
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem;
</style>
