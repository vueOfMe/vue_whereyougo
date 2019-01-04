<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg"/>
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number banner-icon">
          <span class="iconfont arrow-icon">&#xe692;</span>
          {{this.galleryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery
        v-bind:imgs="galleryImgs"
        v-show="showGallery"
        @close="handleGalleryClose"
      ></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
  // import CommonGallery from 'src/common/gallery/Gallery'
  // common alias -> src/common
  import CommonGallery from 'common/gallery/Gallery'
  import FadeAnimation from 'common/fade/FadeAnimation'

  export default {
    name: 'DetailBanner',
    props: {
      sightName: String,
      bannerImg: String,
      galleryImgs: Array
    },
    data: function () {
      return {
        showGallery: false,
      }
    },
    components: {
      CommonGallery: CommonGallery,
      FadeAnimation: FadeAnimation
    },
    methods: {
      handleBannerClick: function () {
        this.showGallery = true;
      },
      handleGalleryClose: function () {
        this.showGallery = false;
      }
    }
  }
</script>

<style scoped>
  .banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55.5%;
  }
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    color: #ffffff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  }
  .banner-title {
    flex: 1;
    font-size: .32rem;
    padding: 0 .2rem;
  }
  .banner-number {
    padding: 0 .32rem;
    height: .32rem;
    margin-top: .14rem;
    line-height: .4rem;
    border-radius: .2rem;
    background: rgba(0, 0, 0, 0.8);
    font-size: .24rem;
  }
  .banner-icon {
    font-size: .24rem;
  }

</style>
