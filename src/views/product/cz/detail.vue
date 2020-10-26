<template>
	<div>
		<van-nav-bar
		  title="在线充值"
		  left-text=""
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
		<div class="user-panel-bg">
			<div class="re-title">
				请输入手机号码
			</div>
			<div class="cz-phone">
				<span class="cz-qh">+65</span>
				<span class="cz-line">|</span>
				<input type="text" placeholder="手机号码">
			</div>
			
			<van-divider />
			
			<div class="re-title">
				请选择产品
			</div>
			<div class="tabs">
				<van-tabs v-model="active">
				  <van-tab title="话费">
					  <ul>
					  	<li v-for="(i, idx1) in 5" :class="current1 == idx1?'current':''" @click="clickCurrent1(i, idx1)">
							主账户￥10
						</li>
					  </ul>
				  </van-tab>
				  <van-tab title="套餐">
					  <ul>
					  	<li v-for="(i, idx2) in 11" :class="current2 == idx2?'current':''" @click="clickCurrent2(i, idx2)">
							超值套餐
						</li>
					  </ul>
				  </van-tab>
				  <van-tab title="流量">
					  <ul>
					  	<li v-for="(i, idx3) in 8" :class="current3 == idx3?'current':''" @click="clickCurrent3(i, idx3)">
							3天10G
						</li>
					  </ul>
				  </van-tab>
				</van-tabs>
			</div>
			
			<div class="cz-say">
				<ul>
					<li>
						有效期：176天
					</li>
					<li>
						主账户：￥30
					</li>
					<li>
						红利账户：$4.5
					</li>
					<li>
						本地流量：10MB
					</li>
				</ul>
			</div>
		</div>
		
		<div class="fab-tips" @click="clickTips">
			Tips
		</div>
		
		<div class="fab-btn fab-copyright">
			<p>
				退款政策 | 粤IP43543号
			</p>
			<p>
				版权所有@深圳水电费是多少公司
			</p>
		</div>
		
		<div class="fab-btn fab-btn-wx" @click="clickPayWx">
			微信支付￥88.88
		</div>
		<div class="fab-btn" @click="clickPay">
			支付宝支付￥88.88
		</div>
	</div>
</template>

<script>
import { Toast, Dialog  } from 'vant';

export default {
	name: "",
	components: {
		Dialog
	},
	data() {
		return {
			active: 0,
			current1: 0,
			current2: 0,
			current3: 0,
		}
	},
	mounted() {

	},
	methods: {
		clickCurrent1(i, idx) {
			this.current1 = idx;
		},
		clickCurrent2(i, idx) {
			this.current2 = idx;
		},
		clickCurrent3(i, idx) {
			this.current3 = idx;
		},
		clickPayWx() {
			
		},
		clickPay() {
			
		},
		clickTips() {
			Dialog.alert({
			  title: '使用说明',
			  message: '弹窗内容',
			  theme: 'round-button',
			  confirmButtonText: '我知道了'
			}).then(() => {
			  // on close
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.user-panel-bg{
	margin-bottom: 160px;
}
.cz-phone{
	.cz-qh{
		padding-right: 20px;
	}
	.cz-line{
		padding-right: 16px;
	}
	input{
		border: none;
		border: 1px solid #ccc;
		border-radius: 6px;
		padding: 6px;
	}
}
.tabs{
	ul{
		overflow: hidden;
		margin-top: 10px;
	}
	li{
		border: 1px solid #ddd;
		float: left;
		width: 27%;
		margin: 1.5%;
		text-align: center;
		border-radius: 6px;
		font-size: 13px;
		padding: 8px 1%;
		color: #555;
		overflow: hidden;
	}
	.current{
		background-color: #1989fa;
		color: #fff;
		border-color: #1989fa;
	}
}
.cz-say{
	margin-top: 20px;
	ul{
		padding-left: 20px;
	}
	li{
		list-style: square;
		line-height: 22px;
		color: #777;
	}
}
</style>
