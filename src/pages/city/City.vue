<template>
  <div>
    <city-header></city-header>
    <city-search v-bind:cities="cities"></city-search>
    <city-list v-bind:cities="cities" v-bind:hotCities="hotCities" v-bind:letter="letter"></city-list>
    <city-alphabet v-bind:cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
  import axios from 'axios'
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  export default {
    name: 'City',
    components: {
      CityHeader: CityHeader,
      CitySearch: CitySearch,
      CityList: CityList,
      CityAlphabet: CityAlphabet
    },
    data: function () {
      return {
        cities: {},
        hotCities: [],
        letter: ''
      }
    },
    methods: {
      getCityInfo: function () {
        axios.get('/api/city.json').then(this.getCityInfoSuccess)
      },
      getCityInfoSuccess: function (res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.cities = data.cities;
          this.hotCities = data.hotCities;
        }
      },
      handleLetterChange: function (letter) {
        this.letter = letter;
      }
    },
    mounted: function () {
      this.getCityInfo();
    }
  }
</script>

<style lang="stylus" scoped>

</style>
