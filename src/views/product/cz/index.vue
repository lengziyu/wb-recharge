<template>
	<div class="chongzhi">
		<van-nav-bar
		  title="预付卡充值"
		  left-text=""
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
		<van-sidebar v-model="activeKey" @change="onChange">
		  <van-sidebar-item :title="i.name" v-for="i in list" />
		</van-sidebar>
		<div class="sidebar-content">
			<div class="sidebar-content-title">
				快速充值通道
			</div>
			<div class="cz-item" v-for="i in 3" @click="clickItem">
				<img class="max" src="@/assets/images/user-head-bg.jpg" alt="">
			</div>
		</div>
	</div>
</template>

<script>

export default {
	components: {

	},
	data() {
		return {
			activeKey: 0,
			list: [{
				name: '新加坡Singapore'
			},{
				name: '马来西亚Malaysia'
			},{
				name: '泰国Thailand'
			},{
				name: '印度尼西亚Indonesia'
			},{
				name: '菲律宾Philippines'
			},{
				name: '缅甸Myanmar'
			}]
		}
	},
	mounted() {
		
	},
	methods: {
		onChange() {
			
		},
		clickItem() {
			this.$router.push('/product/cz/detail')
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
