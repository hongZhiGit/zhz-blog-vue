import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mainStyle: ''
  },
  mutations: {
    mainStyle(state, value) {
      state.mainStyle = value;
    }
  },
  getters: {
    mainStyle: state => {
      return state.mainStyle;
    }
  },
  actions: {

  }
});
