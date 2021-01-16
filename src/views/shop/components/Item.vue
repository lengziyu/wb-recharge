<template>
	<div>
		<div class="jf-pic">
			<img :src="item.product_img" class="max" alt="">
		</div>
		<div class="jf-title">
			{{ item.title }}
		</div>
		<div class="jf-num">
			{{ item.integral }} <span>积分</span>
		</div>
		<div class="jf-btn">
			{{ $t('common.btnDuihuan') }}
		</div>
	</div>
</template>

<script>
import { Toast } from 'vant';

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

	}
};
</script>

<style lang="scss" scoped>
		.jf-pic{
			height: 80px;
			overflow: hidden;
			text-align: center;
			img{
				width: 100%;
				height: 100%;
			}
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
