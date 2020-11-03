<template>
	<div>
		
		<div class="re-title">
			公告
		</div>
		<van-notice-bar
		  wrapable
		  :scrollable="false"
		  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
		/>
		<div class="re-title">
			优惠券
		</div>
		<div>
			<img class="max" src="@/assets/images/user-head-bg.jpg" alt="">
		</div>
		<div class="re-title">
			常见问题汇总
		</div>
		<van-collapse v-model="activeNames">
		  <van-collapse-item title="常见问题1" name="1">内容</van-collapse-item>
		  <van-collapse-item title="常见问题2" name="2">内容</van-collapse-item>
		  <van-collapse-item title="常见问题3" name="3">内容</van-collapse-item>
		</van-collapse>
		<Tabbar />
	</div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
	components: {
		Tabbar
	},
	data() {
		return {
			activeNames: []
		}
	},
	mounted() {
		
	},
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>
.re-title{
	padding-top: 20px;
	padding-left: 12px;
}
</style>
