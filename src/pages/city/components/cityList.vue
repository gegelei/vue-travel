<template>
  <div class="citylist" ref="wrapper">
    <div>
      <div class="area">
        <div class=" title border-topbottom">当前城市</div>
        <div class="list-now">
          <div class="list-button">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom" ref="aaa" @click="haha">热门城市</div>
        <div class="list-hot">
          <div class="list-button"
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
        <div class=" title border-topbottom lt">{{key}}</div>
        <div class="list">
          <div class="list-every border-topbottom" v-for="city of item" @click="handleNowCity(city.name)">
            {{city.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {debounce} from '@/utils/index.js'

export default {
  name: 'cityList',
  props: {
    hotCities: Array,
    cities: ''
  },
  data() {
    return {
      apl: this.$store.state.apl,
      scrollArray: {}
    }
  },
  methods: {
    haha() {
      let obj = this.$refs
      let scrollArray = {}
      console.log(obj);
      console.log("wai",this)
      Object.keys(obj).forEach(function (index) {
        try {
          console.log("nei",this)
          scrollArray[index] = obj[index][0].getBoundingClientRect().top
          console.log(index, obj[index][0].getBoundingClientRect().top)
        } catch (e) {
          // console.log(e)
        }
      })
      this.scrollArray = scrollArray

    },

    handleNowCity(NowCity) {
      //通过store属性的dispatch方法，调用actions中的方法，来改变state中的数据
      this.$store.dispatch('changeCity', NowCity)
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 2
    }),

      console.log('aaa距离顶部高度', this.$refs.aaa.getBoundingClientRect().top)

    // window.addEventListener('scroll', () => {console.log('aaa距离顶部高度', this.$refs.aaa.getBoundingClientRect().top)}, true)
    //防抖函数
    // debounce(function() {
    this.scroll.on('scroll', (pos) => {
      console.log('y:', Math.abs(Math.round(pos.y)))
    })
    // },300)

    setTimeout(() => {
      this.haha();
      console.log("88", this.scrollArray)
    }, 2000)

  },
  watch: {
    '$store.state.apl': function (newFlag, oldFlag) {
      //todo: 点击字母，跳转对应的字母块
      // console.log(this.$refs[newFlag][0]);
      // console.log(this.$refs['G']);
      // this.scroll.scrollToElement(this.$refs['G']);

      this.scroll.scrollToElement(this.$refs[newFlag][0])

    },
  }
}
</script>

<style scoped lang="stylus">
  @import "~@styles/varibles.styl"

  .citylist
    line-height .44rem;
    top: 1.78rem
    left: 0
    right: 0
    bottom: 0
    overflow hidden
    position: absolute;

    .title
      background #eaeaea
      padding-left .2rem
      font-size .28rem

    .border-topbottom
      &:before
        border-color #ccc

      &:after
        border-color #ccc

    .list-hot, .list-now
      overflow hidden
      padding: .1rem
      margin-right: .2rem

      .list-button
        width 33.3%
        float left

        .button
          margin .1rem
          padding .1rem 0
          line-height .5rem
          border .01rem solid #ccc
          border-radius .06rem
          text-align center

    .list
      .list-every
        line-height .76rem
        padding-left .2rem
</style>
