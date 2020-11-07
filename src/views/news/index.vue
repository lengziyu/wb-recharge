<template>
	<div>
		<div class="tabbar-height"></div>
		<div class="re-title">
			网站公告
		</div>
		<van-notice-bar
		  wrapable
		  :scrollable="false"
		  text="双十一来临,大量精彩活动邀您参与!充值1000元送50元,优惠不断,敬请关注!"
		/>
		<div class="re-title">
			优惠券
		</div>
		<div>
			<img class="max" src="@/assets/images/q1.png" alt="">
		</div>
		<div class="re-title">
			常见问题汇总
		</div>
		<van-collapse v-model="activeNames">
		  <van-collapse-item title="怎么获得积分？" name="1">通过签到和分享给好友可以获得。</van-collapse-item>
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
