<template>
	<div>
		<van-nav-bar
		  title="登录"
		  left-text=""
		  :right-text="isPWLogin?'验证码登录':'密码登录'"
		  left-arrow
		  @click-left="$utils.routeBack"
		  @click-right="onClickRight"
		/>
		
		<div class="login-banner">
			<SignIn-title />
		</div>
		
		<van-form @submit="onSubmit">
		  <van-field
		    v-model="username"
		    :name="isPWLogin?'邮箱/手机号码':'手机号码'"
		    :placeholder="isPWLogin?'邮箱/手机号码':'手机号码'"
			left-icon="user-o"
		  />
		  <van-field v-if="isPWLogin"
		    v-model="password"
		    type="password"
		    name="密码"
			left-icon="browsing-history-o"
		    placeholder="密码"
		  />

			 <van-field
			  v-show="!isPWLogin"
			   v-model="sms"
			   center
			   clearable
			   name="验证码"
				left-icon="comment-o"
			   placeholder="短信验证码"
			 >
			   <template #button>
			     <van-button size="small" type="primary">发送验证码</van-button>
			   </template>
			 </van-field> 


		  <div style="margin: 16px; margin-top: 40px;">
		    <van-button round block type="info" native-type="submit">
		      登录
		    </van-button>
		  </div>
		</van-form>
		
		<ul class="tcenter login-tar">
			<li>
				<router-link :to="{ path: '/login/forgetPW', params: { userId: 123 }}">忘记密码</router-link>
				|
			</li>
			<li>
				<router-link :to="{ path: '/login/register', params: { userId: 123 }}">立即注册</router-link>
			</li>
		</ul>
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
			username: '',
			password: '',
			isPWLogin: true,
			sms: '',
		  };
		},
	  methods:{
		onSubmit(values) {
			this.$router.push('/user')
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
