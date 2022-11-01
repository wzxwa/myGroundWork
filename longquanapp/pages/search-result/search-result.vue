<template>
	<view class="search-result">
		<view v-for="(item,index) in resData" :key="index">
			<view v-if="item.type === 'place'">
				<Place :data="item"></Place>
				<Lines></Lines>
			</view>
			<view v-if="item.type === 'web'">
				<Event :data="item"></Event>
				<Lines></Lines>
			</view>
		</view>
	</view>
</template>

<script>
	
	import $http from "@/static/api/request.js"
	import Lines from "@/components/common/Lines.vue"
	import Place from "@/components/common/Place.vue"
	import Event from "@/components/common/Event.vue"
	
	export default {
		data() {
			return {
				keyword:"",
				resData:{}
			}
		},
		onLoad(e) {
			//这里的e是通过uni.redirectTo()方法传的关键词
			this.keyword = e.keyword;
			this.search();
		},
		onNavigationBarButtonTap(e) {
			if(e.float == "right"){
				this.search();
			}
		},
		onNavigationBarSearchInputConfirmed() { //监听软件盘的搜索点击事件
			this.search();
		},
		onNavigationBarSearchInputChanged(e) {
			this.keyword = e.text;        
		},
		methods: {
			search(){
				if(this.keyword === ""){
					return uni.showToast({
						title:"关键词不能为空",
						icon:"none"
					})
				}else{
					//重新渲染数据
					//将搜索词存到全局变量中
					if (getApp().globalData.keywords.indexOf(this.keyword) == -1){
						getApp().globalData.keywords.push(this.keyword);
						uni.setStorage({
							key:'searchData',
							data:JSON.stringify(getApp().globalData.keywords)
						})
					}
					
					$http.request({
						url:"/goods/search",
						data:{
							keyword:this.keyword
						}
					}).then((res)=>{
						this.resData = res.data;
					}).catch(()=>{
					})
				}		
			}
		},
		components:{
			Lines,
			Place,
			Event
		}
	}
</script>

<style scoped>
</style>
