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
		  @change-default="onChangeDefault"
		/>
	</div>
</template>

<script>
 
import areaList from '@/assets/json/area.js'
import { addressDel, addressAdd, addressInfo, addressEdit } from '@/api/my/address.js'
export default {
  data() {
    return {
      areaList: areaList,
	  id: this.$route.query.id,
	  comefrom: this.$route.query.comefrom,
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
		  isDefault: false, 
	  },
	  currentAddr: '',
	  goodsId: this.$route.query.goodsId,
	  goodsNum: this.$route.query.goodsNum,
	  page: this.$route.query.page
    };
  },
  mounted() {
	  if(this.id){
		this.addressInfo();  
	  }
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
			this.info.isDefault = addrInfo.isDefault == 1?true:false;
			this.info.province = addrInfo.province;
			this.info.city = addrInfo.city;
			this.info.county = addrInfo.county;
			this.info.areaCode = addrInfo.areaCode;
		}) 
	 },  
     onSave(e) {
		if(this.id){
			addressEdit({
				id: this.id,
				receipt: e.name,
				phone: e.tel,
				province: e.province,
				city: e.city,
				county: e.county,
				isDefault: e.isDefault?1:0,
				addr: e.addressDetail,
				areaCode: e.areaCode,
				postcode: e.postalCode,
			}).then(res=>{
				vant.Toast('修改成功');
				setTimeout(()=>{
					this.$router.push('/user/address?f='+this.comefrom+'&goodsId='+this.goodsId
					+'&goodsNum='+this.goodsNum
					+'&page='+this.$route.query.page
					)
				}, 1500)	   
			})
		}else{
			addressAdd({
				receipt: e.name,
				phone: e.tel,
				province: e.province,
				city: e.city,
				county: e.county,
				isDefault: e.isDefault?1:0,
				addr: e.addressDetail,
				areaCode: e.areaCode,
				postcode: e.postalCode,
			}).then(res=>{
				if(res.errno == 1){
					vant.Toast('新增成功');
					setTimeout(()=>{
						this.$router.push('/user/address?f='+this.comefrom+'&goodsId='+this.goodsId
						+'&goodsNum='+this.goodsNum
						+'&page='+this.$route.query.page
						)
					}, 1500)
				}
			})
		}

     },
     onDelete() {
		 addressDel({
		   	id: this.id,
		   }).then(res=>{
			if(res.errno == 1){
				vant.Toast('删除成功');
				setTimeout(()=>{
					this.$router.push('/user/address?f='+this.comefrom+'&goodsId='+this.goodsId
					+'&goodsNum='+this.goodsNum
					+'&page='+this.$route.query.page
					)
				}, 1500)
			}
		  })
     },
	 changeArea(e) {
		 console.log(e)
		 this.currentAddr = e;
	 },
	 onChangeDefault(e) {
		 // this.info.isDefault = e;
	 }
   },
 };
</script>

<style>
</style>
