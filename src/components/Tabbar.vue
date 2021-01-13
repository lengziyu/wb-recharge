<template>
	<div class="tabbar">
		<van-tabbar route>
		  <van-tabbar-item icon="home-o" replace to="/product">{{$t('tabbar.cp')}}</van-tabbar-item>
		  <van-tabbar-item icon="point-gift-o" replace to="/shop">{{$t('tabbar.jf')}}</van-tabbar-item>
		  <van-tabbar-item icon="newspaper-o" replace to="/news">{{$t('tabbar.news')}}</van-tabbar-item>
		  <van-tabbar-item icon="user-o" replace to="/user">{{$t('tabbar.my')}}</van-tabbar-item>
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
.van-tabbar{
	height: 1.5rem;
}
.van-tabbar-item__icon{
	font-size: 28px;
}
.van-tabbar-item{
	font-size: .36rem;
}
</style>
