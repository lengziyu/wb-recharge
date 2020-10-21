<template>
	<div>
		<van-nav-bar
		  title="收货地址管理"
		  left-text=""
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
		
		<van-address-list
		  v-model="chosenAddressId"
		  :list="list"
		  default-tag-text="默认"
		  @add="onAdd"
		  @edit="onEdit"
		  add-button-text="新增地址"
		/>
	</div>
</template>

<script>
import { Toast } from 'vant';

export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
	      ],
	    };
	  },
	  methods: {
	    onAdd() {
	      this.$router.push('/user/address/add');
	    },
	    onEdit(item, index) {
	      this.$router.push('/user/address/add?id='+item.id);
	    },
	  },
	};
</script>

<style lang="scss">
.van-address-list__bottom{
	background: none;
}
</style>
