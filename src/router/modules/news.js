export default [
	{
		path: '/news',
		name: 'News',
		component: () => import('@/views/news/index.vue')
	},
	{
		path: '/news/detail',
		name: 'NewsDetail',
		component: () => import('@/views/news/detail.vue')
	},
]