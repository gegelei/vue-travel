<template>
    <div class="icons-list" :options="swiperOption">
      <swiper >
        <swiper-slide v-for="(page, index) in pages" :key="index">
            <div class="every-icon" v-for="(item,index) in page" :key="index">
              <div class="icon-img">
                <img  class="iconimg-content" :src="item.imgurl" alt="">
              </div>
              <p class="icon-desc">{{item.desc}}</p>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

</template>

<script>
  export default {
    name: 'IconsList',
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,
        },
        iconsList: [{
          id: 1,
          imgurl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '热门景点rrrrrrrrrrrrr',
        },{
          id: 2,
          imgurl: 'https://imgs.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
          desc: '滑雪',
        },{
          id: 3,
          imgurl: 'https://imgs.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
          desc: '古北水镇',
        },{
          id: 4,
          imgurl: 'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
          desc: '故宫',
        },{
          id: 5,
          imgurl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '热门景点',
        },{
          id: 6,
          imgurl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '热门景点',
        },{
          id: 7,
          imgurl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '热门景点',
        },{
          id: 8,
          imgurl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '热门景点',
        },{
          id: 9,
          imgurl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '热门景点',
        }],
      }
    },
    computed: {
      pages () {
        const pages = [];
        this.iconsList.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if(!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }

    }
  }
</script>

<style scoped lang="stylus">
  @import "~@styles/varibles.styl"
  @import "~@styles/mixins.styl"
  .icons-list
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 50%;
    .every-icon
      position: relative;
      overflow: hidden;
      width: 25%;
      height: 0;
      padding-bottom: 25%;
      float: left;
      .icon-img
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .44rem;
        .iconimg-content
          margin: 0 auto;
          display: block;
          height: 100%;
      .icon-desc
        padding-left: .2rem;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: .44rem;
        line-height: .44rem;
        color: $icon-color;
        text-align: center;
        ellipsis();
</style>
