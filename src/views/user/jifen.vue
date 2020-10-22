<template>
	<div>
		<van-nav-bar
		  title="我的积分记录"
		  left-text=""
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
		<div class="jf-list">
			<van-list
			  v-model="loading"
			  :finished="finished"
			  finished-text="没有更多了"
			  @load="onLoad"
			>
			  <div v-for="item in list" :key="item" :title="item" class="jf-item">
				<div class="item-left">
					<div class="item-title">
						用户签到
					</div>
					<div class="item-date">
						2020-10-22 33:34:45
					</div>
				</div>
				<div class="item-right">
					+1000
				</div>
			  </div>
			</van-list>
		</div>
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
			list: [],
			loading: false,
			finished: false,
		}
	},
	mounted() {

	},
	methods:{
		onLoad() {
		  // 异步更新数据
		  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
		  setTimeout(() => {
			for (let i = 0; i < 10; i++) {
			  this.list.push(this.list.length + 1);
			}

			// 加载状态结束
			this.loading = false;

			// 数据全部加载完成
			if (this.list.length >= 40) {
			  this.finished = true;
			}
		  }, 1000);
		},
	}
};
</script>

<style lang="scss" scoped>
.jf-item{
	background-color: #fff;
	border-bottom: 1px solid #f2f2f2;
	padding: 10px;
	padding-bottom: 8px;
	overflow: hidden;
	.item-left{
		float: left;
		.item-title{
			font-size: 15px;
		}
		.item-date{
			margin-top: 6px;
			font-size: 12px;
			color: #777;
		}
	}
	.item-right{
		float: right;
		line-height: 42px;
		color: red;
	}
}
.jf-list{
	padding: 10px;
}
</style>
