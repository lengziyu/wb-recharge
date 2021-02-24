<template>
	<div>
		<van-nav-bar
		  title="特惠门票"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		<div class="banner padding-head">
			<img class="w100" src="@/assets/images/b1.png" alt="">
		</div>
		
		<van-search
		  v-model="search"
		  show-action
		  placeholder="请输入标题"
		  @search="onSearch"
		  @clear="onClear"
		>
		  <template #action>
		    <div @click="onSearch">搜索</div>
		  </template>
		  
		</van-search>
		
		
		<div class="user-panel">
			<div v-if="list.length > 0">
				<div class="re-title">
					点击以下列表查看详情
				</div>
				<div class="tk-list">
					<ul>
						<li v-for="i in list" @click="clickItem(i)">
							<Item :item="i" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
 
import { tickettype } from '@/api/product/ticket.js'
import Item from './components/Item.vue'
export default {
	name: "",
	components: {
		Item
	},
	data() {
		return {
			list: '',
			listQuery: {
				limit: 20,
				page: 1,
			},
			search: '',
			list2000: [],
			list1000: [],
			list500: [],
			
		}
	},
	mounted() {
		this.tickettype();
	},
	methods:{
		clickItem(i) {
			this.$router.push('/product/ticket/detail?id='+i.id)
		},
		onSearch() {
			this.tickettype();
		},
		onClear() {
			this.tickettype();
		},
		tickettype() {
			tickettype({
				...this.listQuery,
				'search[title]': this.search,
			}).then(res=>{
				if(res.errno == 1){
					this.list = res.data.data;
				}
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.da-list{
	.da-title{
		margin-bottom: 10px;
		color: red;
	}
	.da-list-wrap{
		border-radius: 6px;
		overflow: hidden;
	}
	// .da-item{
	// 	background-color: #fff;
	// 	padding: 12px;
	// 	border-bottom: 1px solid #f2f2f2;
	// 	overflow: hidden;
	// 	.da-item-pic{
	// 		float: left;
	// 		width: 80px;
	// 		height: 50px;
	// 		overflow: hidden;
	// 		margin-right: 10px;
	// 	}
	// 	.da-item-info{
	// 		font-size: 14px;
	// 		color: #555;
	// 		.da-item-info-btn{
	// 			color: red;
	// 			margin-top: 6px;
	// 			font-size: 13px;
	// 		}
	// 	}
	// }
}
	.tk-list{
		ul{
			overflow: hidden;
			margin-bottom: 10px;
		}
		ul > li{
			float: left;
			width: 29.33%;
			background-color: #fff;
			border-radius: 8px;
			overflow: hidden;
			padding: 1%;
			margin: 1%;
		}
	}
</style>
