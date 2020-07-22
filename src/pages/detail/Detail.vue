<template>
  <div>
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <div class="addthis_inline_share_toolbox_tu0k"></div>
    <detail-list :list="detailList"></detail-list>
    <div class="detail-content"></div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Detail-header'
  import DetailList from './components/List'

  export default {
    name: 'Home',
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data () {
      return {
        detailList: [{
          name: '成人票',
          chilren: [{ name: '一厅门票' }, { name: '二厅门票', chilren: [{ name: '二厅1门' }, { name: '二厅2门' }] }]
        },
          { name: '儿童票' },
          { name: '老人票' }]
      }
    },
    mounted () {
      this.promiseLoad('https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5f17a322b5a8cacc')
    },
    methods: {
      /* paystack处理方法库 */
      /**
       * @method  promiseLoad    使用promise加载js资源
       * @param   src            资源地址
       */
      promiseLoad (src) {
        return new Promise((resolve, reject) => {
          let script = document.createElement('script')
          script.type = 'text/javascript'
          script.src = src
          document.getElementsByTagName('head')[0].appendChild(script)
          script.onload = function () {

            resolve(true)
          }
          if (!script.onload) reject(false)
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .detail-content
    height: 50rem
    width: 100%
</style>
