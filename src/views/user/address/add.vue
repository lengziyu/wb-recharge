<template>
	<div>
		<van-nav-bar
		  :title="id?'编辑收货地址':'新增收货地址'"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		<div class="padding-head">
			
		</div>
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
import { addressDel, addressAdd, addressInfo, addressEdit } from '@/api/my/address.js'
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
		  name: '',
		  isDefault: ''
	  }
    };
  },
  mounted() {
  	// this.addressInfo();
  },
   methods: {
	 addressInfo() {
		addressInfo({
			id: this.id,
		}).then(res=>{
			let addrInfo = res.data;
			this.info.name = addrInfo.receipt;
			this.info.tel = addrInfo.phone;
			this.info.addressDetail = addrInfo.addr;
			this.info.postalCode = addrInfo.postcode;
		}) 
	 },  
     onSave() {
		if(this.id){
			addressEdit({
				id: this.id,
				receipt: this.info.name,
				phone: this.info.tel,
				addr: this.info.province+' '+this.info.city+' '+ this.info.county +' '+this.info.addressDetail,
				postcode: this.info.postalCode,
			}).then(res=>{
					   
			})
		}else{
			addressAdd({
				receipt: this.info.name,
				phone: this.info.tel,
				addr: this.info.province+' '+this.info.city+' '+ this.info.county +' '+this.info.addressDetail,
				postcode: this.info.postalCode,
			}).then(res=>{
					   
			})
		}

     },
     onDelete() {
		 addressDel({
		   	id: this.id,
		   }).then(res=>{
		 	Toast('删除成功');
		 	setTimeout(()=>{
		 		this.$router.push('/user/address')
		 	}, 1500)
		  })
     },
	 changeArea(e) {
		 console.log(e)
	 }
   },
 };
</script>

<style>
</style>
