<template>
	<div>
		<van-nav-bar
		  :title="id?'编辑收货地址':'新增收货地址'"
		  left-text=""
		  left-arrow
		  @click-left="$utils.routeBack"
		/>
		<van-address-edit
		  :area-list="areaList"
		  show-postal
		  :show-delete="id?true:false"
		  show-set-default
		  :area-columns-placeholder="['请选择', '请选择', '请选择']"
		  @save="onSave"
		  @change-area="changeArea"
		  :address-info="info"
		  @delete="onDelete"
		  @change-detail="onChangeDetail"
		/>
	</div>
</template>

<script>
import { Toast } from 'vant';
import areaList from '@/assets/json/area.js'
export default {
  data() {
    return {
      areaList: areaList,
	  id: this.$route.query.id,
	  info: {
		  id: this.$route.query.id,
		  tel: '',
		  province: '',
		  city: '',
		  county: '',
		  addressDetail: '',
		  areaCode: '',
		  postalCode: '',
		  isDefault: ''
	  }
    };
  },
   methods: {
     onSave() {
       Toast('save');
     },
     onDelete() {
       Toast('delete');
     },
	 changeArea(e) {
		 console.log(e)
	 }
   },
 };
</script>

<style>
</style>
