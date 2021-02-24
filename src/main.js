import App from './App.vue'
import router from './router'
import store from '@/store'

Vue.config.productionTip = false;

// 全局变量
import '@/utils/variables'
// 全局方法
import '@/utils/util'
// 请求封装
import '@/utils/request'

// 重置样式
import 'normalize.css/normalize.css'

// VANT UI 全局
// import Vant from 'vant';
// import 'vant/lib/index.css';

import '@vant/touch-emulator';

// Vue.use(Vant);

// 国际化配置
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);
import { cn } from './langs/cn'		// 中文包
import { en } from './langs/en'		// 英文包

const i18n = new VueI18n({
    locale: store.state.lang,    // 语言标识
    messages: {
      'cn': { ...cn },   // 中文语言包
      'en': { ...en }    // 英文语言包
    }
})
// import { Locale } from 'vant';
// 引入英文语言包
// if(store.state.lang == 'en'){
// 	var enUS = require('vant/es/locale/lang/en-US')
// 	Locale.use('en-US', enUS);
// }

// rem 适配
import 'amfe-flexible';

// 输入框自定义指令
import '@/directive/form';

var vue = new Vue({
	i18n,
	store,
	router,
	render: h => h(App)
}).$mount('#app')

export default vue