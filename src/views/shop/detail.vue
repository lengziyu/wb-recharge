<template>
	<div>
		<van-nav-bar
		  title="商品详情"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		<van-swipe class="my-swipe padding-head" :autoplay="3000" indicator-color="white" height="200">
		  <van-swipe-item>
			  <img :src="detail.product_img" alt="">
		  </van-swipe-item>
		</van-swipe>
		<div class="details">
			<div class="price">
				{{ detail.integral }} <span>积分</span> /  <span>￥</span>{{ detail.money }}<span>元</span>
			</div>
			<div class="title">
				{{ detail.title }}
			</div>
			<div class="info">
				<div class="baoyou">
					满20元包邮
				</div>
				<div class="sale">
					月销<span>100</span>笔
				</div>
			</div>
		</div>
		
		<van-cell title="七天无理由退款" icon="tosend" is-link />
		<van-cell title="满20块包邮" icon="free-postage" is-link />
		<div class="detail-panel">
			<div class="re-title">
				商品信息
			</div>
			<div v-html="detail.content">
				
			</div>
		</div>
		<van-goods-action>
		  <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
		  <van-goods-action-button
		    type="danger"
		    text="立即兑换"
		    @click="onClickButton"
		  />
		  
		  
		</van-goods-action>
	</div>
</template>

<script>
import { Toast } from 'vant';
import { jifenDetail } from '@/api/jifen.js'
export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			detail: ''
		}
	},
	mounted() {
		this.jifenDetail();
	},
	methods:{
		jifenDetail() {
			console.log(this.$route.query.id)
			jifenDetail({
				id: this.$route.query.id,
			}).then(res=>{
				console.log(res.data)
				this.detail = res.data;
			})
		},
	    onClickIcon() {
	      Toast('点击图标');
	    },
	    onClickButton() {
	
	    },
		onBuyClicked() {
			
		}
	}
};
</script>

<style lang="scss" scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 200px;
    text-align: center;
    background-color: #39a9ed;
	img{
		width: 100%;
		height: 100%;
	}
  }
  .details{
	  background-color: #fff;
	  padding: 10px;
	  margin-bottom: 10px;
	  .title{
		  margin: 8px 0;
	  }
	  .info{
		  overflow: hidden;
		  color: #666;
		  font-size: 13px;
		  .baoyou{
			  float: left;
		  }
		  .sale{
			  float: right;
			  span{
				  color: red;
			  }
		  }
		}
		  
  }
  .price{
	  color: red;
	  font-size: 16px;
	  font-weight: 600;
	  span{
	  	font-size: 12px;
	  	font-weight: 400;
	  }
	}
	.van-button{
		height: 35px !important;
	}
	.detail-panel{
		background-color: #fff;
		margin-top: 10px;
		padding: 10px;
	}
</style>
