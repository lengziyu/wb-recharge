import request from '@/utils/request'

// 列表
export function jifenList(query) {
	return request({
	    url: '/itgproduct',
	    method: 'GET',
		params: query,
		headers: {
			'Content-Type': 'application/json'
		}
	})
}

// 详情
export function jifenDetail(query) {
	return request({
	    url: '/itgproduct/show',
	    method: 'GET',
		params: query
	})
}