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
				name: this.$t('user.menus.addr'),
				code: '',
				icon: 'location-o',
				url: '/user/address'
			},{
				name: this.$t('user.menus.agent'),
				code: '',
				icon: 'cluster-o',
				url: '/login/agent'
			},{
				name: this.$t('user.menus.coupon'),
				code: '',
				icon: 'coupon-o',
				url: '/user/coupon'
			},{
				name: this.$t('user.menus.getVip'),
				code: '',
				icon: 'point-gift-o',
				url: '/user/luckdraw'
			},{
				name: this.$t('user.menus.wallet'),
				code: '',
				icon: 'paid',
				url: '/user/wallet'
				
			},{
				name: this.$t('user.menus.passed'),
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
				vant.Toast('您已是VIP会员');
			}else{
				this.$router.push(item.url)
			}
		}
	}
}
</script>

<style>
</style>
