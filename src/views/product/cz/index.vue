<template>
	<div class="chongzhi">
		<van-nav-bar
		  title="预付卡充值"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>

		<van-sidebar v-model="activeKey" @change="onChange">
		  <van-sidebar-item :title="i.title_cn+i.title_en" v-for="i in list" />
		</van-sidebar>
		<div class="sidebar-content">
			<div class="sidebar-content-title">
				快速充值通道
			</div>
			<div class="cz-item" v-for="i in oList" @click="clickItem(i)">
				<img class="max" :src="i.cover_url">
			</div>
		</div>
	</div>
</template>

<script>
import { cardOperatorList, cardCountryList } from '@/api/product/cz.js'
export default {
	components: {

	},
	data() {
		return {
			activeKey: 0,
			list: [],
			oList: [],
			// {
			// 	name: '新加坡Singapore'
			// },{
			// 	name: '马来西亚Malaysia'
			// },{
			// 	name: '泰国Thailand'
			// },{
			// 	name: '印度尼西亚Indonesia'
			// },{
			// 	name: '菲律宾Philippines'
			// },{
			// 	name: '缅甸Myanmar'
			// }
		}
	},
	mounted() {
		this.cardCountryList();
	},
	methods: {
		onChange(e) {
			console.log(e)
			this.activeKey = e;
			this.cardOperatorList();
		},
		clickItem(i) {
			this.$router.push('/product/cz/detail?country_id='
			+this.list[this.activeKey].id
			+'&operator_id='+i.id
			+'&type='+i.type.join(','))
		},
		cardCountryList() {
			cardCountryList().then(res=>{
				if(res.errno == 1){
					console.log(res.data)
					this.list = res.data;
					this.cardOperatorList();
				}
			})
		},
		cardOperatorList() {
			cardOperatorList({
				'search[country_id]': this.list[this.activeKey].id,
			}).then(res=>{
				if(res.errno == 1){
					this.oList = res.data;
				}
			})
		}
	}
}
</script>

<style lang="scss">
.chongzhi{
	position: relative;
}
.chongzhi .van-sidebar{
	width: 94px !important;
	text-align: center;
	margin-top: 0px;
}
.sidebar-content{
	position: absolute;
	left: 110px;
	top: 50px;
	width: 260px;
	.sidebar-content-title{
		margin-top: 10px;
		font-size: 12px;
	}
	.cz-item{
		width: 200px;
		height: 120px;
		margin-top: 12px;
		overflow: hidden;
		img{
			vertical-align: middle;
			border-radius: 6px;
		}
	}
}
</style>
