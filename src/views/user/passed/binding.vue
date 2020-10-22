<template>
	<div>
		<van-nav-bar
		  :title="text+'绑定'"
		  left-text=""
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
		
		
			<van-form @submit="onSubmit">
				<div class="user-panel">
			  <van-field
			    v-model="value"
			    :placeholder="$route.query.text+'号'"
			    :rules="[{ required: true, message: '请填写'+$route.query.text }]"
			  />
			  </div>
			<div style="margin: 16px;">
			  <van-button round block type="info" native-type="submit">
				保存
			  </van-button>
			</div>
		  </van-form>
		
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
			text: this.$route.query.text,
			value: '',
		}
	},
	mounted() {

	},
	methods:{
		onSubmit() {
			
		}
	}
};
</script>

<style lang="scss" scoped>
	
</style>
