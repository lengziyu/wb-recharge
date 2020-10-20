<template>
	<div>
		<van-nav-bar
		  title="加盟代理商"
		  left-text=""
		  left-arrow
		  @click-left="$utils.routeBack"
		  @click-right="onClickRight"
		/>
		
		<van-form @submit="onSubmit">
			<van-field
			  v-model="name"
			  name="姓名"
			  placeholder="姓名"
			/>
			<van-field
			  v-model="phone"
			  name="手机号码"
			  placeholder="手机号码"
			/>
			<van-field
			  v-model="wechat"
			  name="微信号"
			  placeholder="微信号"
			/>
			<van-field
			  v-model="addr"
			  type="textarea"
			   rows="2"
			   autosize
			  name="联系地址"
			  show-word-limit
			  maxlength="50"
			  placeholder="联系地址"
			/>
			<van-field
			  v-model="work"
			  name="目前工作"
			  placeholder="目前工作"
			/>
			<van-field
			  v-model="reason"
			  name="申请缘由"
			  placeholder="申请缘由"
			/>
			<div style="margin: 16px; margin-top: 40px;">
				<van-button round block type="info" native-type="submit">
				立即申请
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script>
	import SignInTitle from './components/SignInTitle.vue'
	export default {
		name: "LoginAgent",
		components: {
			SignInTitle
		},
		data() {
		  return {
			  name: '',
			  phone: '',
			  wechat: '',
			  addr: '',
			  work: '',
			  reason: '',
		  };
		},
	  methods:{
		onSubmit(values) {
			console.log('submit', values);
		},
		onClickRight() {
			this.isPWLogin = !this.isPWLogin;
		}
	  }
	};
</script>

<style lang="scss" scoped>
.login-banner{
	height: 70px;
}
.login-tar{
	margin: 30px 0;
	li{
		display: inline-block;
		color: #999;
		a{
			margin: 0 20px;
			color: #1989fa;
		}
	}
}
</style>
