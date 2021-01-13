<template>
	<div>
		<van-nav-bar
		  title="留言板"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		<div class="user-panel padding-head">
			<van-field
			  v-model="message"
			  rows="2"
			  autosize
			  type="textarea"
			  maxlength="50"
			  placeholder="请输入留言"
			  show-word-limit
			/>
		</div>
		<div class="user-panel">
			<van-button @click.native="clickSave" type="info" block>留言</van-button>
		</div>
	</div>
</template>

<script>
import { Toast } from 'vant';
import { messageAdd } from '@/api/my/message.js';
export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			message: ''
		}
	},
	mounted() {

	},
	methods:{
		clickSave() {
			if(!this.message){
				Toast('请输入留言内容');
				return
			}
			messageAdd({
				content: this.message,
			}).then(res=>{
				if(res.errno == 1){
					Toast('留言成功，审核通过即可显示在留言板');
				}
			})
		},
	}
};
</script>

<style lang="scss" scoped>
	
</style>
