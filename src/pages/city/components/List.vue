<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hotCities"
               :key="item.id"
               @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list"
             v-for="innerItem of item"
             :key="innerItem.id"
             @click="handleCityClick(innerItem.name)"
        >
          <div class="item border-bottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  // 注意：该vue实例使用了vuex的高级用法，原始写法见Search.vue
  import BScroll from 'better-scroll';
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: 'CityList',
    props: {
      cities: Object,
      hotCities: Array,
      letter: String
    },
    // 通过引入mapState，使用展开运算符，将vuex中的数据city映射到一个名为currentCity的计算属性，
    // 即可将this.$store.state.city简化为this.currentCity
    computed: {
      ...mapState({
        currentCity: 'city'
      })
    },
    methods: {
      handleCityClick: function (city) {
        // 1.state->actions->mutations => state->mutations
        // this.$store.dispatch('changeCity', city)

        // 2.将this.$store.commit('changeCity', city);简化为this.changeCity(city);
        // this.$store.commit('changeCity', city);
        this.changeCity(city);
        this.$router.push('/');
      },
      // 通过引入mapMutations，使用展开运算符，将vuex中名为changeCity的mutation映射到一个名为changeCity的方法上，
      // 进而可已将this.$store.commit('changeCity', city);简化为this.changeCity(city);
      ...mapMutations({
        changeCity: 'changeCity'
      })
    },
    // 监听父组件传递的letter的改变，如果letter不为空，则获取对应area元素，
    // 并使用scrollToElement方法，将滑动页面定位到对应位置
    watch: {
      letter: function () {
        if (this.letter) {
          const element = this.$refs[this.letter][0];
          this.scroll.scrollToElement(element);
        }
      }
    },
    // 使用$nextTick方法确保父元素wrapper和子元素的内容已经正确渲染
    mounted: function () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {click: true});
      })
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
