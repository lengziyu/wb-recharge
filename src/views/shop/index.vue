<template>
	<div>
		<div class="tabbar-height"></div>
		
		<div class="search-wrap">
			<van-popover
			  v-model="showPopover"
			  trigger="click"
			  :actions="actions"
			  @select="onSelect"
			>
			  <template #reference>
			    <span class="select-key">
					{{ currentSearch }} <van-icon name="arrow-down" />
				</span>
			  </template>
			</van-popover>
			
			<div class="search-main">
				<van-search
				  v-model="title"
				  show-action
				  :placeholder="currentSearchIdx == 0?$t('shop.index.searchInputTitle'):$t('shop.index.searchInputJifen')"
				  @search="onSearch"
				  @clear="onClear"
				>
				
				  <template #action>
				    <div @click="onSearch">{{ $t('common.searchText') }}</div>
				  </template>
				  
				</van-search>
			</div>
		</div>
		
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
			actions: [{ text: this.$t('shop.index.searchTypeTitle'), idx: 0 }, { text: this.$t('shop.index.searchTypeJifen'),idx:1 }],
			showPopover: false,
			currentSearch: this.$t('shop.index.searchTypeTitle'),
			currentSearchIdx: 0
		}
	},
	mounted() {
		this.jifenList();
	},
	methods: {
		onSelect(action) {
		  this.currentSearchIdx = action.idx;
		  this.currentSearch = action.text;
		},
		onSearch() {
			this.jifenList();
		},
		onClear() {
			this.jifenList();
		},
		jifenList() {
			
			if(this.currentSearchIdx == 1 && this.title){
				if(this.title == '500'){
					jifenList({...this.listQuery,
						'search[title]': '',
						'search[integral]': 500
					}).then(res=>{
						this.list500 = res.data.data;
						this.list1000 = [];
						this.list2000 = [];
					})
				}
				if(this.title == '1000'){
					jifenList({...this.listQuery,
						'search[title]': '',
						'search[integral]': 1000
					}).then(res=>{
						this.list1000 = res.data.data;
						this.list500 = [];
						this.list2000 = [];
					})
				}
				if(this.title == '2000'){
					jifenList({...this.listQuery,
						'search[title]': '',
						'search[integral]': 2000
					}).then(res=>{
						this.list2000 = res.data.data;
						this.list500 = [];
						this.list1000 = [];
					})
				}	
			}else{
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
			}
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
.select-key{
	display: inline-block;
	background-color: #fff;
	width: 100%;
	line-height: 48px;
	text-align: center;
	.van-icon.van-icon-arrow-down{
		color: #999;
		font-size: 10px;
	}
}
</style>
<style lang="scss">
	.search-wrap{
		overflow: hidden;
		.van-popover__wrapper{
			float: left;
			width: 20%;
		}
		.search-main{
			float: left;
			width: 80%;
		}
	}
	.van-popup{
		border-radius: 6px;
		overflow: hidden;
		left: 5px !important;
		top: 110px !important;
	}
	.van-popover__action{
		line-height: 35px;
		padding: 0 25px;
		font-size: 13px;
	}
</style>