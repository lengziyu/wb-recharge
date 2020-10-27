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
	// 优惠券
	{
		path: '/user/coupon',
		name: 'UserCoupon',
		component: () => import('@/views/user/coupon/index.vue')
	},
	// 订单
	{
		path: '/user/order',
		name: 'UserOrder',
		component: () => import('@/views/user/order/index.vue')
	},
	{
		path: '/user/order/detail',
		name: 'UserOrderDetail',
		component: () => import('@/views/user/order/detail.vue')
	},
	// 留言板
	{
		path: '/user/message',
		name: 'UserMessage',
		component: () => import('@/views/user/message.vue')
	},
	// 认证
	{
		path: '/user/passed',
		name: 'UserPassed',
		component: () => import('@/views/user/passed/index.vue')
	},
	{
		path: '/user/passed/binding',
		name: 'UserPassedBinding',
		component: () => import('@/views/user/passed/binding.vue')
	},
	{
		path: '/user/passed/real',
		name: 'UserPassedReal',
		component: () => import('@/views/user/passed/real.vue')
	},
	// 积分记录
	{
		path: '/user/jifen',
		name: 'UserJifen',
		component: () => import('@/views/user/jifen.vue')
	},
	// 说明
	{
		path: '/user/texts',
		name: 'UserTexts',
		component: () => import('@/views/user/texts.vue')
	},
	// 
	{
		path: '/user/recommend',
		name: 'UserRecommend',
		component: () => import('@/views/user/recommend.vue')
	},
	{
		path: '/user/problem',
		name: 'UserProblem',
		component: () => import('@/views/user/problem/index.vue')
	},
	{
		path: '/user/wallet',
		name: 'UserWallet',
		component: () => import('@/views/user/wallet/index.vue')
	},
]