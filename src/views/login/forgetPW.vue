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
		
		<div class="login-banner padding-head">
			<SignIn-title />
		</div>
		
		<!-- 邮箱找回 -->
		<van-form v-if="isPhoneReset">
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
		   maxlength="6"
		   type="number"
		 >
		   <template #button>
		 		
			<van-button @click="clickSendCode2" size="small" type="primary" :disabled="sendStatus2?true:false">
				<span class="sendCode" v-if="sendStatus2">
					<van-count-down @finish="finish2" :time="time2" format="ss" />s重新发送
				</span>
				<span class="sendText" v-else>
					发送验证码
				</span>
				</van-button>
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
		    <van-button round block type="info" native-type="submit" @click="clickSubmit">
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
			maxlength="6"
			type="number"
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
		  <van-field
		    v-model="password"
		    type="password"
		    name="新密码"
		  			left-icon="browsing-history-o"
		    placeholder="新密码"
		  />
		  <div style="margin: 16px; margin-top: 40px;">
		    <van-button round block type="info" native-type="submit" @click="clickSubmit">
		      确认
		    </van-button>
		  </div>
		</van-form>
	</div>
</template>

<script>
	import SignInTitle from './components/SignInTitle.vue'
	import {
		findByEmail, 
		findByPhone, 
	} from '@/api/my/passed.js'
	import {
		loginPhoneGetCode,
		emailRegister,
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
			isPhoneReset: true,
			sms: '',
			emailSms: '',
			time: 0,
			sendStatus: false,
			time2: 0,
			sendStatus2: false,
		  };
		},
	  methods:{
		  // 邮箱发送验证码
		  clickSendCode2() {
		  	if(!this.email){
		  		vant.Toast('请输入邮箱')
		  	}else{
		  		emailRegister({
		  			type: 4,
		  			email: this.email,
		  		}).then(res=>{
					if(res.errno == 1){
						vant.Toast('验证码已发送，请注意查收')
						this.time2 = this.$variables.sendCodeTime;
						this.sendStatus2 = true;
					}
		  		})
		  	}
		  },
		  finish2() {
		  	this.time2 = 0;
		  	this.sendStatus2 = false;
		  },
		// 手机号发送验证码
		clickSendCode() {
			if(!this.phone){
				vant.Toast('请输入手机号码')
			}else{
				loginPhoneGetCode({
					type: 4,
					phone: this.phone,
				}).then(res=>{
					if(res.errno == 1){
						vant.Toast('验证码已发送，请注意查收')
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
			if(this.isPhoneReset){
				this.forGetEmail();
			}else{
				this.findByPhone();
			}
		},
		onClickRight() {
			this.isPhoneReset = !this.isPhoneReset;
		},
		forGetEmail() {
			if(!this.email){
				vant.Toast('请输入邮箱')
			}else if(!this.emailSms) {
				vant.Toast('请输入邮箱验证码')
			}else if(!this.password) {
				vant.Toast('请输入新密码')
			}else {
				findByEmail({
					email: this.email,
					code: this.emailSms,
					password: this.password
				}).then(res=>{
					if(res.errno == 1){
						vant.Toast('修改成功')
						setTimeout(()=>{
							this.$router.push('/login')
						}, 1500)
					}
				})
			}
		},
		findByPhone() {
			if(!this.phone){
				vant.Toast('请输入手机号码')
			}else if(!this.sms) {
				vant.Toast('请输入短信验证码')
			}else if(!this.password) {
				vant.Toast('请输入新密码')
			}else {
				findByPhone({
					phone: this.phone,
					code: this.sms,
					password: this.password
				}).then(res=>{
					if(res.errno == 1){
						vant.Toast('修改成功')
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
