<template>
	<view class='my'>
		<!--头部-->
		<view class='my-header'>
			<view class='header-main'>
				<view class='header-config'>
					<image class='config-img' src="/static/images/config.png" mode=""></image>
				</view>
				<view class='header-logo' @tap="goLogin">
					<image class='logo-img' src="/static/images/default.png" mode=""></image>
					<view class='logo-name'>用户昵称</view>
				</view>
			</view>
		</view>
		<!--我的订单-->
		<view class='order'>
			<view class='order-title'>
				<view>我的订单</view>
				<view>全部订单 > </view>
			</view>
			<view class='order-list'>
				<view class='order-item'>
					<image  class='order-img' src="/static/images/default.png" mode=""></image>
					<view>待付款</view>
				</view>
				<view class='order-item'>
					<image  class='order-img' src="/static/images/default.png" mode=""></image>
					<view>待付款</view>
				</view>
				<view class='order-item'>
					<image  class='order-img' src="/static/images/default.png" mode=""></image>
					<view>待付款</view>
				</view>
				<view class='order-item'>
					<image  class='order-img' src="/static/images/default.png" mode=""></image>
					<view>待付款</view>
				</view>
				<view class='order-item'>
					<image  class='order-img' src="/static/images/default.png" mode=""></image>
					<view>待付款</view>
				</view>
			</view>
		</view>
		<!--内容列表-->
		<view class='my-content'>
			
			<view class="my-content-item">
				<view>我的收藏</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>我的收藏</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>我的收藏</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>我的收藏</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>我的收藏</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>我的收藏</view>
				<view>></view>
			</view>
			<view class="my-content-item">
				<view>我的收藏</view>
				<view>></view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goLogin(){
				console.log("点击头像");
				uni.navigateTo({
					url:'/pages/login/login'
				});
			}
		}
	}
</script>

<style scoped>
.my-header{
	background: url(@/static/images/tips03.jpg) no-repeat;
	width: 100%;
	height: 400rpx;
}
.header-main{
	position: relative;
	top:120rpx;
}
.header-config{
	position: absolute;
	left:20rpx;
}
.header-logo{
	position: absolute;
	left:50%;
	margin-left:-60rpx;
	width:120rpx;
}
.config-img{
	width: 40rpx;
	height: 40rpx;
}
.logo-img{
	width: 120rpx;
	height: 120rpx;
	border:2rpx solid #CCCCCC;
	border-radius: 50%;
	background-color: #FFFFFF;
}
.logo-name{
	font-weight: bold;
	color:#FFFFFF;
	font-size: 14px;
	align-content: center;
}
.order-title{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx;
}
.order-list{
	padding: 20rpx;
	display: flex;
}
.order-item{
	flex:1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.order-img{
	width:66rpx;
	height: 66rpx;
}
.my-content{
	margin:20rpx 0;
	padding:0 20rpx;
}
.my-content-item{
	display: flex;
	justify-content: space-between;
	align-items:center;
	padding:20rpx 0; 
	border-bottom: 2px solid #CCCCCC;
}
</style>

