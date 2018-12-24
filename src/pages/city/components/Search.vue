<template>
  <div>
    <div class="search">
      <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: 'CitySearch',
    props: {
      cities: Object
    },
    data: function () {
      return {
        keyword: '',
        list: [],
        timer: null
      }
    },
    computed: {
      hasNoData: function () {
        return !this.list.length;
      }
    },
    watch: {
      keyword: function () {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = [];
          return
        }
        this.timer = setTimeout(() => {
          const result = [];
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result;
        }, 100)
      }
    },
    // 使用$nextTick方法确保父元素wrapper和子元素的内容已经正确渲染
    mounted: function () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.search, {});
      })
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search {
    height: .72rem;
    padding: 0 .1rem;
    background: $bgColor
  }
  .search-content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    left: 0;
    background: #eee;
  }
  .search-item {
    line-height: .62rem;
    padding-left: .2rem;
    color: #666;
    background: #ffffff
  }
  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: .62rem;
    padding: 0 .1rem
    line-height: .62rem;
    text-align: center;
    color: #666;
    border-radius: .06rem;
  }

</style>
