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
		  show-delete
		  show-set-default
		  show-search-result
		  :search-result="searchResult"
		  :area-columns-placeholder="['请选择', '请选择', '请选择']"
		  @save="onSave"
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
      searchResult: [],
	  id: this.$route.query.id,
    };
  },
   methods: {
     onSave() {
       Toast('save');
     },
     onDelete() {
       Toast('delete');
     },
     onChangeDetail(val) {
       if (val) {
         this.searchResult = [
           {
             name: '黄龙万科中心',
             address: '杭州市西湖区',
           },
         ];
       } else {
         this.searchResult = [];
       }
     },
   },
 };
</script>

<style>
</style>
