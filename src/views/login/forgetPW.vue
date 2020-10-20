<template>
	<div>
		<van-nav-bar
		  title="找回密码"
		  left-text=""
		  :right-text="isPhoneReset?'手机号找回':'邮箱找回'"
		  left-arrow
		  @click-left="$utils.routeBack"
		  @click-right="onClickRight"
		/>
		
		<div class="login-banner">
			<SignIn-title />
		</div>
		
		<!-- 邮箱找回 -->
		<van-form @submit="onSubmit" v-if="isPhoneReset">
		  <van-field
		    v-model="email"
		    name="邮箱"
		    placeholder="邮箱"
			left-icon="user-o"
		  />
		  <van-field
		    v-model="emailSms"
		    center
		    clearable
		  	left-icon="comment-o"
		    placeholder="邮箱验证码"
		  >
		    <template #button>
		  		<van-button size="small" type="primary">发送验证码</van-button>
		    </template>
		  </van-field> 
		  <van-field
		    v-model="password"
		    type="password"
		    name="新密码"
			left-icon="browsing-history-o"
		    placeholder="新密码"
		  />
		  <div style="margin: 16px; margin-top: 40px;">
		    <van-button round block type="info" native-type="submit">
		      确认
		    </van-button>
		  </div>
		</van-form>
		
		<!-- 手机号找回 -->
		<van-form @submit="onSubmit" v-else>
		  <van-field
		    v-model="phone"
		    name="手机号码"
		    placeholder="手机号码"
			left-icon="user-o"
		  />
		  <van-field
		    v-model="sms"
		    center
		    clearable
		  	left-icon="comment-o"
		    placeholder="短信验证码"
		  >
		    <template #button>
		  		<van-button size="small" type="primary">发送验证码</van-button>
		    </template>
		  </van-field> 
		  <van-field
		    v-model="password"
		    type="password"
		    name="新密码"
		  			left-icon="browsing-history-o"
		    placeholder="新密码"
		  />
		  <div style="margin: 16px; margin-top: 40px;">
		    <van-button round block type="info" native-type="submit">
		      确认
		    </van-button>
		  </div>
		</van-form>
	</div>
</template>

<script>
	import SignInTitle from './components/SignInTitle.vue'
	export default {
		name: "Login",
		components: {
			SignInTitle
		},
		data() {
		  return {
			email: '',
			phone: '',
			password: '',
			isPhoneReset: true,
			sms: '',
			emailSms: ''
		  };
		},
	  methods:{
		onSubmit(values) {
			console.log('submit', values);
		},
		onClickRight() {
			this.isPhoneReset = !this.isPhoneReset;
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
