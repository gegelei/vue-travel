<template>
    <div>
      <detail-header></detail-header>
      <detail-banner></detail-banner>
      <detail-list :list="detailList"></detail-list>
      <div class="detail-content"></div>
    </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Detail-header'
  import DetailList from './components/List'
  import axios from 'axios';

  export default {
    name: 'Home',
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data () {
      return {
        detailList: [{name: '成人票', chilren: [{name: '一厅门票'},{name: '二厅门票', chilren: [{name: '二厅1门'},{name: '二厅2门'}]}]},
          {name: '儿童票'},
          {name: '老人票'}]
      }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="stylus">
  .detail-content
    height: 50rem
    width: 100%
</style>
