<template>
  <div class="container">
	<van-nav-bar
	  title="抽奖获大礼"
	  left-text=""
	  left-arrow
	   
	  @click-left="$router.push('/user')"
	/>
    <div class="lucky-wheel">
      <div class="lucky-title"></div>
      <div class="wheel-main">
        <div class="wheel-pointer" @click="beginRotate()"></div>
        <div class="wheel-bg" :style="rotateStyle">
          <div class="prize-list">
            <div
              class="prize-item"
              v-for="(item,index) in prizeList"
              :key="index"
              :style="item.style"
            >
              <div class="prize-pic">
                <img :src="item.icon" />
              </div>
              <div class="prize-type">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main-bg"></div>
      <div class="bg-p"></div>
      <div class="content">
        <div class="count">您可参加抽奖次数： {{ count}}</div>
      </div>
      <div class="tip">
        <div class="tip-title">活动规则</div>
        <div class="tip-content">
          <p>1.每{{ needIntegral }}积分可以抽取一次幸运大转盘的机会。 </p>
          <p>2.奖品不定时有包括：VIP会员、积分、优惠券、实物等丰富奖品，敬请关注。</p>
		  <p>3.除实物外，其他奖品均自动发放到抽奖账号；实物需要点击领取，选择收货地址后提交即可，快递7个工作日内发放，物流情况请联系客服。</p>
          <p>4.最终解析权归我司所有。</p>
        </div>
      </div>
    </div>
	
	<div class="record-list" v-if="recordList.length != 0">
		<div class="rl-name">
			中奖情况
		</div>
		<ul>
			<li v-for="i in recordList">
				<div class="rl-left">
					<div class="rl-title">
						{{ i.title }}
					</div>
					<div class="rl-date">
						{{ i.created_at }}
					</div>
				</div>
				<div class="rl-right">
					<div class="rl-type">
						<span v-if="i.type == 1">
							vip
						</span>
						<span v-if="i.type == 2">
							积分
						</span>
						<span v-if="i.type == 3">
							优惠券
						</span>
						<span v-if="i.type == 4">
							实物
						</span>
					</div>
					<div class="rl-btn" @click="clickGetBtn(i)" v-if="i.addr_id == 0 && i.type == 4">
						领取
					</div>
					<div class="isGet" v-else-if="i.addr_id != 0 && i.type == 4">
						已领取
					</div>
				</div>
			</li>
		</ul>
	</div>
	
    <div class="toast" v-show="prize">
      <div class="toast-container">
        <img :src="toastIcon" class="toast-picture" />
        <div class="close" @click="closeToast()"></div>
        <div class="toast-title">{{toastTitle}}</div>
      </div>
    </div>
    <div class="toast-mask" v-show="prize"></div>
  </div>
</template>
<script>
// import { prizeList } from './config'
 
import { getUserInfo } from '@/api/my/index.js'
import { 
	LDGetConfig, 
	LDGetTackout,
	LDluckdrawAll,
	LDluckdrawRecord,
	} from '@/api/my/luckdraw.js'
const CIRCLE_ANGLE = 360

const config = {
  // 总旋转时间
  duration: 4000,
  // 旋转圈数
  circle: 8,
  mode: 'ease-in-out'
}

export default {
  data() {
    return {
      count: 0, // 剩余抽奖次数
      duration: 3000, // 转盘旋转时间
      prizeList: [], // 奖品列表
      rotateAngle: 0, // 旋转角度
      index: 0,
      prize: null,
	  needIntegral: '',
	  userInfo: '',
	  ldId: '2',
	  recordList: []
    };
  },
  created() {
    // 初始化一些值
    this.angleList = []
    // 是否正在旋转
    this.isRotating = false
    // 基本配置
    this.config = config
	this.getUserInfo();
    // 获取奖品列表
    this.initPrizeList();
	
	this.LDluckdrawAll();
	this.LDluckdrawRecord();
  },
  computed: {
    rotateStyle () {
      return `
        -webkit-transition: transform ${this.config.duration}ms ${this.config.mode};
        transition: transform ${this.config.duration}ms ${this.config.mode};
        -webkit-transform: rotate(${this.rotateAngle}deg);
            transform: rotate(${this.rotateAngle}deg);`
    },
    toastTitle () {
      return this.prize && this.prize.isPrize === 1
        ? "恭喜您，获得" +
            this.prize.name
        : "未中奖";
    },
    toastIcon() {
      return this.prize && this.prize.isPrize === 1
        ? require("@/assets/images/luckdraw/congratulation.png")
        : require("@/assets/images/luckdraw/sorry.png");
    }
  },
	methods: {
		// 立即领取
		clickGetBtn(i) {
			this.$router.push('/pay/cashier?page=luckdraw&goodsId='+i.id+'&ldGoodsName='+i.title);
		},
		// 中奖记录列表
		LDluckdrawRecord() {
			LDluckdrawRecord({limit: 80, page: 1}).then(res=>{
				console.log(res)
				this.recordList = res.data.data;
			})
		},
		// 所有奖品
		LDluckdrawAll() {
			LDluckdrawAll().then(res=>{
				if(res.errno == 1){
					var myPrizeList = [];
					for (let var1 in res.data) {
						myPrizeList.push({
							id: res.data[var1].id,
							name: res.data[var1].title,
							isPrize: 1,
							icon: require("@/assets/images/luckdraw/VIP.png")
						})
					}
					
					// 谢谢参与的
					for (var i = 0; i < (8 - res.data.length); i++) {
						myPrizeList.push({
							id: 0,
							name: '谢谢参与',
							isPrize: 0,
							icon: require("@/assets/images/luckdraw/xx.png")
						})
					}
					
					this.prizeList = this.formatPrizeList(myPrizeList)
				}
			})
		},
	getUserInfo() {
		getUserInfo().then(userRes=>{
			if(userRes.errno == 1){
				this.userInfo = userRes.data;
				this.LDGetConfig();
			}
		})
	},
	// 需要多少积分
	LDGetConfig() {
		LDGetConfig().then(res=>{
			this.needIntegral = res.data.integral;
			this.count = parseInt(this.userInfo.integral/this.needIntegral);
		})
	},
    initPrizeList() {
      // 这里可以发起请求，从服务端获取奖品列表
      // 这里使用模拟数据

      // this.prizeList = this.formatPrizeList(prizeList)
    },
    // 格式化奖品列表，计算每个奖品的位置
    formatPrizeList (list) {
      // 记录每个奖的位置
      const angleList = []

      const l = list.length
      // 计算单个奖项所占的角度
      const average = CIRCLE_ANGLE / l

      const half = average / 2

      // 循环计算给每个奖项添加style属性
      list.forEach((item, i) => {

        // 每个奖项旋转的位置为 当前 i * 平均值 + 平均值 / 2
        const angle = -((i * average) + half)
        // 增加 style
        item.style = `-webkit-transform: rotate(${angle}deg);
                      transform: rotate(${angle}deg);`

        // 记录每个奖项的角度范围
        angleList.push((i * average) + half )
      })

      this.angleList = angleList

      return list
    },
	rateNum(arr) {
		var array = arr.split(",");           //转化为zhi数组dao
		var value = array[Math.round(Math.random()*(array.length-1))];  //随机抽zhuan取一个值shu
		return value
	},
    beginRotate() {
      // 添加次数校验
      if(this.count === 0) return

      // 开始抽奖
      // 这里这里向服务端发起请求，得到要获得的奖
      // 可以返回下标，也可以返回奖品 id，通过查询 奖品列表，最终得到下标

      // 随机获取下标
      // this.index = this.random(this.prizeList.length - 1);
	  LDGetTackout().then(res=>{
		  if(res.errno == 1){
			  if(res.data.result == 1){
				 this.index = Number(this.rateNum('1,3,5,7'));
			  }else{
				 this.index = Number(this.rateNum('0,2,4,6'));
			  }
			  // 减少剩余抽奖次数
			  this.count--;
			  // 开始旋转
			  this.rotating()
		  }
	  })
	  // this.index = Number(this.rateNum('1,3,5,7'));
	  //   this.count--;
	  //   // 开始旋转
	  //   this.rotating()
    },
    random (max, min = 0) {
      return parseInt(Math.random() * (max - min + 1) + min)
    },
    rotating() {
      const { isRotating, angleList, config, rotateAngle, index } = this

      if (isRotating) return

      this.isRotating = true

      // 计算角度
      const angle =
          // 初始角度
          rotateAngle +
          // 多旋转的圈数
          config.circle * CIRCLE_ANGLE +
          // 奖项的角度
          angleList[index] -
          (rotateAngle % CIRCLE_ANGLE)


        this.rotateAngle = angle

        // 旋转结束后，允许再次触发
        setTimeout(() => {

          this.rotateOver()
        }, config.duration + 1000)
    },
    rotateOver () {
      this.isRotating = false

      this.prize = this.prizeList[this.index]

      console.log(this.prize, this.index)
    },
    //关闭弹窗
    closeToast() {
      this.prize = null;
    }
  }
};
</script>

<style lang="scss" scoped>

.container {
  width: 100%;
  overflow: hidden;
}
.lucky-wheel {
  width: 100%;
  background: rgb(252, 207, 133) url("../../../assets/images/luckdraw/color_pillar.png") no-repeat
    center bottom;
  background-size: 100%;
  padding-top: 20px;
}
.lucky-title {
  width: 100%;
  height: 100px;
  background: url("../../../assets/images/luckdraw/lucky_title.png") no-repeat center center;
  background-size: 100%;
}
.wheel-main {
  margin: 0 auto;
  position: relative;
  width: 295px;
  height: 295px;
}
.wheel-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: url("../../../assets/images/luckdraw/draw_wheel.png") no-repeat center top;
  background-size: 100%;
  color: #fff;
}
.wheel-pointer {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  width: 85px;
  height: 85px;
  background: url("../../../assets/images/luckdraw/draw_btn.png") no-repeat center top;
  background-size: 100%;
  transform: translate3d(-50%, -50%, 0);
}
.wheel-bg div {
  text-align: center;
}
.prize-type{
	margin-top: 5px;
}
.prize-list {
  width: 100%;
  height: 100%;
  position: relative;
}
.prize-list .prize-item {
  position: absolute;
  width: 95px;
  height: 150px;
  top: 0;
  left: 50%;
  font-size: 12px;
  margin-left: -47.5px;
  transform-origin: 50% 100%;
}

.prize-pic img {
  width: 40px;
  height: 40px;
  margin-top: 25px;
}
.prize-count {
  /* font-size: 0.875rem; */
}
.prize-type {
  /* font-size: 0.75rem; */
}
.main {
  position: relative;
  width: 100%;
  min-height: 260px;
  background: rgb(243, 109, 86);
  padding-bottom: .6rem;
}
.main-bg {
  width: 100%;
  height: 300px;
  position: absolute;
  top: -50px;
  left: 0;
  background: url("../../../assets/images/luckdraw/luck_bg.png") no-repeat center top;
  background-size: 100%;
}
.bg-p {
  width: 100%;
  height: 2.95rem;
  background: rgb(252, 207, 133);
}
.content {
  position: absolute;
  top: 0.475rem;
  left: 0;
  background: rgb(243, 109, 86);
  width: 100%;
  height: 300px;
  font-size: 14px;
  color: #ffeb39;
  /* padding-left: 6.75rem; */
  text-align: center;
}
.content div {
  text-align: center;
  margin-top: 1rem;
}
.tip {
  position: relative;
  margin: 20px auto 0;
  width: 240px;
  border: 1px solid #fbc27f;
}
.tip-title {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 15px;
  color: #fccc6e;
  background: rgb(243, 109, 86);
  padding: 0.3125rem 0.625rem;
}
.tip-content {
  padding: 10px 0.325rem;
  font-size: 14px;
  color: #fff8c5;
  line-height: 1.5;
}
.toast-mask {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  width: 100%;
  height: 100%;
}
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 20000;
  transform: translate(-50%, -50%);
  width: 240px;
  background: #fff;
  border-radius: 0.3125rem;
  padding: 0.3125rem;
  background-color: rgb(252, 244, 224);
}
.toast-container {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px dotted #fccc6e;
}
.toast-picture {
  position: absolute;
  top: -10px;
  left: 10px;
  width: 220px;
  height: 70px;
}
.toast-pictrue-change {
  position: absolute;
  top: -20px;
  left: -10px;
  width: 180px;
  height: 70px;
}
.toast-title {
  padding: 52px 0;
  padding-top: 80px;
  font-size: 18px;
  color: #fc7939;
  text-align: center;
}
.toast-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}
.toast-btn div {
  background-image: -moz-linear-gradient(
    -18deg,
    rgb(242, 148, 85) 0%,
    rgb(252, 124, 88) 51%,
    rgb(252, 124, 88) 99%
  );

  background-image: -ms-linear-gradient(
    -18deg,
    rgb(242, 148, 85) 0%,
    rgb(252, 124, 88) 51%,
    rgb(252, 124, 88) 99%
  );
  background-image: -webkit-linear-gradient(
    -18deg,
    rgb(242, 148, 85) 0%,
    rgb(252, 124, 88) 51%,
    rgb(252, 124, 88) 99%
  );
  box-shadow: 0px 4px 0px 0px rgba(174, 34, 5, 0.7);
  width: 180px;
  height: 50px;
  border-radius: 180px;
  text-align: center;
  line-height: 50px;
  color: #fff;
}
.close {
  position: absolute;
  top: -16px;
  right: -16px;
  width: 34px;
  height: 34px;
  background: url("../../../assets/images/luckdraw/close_store.png") no-repeat center top;
  background-size: 100%;
}
.record-list{
	background-color: #f36d56;
	color: #fff8c5;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 40px;
	.rl-name{
		text-align: center;
		font-size: 15px;
		font-weight: bold;
		margin-bottom: 0.4rem;
		color: #fccc6e;
	}
	.rl-left{
		float: left;
		.rl-title{
			font-weight: bold;
			font-size: 13px;
			margin-bottom: 3px;
			color: #fff;
		}
		.rl-date{
			font-size: 10px;
			color: #f2f2f2;
		}
	}
	.rl-right{
		float: right;
		
		font-size: 12px;
		.rl-type{
			float: left;
			margin-right: 20px;
			margin-top: 10px;
		}
		.rl-btn{
			float: left;
			background-color: #fff;
			color: red;
			padding: 4px 6px;
			border-radius: 4px;
			margin-top: 5px;
		}
		.isGet{
			float: left;
			margin-top: 10px;
			color: #f2f2f2;
			font-size: 12px;
		}
	}
	ul>li{
		border-bottom: 1px solid rgba(255,248,197,.4);
		overflow: hidden;
		margin-bottom: .2rem;
		padding-bottom: .2rem;
	}
}
</style>
