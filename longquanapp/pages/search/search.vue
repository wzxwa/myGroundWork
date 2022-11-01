<template>
	<view class="search">
		
		<view class="search-item">
			<view class="search-title">
				<view class="gray-color">最近搜索</view>
				<view class="iconfont icon-shanchu dustbin gray-color" @tap="clearHistory"></view>
			</view>
			<view>
				<view class="search-name gray-color" v-for="(item,index) in keywords" :key="index">{{item}}</view>
			</view>
		</view>
		
		<view class="search-item">
			<view class="search-title">
				<view class="gray-color">热门搜索</view>
			</view>
			<view>
				<view class="search-name gray-color">丹景山</view>
				<view class="search-name gray-color">票价</view>
				<view class="search-name gray-color">天气</view>
				<view class="search-name gray-color">交通</view>
			</view>
		</view>
		
	</view>
</template>

<script>

	export default {
		data() {
			return {
				keyword:"",
				keywords:[]
			}
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
		onLoad() {
			uni.getStorage({
				key:'searchData',
				success:(res)=>{
					this.keywords = JSON.parse(res.data);
				}
			})
		},
		methods: {
			//判断关键词是否为空或跳转页面
			search(){
				if(this.keyword === ""){
					return uni.showToast({
						title:"关键词不能为空",
						icon:"none"
					})
				}else{
					uni.redirectTo({
						url:"/pages/search-result/search-result?keyword="+this.keyword+""
					})	
					if (getApp().globalData.keywords.indexOf(this.keyword) == -1){
						getApp().globalData.keywords.push(this.keyword);
						uni.setStorage({
							key:'searchData',
							data:JSON.stringify(getApp().globalData.keywords)
						})
					}
				}
			},
			clearHistory(){
				uni.removeStorage({
					key:"searchData",
				})
				getApp().globalData.keywords = this.keywords = [];
			}
		},
		components:{
			
		}
	}
</script>

<style scoped>
	.search-item{
		padding: 20rpx;
	}
	.search-title{
		display: flex;
		justify-content: space-between;
	}
	.search-name{
		padding: 4rpx 24rpx;
		background-color: #e1e1e1;
		display: inline-block;
		border-radius: 26rpx;
		margin:10rpx;
	}
	.gray-color{
		color: #636263;
	}
	.dustbin{
		font-size: 30px;
	}
</style>