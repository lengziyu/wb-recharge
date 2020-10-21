<template>
	<div class="user-panel">
		<van-panel title="我的订单">
		  <div class="order-item" v-for="i in list">
			  <div class="order-icon">
				  <van-icon :name="i.icon" />
			  </div>
			  <div class="order-name">
			  		{{ i.name }}		  
			  </div>
		  </div>
		</van-panel>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list:[{
				name: '全部',
				code: '',
				icon: 'credit-pay',
			},{
				name: '代付款',
				code: '',
				icon: 'pending-payment'
			},{
				name: '申请退款',
				code: '',
				icon: 'peer-pay'
			}]
		}
	},
	mounted() {
		
	},
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>
.order-item{
	display: inline-block;
	text-align: center;
	overflow: hidden;
	width: 33.3%;
	margin-bottom: 20px;
	.order-icon{
		.van-icon{
			font-size: 26px;
		}
		margin-top: 12px;
		margin-bottom: 4px;
	}
	.order-name{
		font-size: 12px;
	}
}
</style>
