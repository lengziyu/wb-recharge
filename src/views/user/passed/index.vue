<template>
	<div>
		<van-nav-bar
		  title="个人信息认证"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		<div class="user-panel padding-head">
			<van-cell title="手机绑定" is-link url="/recharge/user/passed/binding?type=phone&text=手机" />
			<van-cell title="微信绑定" is-link url="/recharge/user/passed/binding?type=wechat&text=微信" />
			<van-cell title="邮箱认证" is-link url="/recharge/user/passed/binding?type=email&text=邮箱" />
			<van-cell title="实名认证" is-link url="/recharge/user/passed/real" />
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
			
		}
	},
	mounted() {

	},
	methods:{

	}
};
</script>

<style lang="scss" scoped>
	
</style>
