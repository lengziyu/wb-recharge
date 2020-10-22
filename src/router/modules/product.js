export default [
	{
		path: '/product',
		name: 'Product',
		component: () => import('@/views/product/index.vue')
	},
	{
		path: '/product/cz',
		name: 'ProductCz',
		component: () => import('@/views/product/cz/index.vue')
	},
]