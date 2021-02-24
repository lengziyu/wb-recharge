<template>
	<div>
		<van-nav-bar
		  title="我的钱包"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		<div class="user-panel-bg padding-head">
			<div class="yue-total">
				余额：<span>￥4000</span>
			</div>
			<div class="yue-btns">
				<div class="yue-btn" @click="clickAction(1)">
					<van-button type="info" size="small">充值</van-button>
				</div>
				<div class="yue-btn" @click="clickAction(2)">
					<van-button type="primary" size="small">提现</van-button>
				</div>
			</div>
		</div>
		<van-dialog
		    v-model="show"
		    :title="status == 1?'充值':'提现'"
		    show-cancel-button
			width="280px"
			:before-close="confirm"
		  >
		<!--输入框-->
		    <van-field
		      v-model="message"
		      type="number"
		      placeholder="请输入金额"
		    />
		</van-dialog>

	</div>
</template>

<script>
 

export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			status: 1,
			show: false,
			message: ''
		}
	},
	mounted() {

	},
	methods:{
		chargeBtn() {
			this.show = false;
		},
		clickAction(num) {
			this.status = num;
			this.show = true;
		},
		confirm(action, done) {
			if(action == 'confirm'){
				this.actionAjax();
			}
			if(action == 'cancel'){
				done();
			}
		},
		actionAjax() {
			this.show = false;
			this.message = '';
			
		}
	}
};
</script>

<style lang="scss" scoped>
.yue-total{
	font-size: 14px;
	text-align: center;
	span{
		font-size: 22px;
		font-weight: 600;
	}
}
.yue-btns{
	overflow: hidden;
	margin-top: 20px;
	.yue-btn{
		float: left;
		text-align: center;
		overflow: hidden;
		margin: 0 auto;
		width: 50%;
	}
}
</style>
