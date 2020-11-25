import request from '@/utils/request'

// 列表
export function couponList(query) {
	return request({
	    url: '/coupon',
	    method: 'GET',
		params: query
	})
}

// 已领取的优惠券列表
export function couponGethasList(query) {
	return request({
	    url: '/coupon',
	    method: 'GET',
		params: query
	})
}

// 领取
export function couponGet(query) {
	return request({
	    url: '/coupon/getcp',
	    method: 'GET',
		params: query
	})
}