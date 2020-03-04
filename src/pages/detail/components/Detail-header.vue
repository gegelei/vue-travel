<template>
  <div>
<!--    头部区域隐藏时的返回按钮-->
    <div class="detail-abs" v-show="!isShowHeader">
      <router-link to="/">
      <div class="iconfont back-icon">
        &#xe604;
      </div>
      </router-link>
    </div>
<!--    头部区域-->
    <div class="detail-header"
         v-show="isShowHeader"
         :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont back-icon">
          &#xe604;
        </div>
      </router-link>
      <div>
        景点详情
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detailHeader',
    data () {
      return {
        isShowHeader: false,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll () {
        const top = document.documentElement.scrollTop;
        // console.log(top)
        if(top > 60) {
          let opacity = top/140;
          opacity = opacity > 1 ? 1 : opacity;
          this.opacityStyle = { opacity }
          this.isShowHeader = true
        }else {
          this.isShowHeader = false
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    unmounted() {
      window.removeEventListener('scroll', this.handleScroll)

    }
  }
</script>

<style scoped lang="stylus">
  @import "~@styles/varibles.styl"
  .detail-abs
    position: fixed
    left: .2rem
    top: .2rem
    border-radius: .4rem
    height: .7rem
    line-height: .7rem
    width: .7rem
    background: rgba(0, 0, 0, .8)
    z-index: 2
    text-align: center
    .iconfont
      color: #cacaca
  .detail-header
    position: relative
    line-height $header-height
    background $bgColor
    color #ffffff
    text-align center
    font-size .32rem
    .back-icon
      position: absolute
      text-align center
      font-size .4rem
      width .64rem
      float left
      color #fff

</style>
