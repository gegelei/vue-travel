<template>
    <div class="header">
      <div class="header-left">
        <div
          class="iconfont back-icon">&#xe604;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe641;</span>
        输入城市/景点/游玩主题
      </div>
      <router-link to ="/city">
        <div class="header-right">
          {{this.$store.state.city}}
          <span class="iconfont">&#xe6aa;</span>
        </div>
      </router-link>
    </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped lang="stylus">
  @import "~@styles/varibles.styl"
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #ffffff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex 1
      height .62rem
      line-height .62rem
      margin-top .12rem
      /*margin-bottom .12rem*/
      margin-left .2rem
      padding-left .2rem
      background #ffffff
      border-radius .1rem
      color #ccc
    .header-right
      width 1.24rem
      float right
      text-align center
      color #fff
</style>
