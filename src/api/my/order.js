import request from '@/utils/request'

// 列表
export function orderList(query) {
	return request({
	    url: '/order',
	    method: 'GET',
		params: query
	})
}