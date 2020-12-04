import request from '@/utils/request'

// 上传
export function upload(query) {
	return request({
	    url: '/upload',
	    method: 'POST',
		data: query,
		headers: {
			// 'Content-Type': 'multiple/form-data'
		}
	})
}