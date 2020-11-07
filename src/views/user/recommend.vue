<template>
	<div>
		<van-nav-bar
		  title="我的个人推荐链接"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		
		<div class="user-panel tcenter recommend padding-head">
			<div class="recommend-ewm">
				<img class="max" src="@/assets/images/ewm.png" alt="">
			</div>
			<p>
				24小时在线充值，做您的充值管家！
			</p>
			<p>
				分享给好友注册、充值，可获取丰富的积分奖励哦！
			</p>
		</div>
	</div>
</template>

<script>
import { Toast } from 'vant';

export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			
		}
	},
	mounted() {

	},
	methods:{

	}
};
</script>

<style lang="scss" scoped>
.recommend-ewm{
	width: 140px;
	margin: 20px auto;
}
.recommend p{
	color: #777;
}
</style>
