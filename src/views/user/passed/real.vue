<template>
	<div>
		<van-nav-bar
		  title="实名认证"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		
			
			<van-form @submit="onSubmit" class="padding-head"> 
				<div class="user-panel">
				  <van-field
					v-model="username"
					placeholder="真实姓名"
					:rules="[{ required: true, message: '请填写您的真实姓名' }]"
				  />
				  <van-field
					v-model="usernumber"
					placeholder="身份证号码"
					:rules="[{ required: true, message: '请填写您的身份证号码' }]"
				  />
			  </div>
			  <div class="user-panel">
			  	<van-row>
			  		<van-col span="8">
			  			<p class="van-doc-demo-block__title">身份证正面</p>
			  			<van-uploader v-model="fileList" :after-read="afterRead" max-count="1" multiple />
			  		</van-col>
			  		
			  		<van-col span="8">
			  			<p class="van-doc-demo-block__title">
			  				身份证反面
			  			</p>
			  			<van-uploader v-model="fileList2" :after-read="afterRead2" max-count="1" multiple />
			  		</van-col>
			  	</van-row>
			  </div>
			<div style="margin: 16px;">
			  <van-button round block type="info" native-type="submit">
				提交
			  </van-button>
			</div>
		  </van-form>
		
	</div>
</template>

<script>
import { Toast } from 'vant';
import { upload } from '@/api/other.js'
export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			username: '',
			usernumber: '',
			  fileList: [
				
			  ],
			  fileList2: [
				 
			  ]
		}
	},
	mounted() {

	},
	methods:{
		onSubmit() {
			
		},
		afterRead(file){
			upload({
				file: file
			}).then(res=>{
				console.log(file)
			})
		}
	}
};
</script>

<style lang="scss" scoped>
	
</style>
