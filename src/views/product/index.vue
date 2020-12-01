<template>
	<div class="product">
		<div class="tabbar-height"></div>
		<van-dropdown-menu>
		  <van-dropdown-item v-model="value1" @change="onChange" :options="option1" />
		</van-dropdown-menu>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="200">
		  <van-swipe-item>
			  <img src="@/assets/images/b2.png" alt="">
		  </van-swipe-item>
		  <van-swipe-item>
			  <img src="@/assets/images/b1.png" alt="">
		  </van-swipe-item>
		  <van-swipe-item>3</van-swipe-item>
		</van-swipe>
		<div class="product-item" @click="$router.push('/product/cz')">
			<div class="product-title">
				预付卡直充
			</div>
			<div class="product-pic">
				<img class="max" src="@/assets/images/m2.png" alt="">
			</div>
		</div>
		<div class="product-item" @click="$router.push('/product/ticket')">
			<div class="product-title">
				特惠门票
			</div>
			<div class="product-pic">
				<img class="max" src="@/assets/images/m1.png" alt="">
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
import store from '@/store'
import { mapMutations } from 'vuex'
	
export default {
	components: {
		Tabbar
	},
	data() {
		return {
			activeKey: 0,
		  value1: this.$store.state.lang,
		  option1: [
			{ text: '中文', value: 'cn' },
			{ text: 'English', value: 'en' },
		  ],
		}
	},
	mounted() {
	
	},
	methods: {
		...mapMutations(['setLang']),
		onChange(e) {
			this.setLang(e)
		}
	}
}
</script>

<style lang="scss" scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 200px;
    text-align: center;
    background-color: #39a9ed;
	img{
		width: 100%;
		height: 100%;
	}
  }
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
