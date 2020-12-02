<template>
	<div>
		<van-nav-bar
		  title="特惠门票"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		<div class="banner padding-head">
			<img class="max" src="@/assets/images/b1.png" alt="">
		</div>
		
		<div class="user-panel">
			<div class="da-list">
				<div class="da-title">
					点击以下列表查看详情
				</div>
				<div class="da-list-wrap">
					<div class="da-item" v-for="i in 6" @click="clickItem()">
						<div class="da-item-pic">
							<img class="max" src="@/assets/images/user-head-bg.jpg" alt="">
						</div>
						<div class="da-item-info">
							<div class="da-item-info-title">
								马来西亚撒大声地所所多撒大声地所多所啥事
							</div>
							<div class="da-item-info-btn">
								点击购买>>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import { Toast } from 'vant';
import { tickettype } from '@/api/product/ticket.js'
export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			list: '',
			listQuery: {
				limit: 20,
				page: 1,
			},
		}
	},
	mounted() {
		this.tickettype();
	},
	methods:{
		clickItem() {
			this.$router.push('/product/ticket/detail')
		},
		tickettype() {
			tickettype({
				...this.listQuery,
				'search[title]': ''
			}).then(res=>{
				if(res.errno == 1){
					this.list = res.data;
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
	.da-item{
		background-color: #fff;
		padding: 12px;
		border-bottom: 1px solid #f2f2f2;
		overflow: hidden;
		.da-item-pic{
			float: left;
			width: 80px;
			height: 50px;
			overflow: hidden;
			margin-right: 10px;
		}
		.da-item-info{
			font-size: 14px;
			color: #555;
			.da-item-info-btn{
				color: red;
				margin-top: 6px;
				font-size: 13px;
			}
		}
	}
}
</style>
