import request from '@/utils/request'

// 编辑
export function addressEdit(query) {
	return request({
	    url: '/addr/update',
	    method: 'POST',
		params: query
	})
}

// 删除
export function addressDel(query) {
	return request({
	    url: '/addr/delete',
	    method: 'POST',
		params: query
	})
}

// 新增
export function addressAdd(query) {
	return request({
	    url: '/addr/create',
	    method: 'POST',
		data: query
	})
}

// 详情
export function addressInfo(query) {
	return request({
	    url: '/addr/show',
	    method: 'GET',
		params: query
	})
}

// 列表
export function addressList(query) {
	return request({
	    url: '/addr',
	    method: 'GET',
		params: query
	})
}