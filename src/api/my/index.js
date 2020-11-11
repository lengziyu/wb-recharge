import request from '@/utils/request'

// 获取用户信息
export function getUserInfo(query) {
	return request({
	    url: '/info',
	    method: 'GET',
		params: query
	})
}

// 是否已签到
export function isCheckSignin(query) {
	return request({
	    url: '/inter/checksignin',
	    method: 'GET',
		params: query
	})
}

// 签到
export function interSignin(query) {
	return request({
	    url: '/inter/signin',
	    method: 'GET',
		params: query
	})
}

// 申请代理人
export function agentAdd(query) {
	return request({
	    url: '/agent/create',
	    method: 'POST',
		params: query
	})
}

// 获取积分列表
export function interList(query) {
	return request({
	    url: '/inter',
	    method: 'GET',
		params: query
	})
}