<template>
      <ul class="apl">
        <li class="item"
            v-for="(item,key) of cities" :key="key"
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

      }
    },
    methods: {
      handleCityClic (apl) {
        this.$store.dispatch('changeApl', apl);
      }
    },
    mounted () {
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

</style>
