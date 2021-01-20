import request from '@/utils/request'

// 首页banner轮播图
export function carousel(query) {
	return request({
	    url: '/carousel',
	    method: 'GET',
		params: query
	})
}

// 首页banner轮播图下产品banner
export function prodconfig(query) {
	return request({
	    url: '/prodconfig',
	    method: 'GET',
		params: query
	})
}

