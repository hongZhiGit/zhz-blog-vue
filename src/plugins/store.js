import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mainStyle: '',
    halfTop: 0
  },
  mutations: {
    mainStyle(state, value) {
      state.mainStyle = value;
    },
    halfTop(state, value) {
      state.halfTop = value;
    }
  },
  getters: {
    mainStyle: state => {
      return state.mainStyle;
    },
    halfTop: state => {
      return state.halfTop;
    }
  },
  actions: {

  }
});
