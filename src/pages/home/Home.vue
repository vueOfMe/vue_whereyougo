<template>
  <div>
    <!--<home-header v-bind:city="city"></home-header>-->
    <home-header></home-header>
    <home-swiper v-bind:swiperList="swiperList"></home-swiper>
    <home-icons v-bind:iconList="iconList"></home-icons>
    <home-recommend v-bind:recommendList="recommendList"></home-recommend>
    <home-weekend v-bind:weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
  import HomeHeader from './components/Header';
  import HomeSwiper from './components/Swiper';
  import HomeIcons from './components/Icons';
  import HomeRecommend from './components/Recommend';
  import HomeWeekend from './components/Weekend';
  import axios from 'axios';

  export default {
    name: 'Home',
    components: {
      HomeHeader: HomeHeader,
      HomeSwiper: HomeSwiper,
      HomeIcons: HomeIcons,
      HomeRecommend: HomeRecommend,
      HomeWeekend: HomeWeekend
    },
    data: function () {
      return {
        // city: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
      }
    },
    methods: {
      getHomeInfo: function () {
        axios.get('/api/index.json').then(this.getHomeInfoSuccess)
      },
      getHomeInfoSuccess: function (res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          // this.city = data.city;
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList
        }
        // console.log(res)
      }
    },
    mounted: function () {
      this.getHomeInfo()
    }
  }
</script>

<style scoped>

</style>
