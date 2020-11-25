<template>
	<div class="coupon">
		<van-nav-bar
		  title="我的优惠券"
		  left-text=""
		   
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
		<div class="padding-head">
			
		</div>
		<van-coupon-list
			:coupons="coupons"
			:chosen-coupon="chosenCoupon"
			:disabled-coupons="disabledCoupons"
			@change="onChange"
			@exchange="onExchange"
			:show-close-button="false"
		/>
	</div>
</template>

<script>
import { Toast } from 'vant';
import { couponGethasList } from '@/api/my/coupon.js'
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};

export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			chosenCoupon: -1,
			coupons: [coupon],
			disabledCoupons: [coupon],
		}
	},
	mounted() {
		this.couponGethasList();
	},
	methods:{
		couponGethasList() {
			couponGethasList().then(res=>{
				console.log(res)
			})
		},
		onChange(index) {
			this.showList = false;
			this.chosenCoupon = index;
		},
		onExchange(code) {
			this.coupons.push(coupon);
		},
	}
};
</script>

<style lang="scss">
.coupon {
	.van-coupon-list__bottom{
		background: none !important;
	}
	.van-checkbox{
		display: none;
	}
}
</style>
