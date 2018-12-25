<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>

</template>

<script>
  import {mapState, mapGetters} from 'vuex';
  export default {
    name: 'HomeHeader',
    // props: {
    //   city: String
    // }

    // 通过引入mapState，使用展开运算符，将vuex中的数据city映射到一个名为city的计算属性，
    // 即可将this.$store.state.city简化为this.city
    computed: {
      ...mapState(['city']),
      // ...mapGetters(['doubleCity']),
    }
  }
</script>

<style lang="stylus" scoped>
  /*@import '../../../assets/styles/varibles.styl'*/
  /*@import '~@/assets/styles/varibles.styl'*/
  @import '~styles/varibles.styl'
  // 1rem = html font size = 50px
  .header {
    display: flex;
    line-height: $headerHeight
    background: $bgColor;
    color: #ffffff
  }

  .header-left {
    width: .64rem;
    float: left;
  }

  .back-icon {
    text-align: center;
    font-size: .4rem
  }

  .header-input {
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    margin-top: .12rem;
    margin-left: .2rem;
    padding-left: .2rem;
    background: #ffffff;
    border-radius: .1rem;
    color: #ccc
  }

  .header-right {
    min-width: 1.04rem;
    padding: 0 .1rem;
    float: right;
    text-align: center;
    color: #ffffff
  }

  .arrow-icon {
    margin-left: -.04rem;
    font-size: .24rem
  }

</style>
