<template>
<div>
  asdf
</div>
</template>

<script>
  import axios from "axios"
    export default {
        name: "SwiperTest",
      mounted() {
          axios.get("/yunrui/api/bet/sportCategory/list?sportId=sr:sport:1").then(function (res) {
          // axios.get("http://39.97.251.51:9009/api/bet/sportCategory/list?sportId=sr:sport:1").then(function (res) {
            console.log(res.data)

          })

      }
    }
</script>

<style scoped>

</style>
