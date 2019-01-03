<template>
  <div>
    <detail-banner :sightName="sightName"
                   :bannerImg="bannerImg"
                   :galleryImgs="galleryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list v-bind:categoryList="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'
  import axios from 'axios';

  export default {
    name: 'Detail',
    components: {
      DetailBanner: DetailBanner,
      DetailHeader: DetailHeader,
      DetailList: DetailList
    },
    data: function () {
      return {
        sightName: '',
        bannerImg: '',
        galleryImgs: [],
        categoryList: []
      }
    },
    methods: {
      getDetailInfo: function () {
        axios.get('/api/detail.json', {params: {id: this.$route.params.id}})
          .then(this.getDetailInfoSuccess)
      },
      getDetailInfoSuccess: function (res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.sightName = data.sightName;
          this.bannerImg = data.bannerImg;
          this.galleryImgs = data.galleryImgs;
          this.categoryList = data.categoryList;
        }
      }
    },
    mounted: function () {
      this.getDetailInfo();
    },
    // 当使用了缓存技术（<keep-alive>）时，页面不会重新渲染，直接从内存中读取，
    // 但是有些数据却需要重新获取，不能使用原有内存中的数据，这时就可以使用vue实例的activated这个周期函数，进行相关操作，重新加载相关数据,
    // 或者直接将这个页面（组件）排除在<keep-alive>之外，具体见App.vue
    // activated: function () {
    //   // todo something
    // }
  }
</script>

<style lang="stylus" scoped>
  .content {
    height: 50rem;
  }

</style>
