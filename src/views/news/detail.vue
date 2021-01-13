<template>
	<div>
		<van-nav-bar
		  title="网站公告详情"
		  left-text=""
		  left-arrow
		   
		  @click-left="$utils.routeBack"
		/>
		<div class="padding-head">
			
		</div>
		
		<div class="my-news-panel">
			<h2 class="tcenter">
				{{ title }}
			</h2>
			<div class="content" v-html="content">
				
			</div>
		</div>
	</div>
</template>

<script>
import { Toast } from 'vant';
import { notifyDetail } from '@/api/news.js'
export default {
  data() {
    return {
		title: '',
		id: this.$route.query.id,
		content: ''
	}
  },
  mounted() {
	this.notifyDetail();
  },
  methods: {
	  notifyDetail() {
		  notifyDetail({
			  id: this.id
		  }).then(res=>{
			  if(res.errno == 1){
				  this.title = res.data.title;
				  this.content = res.data.content;
			  }
		  })
	  }
  }
}
</script>

<style lang="scss" scoped>
.my-news-panel{
	background-color: #fff;
	padding: 15px 10px;
	font-size: 14px;
	line-height: 20px;
	color: #333;
}
.content{
	color: #555;
}
</style>
