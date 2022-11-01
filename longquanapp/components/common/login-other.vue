<template>
	<view class="login-other">
		<view class="other-text">
			<view>或者用一下方式登录</view>
		</view>
		<view class="other-ways">
			<view class="other-item">
				<image src="../../static/images/wechat.png" mode=""></image>
				<view>微信登录</view>
			</view>
			<view class="other-item">
				<image src="../../static/images/weibo.png" mode=""></image>
				<view>微博登录</view>
			</view>
			<view class="other-item">
				<image src="../../static/images/QQ.png" mode=""></image>
				<view>QQ登录</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.login-other{
		padding: 100rpx 0;
	}
	.other-text{
		display: flex;
		padding: 50rpx 0;
	}
	.other-text view{  /*这里代表文本“或者用一下方式登录”*/
		line-height: 0px;
		padding: 0 10px;
	}
	.other-text::after{ /*文本前边的那条线*/
		flex:1;
		content:"";
		height: 2rpx;
		background-color: #ccc;
	}
	.other-text::before{ /*文本后边的那条线*/
		flex:1;
		content:"";
		height: 2rpx;
		background-color: #ccc;
	}
	.other-ways{
		display: flex;
		justify-content: space-around;
	}
	.other-item{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.other-item image{
		width: 80rpx;
		height: 80rpx;
	}
</style>