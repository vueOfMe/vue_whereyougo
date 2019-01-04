// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 部分安卓手机不支持promise特性，则打开该应用会出现白屏，则需下载并引入babel-polyfill包
import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
// require styles
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
// 移动端点击事件300毫秒延迟问题的解决:安装fastclick文件，并添加下面的语句。
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { App: App },
  template: '<App/>'
})
