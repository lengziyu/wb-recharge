<template>
	<div>
		<van-nav-bar
		  :title="title"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		<div class="user-panel padding-head">
			<div class="content" v-if="type == 'dikou'" v-html="content">
				
			</div>
			<div class="content" v-else v-html="content2">
				
			</div>
		</div>
	</div>
</template>

<script>
import { Toast } from 'vant';
import { integralConfig } from '@/api/my/index.js'

export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			title: '',
			type: this.$route.query.type,
			content2: '* [每日签到] - 点击签到按钮即可获取 10 积分<br>	* [充值积分] - 充值成功即可获取与消费额等额积分, 每周三积分双倍<br>* [推荐关注积分] - 点击"我的分享链接"，获取独有的推荐关注二维码页面，每成功推荐一位好友关注，您和好友均可获取 100 积分<br>* [推荐首单消费] - 好友通过您的推荐关注本公众号并完成首次成功充值或购买门票，您即可获取 2000 积分奖励<br>* [推荐好友后续消费] - 您推荐的好友后续每次充值或购买门票，您均可获取100积分奖励',
			content: '* 会员积分满100 时即可选择使用积分抵扣消费额<br>* 100分抵扣 0.5 元，每笔订单最多可用 1000分<br>* 积分满20000即可成为合伙人，可按100分兑换0.5元提现'
		}
	},
	mounted() {
		this.integralConfig()
		if(this.type == 'dikou'){
			this.title = "积分抵扣规则"
		}else{
			this.title = "积分获取方式"
		}
	},
	methods:{
		integralConfig() {
			integralConfig().then(res=>{
				if(res.errno == 1){
					if(this.type == 'dikou'){
						this.content = res.use_content;
					}else{
						this.content2 = res.get_content;
					}
				}
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.content{
	background-color: #fff;
	padding: 15px 10px;
	font-size: 14px;
	line-height: 20px;
	color: #777;
}
</style>
