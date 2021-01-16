<template>
	<div>
		<van-nav-bar
		  :title="$t('user.orders.title')"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		<div class="padding-head">
			
		</div>
		<van-tabs v-model="active">
		  <van-tab :title="$t('user.orders.all')">
			  <Item v-for="i in 3" />
		  </van-tab>
		  <van-tab :title="$t('user.orders.refund')">
		  		<van-empty description="暂无订单" />
		  </van-tab>
		  <van-tab :title="$t('user.orders.subComm')">
			  <Item v-for="i in 6" />
		  </van-tab>
		</van-tabs>
	</div>
</template>

<script>
import { Toast } from 'vant';
import Item from './components/Item.vue'
export default {
	name: "",
	components: {
		Item
	},
	data() {
		return {
			
		}
	},
	mounted() {

	},
	methods:{

	}
};
</script>

<style lang="scss" scoped>
	
</style>
