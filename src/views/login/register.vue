<template>
	<div>
		<van-nav-bar
		  title="注册"
		  left-text=""
		  :right-text="isPhoneRegister?'手机号注册':'邮箱注册'"
		  left-arrow
		  @click-left="$utils.routeBack"
		  @click-right="onClickRight"
		/>
		
		<div class="login-banner">
			<SignIn-title />
		</div>
		
		<!-- 邮箱注册 -->
		<van-form @submit="onSubmit" v-if="isPhoneRegister">
		  <van-field
		    v-model="email"
		    name="邮箱"
		    placeholder="邮箱"
			left-icon="user-o"
		  />
		  <van-field
		    v-model="password"
		    type="password"
		    name="密码"
			left-icon="browsing-history-o"
		    placeholder="密码"
		  />
		  <div style="margin: 16px; margin-top: 40px;">
		    <van-button round block type="info" native-type="submit">
		      立即注册
		    </van-button>
		  </div>
		</van-form>
		
		<!-- 手机号注册 -->
		<van-form @submit="onSubmit" v-else>
		  <van-field
		    v-model="phone"
		    name="手机号码"
		    placeholder="手机号码"
			left-icon="user-o"
		  />
		  <van-field
		    v-model="password"
		    type="password"
		    name="密码"
			left-icon="browsing-history-o"
		    placeholder="密码"
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
		  <div style="margin: 16px; margin-top: 40px;">
		    <van-button round block type="info" native-type="submit">
		      立即注册
		    </van-button>
		  </div>
		</van-form>
		
		<ul class="tcenter login-tar">
			<li>
				<router-link :to="{ path: '/login', params: { userId: 123 }}">已有账号？立即登录</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import SignInTitle from './components/SignInTitle.vue'
	import { registerPhone } from '@/api/login.js'
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
			isPhoneRegister: true,
			sms: '',
		  };
		},
	  methods:{
		onSubmit(values) {
			this.$router.push('/user')
			console.log('submit', values);
			// this.registerPhone();
		},
		onClickRight() {
			this.isPhoneRegister = !this.isPhoneRegister;
		},
		registerPhone() {
			registerPhone({
				phone: this.phone,
				password: this.password,
				code: this.sms,
				lang: 'en'
			}).then(res=>{
				
			})
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
