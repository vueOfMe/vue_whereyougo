<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" v-bind:key="index">
        <div class="icon" v-for="item of page" v-bind:key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" v-bind:src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
  export default {
    name: 'HomeIcons',
    props: {
      iconList: Array
    },
    data: function () {
      return {
        swiperOption: {
          autoplay: false
        }
      }
    },
    computed: {
      pages: function () {
        const pages = [];
        this.iconList.forEach((item, index) => {
          const pageNUmber = Math.floor(index / 8);
          if (!pages[pageNUmber]) {
            pages[pageNUmber] = [];
          }
          pages[pageNUmber].push(item);
        })
        return pages;
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container {
    height: 0;
    padding-bottom: 50%
  }
  // padding-bottom: 50%;实现宽高比为2:1
  .icons {
    margin-top: .2rem
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 50%
  }
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%
  }
  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .44rem;
    box-sizing: border-box;
    padding: .1rem
  }
  .icon-img-content {
    display: block;
    margin: 0 auto;
    height: 100%;
  }
  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height:.44rem;
    line-height: .44rem;
    text-align: center;
    color: $darkTextColor;
    ellipsis()
  }

</style>
