import request from '@/utils/request'

// 每次抽奖消耗积分数
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

// 中奖记录(分页)
export function LDluckdrawRecord(query) {
	return request({
	    url: '/vipconfig/logluckdraw',
	    method: 'GET',
		params: query
	})
}

// 获取所有奖品
export function LDluckdrawAll(query) {
	return request({
	    url: '/vipconfig/luckdraw',
	    method: 'GET',
		params: query
	})
}

// 领取实物
export function LDluckdrawGetgift(query) {
	return request({
	    url: '/vipconfig/getgift',
	    method: 'GET',
		params: query
	})
}