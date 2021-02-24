<template>
	<div>
		<van-nav-bar
		  title="收货地址管理"
		  left-text=""
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
		
		<div class="padding-head"></div>
		
		  <van-list
		    v-model="loading"
		    :finished="finished"
		    :finished-text="total === 0?'':'没有更多了'"
		    @load="onLoad"
		  >
		    <van-address-list
		      v-model="chosenAddressId"
		      :list="list"
		      :switchable="switchable"
		      default-tag-text="默认"
		      @add="onAdd"
		      @edit="onEdit"
		      add-button-text="新增地址"
		    />
		  </van-list>
		
		
		<van-empty v-if="total === 0" description="暂无收货地址" />
	</div>
</template>

<script>
 
import { addressList } from '@/api/my/address.js'
export default {
  data() {
	return {
		chosenAddressId: '',
		list: [],
		switchable: false,
		showNoting: false,
		listQuery: {
			limit: 10,
			page: 1
		},
		loading: false,
		finished: false,
		total: '',
		};
	},
	  mounted() {
		// this.addressList();  
	  },
	  methods: {
		onLoad() {
			if (this.refreshing) {
				this.list = [];
				this.refreshing = false;
			}
			this.addressList();
		},
	    onAdd() {
			this.$router.push('/user/address/add');
	    },
	    onEdit(item, index) {
			this.$router.push('/user/address/add?id='+item.id);
	    },
		async getList() {
		    let { data: res } = await addressList({ 
			  page: this.listQuery.page,
			  limit: this.listQuery.limit,
		  })
		  if (res.length === 0) {  		// 判断获取数据条数若等于0
			this.list = [];				// 清空数组
			this.finished = true;		// 停止加载
		  }
		  // 若数据条数不等于0
		  this.total = res.total;		// 给数据条数赋值
		  let resList = res.data;
		  for (var i = 0; i < resList.length; i++) {
		  	this.list.push({
		  		id: resList[i].id,
		  		name: resList[i].receipt,
		  		tel: resList[i].phone,
		  		address: resList[i].province+resList[i].city+resList[i].county+resList[i].addr,
		  		isDefault: resList[i].isDefault == 1?true:false,
		  	})
		  }
		  
		  this.loading = false;			// 加载状态结束 
		  // 如果list长度大于等于总数据条数,数据全部加载完成
		  if (this.list.length >= res.total) {
			  this.finished = true;		// 结束加载状态
		  }
		},
		onLoad() { // 若加载条到了底部
		  let timer = setTimeout(() => {	// 定时器仅针对本地数据渲染动画效果,项目中axios请求不需要定时器
			this.getList();					// 调用上面方法,请求数据
			this.page++;					// 分页数加一
			this.finished && clearTimeout(timer);//清除计时器
		  }, 100);
		},
	  },
	};
</script>

<style lang="scss">
.van-address-list__bottom{
	background: none;
}
</style>
