<template>
	<div class="user">
		<div class="tabbar-height"></div>
		<div class="user-head">
			<div class="user-head-bg"></div>
			<div class="user-head-main">
				<div class="user-avatar">
					<img v-if="userInfo" class="max" src="http://www.lengziyu.cn/blog/img/avatar.jpg">
					<img v-else class="max notLogin" src="@/assets/images/user.png">
				</div>
				<div class="user-infos">
					<span class="user-name">{{ userInfo?userInfo.username:$t('user.header.loginStatus') }}</span>
					<span class="signIn-num">{{ $t('user.header.jifen') }}：{{ userInfo?userInfo.integral:'0' }}</span>
				</div>
				<div class="signIn-btn" v-if="signShow != 'load'">
					<span v-if="!signShow" @click="clickSign">
						<van-icon name="sign" /> {{ $t('user.header.jfSign') }}
					</span>
					<span v-else>
						<van-icon name="edit" /> {{ $t('user.header.jfIsSign') }}
					</span>
				</div>
			</div>
		</div>
		
		<Order-panel />
		
		<Menu-panel :userInfo="userInfo" />
		
		<div class="user-panel">
			<van-cell-group>
				<van-cell :title="$t('user.cells.recommend')" is-link url="/recharge/user/recommend" />
				<van-cell :title="$t('user.cells.jfKou')" is-link url="/recharge/user/texts?type=dikou" />
				<van-cell :title="$t('user.cells.jfGet')" is-link url="/recharge/user/texts?type=integral" />
				<van-cell :title="$t('user.cells.message')" is-link url="/recharge/user/message" />
				<van-cell :title="$t('user.cells.jfList')" is-link url="/recharge/user/jifen" />
				<!-- <van-cell title="常见问题汇总" is-link url="/user/problem" /> -->
				
			</van-cell-group>
		</div>
		
		<div class="user-panel">
			<van-button @click.native="clickLoginOut" color="linear-gradient(to right, #ff6034, #ee0a24)" block>
				
				{{ userInfo?$t('login.getOut'):$t('login.title') }}
			</van-button>
		</div>
		
		<Tabbar />
	</div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
import OrderPanel from './components/OrderPanel.vue'
import MenuPanel from './components/MenuPanel.vue'
import { loginOut } from '@/api/login.js'
import Cookies from 'js-cookie'
import { Toast } from 'vant';
import { isCheckSignin, interSignin } from '@/api/my/index.js'
import { getUserInfo } from '@/api/my/index.js'
export default {
	components: {
		Tabbar,
		OrderPanel,
		MenuPanel
	},
	data() {
		return {
			signShow: 'load',
			userInfo: '',
		}
	},
	mounted() {
		this.userInfo = this.$utils.getStorage('userInfo');
		if(this.userInfo){
			this.getUserInfo();
		}
	},
	methods: {
		
		// 是否已签到
		isCheckSignin() {
			isCheckSignin().then(res=>{
				if(res.errno == 1){
					if(res.data.is_signin == 0){
						this.signShow = false;
					}else{
						this.signShow = true;
					}
				}
			})
		},
		getUserInfo() {
			getUserInfo().then(userRes=>{
				if(userRes.errno == 1){
					this.$utils.setStorage('userInfo', userRes.data);
					this.userInfo = userRes.data;
					this.isCheckSignin();
				}
			})
		},
		// 退出登录
		clickLoginOut() {
			loginOut({}).then(res=>{
				if(res.errno == 1){
					this.$utils.removeStorage('userInfo');
					Cookies.remove('token');
					setTimeout(()=>{
						this.$router.push('/login')
					}, 50)
				}
				
			})
		},
		clickSign() {
			interSignin().then(res=>{
				if(res.errno == 1){
					this.signShow = true;
					Toast('签到成功');
					setTimeout(()=>{
						this.getUserInfo();
					}, 50)
				}
			})
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
			background-color: #fff;
			box-shadow: 0 6px 12px rgba(0,0,0,0.3);
			.notLogin{
				width: 60px;
				height: 60px;
				margin-top: 15px;
			}
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
