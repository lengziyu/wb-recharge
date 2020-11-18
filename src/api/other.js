import request from '@/utils/request'

// 上传
export function upload(query) {
	return request({
	    url: '/upload',
	    method: 'POST',
		data: query
	})
}