import request from '@/utils/request'

// 手机注册账号
export function registerPhone(query) {
	return request({
	    url: '/regbyphone',
	    method: 'POST',
		params: query
	})
}

// 邮箱注册账号
export function registerEmail(query) {
	return request({
	    url: '/regbyemail',
	    method: 'POST',
		data: query
	})
}

// 手机+验证码登陆
export function loginPhone(query) {
	return request({
	    url: '/loginbyphone',
	    method: 'POST',
		params: query
	})
}

// 账号密码登录
export function loginPwd(query) {
	return request({
	    url: '/login',
	    method: 'POST',
		params: query
	})
}

// 退出登录
export function loginOut(query) {
	return request({
	    url: '/logout',
	    method: 'GET',
		params: query
	})
}

// 手机+发生手机验证码
export function loginPhoneGetCode(query) {
	return request({
	    url: '/codebyphone',
	    method: 'POST',
		params: query
	})
}

// 邮箱+发送验证码
export function emailRegister(query) {
	return request({
	    url: '/codebyemail',
	    method: 'GET',
		params: query
	})
}