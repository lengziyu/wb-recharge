<template>
	<div>
		<van-nav-bar
		  title="门票详情"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		
		<div class="user-panel ticket-detail padding-head">
			<div class="ticket-num">
				请输入门票数量：<van-stepper v-model="ticketNum" />
			</div>
			<van-divider />
			<div class="title">
				请选择产品
			</div>
			<ul class="td-list">
				<li v-for="(i, idx) in info" @click="clickItem(idx)" :class="current == idx?'current':''">
					{{ i.title }}
				</li>
			</ul>
			
			<div class="price" v-if="info.length>0">
				<p>
					价格：<span class="red">￥{{ info[current].money }}</span>
				</p>
				<p>
					vip折扣：<span class="red">{{ info[current].vip_dis }}%</span>
				</p>
				<p>
					代理折扣：<span class="red">{{ info[current].agent_dis }}%</span>
				</p>
			</div>
			
			<div v-if="info.length>0" v-html="info[current].content">
				
			</div>
			
			<div class="details">

			</div>
			
			<div class="fab-btn" @click="clickPay">
				确认订单
			</div>
		</div>
	</div>
</template>

<script>
import { Toast } from 'vant';
import { ticket } from '@/api/product/ticket.js'
export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			ticketNum: 1,
			current: 0,
			title: '',
			is_recommend: 1,
			is_new: 1,
			is_hot: 1,
			info: []
		}
	},
	mounted() {
		this.ticket();
	},
	methods:{
		clickItem(idx) {
			this.current = idx
		},
		ticket() {
			ticket({
				'search[type_id]': this.$route.query.id,
				'search[title]': this.title,
				// 'search[is_recommend]': this.is_recommend,
				// 'search[is_new]': this.is_new,
				// 'search[is_hot]': this.is_hot,
			}).then(res=>{
				this.info = res.data;
			})
		},
		clickPay() {
			this.$router.push('/product/ticket/pay')
		}
	}
};
</script>

<style lang="scss" scoped>
.ticket-detail{
	background-color: #fff;
	padding: 0 12px;
	padding-bottom: 30px;
	margin-bottom: 50px;
}
.ticket-num{
	padding: 20px;
	text-align: center;
	padding-bottom: 10px;
	font-size: 15px;
	.van-stepper{
		display: inline-block;
		vertical-align: middle;
	}
}
.title{
	margin-bottom: 12px;
	font-size: 14px;
}
.td-list{
	overflow: hidden;
	li{
		border: 1px solid #ddd;
		float: left;
		width: 27%;
		margin: 1.5%;
		text-align: center;
		border-radius: 6px;
		font-size: 13px;
		padding: 12px 1%;
		color: #555;
		overflow: hidden;
	}
	.current{
		background-color: #1989fa;
		color: #fff;
		border-color: #1989fa;
	}
}
.details-title{
	color: orange;
	font-size: 14px;
	margin: 12px 0;
	font-weight: 600;
}
.details-text{
	color: #666;
	font-size: 14px;
}
</style>

