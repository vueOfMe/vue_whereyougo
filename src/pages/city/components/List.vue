<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
          <div class="item border-bottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: 'CityList',
    props: {
      cities: Object,
      hotCities: Array
    },
    mounted: function () {
      this.scroll = new BScroll(this.$refs.wrapper)
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom {
    &:before {
      border-color: #ccc;
    }

    &:after {
      border-color: #ccc;
    }
  }

  .border-bottom {
    &:after {
      border-color: #ccc;
    }
  }

  .list {
    overflow: hidden;
    position: absolute;
    // 将对应页面头部一定高度区域排除在外，超出部分隐藏起来，加入滑动控件，控制对应区域的滑动
    top: 1.58rem;
    right: 0;
    bottom: 0;
    left: 0;
    /*background: red;*/
  }

  .title {
    line-height: .54rem;
    padding-left: .2rem;
    background: #eee;
    color: #666;
    font-size: .26rem;
  }

  .button-list {
    // 与子元素button-wrapper的float配合使用，触发其bfc
    overflow: hidden;
    padding: .1rem .6rem .1rem .1rem;
  }

  .button-wrapper {
    float: left;
    width: 33.33%;
  }

  .button {
    padding: .1rem 0;
    margin: .1rem;
    text-align: center;
    border: .02rem solid #ccc;
    border-radius: .06rem;
  }

  .item-list .item {
    line-height: .76rem;
    padding-left: .2rem;
  }

</style>
