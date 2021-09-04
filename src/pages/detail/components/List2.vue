<template>
  <div>
    <div v-for="(item,index) of list" :key="index">
      {{item.name}}
      <div v-if="item.chilren">
        <detail-list :list="item.chilren"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detailList',
    props: {
      list: Array,
    },
    data () {
      return {

      }
    },
    methods: {

    },
  }
</script>

<style scoped lang="stylus">
  @import "~@styles/varibles.styl"

</style>
