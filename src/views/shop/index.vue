<template>
	<div>
		<div class="tabbar-height"></div>
		<van-search
		  v-model="listQuery.search"
		  show-action
		  placeholder="类别/名称/积分区间/价格区间"
		  @search="onSearch"
		>
		  <template #action>
		    <div @click="onSearch">搜索</div>
		  </template>
		</van-search>
		<div class="user-panel">
			<div class="re-title">
				2000神券适用
			</div>
			<div class="jf-list">
				<ul>
					<li v-for="i in 3">
						<Item />
					</li>
				</ul>
			</div>
			
			<div class="re-title">
				1000神券适用
			</div>
			<div class="jf-list">
				<ul>
					<li v-for="i in 6">
						<Item />
					</li>
				</ul>
			</div>
			
			<div class="re-title">
				500神券适用
			</div>
			<div class="jf-list">
				<ul>
					<li v-for="i in 2">
						<Item />
					</li>
				</ul>
			</div>
		</div>
		<Tabbar />
	</div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
import Item from './components/Item.vue'
import { jifenList } from '@/api/jifen.js'
export default {
	components: {
		Tabbar,
		Item
	},
	data() {
		return {
			listQuery: {
				limit: 10,
				page: 1,
				search: ''
			}
		}
	},
	mounted() {
		this.jifenList();
	},
	methods: {
		onSearch() {
			
		},
		jifenList() {
			jifenList(this.listQuery).then(res=>{
				console.log(res)
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.jf-list{
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
.tabbar-height{
	height: 48px;
}
</style>
