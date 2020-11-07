<template>
	<div class="tabbar">
		<van-tabbar route>
		  <van-tabbar-item icon="home-o" replace to="/product">产品中心</van-tabbar-item>
		  <van-tabbar-item icon="point-gift-o" replace to="/shop">积分商城</van-tabbar-item>
		  <van-tabbar-item icon="newspaper-o" replace to="/news">网站资讯</van-tabbar-item>
		  <van-tabbar-item icon="user-o" replace to="/user">会员中心</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
export default {
  data() {
    return {
      // active: 0,
    };
  },
};
</script>

<style lang="scss">
.tabbar{
	// z-index: 99999;
}
.van-tabbar--fixed{
	z-index: 99999;
}
</style>
