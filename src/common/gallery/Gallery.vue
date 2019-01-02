<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of imgs" v-bind:key="index">
          <img class="gallery-img" v-bind:src="item"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'CommonGallery',
    props: {
      imgs: {
        type: Array,
        default: function () {
          return [];
        }
      },
    },
    data: function () {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true,
        }
      }
    },
    methods: {
      handleGalleryClick: function () {
        this.$emit('close');
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container {
    overflow: inherit
  }
  .container {
    // 定义块状容器盒子
    display: flex;
    // 项目排列方向，垂直排列，起点在上方
    flex-direction: column;
    // 项目在主轴上的对齐方式
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000
  }
  .wrapper {
    /*overflow: hidden;*/
    height: 0;
    width: 100%;
    padding-bottom: 100%;
  }
  .gallery-img {
    width: 100%;
  }
  .swiper-pagination {
    color: #ffffff;
    bottom: -1rem
  }

</style>
