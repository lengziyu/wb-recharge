<template>
	<div class="user">
		<div class="user-head">
			<div class="user-head-bg"></div>
			<div class="user-head-main">
				<div class="user-avatar">
					<img class="max" src="http://www.lengziyu.cn/blog/img/avatar.jpg">
				</div>
				<div class="user-infos">
					<span class="user-name">冷子欲</span>
					<span class="signIn-num">积分：9999</span>
				</div>
				<div class="signIn-btn">
					<span v-if="!signShow" @click="clickSign">
						<van-icon name="sign" /> 点击签到
					</span>
					<span v-else>
						<van-icon name="edit" /> 已签到
					</span>
				</div>
			</div>
		</div>
		
		<Order-panel />
		
		<Menu-panel />
		
		<div class="user-panel">
			<van-cell-group>
				<van-cell title="我的个人推荐链接" is-link url="/user/recommend" />
				<van-cell title="积分抵扣规则" is-link url="/user/texts?type=dikou" />
				<van-cell title="积分获取方式" is-link url="/user/texts?type=integral" />
				<van-cell title="留言板" is-link url="/user/message" />
				<van-cell title="我的积分记录" is-link url="/user/jifen" />
			</van-cell-group>
		</div>
		
		<div class="user-panel">
			<van-button @click.native="clickLoginOut" color="linear-gradient(to right, #ff6034, #ee0a24)" block>退出登录</van-button>
		</div>
		
		<Tabbar />
	</div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
import OrderPanel from './components/OrderPanel.vue'
import MenuPanel from './components/MenuPanel.vue'

export default {
	components: {
		Tabbar,
		OrderPanel,
		MenuPanel
	},
	data() {
		return {
			signShow: false,
		}
	},
	mounted() {
		
	},
	methods: {
		clickLoginOut() {
			this.$router.push('/login')
		},
		clickSign() {
			this.signShow = !this.signShow
		}
	}
}
</script>

<style lang="scss" scoped>
.user{
	.user-head{
		height: 230px;
		width: 100%;
		overflow: hidden;
		text-align: center;
		color: #fff;
		font-weight: bold;
		position: relative;
		.user-head-bg{
			position: absolute;
			background-image: url('../../assets/images/user-head-bg.jpg');
			background-repeat: no-repeat;
			overflow: hidden;
			background-size: cover;
			background-position: center;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			-webkitfilter: blur(3px);
			filter: blur(3px);
			z-index: 1;
		}
		.user-head-main{
			position: relative;
			z-index: 2;
		}
		.user-avatar{
			width: 90px;
			height: 90px;
			border-radius: 50%;
			overflow: hidden;
			margin: 0 auto;
			margin-top: 40px;
			box-shadow: 0 6px 12px rgba(0,0,0,0.3);
		}
		.user-infos{
			margin: 12px 0;
			overflow: hidden;
			margin-top: 16px;
			.user-name{
				margin-right: 20px;
			}
			.signIn-num{
				color: red;
			}
		}
		.signIn-btn{
			// color: #1989fa;
			.van-icon{
				vertical-align: top;
			}
		}
	}
}
</style>
