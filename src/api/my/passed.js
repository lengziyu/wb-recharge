import request from '@/utils/request'

// 绑定手机
export function bindPhone(query) {
	return request({
	    url: '/bindphone',
	    method: 'POST',
		data: query
	})
}

// 绑定手机找回密码
export function findByPhone(query) {
	return request({
	    url: '/findbyphone',
	    method: 'POST',
		params: query
	})
}

// 绑定邮箱
export function bindEmail(query) {
	return request({
	    url: '/bindemail',
	    method: 'POST',
		params: query
	})
}

// 绑定邮箱找回密码
export function findByEmail(query) {
	return request({
	    url: '/findbyemail',
	    method: 'POST',
		params: query
	})
}

// 实名认证
export function realnameAuth(query) {
	return request({
	    url: '/realnameauth',
	    method: 'POST',
		params: query
	})
}