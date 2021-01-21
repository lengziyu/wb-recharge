<template>
	<div>
		<van-nav-bar
		  title="我的个人推荐链接"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		
		<div class="user-panel tcenter recommend padding-head">
			<div class="recommend-ewm">
				<div class="qrcode" ref="qrCodeUrl"></div>
			</div>
			<p>
				24小时在线充值，做您的充值管家！
			</p>
			<p>
				分享给好友注册、充值，可获取丰富的积分奖励哦！
			</p>
		</div>
	</div>
</template>

<script>
import { Toast } from 'vant';
import QRCode from 'qrcodejs2'
export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			recommended_url: ''
		}
	},
	mounted() {
		this.recommended_url = this.$utils.getStorage('userInfo').recommended_url;
		var qrcode = new QRCode(this.$refs.qrCodeUrl, {
			text: this.recommended_url, // 需要转换为二维码的内容
			width: 140,
			height: 140,
			colorDark: '#000000',
			colorLight: '#ffffff',
			correctLevel: QRCode.CorrectLevel.H
		})
	},
	methods:{

	}
};
</script>

<style lang="scss" scoped>
.recommend-ewm{
	width: 142px;
	margin: 20px auto;
}
.recommend p{
	color: #777;
}
.qrcode{
	border: 10px solid #fff;
}
</style>
