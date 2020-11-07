<template>
	<div>
		<van-nav-bar
		  title="收货地址管理"
		  left-text=""
		   
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
		<div class="padding-head">
			
		</div>
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
import { addressList } from '@/api/my/address.js'
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
		  listQuery: {
			  limit: 10,
			  page: 1
		  }
	    };
	  },
	  mounted() {
		this.addressList();  
	  },
	  methods: {
	    onAdd() {
			this.$router.push('/user/address/add');
	    },
	    onEdit(item, index) {
			this.$router.push('/user/address/add?id='+item.id);
	    },
		addressList() {
			addressList(this.listQuery).then(res=>{
				
			})
		}
	  },
	};
</script>

<style lang="scss">
.van-address-list__bottom{
	background: none;
}
</style>
