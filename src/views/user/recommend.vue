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
			<div v-html="recommended_content">
				
			</div>
		</div>
	</div>
</template>

<script>
 
import QRCode from 'qrcodejs2'
import { personreCommend } from '@/api/my/index.js'
export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			recommended_url: '',
			recommended_content: ''
		}
	},
	mounted() {
		// this.recommended_url = this.$utils.getStorage('userInfo').recommended_url;
		// var qrcode = new QRCode(this.$refs.qrCodeUrl, {
		// 	text: this.recommended_url, // 需要转换为二维码的内容
		// 	width: 140,
		// 	height: 140,
		// 	colorDark: '#000000',
		// 	colorLight: '#ffffff',
		// 	correctLevel: QRCode.CorrectLevel.H
		// })
		
		this.personreCommend();
	},
	methods:{
		personreCommend() {
			personreCommend().then(res=>{
				if(res.errno == 1){
					this.recommended_content = res.data.content;
					this.recommended_url = res.data.url;
					
					var qrcode = new QRCode(this.$refs.qrCodeUrl, {
						text: this.recommended_url, // 需要转换为二维码的内容
						width: 140,
						height: 140,
						colorDark: '#000000',
						colorLight: '#ffffff',
						correctLevel: QRCode.CorrectLevel.H
					})
				}
			})
		}
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
