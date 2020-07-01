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
        <div class="title border-topbottom" ref="aaa" @click="handleLetter">热门城市</div>
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
      handleLetter () {
        let obj = this.$refs
        // 保存letter对象
        let letter = {}
        Object.keys(obj).forEach(function (index) {
          try {
            // console.log(index, obj[index][0].getBoundingClientRect().top)
            letter[index] = obj[index][0].getBoundingClientRect().top
          } catch (e) {
          }
        })
        console.log('letter', letter)
        this.letter = letter
      },

      handleNowCity (NowCity) {
        //通过store属性的dispatch方法，调用actions中的方法，来改变state中的数据
        this.$store.dispatch('changeCity', NowCity)
      },

      handleScrollOnAndEnd (pos) {
        let y = Math.abs(Math.round(pos.y)) + 89
        console.log('y:', y)
        let letter = this.letter
        var keys = Object.keys(letter)
        for (let j = 1; j < keys.length; j++) {
          if (y < letter[keys[0]]) {
            this.$store.dispatch('selectLetter', keys[j - 1])
            console.log('选中的字母：', keys[0])
            return
          }
          if (y > letter[keys[j - 1]] && y < letter[keys[j]]) {
            console.log('选中的字母：', keys[j - 1])
            this.$store.dispatch('selectLetter', keys[j - 1])
            return
          }
        }
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,// 出发点击事件
        probeType: 2// 派发滚动事件
      })
      // 根据元素获取高度
      // console.log('aaa距离顶部高度', this.$refs.aaa.getBoundingClientRect().top)
      // 此方法行不通
      // window.addEventListener('scroll', () => {console.log('aaa距离顶部高度', this.$refs.aaa.getBoundingClientRect().top)}, true)

      // 监听滚动事件
      this.scroll.on('scroll', (pos) => {
        // 需要用abs，否则获取的是负数
        // console.log('y:', Math.abs(Math.round(pos.y)))
        this.i = 0
        // 节流函数
        setTimeout(() => {
          this.i = this.i + 1
          if (this.i == 1) {
            this.handleScrollOnAndEnd(pos)
          }
        }, 100)
      })

      // 监听滚动结束事件
      this.scroll.on('scrollEnd', (pos) => {
        this.handleScrollOnAndEnd(pos)
      })

      // 1秒后执行handleLetter方法
      setTimeout(() => {
        this.handleLetter()
      }, 1000)

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
