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
 
import { upload } from '@/api/other.js'
import { realnameAuth } from '@/api/my/passed.js'
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
			if(!this.username){
				vant.Toast('请输入姓名')
			}else if(!this.usernumber) {
				vant.Toast('请输入身份证号码')
			}else if(this.fileList.length == 0) {
				vant.Toast('请上传身份证正面照片')
			}else if(this.fileList2.length == 0){
				vant.Toast('请上传身份证反面照片')
			}else{
				realnameAuth({
					real_name: this.username,
					id_card_number: this.usernumber,
					img_url_z: this.fileList[0].url,
					img_url_f: this.fileList2[0].url
				}).then(res=>{
					if(res.errno == 1){
						vant.Toast('已提交实名认证审核');
						setTimeout(()=>{
							this.$router.push('/user')
						}, 1500)
					}
				})
			}
		},
		afterRead(data){
			let myFromCTData = new FormData();
			myFromCTData.append('file',data.file);
			upload(myFromCTData).then(res=>{
				if(res.errno == 1){
					this.fileList = [{url: res.data.url}]
				}
			})
		},
		afterRead2(data){
			let myFromCTData = new FormData();
			myFromCTData.append('file',data.file);
			upload(myFromCTData).then(res=>{
				if(res.errno == 1){
					this.fileList2 = [{url: res.data.url}]
				}
			})
		}
	}
};
</script>

<style lang="scss" scoped>
	
</style>
