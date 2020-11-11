<template>
	<div>
		<van-nav-bar
		  title="加盟代理商"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		  @click-right="onClickRight"
		/>
		<div class="user-panel padding-head">
			<van-form>
				<van-field
				  v-model="info.real_name"
				  name="姓名"
				  placeholder="姓名"
				/>
				<van-field
				  v-model="info.phone"
				  name="手机号码"
				  placeholder="手机号码"
				  type="number"
				/>
				<van-field
				  v-model="info.wx_code"
				  name="微信号"
				  placeholder="微信号(非必填)"
				/>
				<van-field
				  v-model="info.addr"
				  type="textarea"
				   rows="2"
				   autosize
				  name="联系地址"
				  show-word-limit
				  maxlength="50"
				  placeholder="联系地址"
				/>
				<van-field
				  v-model="info.work"
				  name="目前工作"
				  placeholder="目前工作"
				/>
				<van-field
				  v-model="info.reason"
				  name="申请缘由"
				  placeholder="申请缘由"
				/>
			</van-form>
		</div>
		<div style="margin: 16px; margin-top: 40px;">
			<van-button round block type="info" @click="onSubmit" native-type="submit">
			立即申请
			</van-button>
		</div>

	</div>
</template>

<script>
	import SignInTitle from './components/SignInTitle.vue'
	import { agentAdd } from '@/api/my/index.js'
	import { Toast } from 'vant';
	export default {
		name: "LoginAgent",
		components: {
			SignInTitle
		},
		data() {
		  return {
			info: {
				real_name: '',
				phone: '',
				wx_code: '',
				addr: '',
				work: '',
				reason: '',
			}
		  };
		},
	  methods:{
		onSubmit() {
			if(!this.info.real_name){
				Toast('请填写姓名');
			}else if(!this.info.phone) {
				Toast('请填写手机号码');
			}else if(!this.info.addr) {
				Toast('请填写联系地址');
			}else if(!this.info.work) {
				Toast('请填写目前工作');
			}else if(!this.info.reason) {
				Toast('请填写申请缘由');
			}else{
				agentAdd(this.info).then(res=>{
					if(res.errno == 1){
						Toast('申请成功，请保持通话畅通！');
						setTimeout(()=>{
							this.$router.push('/product')
						}, 1500)
					}
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
</style>
