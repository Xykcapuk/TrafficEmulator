import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colors: ['red', 'yellow', 'green'],
    nextColor: null,
    stepVector: 1,
  },
  mutations: {
    setNextColor(state, currentColor) {
      const currentColorIndex = state.colors.findIndex(color => color === currentColor);
      // eslint-disable-next-line max-len
      if (currentColorIndex + state.stepVector === state.colors.length || currentColorIndex + state.stepVector < 0) {
        state.stepVector *= -1;
      }
      state.nextColor = state.colors[currentColorIndex + state.stepVector];
    },
  },
  actions: {
  },
  modules: {
  }
})
