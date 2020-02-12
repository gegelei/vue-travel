<template>
    <div class="header">
      <div class="header-left">返回</div>
      <div class="header-input">内容城市/景点/游玩主题</div>
      <div class="header-right">城市</div>
    </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped lang="stylus">
  .header
    display flex
    line-height .86rem
    background #00bcd4
    color #ffffff
    .header-left
      width .64rem
      float left
    .header-input
      flex 1
      height .62rem
      line-height .62rem
      margin-top .12rem
      /*margin-bottom .12rem*/
      margin-left .2rem
      background #ffffff
      border-radius .1rem
      color #ccc
    .header-right
      width 1.24rem
      float right
      text-align center

</style>
