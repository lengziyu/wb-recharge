<template>
	<div @click="clickItem">
		<div class="jf-pic">
			<img src="//gw.alicdn.com/bao/upload/O1CN01hASekb1XE7efoSOnk_!!6000000002891-2-yinhe.png_170x10000.jpg_.webp" class="max" alt="">
		</div>
		<div class="jf-title">
			商品可用积分兑换，iphone12新机未开拆的。
		</div>
		<div class="jf-num">
			1000 <span>积分</span>
		</div>
		<div class="jf-btn">
			立即兑换
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
		clickItem() {
			this.$router.push('/shop/detail')
		}
	}
};
</script>

<style lang="scss" scoped>
		.jf-pic{
			height: 110px;
			overflow: hidden;
			text-align: center;
			// img{
			// 	width: 100%;
			// 	height: 100%;
			// }
		}
		.jf-title{
			font-size: 12px;
			margin-top: 4px;
			color: #666;
			height: 36px;
			line-height: 18px;
			overflow: hidden;
		}
		.jf-num{
			color: red;
			text-align: center;
			font-size: 16px;
			font-weight: 600;
			span{
				font-size: 12px;
				font-weight: 400;
			}
		}
		.jf-btn{
			background: red;
			color: #fff;
			text-align: center;
			font-size: 12px;
			padding: 5px 4px;
			border-radius: 4px;
			margin:4px;
		}
</style>
