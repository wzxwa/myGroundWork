<template>
	<view class="activity" :style="'flex-wrap:'+wrap+';'">
		<!-- 单个活动组件 -->
		<view class="activity-item" v-for="(item,index) in dataList" :key="index" :style="'width:'+itemW+';'">
			<view @click="itemclick(item)">
				<image class="activity-img" :src="item.imgUrl" :style="'height:'+bigH+';'"></image>
				<view class="activity-content">
					<text class="activity-name" :style="'font-size:'+nameSize+';'">{{item.name}}</text>
					<view>
						<text class="activity-desc">{{item.desc}}</text>
					</view>
				</view>
			</view>		
		</view>
		
	</view>
</template>

<script>
	export default{
		props:{
			dataList:Array,
			wrap:{
				type:String,
				default:"wrap"
			},
			itemW:{
				type:String,
				default:"375rpx"
			},
			bigH:{
				type:String,
				default:"375rpx"
			},
			nameSize:{
				type:String,
				default:"26rpx"
			}
		},
		methods:{
			itemclick(e){
				getApp().globalData.href = e.href;
				if(e.type === "web")
				{
					uni.navigateTo({
						url:"/pages/webView/webView"
					})
				}
				if(e.type === "video")
				{
					uni.navigateTo({
						url:"/pages/videoView/videoView"
					})
				}
				if(e.type === "place")
				{
					console.log(getApp().globalData.href);
				}
			}
		}
	}
</script>

<style scoped>
	.activity{
		display: flex;
	}
	.activity-item{
		padding-bottom: 20rpx;
	}
	.activity-img{
		width: 100%;
	}
	.activity-content{
		text-align: center;
	}
	.activity-name{
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
		padding: 6rpx 20rpx;
	}
</style>