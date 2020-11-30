<template>
	<div>
		<van-nav-bar
		  title="VIP会员"
		  left-text=""
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
		<div class="user-panel-bg padding-head">
			<div class="vip-user">
				len，您当前是普通用户，开通会员立享优惠。
			</div>
			<div class="vip-btns">
				<ul class="td-list">
					<li v-for="(i, idx) in list" @click="clickItem(idx)" :class="current == idx?'current':''">
						{{ i.name }}
					</li>
				</ul>
			</div>
			<div class="pay-price">
				优惠价：<span class="red">￥99</span>
			</div>
			<div class="pay-notice">
				<div class="re-title">
					会员权益
				</div>
				<ul>
					<li v-for="i in 5">
						<van-icon name="success" />可享受专属优惠价格。
					</li>
				</ul>
			</div>
			
			<div class="opening">
				<van-button type="primary" size="small">立即开通</van-button>
			</div>
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
			message: '',
			list: [{
				name: '月费会员'
			},
			{
				name: '年费会员'
			}],
			current: 1
		}
	},
	mounted() {

	},
	methods:{
		clickItem(idx) {
			this.current = idx
		},
	}
};
</script>

<style lang="scss" scoped>
.vip-user{
	margin-bottom: 20px;
	font-weight: 600;
	font-weight: 14px;
}
.td-list{
	overflow: hidden;
	li{
		border: 1px solid #ddd;
		float: left;
		width: 27%;
		margin: 1.5%;
		text-align: center;
		border-radius: 6px;
		font-size: 13px;
		padding: 12px 1%;
		color: #555;
		overflow: hidden;
	}
	.current{
		background-color: #1989fa;
		color: #fff;
		border-color: #1989fa;
	}
}
.pay-price{
	margin-top: 20px;
}
.pay-notice{
	margin-top: 20px;
	margin-bottom: 20px;
	color: #777;
	li{
		line-height: 26px;
		font-size: 12px;
	}
	.van-icon{
		vertical-align: middle;
		margin-top: -2px;
	}
}
.opening{
	text-align: center;
}
</style>
