<template>
	<div class="user-panel order-item">
		<van-card
		  num="2"
		  price="2.00"
		  desc="描述信息"
		  title="商品标题"
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
