<template>
	<div>
		
		<div class="re-title">
			公告
		</div>
		<van-notice-bar
		  left-icon="volume-o"
		  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
		/>
		<div class="re-title">
			优惠券
		</div>
		
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
