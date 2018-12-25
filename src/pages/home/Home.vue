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
  import {mapState} from 'vuex'

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
        lastCity: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
      }
    },
    computed: {
      ...mapState({
        city: 'city'
      })
    },
    methods: {
      getHomeInfo: function () {
        axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSuccess)
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
      this.lastCity = this.city;
      this.getHomeInfo();
    },
    // 当使用了缓存技术（<keep-alive>）时，页面不会重新渲染，直接从内存中读取，
    // 但是有些数据却需要重新获取，不能使用原有内存中的数据，这时就可以使用vue实例的activated这个周期函数，进行相关操作，重新加载相关数据
    activated: function () {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city;
        this.getHomeInfo();
      }
    }
  }
</script>

<style scoped>

</style>
