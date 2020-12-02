<template>
	<div class="paytype">
		<div class="yue-btn" @click="clickAction(1)">
			<van-button type="info" size="small">微信支付</van-button>
		</div>
		<div class="yue-btn" @click="clickAction(2)">
			<van-button type="primary" size="small">支付宝支付</van-button>
		</div>
		<div class="yue-btn" @click="clickAction(3)">
			<van-button type="default" size="small">余额支付</van-button>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
	  clickAction() {
		  // this.$route.push('/')
	  }
  }
};
</script>

<style lang="scss" scoped>
.paytype{
	overflow: hidden;
	background-color: #fff;
	padding: 12px;
	padding-top: 20px;
	border-bottom: 1px solid #f2f2f2;
	.yue-btn{
		float: left;
		margin-right: 20px;
		margin-bottom: 10px;
	}
}
</style>
