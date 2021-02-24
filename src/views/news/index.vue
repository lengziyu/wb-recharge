<template>
	<div class="my-news">
		<div class="tabbar-height"></div>
		<div class="re-title">
			{{ $t('news.notifyTitle') }}
		</div>
			<van-notice-bar left-icon="volume-o" :scrollable="false">
			  <van-swipe
				vertical
				class="notice-swipe"
				:autoplay="4000"
				:show-indicators="false"
			  >
				<van-swipe-item 
				v-if="notifyList && notifyList.length > 0" 
				v-for="(i, idx) in notifyList"
				@click.native="clickNotify(i)"
				>
				{{ i.title }}
				</van-swipe-item>
			  </van-swipe>
			</van-notice-bar>

		<div class="re-title">
			{{ $t('news.problemTitle') }}
		</div>
		<van-collapse v-model="activeNames">
		  <van-collapse-item :title="a.title" :name="aidx" v-for="(a, aidx) in problemList">
			  <span v-html="a.content"></span>
		  </van-collapse-item>
		</van-collapse>
		<Tabbar />
	</div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
 
import { couponList, couponGet } from '@/api/my/coupon.js'
import { notifyList, problemList } from '@/api/news.js'
export default {
	components: {
		Tabbar
	},
	data() {
		return {
			activeNames: [],
			chosenCoupon: -1,
			coupons: [],
			disabledCoupons: [],
			notifyList: [],
			problemList: []
		}
	},
	mounted() {
		this.getNotifyList();
		this.getProblemList();
	},
	methods: {
		clickNotify(i) {
			this.$router.push('/news/detail?id='+i.id)
		},
		getNotifyList(){
			notifyList().then(nRes=>{
				if(nRes.errno == 1){
					this.notifyList = nRes.data.data;
					console.log(this.notifyList)
				}
			})
		},
		getProblemList(){
			problemList().then(nRes=>{
				if(nRes.errno == 1){
					this.problemList = nRes.data.data;
					console.log(this.problemList)
				}
			})
		},
		

	}
}
</script>

<style lang="scss" scoped>
.re-title{
	padding-top: 20px;
	padding-left: 12px;
}
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
</style>

<style lang="scss">
.my-news{
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
	.van-coupon__description{
		position: relative;
		&::before{
			position: absolute;
			top: 8px;
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
