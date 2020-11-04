export default [
	{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "LoginPage"*/ '@/views/login/login.vue')
	},
	{
		path: '/login/register',
		name: 'LoginRegister',
		component: () => import(/* webpackChunkName: "LoginPage"*/ '@/views/login/register.vue')
	},
	{
		path: '/login/forgetPW',
		name: 'LoginForgetPW',
		component: () => import(/* webpackChunkName: "LoginPage"*/ '@/views/login/forgetPW.vue')
	},
	{
		path: '/login/agent',
		name: 'LoginAgent',
		component: () => import(/* webpackChunkName: "LoginPage"*/ '@/views/login/agent.vue')
	},
]