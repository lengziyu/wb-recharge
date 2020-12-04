<template>
	<div class="user-panel">
		<van-grid :column-num="3">
		  <van-grid-item 
			v-for="value in list" 
			:key="value" 
			:icon="value.icon" 
			:text="value.name" 
			@click.native="clickItem(value)"
			/>
		</van-grid>
	</div>
</template>

<script>
export default {
	props: ['userInfo'],
	data() {
		return {
			list:[{
				name: '收货地址',
				code: '',
				icon: 'location-o',
				url: '/user/address'
			},{
				name: '加盟代理商',
				code: '',
				icon: 'cluster-o',
				url: '/login/agent'
			},{
				name: '优惠券',
				code: '',
				icon: 'coupon-o',
				url: '/user/coupon'
			},{
				name: '抽奖获VIP会员',
				code: '',
				icon: 'gem-o',
				url: '/user/luckdraw'
			},{
				name: '我的钱包',
				code: '',
				icon: 'paid',
				url: '/user/wallet'
				
			},{
				name: '个人信息认证',
				code: '',
				icon: 'passed',
				url: '/user/passed'
			}]
		}
	},
	mounted() {
		
	},
	methods: {
		clickItem(item) {
			if(item.url == '/user/luckdraw' && this.userInfo.is_vip == 1){
				Toast('您已是VIP会员');
			}else{
				this.$router.push(item.url)
			}
		}
	}
}
</script>

<style>
</style>
