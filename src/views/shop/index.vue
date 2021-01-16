<template>
	<div>
		<div class="tabbar-height"></div>
		<van-search
		  v-model="title"
		  show-action
		  :placeholder="$t('shop.index.searchInput')"
		  @search="onSearch"
		  @clear="onClear"
		>
		  <template #action>
		    <div @click="onSearch">{{ $t('common.searchText') }}</div>
		  </template>
		  
		</van-search>
		
		<div class="user-panel">
			<div v-if="list2000.length > 0">
				<div class="re-title">
					2000 {{ $t('shop.index.title') }}
				</div>
				<div class="jf-list">
					<ul>
						<li v-for="i in list2000" @click="clickItem(i)">
							<Item :item="i" />
						</li>
					</ul>
				</div>
			</div>
			
			<div class="re-title">
				1000{{ $t('shop.index.title') }}
			</div>
			<div class="jf-list">
				<ul>
					<li v-for="i in list1000" @click="clickItem(i)">
						<Item :item="i" />
					</li>
				</ul>
			</div>
			
			<div  v-if="list500.length > 0">
				<div class="re-title">
					500{{ $t('shop.index.title') }}
				</div>
				<div class="jf-list">
					<ul>
						<li v-for="i in list500" @click="clickItem(i)">
							<Item :item="i" />
						</li>
					</ul>
				</div>
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
				limit: 20,
				page: 1,
			},
			list2000: [],
			list1000: [],
			list500: [],
			title: '',
		}
	},
	mounted() {
		this.jifenList();
	},
	methods: {
		onSearch() {
			this.jifenList();
		},
		onClear() {
			this.jifenList();
		},
		jifenList() {
			jifenList({
				...this.listQuery, 
				'search[title]': this.title,
				'search[integral]': 500
			}).then(res=>{
				this.list500 = res.data.data;
			})
			
			jifenList({...this.listQuery, 
				'search[title]': this.title,
				'search[integral]': 1000
			}).then(res=>{
				this.list1000 = res.data.data;
			})
			
			jifenList({...this.listQuery, 
				'search[title]': this.title,
				'search[integral]': 2000
			}).then(res=>{
				this.list2000 = res.data.data;
			})
		},
		clickItem(item) {
			this.$router.push('/shop/detail?id='+item.id);
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
