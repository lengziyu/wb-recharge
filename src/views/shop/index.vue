<template>
	<div>
		<div class="user-panel">
			<div class="re-title">
				2000神券适用
			</div>
			<div class="jf-list">
				<ul>
					<li v-for="i in 3">
						<Item />
					</li>
				</ul>
			</div>
			
			<div class="re-title">
				1000神券适用
			</div>
			<div class="jf-list">
				<ul>
					<li v-for="i in 6">
						<Item />
					</li>
				</ul>
			</div>
			
			<div class="re-title">
				5000神券适用
			</div>
			<div class="jf-list">
				<ul>
					<li v-for="i in 2">
						<Item />
					</li>
				</ul>
			</div>
		</div>
		<Tabbar />
	</div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
import Item from './components/Item.vue'
export default {
	components: {
		Tabbar,
		Item
	},
	data() {
		return {
			
		}
	},
	mounted() {
		
	},
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>
.jf-list{
	ul{
		overflow: hidden;
		margin-bottom: 10px;
	}
	ul > li{
		float: left;
		width: 29.33%;
		background-color: #fff;
		border-radius: 8px;
		overflow: hidden;
		padding: 1%;
		margin: 1%;
	}
}
</style>
