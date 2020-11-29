
Vue.prototype.$variables = {
	// 环境接口url
	requestUrl: process.env.VUE_APP_REQUEST_URL,
	// 环境标识
	currentEnv: process.env.VUE_APP_URL,
	listLoadText: '加载中',
	listLoadNothing: '这里空空如也，什么都没有~', 
	listLoadSearchNothing: '没有查询到搜索内容', 
	listLoadNotMore: '没有更多了',
	refreshText: '下拉刷新',
	refreshReadyText: '释放刷新',
	refreshingText: '正在刷新',
	refreshedText: '刷新完成',
	routeBase: '/recharge',
	sendCodeTime: 10000,
}
