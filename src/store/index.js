import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京',
    apl: 'A',
    letter: '',
  },
  actions: {
    //ctx参数是用来触发mutations中的方法的
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    },
    changeApl (ctx, apl) {
      ctx.commit('changeApl', apl)
    },
    selectLetter (ctx, letter) {
      ctx.commit('selectLetter', letter)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    },
    changeApl (state, apl) {
      state.apl = apl

    },
    selectLetter (state, letter) {
      state.letter = letter
    }
  }

})
