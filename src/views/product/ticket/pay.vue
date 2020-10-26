<template>
	<div>
		<van-nav-bar
		  title="支付详情"
		  left-text=""
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
		<div class="user-panel">
			<div class="pay-detail">
				<van-divider />
				<div class="pay-price">
					<ul class="pp-grid">
						<li>Adfd Bdfd主题乐园</li>
						<li><span class="red">￥56.77</span></li>
						<li>1张</li>
					</ul>
				</div>
				<van-divider />
				<ul class="pp-grid">
					<li>总计：</li>
					<li><span class="red">￥56.77</span></li>
				</ul>
				
				<div class="pay-notice">
					<van-divider />
					用户须知
					<van-divider />
					
					<ul>
						<li v-for="i in 8">
							<van-icon name="success" />用户一旦购买，不可退票~
						</li>
					</ul>
				</div>
			</div>
			
			<div class="fab-btn fab-btn-wx" @click="clickPayWx">
				微信支付￥88.88
			</div>
			<div class="fab-btn" @click="clickPay">
				支付宝支付￥88.88
			</div>
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
.pay-detail{
	background-color: #fff;
	padding: 20px;
}
.pp-grid{
	overflow: hidden;
	li{
		float: left;
		width: 33.33%;
		text-align: center;
	}
}
.pay-notice{
	margin-top: 60px;
	color: #777;
	li{
		line-height: 26px;
		font-size: 12px;
	}
	.van-icon{
		vertical-align: middle;
		margin-top: -2px;
	}
}
</style>
