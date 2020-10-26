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
	{
		path: '/product/cz/detail',
		name: 'ProductCzDetail',
		component: () => import('@/views/product/cz/detail.vue')
	},
	{
		path: '/product/ticket',
		name: 'ProductTicket',
		component: () => import('@/views/product/ticket/index.vue')
	},
	{
		path: '/product/ticket/detail',
		name: 'ProductTicketDetail',
		component: () => import('@/views/product/ticket/detail.vue')
	},
	{
		path: '/product/ticket/pay',
		name: 'ProductTicketPay',
		component: () => import('@/views/product/ticket/pay.vue')
	},
]