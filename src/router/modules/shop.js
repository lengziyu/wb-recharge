export default [
	{
		path: '/shop',
		name: 'Shop',
		component: () => import('@/views/shop/index.vue')
	},
	{
		path: '/shop/detail',
		name: 'ShopDetail',
		component: () => import('@/views/shop/detail.vue')
	},
]