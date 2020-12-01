import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
	  lang: 'cn',
  },
  mutations: {
	  setLang(state, provider) {
	  	state.lang = provider;
	  },
  },
  actions: {},
  modules: {}
});
