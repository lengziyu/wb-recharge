import request from '@/utils/request'

// 所有产品
export function cardProductList(query) {
	return request({
	    url: '/card/product',
	    method: 'GET',
		params: query
	})
}

// 所有国家
export function cardCountryList(query) {
	return request({
	    url: '/card/country',
	    method: 'GET',
		params: query
	})
}

// 所有运营商
export function cardOperatorList(query) {
	return request({
	    url: '/card/operator',
	    method: 'GET',
		params: query
	})
}

// 根据国家id,运营商id,套餐id获取配置
export function cardRectype(query) {
	return request({
	    url: '/card/rectype/show',
	    method: 'GET',
		params: query
	})
}

// 产品详情
export function cardProductDetail(query) {
	return request({
	    url: '/card/product/show',
	    method: 'GET',
		params: query
	})
}

// 运营商详情
export function cardOperatorDetail(query) {
	return request({
	    url: '/card/operator/show',
	    method: 'GET',
		params: query
	})
}