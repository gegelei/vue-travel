<template>
  <div>
    <div class="search">
      <input class="search-inp" type="text" placeholder="输入城市名或拼音" v-model="citySearch">
    </div>
<!--    搜索内容展示框-->
    <div class="searchContent" v-show="citySearch">
      <ul>
        <li class="search-item" v-for="item in list" :key="item.id">{{item.name}}</li>
        <li v-show="hasNoData" >没有找到匹配的数据</li>
      </ul>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    props: {
      cities: "",
    },
    data () {
      return {
        citySearch: '',
        list: [],
        timer: null,
      }
    },
    mounted() {

    },
    watch: {
      citySearch () {
        //节流函数
        if(this.timer) {
          clearTimeout(this.timer)
        }
        if(!this.citySearch) {
          this.list = [];
          return;
        }
        this.timer = setTimeout(() => {
          const result = [];
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if(value.spell.indexOf(this.citySearch) > -1 || value.name.indexOf(this.citySearch) > -1) {
                result.push(value);
              }
            })
          }
          this.list = result;
        }, 100)
      },
    },
    computed: {
      hasNoData () {
        return !this.list.length;
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@styles/varibles.styl"
  .search
    line-height .72rem
    background $bgColor
    text-align center
    padding  .1rem
    .search-inp
      box-sizing border-box
      width 100%
      height .68rem
      line-height .68rem
      color #666
      border-radius .06rem
      text-align center
      padding 0 .1rem
      /*height */
  .searchContent
    /*overflow: hidden*/
    position: absolute
    bottom: 0
    left: 0
    right: 0
    background: #efecec
    z-index: 1
    top: 1.78rem
    .search-item
      line-height .76rem
      padding-left .2rem


</style>
