<template>
	<view class="shop">
		<view class="shop-item">
			<view class="shop-text">
				<text>推荐线路</text>
			</view>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item">
					<Activity :dataList='tipList' wrap="no-wrap"></Activity>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Activity from '@/components/common/Activity.vue'
	 
	export default{
		data(){
			return{
			}
		},
		props:{
			tipList:Array
		},
		components:{
			Activity
		},
		methods:{
			nav(){
				
			}
		}
	}
</script>

<style scoped>
	.big-img{
		width: 100%;
		height: 350rpx;
	}
	.scroll-item{
		display: inline-block;
	}
	.scroll-content{
		width: 100%;
		white-space: nowrap;
	}
	.shop-text{
		font-weight: bold;
		font-size: 40rpx;
		color: #3f3f3f;
		padding: 30rpx 0rpx 30rpx 20rpx;
	}
</style>