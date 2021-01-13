import request from '@/utils/request'

// 公告列表
export function notifyList(query) {
	return request({
	    url: '/notify',
	    method: 'GET',
		params: query,
	})
}

// 公告详情
export function notifyDetail(query) {
	return request({
	    url: '/notify/show',
	    method: 'GET',
		params: query,
	})
}

// 常见问题
export function problemList(query) {
	return request({
	    url: '/problem',
	    method: 'GET',
		params: query,
	})
}