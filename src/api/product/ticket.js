import request from '@/utils/request'

// 获取所有门票类型列表（分页）
export function tickettype(query) {
	return request({
	    url: '/tickettype',
	    method: 'GET',
		params: query
	})
}

// 获取所有门票列表
export function ticket(query) {
	return request({
	    url: '/ticket',
	    method: 'GET',
		params: query
	})
}

// 获取一张门票信息
export function ticketDetail(query) {
	return request({
	    url: '/ticket/show',
	    method: 'GET',
		params: query
	})
}