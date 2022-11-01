<template>
	<view class="index-page">
			<view v-for="(item,index) in indexs" :key="index">
				<text :class='pageIndex===index? "selected-index-text":"unselected-index-text"' @tap="changePage(index)">
					{{item.name}}
				</text>
			</view>
	</view>

	<view class="scroll-content" v-if="pageIndex === 0">
		<scroll-view scroll-x="true" class="scroll-content">
			<view v-for="(item,index) in spots" :key="index" class="scroll-item">				
				<text :class='spotIndex===index? "selected-page":"unselected-page"' @tap="changeSpot(index)">
					{{item.name}}
				</text>	
			</view>
		</scroll-view>
	</view>
				
	<view class="map-page" id="spots-map">
		<map class="map" :style="'height:'+clentHeight+'px;'" :markers="spots[0].points"
		:controls="controls" @controltap="controltap" :enable-satellite="false"></map>
	</view>

	<cover-view class="button-left" @click="former" v-if="showRoads === true"></cover-view>
	<cover-image class="roads-img" src="../../static/images/default.png" :style="'width:'+roadsWidth+'px;'" v-if="showRoads === true"></cover-image>	
	<cover-view class="button-right" @click="latter" v-if="showRoads === true"></cover-view>
	
		
</template>

<script>
	import $http from "@/static/api/request.js"
	
	export default {
		data() {
			return {
				clentHeight:0,
				pageIndex:0,
				spotIndex:0,
				roadsWidth:0,
				roadsIndex:0,
				showRoads:false,
				indexs:[
					{name:"游美景"},
					{name:"品人文"},
					{name:"寻美食"},
					{name:"住民宿"}
				],
				otherpoints:[
					{
						name:"人文",
						points:[
							{
								id: 1,
								title: '1', // String
								latitude: 39.90,
								longitude: 116.39,
								callout: {
									content: '人文1',
								},
								label: {
									content: '人文1'
								},
								iconPath: '../../static/images/point.png'
							},
							{
								id: 2,
								title: '2', // String
								latitude: 39.90,
								longitude: 116.40,
								callout: {
									content: '人文2',
								},
								label: {
									content: '人文2'
								},
								iconPath: '../../static/images/point.png'
							},
						]
					},
					{
						name:"美食",
						points:[
							{
								id: 1,
								title: '1', // String
								latitude: 39.90,
								longitude: 116.39,
								callout: {
									content: '美食1',
								},
								label: {
									content: '美食1'
								},
								iconPath: '../../static/images/point.png'
							},
							{
								id: 2,
								title: '2', // String
								latitude: 39.90,
								longitude: 116.40,
								callout: {
									content: '美食2',
								},
								label: {
									content: '美食2'
								},
								iconPath: '../../static/images/point.png'
							},
						]
					},
					{
						name:"住宿",
						points:[
							{
								id: 1,
								title: '1', // String
								latitude: 39.90,
								longitude: 116.39,
								callout: {
									content: '住宿1',
								},
								label: {
									content: '住宿1'
								},
								iconPath: '../../static/images/point.png'
							},
							{
								id: 2,
								title: '2', // String
								latitude: 39.90,
								longitude: 116.40,
								callout: {
									content: '住宿2',
								},
								label: {
									content: '住宿2'
								},
								iconPath: '../../static/images/point.png'
							},
						]
					},
				],
				spots:[
					{
						name:"景区1",
						points:[
							{
								id: 1,
								title: '1', // String
								latitude: 39.90,
								longitude: 116.39,
								callout: {
									content: '腾讯地图',
								},
								label: {
									content: '高德地图'
								},
								iconPath: '../../static/images/point.png'
							},
							{
								id: 2,
								title: '2', // String
								latitude: 39.90,
								longitude: 116.40,
								callout: {
									content: '腾讯地图',
								},
								label: {
									content: '高德地图'
								},
								iconPath: '../../static/images/point.png'
							},
							{
								id: 3,
								title: '3', // String
								latitude: 39.90,
								longitude: 116.41,
								callout: {
									content: '腾讯地图',
								},
								label: {
									content: '高德地图'
								},
								iconPath: '../../static/images/point.png'
							}
						]
					},
					{
						name:"景区2",
						points:[
							{
								id: 1,
								title: '1', // String
								latitude: 39.95,
								longitude: 116.39,
								callout: {
									content: '腾讯地图',
								},
								label: {
									content: '高德地图'
								},
								iconPath: '../../static/images/point.png'
							},
							{
								id: 2,
								title: '2', // String
								latitude: 40,
								longitude: 116.39,
								callout: {
									content: '腾讯地图',
								},
								label: {
									content: '高德地图'
								},
								iconPath: '../../static/images/point.png'
							},
							{
								id: 3,
								title: '3', // String
								latitude: 40.05,
								longitude: 116.39,
								callout: {
									content: '腾讯地图',
								},
								label: {
									content: '高德地图'
								},
								iconPath: '../../static/images/point.png'
							}
						]
					},
				],
				controls:[
					{
						id:0,
						position:{
							left:300,
							top:20,
							width:40,
							height:40
						},
						iconPath:"../../static/images/search.png",
						clickable:true
					},
					{
						id:1,
						position:{
							left:300,
							top:80,
							width:45,
							height:45
						},
						iconPath:"../../static/images/loca.png",
						clickable:true
					},
					{
						id:2,
						position:{
							left:20,
							top:20,
							width:45,
							height:45
						},
						iconPath:"../../static/images/roads.png",
						clickable:true
					},
				],
			}
		},
		onLoad() {
			uni.getSystemInfo({ //获取系统的信息
				success: (res) => {
					this.clentHeight = res.windowHeight - uni.upx2px(240);
					this.roadsWidth = res.windowWidth - uni.upx2px(270);
				}
			})
			
			$http.request({
				url:"/map/points"
			}).then((res)=>{
				
			}).catch(()=>{
				
			})
		},
		methods:{
			changePage(index){
				if (this.pageIndex === index){
					return;
				}
				this.pageIndex = index;
			},
			changeSpot(index){
				if (this.spotIndex === index){
					return;
				}
				this.spotIndex = index;
			},
			controltap(e){
				if(e.detail.controlId === 1)
				{	
					uni.getLocation({
						type: 'gcj02', //高德用的火星坐标系，谷歌用的wgs84坐标系
						success: (res)=>{  //写成箭头函数可以解决this的指向问题，方便修改Vue实例的属性
							this.longitude= res.longitude;
							this.latitude = res.latitude;
						}
					});
				}
				else if(e.detail.controlId === 0)		
				{
					uni.navigateTo({
						url:"/pages/findPlaces/findPlaces"
					})
				}
				else if(e.detail.controlId === 2)		
				{
					this.showRoads = !this.showRoads;
				}
			},
			former(){
				this.roadsIndex--;
				console.log(this.roadsIndex);
			},			
			latter(){
				this.roadsIndex++;
				console.log(this.roadsIndex);
			}
		}
	}
</script> 
<style scoped>
	.map{
		width: 100%;
		display: block;
	}
	.selected-index-text{
		color: #00B2C2;
		display: inline-block;
		padding: 10rpx 30rpx;
		font-size: 36rpx;
		border-bottom: 6rpx solid #00B2C2;
	}
	.unselected-index-text{
		color: #3f3f3f;
		display: inline-block;
		padding: 10rpx 30rpx;
		font-size: 36rpx;
	}
	.index-page{
		display: flex;
		justify-content: space-around;
	}
	.scroll-content{
		width: 100%;
		height: 80rpx;
		white-space: nowrap;
	}
	.scroll-item{
		display: inline-block;
		padding: 10rpx 30rpx;
		font-size: 36rpx;
	}
	
	
    .button-right{
        position: fixed;
        bottom: 0;
		right: 0;
        height: 200px;
        background-color: hsla(120,100%,50%,0.3);
        width: 60px;
	}
	.button-left{
		position: fixed;
		bottom: 0;
		left: 0;
		height: 200px;
		background-color: hsla(120,100%,50%,0.3);
		width: 60px;
	}	
	.roads-img{
		position: fixed;
		bottom: 81px;
		left: 60px;
		height: 110px;
		width: 60px;
		border:5px solid red;
		border-radius: 15px;
	}
</style>
