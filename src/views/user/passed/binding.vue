<template>
	<div>
		<van-nav-bar
		  :title="text+'绑定'"
		  left-text=""
		   
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
		
		
			<van-form class="padding-head">
				<div class="user-panel">
			  <van-field
			    v-model="phone"
			    placeholder="手机号"
				type="phone"
				maxlength="11"
				v-if="$route.query.type == 'phone'"
			  />
			  <van-field
			    v-model="email"
			    placeholder="邮箱"
				type="email"
				v-if="$route.query.type == 'email'"
			  />
			  <van-field
			    v-model="wechat"
			    placeholder="微信号"
				v-if="$route.query.type == 'wechat'"
			  />
			  
		  <van-field
		    v-model="sms"
		    center
		    clearable
		    :placeholder="$route.query.type == 'phone'?'短信验证码':'邮箱验证码'"
			v-if="$route.query.type == 'phone'"
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
			  
			  </div>
			<div style="margin: 16px;">
			  <van-button round block type="info" @click="onSubmit" native-type="submit">
				保存
			  </van-button>
			</div>
		  </van-form>
		
	</div>
</template>

<script>
import { Toast } from 'vant';
	import { 
		loginPhoneGetCode 
	} from '@/api/login.js'
	import {
		bindPhone,
		bindEmail,
	} from '@/api/my/passed.js'
export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			text: this.$route.query.text,
			value: '',
			time: 0,
			sendStatus: false,
			sms: '',
			phone: '',
			wechat: '',
			email: ''
		}
	},
	mounted() {

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
			if(this.$route.query.type == 'phone'){
				this.bindPhone();
			}else if(this.$route.query.type == 'email') {
				this.bindEmail();
			}else if(this.$route.query.type == 'wechat'){
				this.bindWechat();
			}
		},
		bindPhone() {
			if(!this.phone){
				Toast('请输入手机号码')
			}else if(!this.sms){
				Toast('请输入验证码')
			}else{
				bindPhone({
					phone: this.phone,
					code: this.sms,
				}).then(res=>{
					
				})
			}
		},
		bindEmail() {
			if(!this.email){
				Toast('请输入邮箱')
			}else if(!this.sms){
				Toast('请输入验证码')
			}else{
				bindEmail({
					email: this.email,
					code: this.sms,
				}).then(res=>{
					
				})
			}
		},
		bindWechat() {
			
		}
		
	}
};
</script>

<style lang="scss" scoped>
.van-count-down{
	display: inline-block;
	color: #fff;
}
</style>
