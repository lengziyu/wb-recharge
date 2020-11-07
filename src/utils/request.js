import axios from 'axios'
import $variables from './variables'
import qs from 'qs'
import Vue from 'vue'
import router from '@/router';
import { Toast } from 'vant';

let vm = new Vue();

// create an axios instance
const service = axios.create({
  baseURL: vm.$variables.requestUrl, // api 的 base_url
  timeout: 10000,
})

// 设置请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';


// 拦截请求头
service.interceptors.request.use(
  config => {
    console.log(config)
	// config.headers['token'] = vm.$utils.getStorage('Token');
	// config.headers['lang'] = 'cn';
    if(config.method == 'POST'){
		    config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)
// 拦截实体
service.interceptors.response.use(
  response => {
	console.log(response.data)
	
	if(response.data.errno == 9999){
		Toast(response.data.msg);
		return
	}
	// else if(response.data.code === '1004') {
	// 	// vm.$utils.removeStorage('CAI-Admin-Token');
	// 	// vm.$utils.routeTo('/login?redirect='+router.history.current.fullPath);
	// }else if(response.data.code !== '200'){
		
	// }
	return response.data;

  },
  error => {
    return Promise.reject(error)
  }
)

export default service
