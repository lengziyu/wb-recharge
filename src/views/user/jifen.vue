<template>
	<div>
		<van-nav-bar
		  title="我的积分记录"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		<div class="jf-list padding-head">
				<van-list
				  v-model="loading"
				  :finished="finished"
				  finished-text="没有更多了"
				  @load="onLoad"
				>
				  <div v-for="item in list" :key="item" :title="item" class="jf-item">
					<div class="item-left">
						<div class="item-title">
							{{ item.type }}
						</div>
						<div class="item-date">
							{{ item.created_at }}
						</div>
					</div>
					<div class="item-right">
						{{ item.algorithm }}{{ item.integral }}
					</div>
				  </div>
				</van-list>
				
				<van-empty v-if="total === 0" description="暂无数据" />
		</div>
		
	</div>
</template>

<script>
import { Toast } from 'vant';
import { interList } from '@/api/my/index.js'
export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			list: [],
			loading: false,
			finished: false,
			refreshing: false,
			listQuery: {
				limit: 10,
				page: 1
			},
			total: '',
		}
	},
	mounted() {

	},
	methods:{
		async getList() {
		    let { data: res } = await interList({ 
			  page: this.listQuery.page,
			  limit: this.listQuery.limit,
		  })
		  if (res.length === 0) {  		// 判断获取数据条数若等于0
			this.list = [];				// 清空数组
			this.finished = true;		// 停止加载
		  }
		  // 若数据条数不等于0
		  this.total = res.total;		// 给数据条数赋值
		  this.list.push(...res.data)	// 将数据放入list中
		  this.loading = false;			// 加载状态结束 
		  // 如果list长度大于等于总数据条数,数据全部加载完成
		  if (this.list.length >= res.total) {
			  this.finished = true;		// 结束加载状态
		  }
		},
		onLoad() { // 若加载条到了底部
		  let timer = setTimeout(() => {	// 定时器仅针对本地数据渲染动画效果,项目中axios请求不需要定时器
			this.getList();					// 调用上面方法,请求数据
			this.page++;					// 分页数加一
			this.finished && clearTimeout(timer);//清除计时器
		  }, 100);
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
