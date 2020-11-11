<template>
	<div>
		<van-nav-bar
		  title="注册"
		  left-text=""
		   
		  :right-text="isPhoneRegister?'邮箱注册':'手机号注册'"
		  left-arrow
		  @click-left="$utils.routeBack"
		  @click-right="onClickRight"
		/>
		
		<div class="login-banner padding-head">
			<SignIn-title />
		</div>
		
		<!-- 邮箱注册 -->
		<van-form v-if="!isPhoneRegister">
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
		    <van-button round block type="info" @click="clickSubmit" native-type="submit">
		      立即注册
		    </van-button>
		  </div>
		</van-form>
		
		<!-- 手机号注册 -->
		<van-form v-else>
		  <van-field
		    v-model="phone"
		    name="手机号码"
		    placeholder="手机号码"
			left-icon="user-o"
			type="number"
			maxlength="11"
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
			type="number"
			maxlength="6"
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
		    <van-button round block type="info" @click="clickSubmit" native-type="submit">
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
	import { 
		registerPhone, 
		registerEmail, 
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
			email: '',
			phone: '',
			password: '',
			isPhoneRegister: false,
			sms: '',
			time: 0,
			sendStatus: false,
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
				}).then(res=>{
					if(res.errno == 1){
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
		// 提交
		clickSubmit() {
			if(this.isPhoneRegister){
				this.registerPhone();
			}else{
				this.registerEmail();
			}
		},
		onClickRight() {
			this.isPhoneRegister = !this.isPhoneRegister;
		},
		// 手机号码注册
		registerPhone() {
			if(!this.phone){
				Toast('请输入手机号码')
			}else if(!this.password){
				Toast('请输入密码')
			}else if(!this.sms){
				Toast('请输入验证码')
			}else{
				registerPhone({
					phone: this.phone,
					password: this.password,
					code: this.sms,
				}).then(res=>{
					if(res.errno == 1){
						Toast('注册成功');
						setTimeout(()=>{
							this.$router.push('/login')
						}, 1500)
					}
				})
			}
		},
		// 邮箱注册
		registerEmail() {
			if(!this.email){
				Toast('请输入邮箱')
			}else if(!this.password) {
				Toast('请输入密码')
			}else {
				registerEmail({
					email: this.email,
					password: this.password,
				}).then(res=>{
					if(res.errno == 1){
						Toast('注册成功');
						setTimeout(()=>{
							this.$router.push('/login')
						}, 1500)
					}
				})
			}
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
