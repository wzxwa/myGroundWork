<template>
	<view class="event" @click="nav">
		<view>
			<image :src="data.imgUrl" mode="" class="img"></image>
		</view>
		<view class="text-icon">
			<view class="name">{{data.name}}</view>
			<view class="description">{{data.desc}}</view>
			<view class="navi-icon main-color iconfont icon-daohang">导航</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			data:{}
		},
		methods:{
			nav(){
				getApp().globalData.href = this.data.href;
				console.log(getApp().globalData.href);
			}
		}
	}
</script>

<style scoped>
	.text-icon{
		float: right;
		width: 65%;
	}
	.img{
		float: left;
		width: 25%;
		height: 25vw;
		padding-left: 15px;
	}
	.description,
	.name{
		display: flex;
		align-items: flex-start;
		height:30px;
	}
	.event{
		margin-top: 20px;
		display: inline-block;
	}
	.navi-icon{
		padding: 4rpx 24rpx;
		display: inline-block;
		border-radius: 26rpx;
		margin: 50rpx;
		float: right;
		color: #fff;
	}
	.name{
		font-weight: bold;
		font-size: 16px;
	}
	.description{
		font-size: 14px;
		margin-left: 5px;
	}
</style>