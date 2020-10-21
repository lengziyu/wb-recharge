export default [
	{
		path: '/user',
		name: 'User',
		component: () => import('@/views/user/index.vue')
	},
	// 收货地址
	{
		path: '/user/address',
		name: 'UserAddress',
		component: () => import('@/views/user/address/index.vue')
	},
	{
		path: '/user/address/add',
		name: 'UserAddressAdd',
		component: () => import('@/views/user/address/add.vue')
	},
]