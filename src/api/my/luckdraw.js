import request from '@/utils/request'

// 获取vip配置
export function LDGetConfig(query) {
	return request({
	    url: '/vipconfig/getconfig',
	    method: 'GET',
		params: query
	})
}

// 抽奖结果
export function LDGetTackout(query) {
	return request({
	    url: '/vipconfig/tackout',
	    method: 'GET',
		params: query
	})
}