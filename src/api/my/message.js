import request from '@/utils/request'

// 留言
export function messageAdd(query) {
	return request({
	    url: '/comment/add',
	    method: 'POST',
		params: query
	})
}

// 留言列表
export function messageList(query) {
	return request({
	    url: '/comment',
	    method: 'GET',
		params: query
	})
}