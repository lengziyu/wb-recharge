import request from '@/utils/request'

// 积分商品-微信支付
export function createInteWx(query) {
	return request({
	    url: '/createintegralorderbywx',
	    method: 'POST',
		data: query,
	})
}

// 积分商品-支付宝支付
export function createInteZfb(query) {
	return request({
	    url: '/createintegralorderbyzfb',
	    method: 'POST',
		data: query,
	})
}