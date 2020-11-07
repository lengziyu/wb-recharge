<template>
	<div>
		<van-nav-bar
		  title="门票详情"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		
		<div class="user-panel ticket-detail padding-head">
			<div class="ticket-num">
				请输入门票数量：<van-stepper v-model="ticketNum" />
			</div>
			<van-divider />
			<div class="title">
				请选择产品
			</div>
			<ul class="td-list">
				<li v-for="(i, idx) in 8" @click="clickItem(idx)" :class="current == idx?'current':''">
					Ansds Bdfee 主题乐园
				</li>
			</ul>
			
			<div class="price">
				<p>
					原价：<span class="red" style="text-decoration: line-through;">￥454</span>
				</p>
				<p>
					现价：<span class="red">￥445</span>
				</p>
			</div>
			<div>
				<img class="max" src="@/assets/images/user-head-bg.jpg" alt="">
			</div>
			
			<div class="details">
				<div class="details-title">
					使用方式：
				</div>
				<div class="details-text">
					使用电子票：付款成功后，在订单列表中查看。
				</div>
			</div>
			
			<div class="fab-btn" @click="clickPay">
				确认订单
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
			ticketNum: 1,
			current: 1
		}
	},
	mounted() {

	},
	methods:{
		clickItem(idx) {
			this.current = idx
		},
		clickPay() {
			this.$router.push('/product/ticket/pay')
		}
	}
};
</script>

<style lang="scss" scoped>
.ticket-detail{
	background-color: #fff;
	padding: 0 12px;
	padding-bottom: 30px;
	margin-bottom: 50px;
}
.ticket-num{
	padding: 20px;
	text-align: center;
	padding-bottom: 10px;
	font-size: 15px;
	.van-stepper{
		display: inline-block;
		vertical-align: middle;
	}
}
.title{
	margin-bottom: 12px;
	font-size: 14px;
}
.td-list{
	overflow: hidden;
	li{
		border: 1px solid #ddd;
		float: left;
		width: 27%;
		margin: 1.5%;
		text-align: center;
		border-radius: 6px;
		font-size: 13px;
		padding: 12px 1%;
		color: #555;
		overflow: hidden;
	}
	.current{
		background-color: #1989fa;
		color: #fff;
		border-color: #1989fa;
	}
}
.details-title{
	color: orange;
	font-size: 14px;
	margin: 12px 0;
	font-weight: 600;
}
.details-text{
	color: #666;
	font-size: 14px;
}
</style>

