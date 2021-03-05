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
		<van-tabs @click="onClick" v-model="active">
		  <van-tab :title="$t('user.orders.all')">
			  <div v-if="list.length > 0">
				  <Item v-for="i in list" :item="i" />
			  </div>
		  	  <van-empty v-else description="暂无订单" />
		  </van-tab>
		  <van-tab :title="$t('user.orders.refund')">
			  <div v-if="list.length > 0">
				  <Item v-for="i in list" :item="i" />
			  </div>
		  	  <van-empty v-else description="暂无订单" />
		  </van-tab>
		  <van-tab :title="$t('user.orders.subComm')">
			  <div v-if="list.length > 0">
				  <Item v-for="i in list" :item="i" />
			  </div>
		  	  <van-empty v-else description="暂无订单" />
		  </van-tab>
		</van-tabs>
	</div>
</template>

<script>
 
import Item from './components/Item.vue'
import { orderList } from '@/api/my/order.js'
export default {
	name: "",
	components: {
		Item
	},
	data() {
		return {
			query: {
				limit: 20,
				page: 1,
				// 'search[status]': 0
			},
			list: []
		}
	},
	mounted() {
		this.orderList();
	},
	methods:{
		orderList(e){
			var idx = '';
			
			if(e == 1){
				idx = 1;
			}
			orderList(this.query).then(res=>{
				if(res.errno == 1){
					this.list = res.data.data;
				}
			})
		},
		onClick(e) {
			this.orderList(e);
			console.log(e)
		}
	}
};
</script>

<style lang="scss" scoped>
	
</style>
