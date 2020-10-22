<template>
	<div>
		<van-nav-bar
		  title="留言板"
		  left-text=""
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
		<div class="user-panel">
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
			
		}
	}
};
</script>

<style lang="scss" scoped>
	
</style>
