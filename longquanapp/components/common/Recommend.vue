<template>
	<view class="recommend">
		<view class="recommend-item">
			<image class="item-big" src="../../static/images/default.png"></image>
			<view class="item-small">
				<image class="item-img" src="../../static/images/default.png" mode=""></image>
				<image class="item-img" src="../../static/images/default.png" mode=""></image>
				<image class="item-img" src="../../static/images/default.png" mode=""></image>
			</view>
		</view>
		<view class="recommend-item">
			<image class="item-big" src="../../static/images/default.png"></image>
			<view class="item-small">
				<image class="item-img" src="../../static/images/default.png" mode=""></image>
				<image class="item-img" src="../../static/images/default.png" mode=""></image>
				<image class="item-img" src="../../static/images/default.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.recommend{
		padding: 20rpx;
		background-color: #00c170;
	}
	.recommend-item{
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		border:2rpx solid #ccc;
		overflow:20rpx 0
	}
	.item-big{
		width: 100%;
		height: 300rpx;
	}
	.item-small{
		width: 100%;
		height: 240rpx;
	}
	.item-img{
		width: 33.3333%;
		height: 240rpx;
	}
</style>