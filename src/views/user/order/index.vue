<template>
	<div>
		<van-tabs v-model="active">
		  <van-tab title="全部">全部</van-tab>
		  <van-tab title="待付款">待付款</van-tab>
		  <van-tab title="申请退款">申请退款</van-tab>
		</van-tabs>
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
