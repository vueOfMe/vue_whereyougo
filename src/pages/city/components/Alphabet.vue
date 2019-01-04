<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item" :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick">
      {{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props: {
      cities: Object
    },
    computed: {
      letters: function () {
        const letters = [];
        // i即就是cities中每个对象的key，即就是A、B、C、D...
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters;
      }
    },
    data: function () {
      return {
        touchStatus: false,
        startY: 0,
        timer: null,
      }
    },
    updated: function () {
      this.startY = this.$refs['A'][0].offsetTop;
    },
    methods: {
      handleLetterClick: function (e) {
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart: function () {
        this.touchStatus = true;
      },
      handleTouchMove: function (e) {
        // 79为城市选择与城市输入框的累计高度
        // 20为右侧字母列单个字母区元素占据的高度
        if (this.touchStatus) {
          // 每过16毫秒，中断函数执行，以提高代码性能
          if (this.timer) {
            clearTimeout(this.timer);
          }
          this.timer = setTimeout(() => {
            // const startY = this.$refs['A'][0].offsetTop;
            const touchY = e.touches[0].clientY - 79;
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)
        }
      },
      handleTouchEnd: function () {
        this.touchStatus = false;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    /*background: red;*/
  }
  .item {
    line-height: .4rem;
    text-align: center;
    color: $bgColor;
  }

</style>
