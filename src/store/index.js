import Vue from "vue";
import Vuex from "vuex";
let vm = new Vue();

Vue.use(Vuex);

	// 设置缓存
	function setStorage(key, data, type = 'sessionStorage'){
		let storeStr = JSON.stringify(data);
		return window[type].setItem(key, storeStr);
	}
	// 获取缓存
	function getStorage(key, type = 'sessionStorage') {
		return JSON.parse(window[type].getItem(key))
	}

export default new Vuex.Store({
  state: {
	  lang: getStorage('lang')?getStorage('lang'):'cn',
  },
  mutations: {
	  setLang(state, provider) {
		setStorage('lang', provider);
	  	state.lang = provider;
	  },
  },
  actions: {},
  modules: {}
});
