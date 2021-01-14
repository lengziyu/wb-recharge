<template>
	<div>
		<van-nav-bar
		  title="留言板"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		<div class="user-panel padding-head">
			<van-field
			  v-model="message"
			  rows="2"
			  autosize
			  type="textarea"
			  maxlength="50"
			  placeholder="请输入留言"
			  show-word-limit
			/>
		</div>
		<div class="user-panel">
			<van-button @click.native="clickSave" type="info" block>留言</van-button>
		</div>
		

		<div class="message-list padding-head">
			<div class="re-title">
				留言列表
			</div>
				<van-list
				  v-model="loading"
				  :finished="finished"
				  finished-text="没有更多了"
				  @load="onLoad"
				>
				  <div v-for="item in list" :key="item" :title="item" class="msg-item">
					<div class="item-left">
						<img class="max" v-if="item.headImg" :src="item.headImg" alt="">
						<img class="max" v-else src="@/assets/images/user.png" alt="">
					</div>
					<div class="item-right">
						<div class="item-name">
							{{ item.username }}
						</div>
						<div class="item-content">
							{{ item.content }}
						</div>
					</div>
					
					<div class="item-date">
						{{ item.created_at }}
					</div>
				  </div>
				</van-list>
				
				<van-empty v-if="total === 0" description="暂无数据" />
		</div>
	</div>
</template>

<script>
import { Toast } from 'vant';
import { messageAdd, messageList } from '@/api/my/message.js';
export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			message: '',
			list: [],
			loading: false,
			finished: false,
			refreshing: false,
			listQuery: {
				limit: 10,
				page: 1
			},
		}
	},
	mounted() {

	},
	methods:{
		clickSave() {
			if(!this.message){
				Toast('请输入留言内容');
				return
			}
			messageAdd({
				content: this.message,
			}).then(res=>{
				if(res.errno == 1){
					Toast('留言成功，审核通过即可显示在留言板');
					setTimeout(()=>{
						this.$utils.routeBack();
					}, 1500)
				}
			})
		},
		async getList() {
		    let { data: res } = await messageList({ 
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
.message-list{
	padding: 0 10px;
	.msg-item{
		background-color: #fff;
		margin-bottom: 10px;
		overflow: hidden;
		padding: 10px;
		border-radius: 5px;
		.item-left{
			float: left;
			width: 28px;
			height: 28px;
			background-color: #f3f3f3;
			border-radius: 50%;
			padding: 6px;
			margin-top: 5px;
		}
		.item-right{
			float: left;
			width: 200px;
			margin-left: 20px;
			.item-name{
				margin-bottom: 6px;
			}
			.item-content{
				margin-bottom: 6px;
				color: #555;
				font-size: 13px;
			}
		}
		.item-date{
			text-align: right;
			color: #999;
			font-size: 12px;
		}
	}
}
</style>
