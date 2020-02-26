<template>
    <div class="header">
      <router-link to="/">
        <div class="iconfont back-icon">
          &#xe604;
        </div>
      </router-link>
      <div>
        城市选择
      </div>
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
