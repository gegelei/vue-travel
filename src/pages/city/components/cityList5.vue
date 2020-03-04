<template>
    <div  class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom" >当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.$store.state.city}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom" >热门城市</div>
          <div class="button-list">
            <div class="button-wrapper"
                 v-for="item of hotCities"
                 :key="item.id"
                 @click="handleNowCity(item.name)"
            >
              <div class="button">
                {{item.name}}
              </div>
            </div>
          </div>
        </div>
        <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
          <div class="title border-topbottom" >{{key}}</div>
          <div class="item-list" >
            <div class="item border-bottom"  v-for="city of item" @click="handleNowCity(city.name)" >
              {{city.name}}
            </div>
          </div>
        </div>
<!--        <div class="area"  :ref="'G'" >-->
<!--          <div class=" title border-topbottom" >AA</div>-->
<!--          <div class="list" >-->
<!--            <div class="list-every border-topbottom"  >-->
<!--             BB-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: 'cityList',
    props: {
      hotCities: Array,
      cities: ''
    },
    data () {
      return {
        apl: this.$store.state.apl,
      }
    },
    methods: {
      handleNowCity (NowCity) {
        //通过store属性的dispatch方法，调用actions中的方法，来改变state中的数据
        this.$store.dispatch('changeCity', NowCity);
      }
    },
    mounted() {
      this.scroll = new BScroll (this.$refs.wrapper);
      this.scroll.scrollToElement(this.$refs['G']);

    },
    watch: {
      '$store.state.apl':function(newFlag, oldFlag){
        //todo: 点击字母，跳转对应的字母块
        // console.log(this.$refs[newFlag][0]);
        // console.log(this.$refs['G']);
        // this.scroll.scrollToElement(this.$refs['G']);

        this.scroll.scrollToElement(this.$refs[newFlag][0]);

      },
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@styles/varibles.styl"
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
