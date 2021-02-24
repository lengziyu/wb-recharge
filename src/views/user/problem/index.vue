<template>
	<div>
		<van-nav-bar
		  title="常见问题汇总"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		<div class="user-panel-bg padding-head">
			<van-collapse v-model="activeNames">
			  <van-collapse-item title="常见问题1" name="1">内容</van-collapse-item>
			  <van-collapse-item title="常见问题2" name="2">内容</van-collapse-item>
			  <van-collapse-item title="常见问题3" name="3">内容</van-collapse-item>
			</van-collapse>
		</div>
	</div>
</template>

<script>
 

export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			activeNames: ['1']
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
