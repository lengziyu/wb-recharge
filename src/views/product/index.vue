<template>
	<div class="product">
		<div class="product-item" @click="$router.push('/product/cz')">
			<div class="product-title">
				预付卡直充
			</div>
			<div class="product-pic">
				<img class="max" src="@/assets/images/user-head-bg.jpg" alt="">
			</div>
		</div>
		<div class="product-item">
			<div class="product-title">
				特惠门票
			</div>
			<div class="product-pic">
				<img class="max" src="@/assets/images/user-head-bg.jpg" alt="">
			</div>
		</div>
		<div class="product-item">
			<div class="product-title">
				微信钱包充值
			</div>
			<div class="product-pic">
				<img class="max" src="@/assets/images/user-head-bg.jpg" alt="">
			</div>
		</div>
		<Tabbar />
	</div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
	components: {
		Tabbar
	},
	data() {
		return {
			activeKey: 0,
		}
	},
	mounted() {
		
	},
	methods: {
		onChange() {
			
		}
	}
}
</script>

<style lang="scss" scoped>
.product{
	.product-item{
		padding: 5px 20px;
		.product-title{
			line-height: 30px;
			margin-bottom: 5px;
			color: #555;
		}
		.product-pic{
			height: 140px;
			img{
				height: 100%;
				width: 100%;
				border-radius: 8px;
			}
		}
	}
}
</style>
