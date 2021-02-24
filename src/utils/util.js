/*
	全局方法
	date: 2019-12-05
	create: chenguangda
*/

import router from '@/router';
import Vue from 'vue'
// import format from 'date-fns/format'

let vm = new Vue();

Vue.prototype.$utils = {
	// 跳转
	routeTo: (parmas)=>{
		return router.push(parmas);
	},
	// 返回上一页
	routeBack: ()=>{
		return router.go(-1)
	},
	// 打印
	log: (obj, type) => {
	  type = type || "log";
	  const log = JSON.parse(JSON.stringify(obj));
	  console[type](log)
	},
	// 提示
	notify: (msg, title = '提示', type = 'warning')=>{

	},
	// 设置缓存
	setStorage: (key, data, type = 'sessionStorage')=> {
		let storeStr = JSON.stringify(data);
		return window[type].setItem(key, storeStr);
	},
	// 获取缓存
	getStorage: (key, type = 'sessionStorage')=> {
		return JSON.parse(window[type].getItem(key))
	},
	// 清除缓存
	removeStorage: (key, type = 'sessionStorage')=> {
		return window[type].removeItem(key)
	},
	// 时间格式化,年月日
	// formatYMD: (date, type)=> {
	// 	if(type && type == 'ymd'){
	// 		return format(new Date(date), 'yyyy年MM月dd日');
	// 	}else{
	// 		return format(new Date(date), 'MM月dd日 HH:mm');
	// 	}
	// },
	// 是否是移动端
	isMoblie: ()=> {
		if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
			return true
		}else{
			return false
		}
	},
	// 去掉字符串最后的逗号
	removeStrComma(str) {
		if(str.charAt(str.length - 1) == ","){
			return str.substring(0, str.length-1)
		}else{
			return str
		}
	},
}