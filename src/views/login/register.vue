<template>
	<div>
		<van-nav-bar
		  :title="$t('register.title')"
		  left-text=""
		   
		  :right-text="isPhoneRegister?$t('register.emailRegister'):$t('register.phoneRegister')"
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
		    :name="$t('register.email')"
		    :placeholder="$t('register.email')"
			left-icon="user-o"
		  />
		  <van-field
		    v-model="password"
		    type="password"
		    :name="$t('register.password')"
			left-icon="browsing-history-o"
		    :placeholder="$t('register.password')"
		  />
		  <div style="margin: 16px; margin-top: 40px;">
		    <van-button round block type="info" @click="clickSubmit" native-type="submit">
		      {{ $t('register.registerBtn') }}
		    </van-button>
		  </div>
		</van-form>
		
		<!-- 手机号注册 -->
		<van-form v-else>
		  <van-field
		    v-model="phone"
		    :name="$t('register.phone')"
		    :placeholder="$t('register.phone')"
			left-icon="user-o"
			type="number"
			maxlength="11"
		  />
		  <van-field
		    v-model="password"
		    type="password"
		    :name="$t('register.password')"
			left-icon="browsing-history-o"
		    :placeholder="$t('register.password')"
		  />
		  <van-field
		    v-model="sms"
		    center
		    clearable
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
		    <van-button round block type="info" @click="clickSubmit" native-type="submit">
		      {{ $t('register.registerBtn') }}
		    </van-button>
		  </div>
		</van-form>
		
		<ul class="tcenter login-tar">
			<li>
				<router-link :to="{ path: '/login', params: { userId: 123 }}">{{ $t('register.isRegister') }}</router-link>
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
				vant.Toast('请输入手机号码')
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
				vant.Toast('请输入手机号码')
			}else if(!this.password){
				vant.Toast('请输入密码')
			}else if(!this.sms){
				vant.Toast('请输入验证码')
			}else{
				registerPhone({
					phone: this.phone,
					password: this.password,
					code: this.sms,
				}).then(res=>{
					if(res.errno == 1){
						vant.Toast('注册成功');
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
				vant.Toast('请输入邮箱')
			}else if(!this.password) {
				vant.Toast('请输入密码')
			}else {
				registerEmail({
					email: this.email,
					password: this.password,
				}).then(res=>{
					if(res.errno == 1){
						vant.Toast('注册成功');
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
