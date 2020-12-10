<template>
	<div>
		<van-nav-bar
		  :title="$t('login.title')"
		  left-text=""
		  :right-text="isPWLogin?$t('login.yzLogin'):$t('login.passwordLogin')"
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
		    :name="$t('login.username')"
		    :placeholder="$t('login.username')"
			left-icon="user-o"
			v-if="isPWLogin"
		  />
		  <van-field
		  v-else
		    v-model="phone"
		    :name="$t('login.phone')"
		    :placeholder="$t('login.phone')"
		  	left-icon="user-o"
			maxlength="11"
			type="number"
		  />
		  <van-field v-if="isPWLogin"
		    v-model="password"
		    type="password"
		    :name="$t('login.password')"
			left-icon="browsing-history-o"
		    :placeholder="$t('login.password')"
		  />

			 <van-field
			  v-show="!isPWLogin"
			   v-model="sms"
			   center
			   clearable
			   :name="$t('login.sms')"
				left-icon="comment-o"
			   :placeholder="$t('login.sms')"
			   type="number"
			   maxlength="6"
			 >
		    <template #button>
		  		
				<van-button @click="clickSendCode" size="small" type="primary" :disabled="sendStatus?true:false">
					<span class="sendCode" v-if="sendStatus">
						<van-count-down @finish="finish" :time="time" format="ss" />s{{ $t('login.resend') }}
					</span>
					<span class="sendText" v-else>
							{{ $t('login.sendCode') }}
					</span>
				</van-button>
			</template>
		</van-field> 


		  <div style="margin: 16px; margin-top: 40px;">
		    <van-button round block type="info" @click="onSubmit" native-type="submit">
		      {{ $t('login.title') }}
		    </van-button>
		  </div>
		</van-form>
		
		<ul class="tcenter login-tar">
			<li>
				<router-link :to="{ path: '/login/forgetPW', params: { userId: 123 }}"> {{ $t('login.forgetPW') }}</router-link>
				|
			</li>
			<li>
				<router-link :to="{ path: '/login/register', params: { userId: 123 }}"> {{ $t('login.register') }}</router-link>
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
	import Cookies from 'js-cookie';
	import { getUserInfo } from '@/api/my/index.js'
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
					type: 3,
					phone: this.phone,
				}).then(res=>{
					if(res.errno == 1){
						Toast('验证码已发送，请注意查收')
						this.time = this.$variables.sendCodeTime;
						this.sendStatus = true;
					}
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
					if(res.errno == 1){
						this.$utils.setStorage('token', res.data.token);
						Toast('登录成功');
						this.getUserInfo();
					}
				})
			}
		},
		// 密码登录
		loginPhone() {
			if(!this.phone){
				Toast('请输入手机号码')
			}else if(!this.sms){
				Toast('请输入验证码')
			}else{
				loginPhone({
					phone: this.phone,
					code: this.sms,
				}).then(res=>{
					if(res.errno == 1){
						this.$utils.setStorage('token', res.data.token)
						Toast('登录成功');
						this.getUserInfo();
					}
				})
			}
		},
		getUserInfo() {
			getUserInfo().then(userRes=>{
				if(userRes.errno == 1){
					this.$utils.setStorage('userInfo', userRes.data);
					setTimeout(()=>{
						this.$router.push('/user');
					}, 1500)
				}
			})
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
