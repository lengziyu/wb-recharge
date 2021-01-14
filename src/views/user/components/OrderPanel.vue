<template>
	<div class="user-panel">
		<van-panel :title="$t('user.orders.title')">
		  <div class="order-item" v-for="i in list" @click="clickItem(i)">
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
				name: this.$t('user.orders.all'),
				code: '',
				icon: 'credit-pay',
			},{
				name: this.$t('user.orders.refund'),
				code: '',
				icon: 'peer-pay'
			},
			{
				name: this.$t('user.orders.subComm'),
				code: '',
				icon: 'ecard-pay'
			}
			]
		}
	},
	mounted() {
		
	},
	methods: {
		clickItem() {
			this.$router.push('/user/order')
		}
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
