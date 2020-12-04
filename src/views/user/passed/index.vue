<template>
	<div>
		<van-nav-bar
		  title="个人信息认证"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		<div class="user-panel padding-head">
			<van-cell 
				title="手机绑定" 
				:is-link="userInfo.phone?false:true" 
				:url="userInfo.is_real_name == 1?'':'/recharge/user/passed/binding?type=phone&text=手机'" 
				:value="userInfo.phone"
			/>
			
			<van-cell 
				title="微信绑定" 
				is-link 
				url="/recharge/user/passed/binding?type=wechat&text=微信" 
			/>
			
			<van-cell 
				title="邮箱认证" 
				:is-link="userInfo.email?false:true" 
				:url="userInfo.email?'':'/recharge/user/passed/binding?type=email&text=邮箱'" 
				:value="userInfo.email"
			/>
			
			<van-cell 
				title="实名认证" 
				:is-link="userInfo.is_real_name == 1?false:true" 
				:url="userInfo.is_real_name == 1?'':'/recharge/user/passed/real'" 
				:value="userInfo.real_name"
			/>
		</div>
	</div>
</template>

<script>
import { Toast } from 'vant';
import { getUserInfo } from '@/api/my/index.js'
export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			userInfo: ''
		}
	},
	mounted() {
		this.getUserInfo();
	},
	methods:{
		getUserInfo() {
			getUserInfo().then(userRes=>{
				if(userRes.errno == 1){
					this.userInfo = userRes.data;
				}
			})
		},
	}
};
</script>

<style lang="scss" scoped>
	
</style>
