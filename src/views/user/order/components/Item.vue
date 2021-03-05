<template>
	<div class="user-panel order-item">
		<van-card
		  :num="item.product_num"
		  :price="item.product_integral+'积分+'+item.product_money+'元'"
		  :desc="item.created_at"
		  :title="item.title"
		  @click.native="clickItem"
		  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
		>
		  <template #footer>
		    <van-button size="small" type="info" round>支付</van-button>
		    <van-button size="small" round>申请退款</van-button>
		  </template>
		</van-card>
	</div>
</template>

<script>

export default {
	props: ['item'],
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
		clickItem() {
			this.$router.push('/user/order/detail')
		}
	}
};
</script>

<style lang="scss">
.order-item .van-card{
	background-color: #fff !important;
	.van-card__title{
		font-size: 15px;
		line-height: 30px;
	}

}
</style>
