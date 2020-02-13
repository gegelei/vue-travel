<template>
    <div class="recommands" >
      <div class="maylike">猜你喜欢</div>
      <div class="recommand" v-for="(item, index) in recommandList" :key="item.id">
        <img class="recommand-img" :src="item.imgurl" alt="">
        <div class="rec-info">
          <p class="rec-introduction">{{item.introduction}}</p>
          <p class="rec-desc">{{item.desc}}</p>
          <button class="rec-button">查看详情</button>
        </div>
      </div>
    </div>

</template>

<script>
  export default {
    name: 'Recommand',
    data () {
      return {
        recommandList: [{
          id: 1,
          imgurl: 'https://imgs.qunarzz.com/sight/p0/1602/45/459bd3d00321a44790.water.jpg_200x200_6cd905a1.jpg',
          introduction: '景山公园',
          desc: '景山公园很漂亮景山公园很漂亮景山公园很漂亮景山公园很漂亮景山公园很漂亮景山公园很漂亮',
        },{
          id: 2,
          imgurl: 'https://imgs.qunarzz.com/sight/p0/1803/9d/9d862d8166170089a3.img.jpg_200x200_8974965b.jpg',
          introduction: '故宫',
          desc: '故宫很漂亮',
        },{
          id: 3,
          imgurl: 'https://imgs.qunarzz.com/sight/p0/1803/9d/9d862d8166170089a3.img.jpg_200x200_8974965b.jpg',
          introduction: '故宫',
          desc: '故宫很漂亮',
        },{
          id: 4,
          imgurl: 'https://imgs.qunarzz.com/sight/p0/1803/9d/9d862d8166170089a3.img.jpg_200x200_8974965b.jpg',
          introduction: '故宫',
          desc: '故宫很漂亮',
        },{
          id: 5,
          imgurl: 'https://imgs.qunarzz.com/sight/p0/1803/9d/9d862d8166170089a3.img.jpg_200x200_8974965b.jpg',
          introduction: '故宫',
          desc: '故宫很漂亮',
        }],
      }
    },
  }
</script>

<style scoped lang="stylus">
  @import "~@styles/varibles.styl"
  @import "~@styles/mixins.styl"

  .maylike
    padding-top .4rem
    padding-bottom: .4rem;
    padding-left: .2rem;
    /*background: #eaeaea;*/
  .recommand
    overflow: hidden;
    height: 1.9rem;
    display: flex;
    .recommand-img
      padding-left: .2rem;
      float: left;
      width: 1.7rem;
      height: 1.7rem;
    .rec-info
      min-width: 0;

    .rec-introduction
        margin-left: .2rem;
        margin-top: .2rem;
        margin-bottom: .2rem;
        ellipsis();
      .rec-desc
        margin-left: .2rem;
        margin-top: .2rem;
        margin-bottom: .2rem;
        color: #cacaca;
        ellipsis();
      .rec-button
        margin-left: .2rem;
        margin-bottom: .2rem;
        background: orangered;
        color: #fff;
</style>
