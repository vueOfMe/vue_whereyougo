<template>
  <div>
    <div class="item" v-for="(item, index) of categoryList" v-bind:key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!--递归组件的使用-->
      <div v-if="item.children" class="item-children">
        <detail-list v-bind:categoryList="item.children"></detail-list>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'DetailList',
    props: {
      categoryList: Array
    }
  }
</script>

<style lang="stylus" scoped>

  .item-title {
    line-height: .8rem;
    font-size: .32rem;
    padding: 0 .2rem
  }

  .item-title-icon {
    position: relative;
    left: .06rem;
    top: .06rem;
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem
  }
  .item-children {
    padding: 0 .2rem
  }


</style>
