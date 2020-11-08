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
		
		<div class="login-banner padding-head">
			<SignIn-title />
		</div>
		
		<van-form>
		  <van-field
		    v-model="username"
		    name="用户名/邮箱/手机号码"
		    placeholder="用户名/邮箱/手机号码"
			left-icon="user-o"
			v-if="isPWLogin"
		  />
		  <van-field
		  v-else
		    v-model="phone"
		    name="手机号码"
		    placeholder="手机号码"
		  	left-icon="user-o"
			maxlength="11"
			type="number"
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
		  		
				<van-button @click="clickSendCode" size="small" type="primary" :disabled="sendStatus?true:false">
					<span class="sendCode" v-if="sendStatus">
						<van-count-down @finish="finish" :time="time" format="ss" />s重新发送
					</span>
					<span class="sendText" v-else>
							发送验证码
					</span>
				</van-button>
			</template>
		</van-field> 


		  <div style="margin: 16px; margin-top: 40px;">
		    <van-button round block type="info" @click="onSubmit" native-type="submit">
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
	import {
		loginPwd, 
		loginPhone,
		loginPhoneGetCode
	} from '@/api/login.js'
	import { Toast } from 'vant';
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
			time: 0,
			sendStatus: false,
			phone: ''
		  };
		},
	  methods:{
		// 发送验证码
		clickSendCode() {
			if(!this.phone){
				Toast('请输入手机号码')
			}else{
				loginPhoneGetCode({
					type: 1,
					phone: this.phone,
					lang: 'cn'
				}).then(res=>{
					this.time = this.$variables.sendCodeTime;
					this.sendStatus = true;
				})
			}
		},
		finish() {
			this.time = 0;
			this.sendStatus = false;
		},
		onSubmit() {
			if(this.isPWLogin){
				this.login();
			}else{
				this.loginPhone();
			}
		},
		// 密码登录
		login() {
			if(!this.username){
				Toast('请输入用户名/邮箱/手机号码')
			}else if(!this.password){
				Toast('请输入密码')
			}else{
				loginPwd({
					username: this.username,
					password: this.password,
				}).then(res=>{
					
					// this.$router.push('/user')
				})
			}
		},
		// 密码登录
		loginPhone() {
			if(!this.phone){
				Toast('请输入手机号码')
			}else if(!this.password){
				Toast('请输入验证码')
			}else{
				loginPhone({
					phone: this.phone,
					code: this.sms,
				}).then(res=>{
					
					// this.$router.push('/user')
				})
			}
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
.van-count-down{
	display: inline-block;
	color: #fff;
}
</style>
