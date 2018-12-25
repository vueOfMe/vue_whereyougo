import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
// import mutations from './mutations'

Vue.use(Vuex)
let defaultCity = '汉中';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  // state->actions->mutations => state->mutations
  // actions: {
  //   changeCity: function (context, city) {
  //     context.commit('changeCity', city)
  //   }
  // },
  mutations: {
    changeCity: function (state, city) {
      state.city = city;
      try {
        localStorage.city = city;
      } catch (e) {}
    }
  },
  // vuex中的getters类似于vue组件中的computed选项的作用，抽离DOM中的数据计算，
  getters: {
    doubleCity: function (state) {
      return state.city + ' ' + state.city
    }
  }
})

// 简化代码
// export default new Vuex.Store({
//   state: state,
//   mutations: mutations,
// })
