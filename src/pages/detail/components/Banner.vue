<template>

  <div>
    <div class="banner" @click="handleGallary()">
      <div>
        <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1809/10/10d6568ad3ad4bb5a3.img.jpg_600x330_02eafe8e.jpg" alt="">
        <div class="banner-info">
          <div class="banner-title">亚龙湾热带天堂森林公园(AAAA景区)</div>
          <div class="banner-num">
            <span class="iconfont">&#xe641;</span>
            88
          </div>
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="isShowImg" @close="handleclose()"></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from '@common/gallary/gallary'

  export default {
    name: 'banner',
    data () {
      return {
        imgs: [{imgUrl:'http://img1.qunarzz.com/sight/p0/1809/10/10d6568ad3ad4bb5a3.img.jpg_r_800x800_6eb5edf5.jpg'},
          {imgUrl:'http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_r_800x800_0ca067d7.jpg'}],
        isShowImg: false
      }
    },
    components: {
      CommonGallary,
    },
    methods: {
      handleGallary () {
        this.isShowImg = true
      },
      handleclose () {
        this.isShowImg = false

      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@styles/varibles.styl"
  .banner
    height: 0
    padding-bottom: 50%
    overflow: hidden
    position: relative
    .banner-img
      width: 100%
    .banner-info
      padding: 0 .2rem
      display: flex
      flex-wrap: nowrap
      flex: 1
      height: .7rem
      line-height: .7rem
      position: absolute
      left: 0
      reight: 0
      bottom: 0
      width: 100%
      color: #fff
      font-size: .32rem
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))
      .banner-title
        width: 70%
      .banner-num
        width: 30%
        text-align: center

</style>
