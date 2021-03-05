<template>
	<div>
		<van-nav-bar
		  :title="title"
		  left-text=""
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
		<div class="padding-head">
			
		</div>
		
		<div class="user-panel user-panel-bg">
			<div class="ld-info">
				<div class="re-title">
					{{ goodsTitle }}
				</div>
				<div class="">
					名称：{{ goodsName }}
				</div>
				<div v-if="page == 'shop'">
					<div class="price">
						价格：<span class="red">
							{{ shopDetail.integral }} <span>积分</span> +  <span>￥</span>{{ shopDetail.money }}<span>元</span>
						</span>
					</div>
					<div class="price">
						数量：<span class="red">
							x {{ goodsNum }}
						</span>
					</div>
					<div class="price">
						总价：<span class="red">
							{{ shopDetail.integral*goodsNum }} <span>积分</span> +  <span>￥</span>{{ shopDetail.money*goodsNum }}<span>元</span>
						</span>
					</div>
					<div class="price ">
						是否使用积分支付：
						<span class="isUserJifen">
							<van-switch v-model="isUserJifen" size="24px" />
						</span>
					</div>
					<div class="price ">
						您的账户积分：
						<span class="red">
							{{ userInfo.integral }}
						</span>
					</div>
				</div>
				
				<div class="re-title mt-20">
					优惠券
				</div>
				<div class="ld-addr selet-coupon" @click="clickCoupon">
					<div class="ld-left">
						<div class="ld-addr-not" v-if="!couponInfo">
							暂无优惠券，去选择
						</div>
						<div class="ld-addr-info" v-else>
							<div class="ld-name">
								￥{{ couponInfo.value }}
								<span class="ld-phone">（{{ couponInfo.condition }}）</span>
								
							</div>
							<p>
								{{ couponInfo.description }}
							</p>
						</div>
					</div>
					<div class="ld-right">
						<van-icon name="arrow" />
					</div>
				</div>
				
				<div class="re-title mt-20">
					收货信息
				</div>
				<div class="ld-addr" @click="clickAddr">
					<div class="ld-left">
						<div class="ld-addr-not" v-if="!isAd">
							暂无收货地址，去添加
						</div>
						<div class="ld-addr-info" v-else>
							<div class="ld-name">
								{{ adInfo.receipt }}
								<span class="ld-phone">{{ adInfo.phone }}</span>
							</div>
							<p>
								{{ adInfo.province }}{{ adInfo.city }}{{ adInfo.county }}
								{{ adInfo.addr }}
							</p>
						</div>
					</div>
					<div class="ld-right">
						<van-icon name="arrow" />
					</div>
				</div>
			</div>
		</div>
		<div class="btn" v-if="page == 'luckdraw'">
			<van-button type="primary" @click="clickGetgift" block>{{ getBtn }}</van-button>
		</div>
		
		<div class="btn" v-if="page == 'shop'">
			<van-button type="primary" @click="clickShopPay('wx')" block>
				微信支付
			</van-button>
		</div>
		<div class="btn" v-if="page == 'shop'">
			<van-button type="info" @click="clickShopPay('ali')" block>
				支付宝支付
			</van-button>
		</div>
		<!-- 优惠券列表 -->
		<van-popup
		  v-model="showList"
		  round
		  position="bottom"
		  style="height: 90%; padding-top: 4px;"
		>
		 <van-coupon-list
		 	:coupons="coupons"
		 	:chosen-coupon="chosenCoupon"
		 	:disabled-coupons="disabledCoupons"
		 	@change="onChange"
		 	@exchange="onExchange"
		 	:show-close-button="true"
		 />
		</van-popup>
		
	</div>
</template>

<script>
import { addressList, addressInfo } from '@/api/my/address.js'
import { 
	LDluckdrawGetgift,
	} from '@/api/my/luckdraw.js'
import { jifenDetail } from '@/api/jifen.js'
import { couponGethasList } from '@/api/my/coupon.js'
import { getUserInfo } from '@/api/my/index.js'
import { createInteWx, createInteZfb } from '@/api/pay.js'
export default {
  data() {
    return {
		id: this.$route.query.id,
		adInfo: '',
		isAd: false,
		adId: this.$route.query.adId,
		goodsId: this.$route.query.goodsId,
		page: this.$route.query.page,
		goodsNum: this.$route.query.goodsNum,
		title: '',
		goodsTitle: '',
		getBtn: '',
		shopDetail: '',
		goodsName: '',
		isUserJifen: true,
		couponInfo: '',
		showList: false,
		chosenCoupon: -1,
		coupons: [],
		disabledCoupons: [],
		userInfo: '',
	}
  },
  mounted() {
	  if(this.page == 'shop'){
		this.title = '支付确认';
		this.goodsTitle = '商品信息';
		this.getBtn = '确定支付';
		this.jifenDetail();
		this.getUserInfo();
		
	  }else if(this.page == 'luckdraw'){
		this.title = '立即领取';
		this.goodsTitle = '奖品信息';
		this.getBtn = '确定领取';
		this.goodsName = this.$route.query.ldGoodsName;
	  }
	  if(this.adId){
		this.adDetail();
	  }else{
		this.adList();  
	  }
	
  },
	methods: {
		getUserInfo() {
			getUserInfo().then(userRes=>{
				if(userRes.errno == 1){
					this.userInfo = userRes.data;
				}
			})
		},
		clickCoupon() {
			this.couponGethasList();
		},
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
				
				this.showList = true;
			})
		},
		onChange(index) {
			this.couponInfo = this.coupons[index];
			this.showList = false;
			this.chosenCoupon = index;
			
			console.log(this.couponInfo)
		},
		// 积分商品详情
		jifenDetail() {
			jifenDetail({
				id: this.$route.query.goodsId,
			}).then(res=>{
				this.shopDetail = res.data;
				this.goodsName = this.shopDetail.title;
			})
		},
		clickGetgift() {
			if(!this.adInfo){
				vant.Toast('请先添加收货地址')
				return
			}
			
			this.getGift();
		},
		// 积分商品支付
		clickShopPay(payType) {
			if(!this.adInfo){
				vant.Toast('请先添加收货地址')
				return
			}
			let query = {
				product_id: this.goodsId,
				product_num: this.goodsNum,
				is_use_integral: this.isUserJifen?1:0,
				coupon_id: this.couponInfo?this.couponInfo.id:0,
				addr_id: this.adInfo.id,
			};
			if(payType == 'wx'){
				createInteWx({...query}).then(res=>{
					if(res.errno == 1){
						if(res.data.is_pay == 0){
							this.$router.push('/user/order')
						}else{
							
						}
					}
				})
			}else{
				createInteZfb({...query}).then(res=>{
					if(res.errno == 1){
						if(res.data.is_pay == 0){
							this.$router.push('/user/order')
						}else{
							
						}
					}
				})
			}
		},
		// 领取抽奖奖品
		getGift() {
			LDluckdrawGetgift({
				addr_id: this.adInfo.id,
				id: this.goodsId
			}).then(res=>{
				if(res.errno == 1){
					vant.Toast('已提交，请耐心等待收货');
					setTimeout(()=>{
						this.$router.push('/user/luckdraw')
					}, 1000)
				}
			})
		},
		// 跳转收货地址
		clickAddr() {
			this.$router.push('/user/address?f=cashier&selectAdId='+this.adId
			+'&goodsId='+this.goodsId
			+'&goodsNum='+this.goodsNum
			+'&page='+this.page
			)
		},
		// 收货地址信息
		adDetail() {
			addressInfo({
				id: this.adId,
			}).then(res=>{
				this.isAd = true;
				this.adInfo = res.data;
			}) 
		},
		// 收货地址默认地址
		adList(){
			addressList({page: 1,limit: 30}).then(res=>{
				let resList = res.data.data;
				for (var i = 0; i < resList.length; i++) {
					if(resList[i].isDefault == 1){
						this.isAd = true;
						this.adInfo = resList[i];
					}
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.ld-addr{
	overflow: hidden;
	.ld-left{
		float: left;
		width: 93%;
		font-size: 12px;
		color: #666;
		.ld-name{
			font-size: 15px;
			font-weight: bold;
			span{
				font-size: 12px;
				font-weight: 400;
			}
		}
		p{
			color: #999;
		}
	}
	.ld-right{
		float: right;
		width: 7%;
		margin-top: 10px;
		color: #777;
		text-align: center;
	}
	.ld-addr-not{
		line-height: 38px;
		font-size: 13px;
		font-weight: bold;
	}
}
.btn{
	padding-left: 13px;
	padding-right: 13px;
	border-radius: 5px;
	overflow: hidden;
}
  .price{
	  margin-top: 10px;
	  span{
	  	font-size: 12px;
	  	font-weight: 400;
	  }
	}
	.isUserJifen{
		vertical-align: middle;
	}
</style>
