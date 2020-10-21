<template>
	<div>
		<van-button type="primary" @click.native="changeLang">切换语言</van-button>
		<div>{{$t('aa')}}</div>
		
		<router-link :to="{ path: '/user'}">会员中心</router-link>
	</div>
</template>

<script>
// @ is an alias to /src
import { Toast } from 'vant';

export default {
  name: "Home",
  components: {
    
  },
  methods:{
	  clickTa() {
		  Toast('提示内容')
	  },
	  changeLang () {
		const temp = this.$i18n.locale
		if (temp === 'cn') {
		  this.$i18n.locale = 'en'
		} else {
		  this.$i18n.locale = 'cn'
		}
	  }
  }
};
</script>
