<template>
	<div>
		<van-nav-bar
		  :title="title"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		<div class="user-panel padding-head">
			<div class="content" v-if="type == 'dikou'" v-html="content">
				
			</div>
			<div class="content" v-else v-html="content2">
				
			</div>
		</div>
	</div>
</template>

<script>
 
import { integralConfig } from '@/api/my/index.js'

export default {
	name: "",
	components: {
	
	},
	data() {
		return {
			title: '',
			type: this.$route.query.type,
			content2: '',
			content: ''
		}
	},
	mounted() {
		this.integralConfig()
		if(this.type == 'dikou'){
			this.title = "积分抵扣规则"
		}else{
			this.title = "积分获取方式"
		}
	},
	methods:{
		integralConfig() {
			integralConfig().then(res=>{
				if(res.errno == 1){
					if(this.type == 'dikou'){
						this.content = res.data.use_content;
					}else{
						this.content2 = res.data.get_content;
					}
				}
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.content{
	background-color: #fff;
	padding: 15px 10px;
	font-size: 14px;
	line-height: 20px;
	color: #555;
}
</style>
