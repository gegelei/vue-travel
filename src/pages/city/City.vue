<template>
    <div>
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list :cities="cities" :hotCities="hotCities"></city-list>
      <apl :cities="cities"></apl>
    </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/cityList'
  import Apl from './components/apl'
  import axios from 'axios';

  export default {
    name: 'City',
    components: {
      CityHeader,
      CitySearch,
      CityList,
      Apl,
    },
    data () {
      return {
        cities: [],
        hotCities: [],
      }
    },
    methods: {
      getCityInfo () {
        axios.get('static/mock/city.json') .then(this.handleCityInfoaSecc);
      },
      handleCityInfoaSecc (res) {
        res = res.data;
        if(res.ret && res.data) {
          this.cities = res.data.cities;
          this.hotCities = res.data.hotCities;
        }
      }
    },
    mounted () {
      this.getCityInfo();
    }
  }
</script>

<style scoped>

</style>
