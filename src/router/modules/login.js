export default [
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/login/login.vue')
	},
	{
		path: '/login/register',
		name: 'LoginRegister',
		component: () => import('@/views/login/register.vue')
	},
	{
		path: '/login/forgetPW',
		name: 'LoginForgetPW',
		component: () => import('@/views/login/forgetPW.vue')
	},
	{
		path: '/login/agent',
		name: 'LoginAgent',
		component: () => import('@/views/login/agent.vue')
	},
]