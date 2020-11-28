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

export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			chosenCoupon: -1,
			coupons: [],
			disabledCoupons: [],
		}
	},
	mounted() {
		this.couponGethasList();
	},
	methods:{
		couponGethasList() {
			couponGethasList().then(re=>{
				this.coupons = [];
				this.disabledCoupons = [];
				let res = re.data;
				for (var i = 0; i < res.length; i++) {
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
					if(res[i].is_overdue == 0){
						this.coupons.push({
							startAt: res[i].valid_start_time,
							endAt: res[i].valid_end_time,
							description: res[i].content,
							name: name,
							condition: '满'+res[i].with_amount+'元可减',
							valueDesc: res[i].used_amount,
							value: res[i].used_amount,
							available: res[i].is_overdue,
							id: res[i].id,
						})
					}else{
						this.disabledCoupons.push({
							startAt: res[i].valid_start_time,
							endAt: res[i].valid_end_time,
							description: res[i].content,
							name: name,
							condition: '满'+res[i].with_amount+'元可减',
							valueDesc: res[i].used_amount,
							value: res[i].used_amount,
							available: res[i].is_overdue,
							id: res[i].id,
						})
					}
					
				}
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
