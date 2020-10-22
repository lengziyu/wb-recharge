<template>
	<div>
		<van-nav-bar
		  title="订单详情"
		  left-text=""
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
		<div class="user-panel">
			<van-panel title="标题" desc="描述信息" status="待支付">
			  <div class="odetail-content">
				  <p>下单时间：2020-10-23 34:33:33</p>
				  <p>完成时间：2020-10-23 34:33:33</p>
				  <p>订单号：345344535345345345334</p>
			  </div>
			  <template #footer>
				  <div class="tright">
					  <van-button size="small" type="info" round style="margin-right: 10px;">支付</van-button>
					  <van-button size="small" round>申请退款</van-button>
				  </div>

			  </template>
			</van-panel>
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
			
		}
	},
	mounted() {

	},
	methods:{

	}
};
</script>

<style lang="scss" scoped>
.odetail-content{
	padding: 0 15px;
	color: #777;
	font-size: 12px;
	
}
</style>
