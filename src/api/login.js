import request from '@/utils/request'

// 手机注册账号
export function registerPhone(query) {
	return request({
	    url: '/v1/member/regphone',
	    method: 'POST',
		params: query
	})
}

// 手机+验证码登陆
export function loginPhone(query) {
	return request({
	    url: '/v1/login/phone',
	    method: 'POST',
		params: query
	})
}

// 手机+获取手机验证码
export function loginPhoneGetCode(query) {
	return request({
	    url: '/v1/code/phone',
	    method: 'POST',
		params: query
	})
}

// 账号密码登录
export function loginPwd(query) {
	return request({
	    url: '/v1/login',
	    method: 'POST',
		params: query
	})
}

// 退出登录
export function loginOut(query) {
	return request({
	    url: '/v1/logout',
	    method: 'GET',
		params: query
	})
}

// 邮箱注册账号
export function emailRegister(query) {
	return request({
	    url: '/v1/member/regemail',
	    method: 'GET',
		params: query
	})
}
