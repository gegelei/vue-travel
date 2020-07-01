<template>
  <ul class="apl">
    <li class="item"
        v-for="(item,key) of cities" :key="key" :class="{itemNew:key==isshow}"
        @click="handleCityClic(key)">{{key}}
    </li>


  </ul>
</template>


<script>
  export default {

    name: 'apl',
    props: {
      cities: '',
    },
    data () {
      return {
        isshow: 0
      }
    },
    methods: {
      handleCityClic (apl) {
        this.$store.dispatch('changeApl', apl)
        this.isshow = apl
      }
    },
    mounted () {
    },
    watch: {
      '$store.state.letter': function (newFlag, oldFlag) {
        console.log('old', oldFlag, 'new', newFlag)
        this.isshow = newFlag
      },
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@styles/varibles.styl"

  .apl
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    width: .4rem;
    color: #25a4bb;
    right: 0;
    bottom: 0;
    top: 1.78rem;
    text-align: center;

    .item
      line-height: .38rem;

    .itemNew
      background: #ccc


</style>
