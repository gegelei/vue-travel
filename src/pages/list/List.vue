<template>
  <div>list</div>
</template>

<script>
  import personPb from '../../proto/protobuf/proto'

  export default {
    name: 'List',
    created () {
      var p = personPb.Person
      console.log(p)

      var payload = { name: '陈海洋', id: 1, email: '1559843332@qq.com' }

      var errMsg = p.verify(payload)
      if (errMsg)
        throw Error(errMsg)

      var message = p.create(payload) // or use .fromObject if conversion is necessary
      var buffer = p.encode(message).finish()
      console.log(buffer)
    }
  }
</script>

<style scoped>

</style>
