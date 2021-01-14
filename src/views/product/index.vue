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
		
		<div class="re-title">
			优惠券
			<span class="coupon-more" @click="couponMore">查看更多</span>
		</div>
		<div>
			<!-- <img class="max" src="@/assets/images/q1.png" alt=""> -->
			
			<van-coupon-list
				:coupons="coupons"
				:chosen-coupon="chosenCoupon"
				:disabled-coupons="disabledCoupons"
				:show-close-button="false"
				:exchange-button-disabled="true"
				:show-exchange-bar="false"
				:editable="false"
				@change="change"
			/>
			
		</div>
		
		<div class="product-item" @click="$router.push('/product/cz')">
			<div class="product-pic">
				<img class="max" src="@/assets/images/m2.png" alt="">
			</div>
		</div>
		<div class="product-item" @click="$router.push('/product/ticket')">
			<div class="product-pic">
				<img class="max" src="@/assets/images/m1.png" alt="">
			</div>
		</div>
		<div class="product-item">
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
import { couponList, couponGet } from '@/api/my/coupon.js'
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
		  activeNames: [],
		  chosenCoupon: -1,
		  coupons: [],
		  disabledCoupons: [],
		}
	},
	mounted() {
		this.couponList();
	},
	methods: {
		...mapMutations(['setLang']),
		onChange(e) {
			this.setLang(e)
			this.$i18n.locale = e
		},
		couponList() {
			couponList({
				
			}).then(re=>{
				this.coupons = [];
				this.disabledCoupons = [];
				let res = re.data;
				for (var i = 0; i < 2; i++) {
					var name = '使用场景：';
					if(res[i].used == 0){
						name += '所有场景'
					}else if(res[i].used == 1) {
						name += '积分商城'
					}else if(res[i].used == 2) {
						name += '门票'
					}else if(res[i].used == 3) {
						name += '话费'
					}
					console.log(this.coupons)
					this.coupons.push({
						startAt: res[i].valid_start_time,
						endAt: res[i].valid_end_time,
						description: res[i].content,
						name: name,
						condition: '满'+res[i].with_amount+'元可减',
						valueDesc: res[i].used_amount,
						value: res[i].used_amount,
						id: res[i].id,
					})
				}
			})
		},
		// 领取优惠券
		change(idx) {
			couponGet({
				coupon_id: this.coupons[idx].id
			}).then(res=>{
				if(res.errno == 1){
					Toast('领取成功！')
				}
			})
		},
		couponMore() {
			this.$router.push('/coupon/list')
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
.re-title{
	padding-top: 20px;
	padding-left: 12px;
	margin-bottom: 0;
	overflow: hidden;
	.coupon-more{
		float: right;
		padding-right: 12px;
		font-size: 12px;
		color: #999;
		line-height: 18px;
	}
}
</style>

<style lang="scss">
.product{
	.van-coupon-list{
		background-color: #f2f2f2;
		.van-checkbox.van-coupon__corner{
			display: none !important;
		}
	}
	.van-coupon-list .van-tabs__wrap{
		display: none !important;
	}
	.van-coupon-list__list{
		height: auto !important;
		padding-bottom: 0 !important;
	}
	.van-coupon-list__bottom{
		display: none;
	}
	.van-coupon-list__empty{
		padding-top: 0 !important;
	}
	.van-coupon__description{
		position: relative;
		padding-top: 12px;
		&::before{
			position: absolute;
			top: 5px;
			right: 12px;
			content: '立即领取';
			background-color: #ee0a24;
			width: 80px;
			color: #fff;
			text-align: center;
			border-radius: 8px;
			line-height: 25px;
			height: 25px;
			font-weight: 900;
		}
	}
}
</style>