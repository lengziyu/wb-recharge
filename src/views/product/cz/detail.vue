<template>
	<div class="cz-detail">
		<van-nav-bar
		  title="在线充值"
		  left-text=""
		   
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
		<div class="user-panel-bg padding-head">
			<div class="re-title">
				请输入手机号码
			</div>
			<div class="cz-phone">
				<span class="cz-qh">+{{ info.area_code }}</span>
				<span class="cz-line">|</span>
				<input type="text" v-model="phone" placeholder="手机号码">
			</div>
			
			<van-divider />
			
			<div class="re-title">
				请选择产品
			</div>
			<div class="tabs">
				<van-tabs v-model="active" @change="onChange">
				  <van-tab title="话费" v-if="isCurrentNum('1')">
					  <ul>
					  	<li v-for="(i, idx1) in huafei" :class="current1 == idx1?'current':''" @click="clickCurrent1(i, idx1)">
							{{ i.title }}
							<span class="btn-tag btn-tag-hotsale" v-if="i.tag == 1">
								热销
							</span>
							<span class="btn-tag btn-tag-miao" v-else-if="i.tag == 2">
								秒杀
							</span>
							<span class="btn-tag btn-tag-new" v-else-if="i.tag == 3">
								新品
							</span>
						</li>
					  </ul>
				  </van-tab>
				  <van-tab title="套餐" v-if="isCurrentNum('2')">
					  <ul>
					  	<li v-for="(i, idx2) in taocan" :class="current2 == idx2?'current':''" @click="clickCurrent2(i, idx2)">
							{{ i.title }}
							<span class="btn-tag btn-tag-hotsale" v-if="i.tag == 1">
								热销
							</span>
							<span class="btn-tag btn-tag-miao" v-else-if="i.tag == 2">
								秒杀
							</span>
							<span class="btn-tag btn-tag-new" v-else-if="i.tag == 3">
								新品
							</span>
						</li>
					  </ul>
				  </van-tab>
				  <van-tab title="流量" v-if="isCurrentNum('3')">
					  <ul>
					  	<li v-for="(i, idx3) in liuliang" :class="current3 == idx3?'current':''" @click="clickCurrent3(i, idx3)">
							{{ i.title }}
							<span class="btn-tag btn-tag-hotsale" v-if="i.tag == 1">
								热销
							</span>
							<span class="btn-tag btn-tag-miao" v-else-if="i.tag == 2">
								秒杀
							</span>
							<span class="btn-tag btn-tag-new" v-else-if="i.tag == 3">
								新品
							</span>
						</li>
					  </ul>
				  </van-tab>
				</van-tabs>
			</div>
			
			<div class="cz-say" v-html="activeContent">

			</div>
		</div>
		
		<div class="fab-tips" @click="clickTips">
			Tips
		</div>
		<Paytype />
		<div class="fab-copyright">
			<p>
				退款政策 | 粤IP43543号
			</p>
			<p>
				版权所有@深圳水电费是多少公司
			</p>
		</div>
		
		
		
<!-- 		<div class="fab-btn fab-btn-wx" @click="clickPayWx">
			微信支付￥88.88
		</div>
		<div class="fab-btn" @click="clickPay">
			支付宝支付￥88.88
		</div> -->
	</div>
</template>

<script>
import { cardRectype, cardProductList } from '@/api/product/cz.js'
import Paytype from '@/components/PayType.vue'

export default {
	name: "",
	components: {
		Paytype
	},
	data() {
		return {
			active: 0,
			current1: 0,
			current2: 0,
			current3: 0,
			country_id: this.$route.query.country_id,
			operator_id: this.$route.query.operator_id,
			type: this.$route.query.type,
			info: '',
			huafei: [],
			taocan: [],
			liuliang: [],
			activeContent: '',
			phone: ''
		}
	},
	mounted() {
		this.cardRectype();
	},
	methods: {
		isCurrentNum(num){
			if(this.type.indexOf(num) != -1){
				return true
			}else{
				return false
			}
		},
		onChange() {
			this.cardRectype();
		},
		cardRectype() {
			cardRectype({
				'search[country_id]': this.country_id,
				'search[operator_id]': this.operator_id,
				'search[type]': this.type.split(',')[this.active],
			}).then(res=>{
				this.info = res.data;
				this.cardProductList(res.data.id, this.type.split(',')[this.active]);
			})
		},
		cardProductList(id, type) {
			cardProductList({
				'search[rec_type_id]': id
			}).then(res=>{
				console.log(res)
				if(type == '1'){
					this.huafei = res.data.data;
					this.activeContent = this.huafei[this.current1]?this.huafei[this.current1].content:'';
				}else if(type == '2') {
					this.taocan = res.data.data;
					this.activeContent = this.taocan[this.current2]?this.taocan[this.current2].content:'';
				}else if(type == '3') {
					this.liuliang = res.data.data;
					this.activeContent = this.liuliang[this.current3]?this.liuliang[this.current3].content:'';
				}
			})
		},
		clickCurrent1(i, idx) {
			this.current1 = idx;
			this.activeContent = i.content?i.content:'';
		},
		clickCurrent2(i, idx) {
			this.current2 = idx;
			this.activeContent = i.content?i.content:'';
		},
		clickCurrent3(i, idx) {
			this.current3 = idx;
			this.activeContent = i.content?i.content:'';
		},
		clickPayWx() {
			
		},
		clickPay() {
			if(!this.info.regx_string.test(this.phone)){
				vant.Toast('请输入正确的手机号')
			}
		},
		clickTips() {
			vant.Dialog.alert({
			  title: '使用说明',
			  message: '弹窗内容',
			  theme: 'round-button',
			  confirmButtonText: '我知道了'
			}).then(() => {
			  // on close
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.cz-detail{
	position: relative;
}
.user-panel-bg{
	margin-bottom: 70px;
}
.cz-phone{
	.cz-qh{
		padding-right: 8px;
	}
	.cz-line{
		padding-right: 16px;
	}
	input{
		border: none;
		border: 1px solid #ccc;
		border-radius: 6px;
		padding: 6px;
	}
}
.tabs{
	ul{
		overflow: hidden;
		margin-top: 10px;
		padding-top: 14px;
	}
	li{
		border: 1px solid #ddd;
		float: left;
		width: 27%;
		margin: 1.5%;
		text-align: center;
		border-radius: 6px;
		font-size: 13px;
		padding: 8px 1%;
		color: #555;
		// overflow: hidden;
		position: relative;
	}
	.current{
		background-color: #1989fa;
		color: #fff;
		border-color: #1989fa;
	}
}
.cz-say{
	margin-top: 20px;
	ul{
		padding-left: 20px;
	}
	li{
		list-style: square;
		line-height: 22px;
		color: #777;
	}
}
</style>
