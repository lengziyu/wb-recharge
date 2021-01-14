<template>
	<div>
		<van-nav-bar
		  title="我的订单"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		<div class="padding-head">
			
		</div>
		<van-tabs v-model="active">
		  <van-tab title="全部">
			  <Item v-for="i in 3" />
		  </van-tab>
		  <van-tab title="申请退款">
		  			<van-empty description="暂无订单" />
		  </van-tab>
		  <van-tab title="分佣奖励">
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
