<template>
	<view class="page">	
		<test></test>
		<coverview class="where">{{where}}</coverview>
		<swiper indicator-dots="true" class="swiper">
			<swiper-item v-for="(img,key) in imgUrls" :key="key" @click="itemclick" ><image :src="img.url" :id="img.id" class="images"/></swiper-item>
		</swiper>
		<Icons></Icons>
		<Tips :tipList="tipList"></Tips>
		<TopPage :pageList='topBar' :pageIndex="topBarIndex" @pageChange = "pageChange" :pages="newTopBar" :clentHeight="clentHeight">			
		</TopPage>
		
<!-- 		<Recommend></Recommend>
		<Card cardTitle="附近推荐"></Card>
		<ActivityList></ActivityList> -->
		
	</view>
</template>

<script>
	import $http from "@/static/api/request.js"
	import Recommend from '@/components/common/Recommend.vue'
	import Card from '@/components/common/Card.vue'
	import ActivityList from '@/components/common/ActivityList.vue'
	import Icons from '@/components/common/Icons.vue'
	import Tips from '@/components/common/Tips.vue'
	import TopPage from '@/components/common/TopPage.vue'
	
	export default {
		data() {
			return {
				showSwiper : false,
				imgUrls : [],
				// 选中的索引
				topBarIndex:0,
				// pageList栏数据
				topBar:[],
				//承载数据
				newTopBar:[],
				tipList:[],
				clentHeight:0,
				where:""
			}
		},
		onLoad() {
			
			this.__init();
			
		},
		onReady() { 			
			uni.getSystemInfo({ //获取系统的信息
				success: (res) => {
					this.clentHeight = res.windowHeight - uni.upx2px(80);
				}
			})
			uni.getLocation({
				type:"gcj02",
				geocode:true,
				success: function (res) {
					this.where = res.address.poiName;
				}
			})
		},
		onNavigationBarButtonTap(e) {
			//只能获取顶部的文字点击事件
			if(e.float ===  "right"){
				uni.scanCode({
					success: function (res) {
							console.log('条码类型：' + res.scanType);
							console.log('条码内容：' + res.result);
						}
				})
			}
			else if(e.float === "left"){
				uni.getLocation({
					type:"gcj02",
					geocode:true,
					success: function (res) {
							this.where = res.address.poiName;
							console.log(this.where);
					}
				})
				
			}
		},
		onNavigationBarSearchInputClicked(e) {
			uni.navigateTo({
				url:"/pages/search/search"
			})
		},
		methods: {
			//监听轮播图对象
			itemclick(e){
				let i = e.target.id - 1;
				getApp().globalData.href = this.imgUrls[i].href;
				if(this.imgUrls[i].type === "web")
				{
					uni.navigateTo({
						url:"/pages/webView/webView"
					})
				}
				if(this.imgUrls[i].type === "video")
				{
					uni.navigateTo({
						url:"/pages/videoView/videoView"
					})
				}
			},
			pageChange(index){
				if (this.topBarIndex === index){
					return;
				}
				this.topBarIndex = index;
			},
			__init(){	
				
				$http.request({
					url:"/index_list/data"
				}).then((res)=>{
					this.topBar = res.data.topBar;
					//console.log(this.topBar); //头部的列表
					this.newTopBar = this.initData(res.data);
					//console.log(this.newTopBar); //所有的数据
					this.imgUrls = res.data.data[0].data;
					this.tipList = res.data.data[5].data;
					// console.log(this.tipList);
					// console.log(this.newTopBar[0].data.data[0].imgUrl);
				}).catch(()=>{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				})
			},
			initData(res){
				let arr = [];
				for(let i=0; i<this.topBar.length; i++){
					let obj = {
						data:[]
					}
					
					if(i==0){
						obj.data = res.data[1];
					}
					else if(i==1){
						obj.data = res.data[2];
					}
					else if(i==2){
						obj.data = res.data[3];
					}
					else if(i==3){
						obj.data = res.data[4];
					}
					
					arr.push(obj);
				}
				return arr;
			}
		},
		components:{
			Recommend,
			Card,
			ActivityList,
			Icons,
			Tips,
			TopPage,
		}
	}
</script>
	
<style>
	.swiper,
	.images{
		width:100%;
		height:400upx;
	}
	.where{
		position: fixed;
		top: 0;
		left: 0;
		height: 50px;
		background-color: hsla(120,100%,50%,0.3);
		width: 300px;
		z-index: 2147483647;
	}
</style>
