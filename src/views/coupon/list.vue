<template>
	<div class="coupon-list">
		<van-nav-bar
		  title="优惠券列表"
		  left-text=""
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
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
	</div>
</template>

<script>
import { Toast,Badge } from 'vant';
import { couponList, couponGet } from '@/api/my/coupon.js'
export default {
	
	data() {
		return {
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
		couponList() {
			couponList({
				
			}).then(re=>{
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
	}
}
</script>

<style lang="scss">
.coupon-list{
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
