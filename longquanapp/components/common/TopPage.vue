<template>
	<view class="top-pages">
		<scroll-view scroll-x="true" class="scroll-content" scroll-into-view='tab5' scroll-with-animation="true">
			<view :id="'tab'+index" class="scroll-item" v-for="(item,index) in pageList" :key="index">
				<text :class='pageIndex===index? "selected-page":"unselected-page"' @tap="changePage(index)">{{item.name}}</text>
			</view>
		</scroll-view>
		
		<!-- swiper的change事件自己会返回一个对象，该对象的detail里有swiper的current属性值 -->
		<swiper @change="onChangeTab" :current="pageIndex" :style="'height:'+clentHeight+'px;'">  <!--这里的current已经实现了点击top更换下面的page-->
			<swiper-item class="swiper-item" v-for="(item,index) in pages" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+clentHeight+'px;'" @scrolltolower='loadMore(index)'> <!--scrolltolower的触发至少有两个条件，一个是scroll已经填满了，一个是滑动到底部了-->
					<Activity :dataList="item.data.data"></Activity>
					<view class="status-text">
						{{status[index].status}}
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	
	import $http from "@/static/api/request.js"
	import Activity from './Activity.vue' 
	
	export default{
		data(){
			return{
				loadtimes:[
					{id:0,times:1},
					{id:1,times:1},
					{id:2,times:1},
					{id:3,times:1}
				],
				status:[
					{id:0,status:"加载中..."},
					{id:1,status:"加载中..."},
					{id:2,status:"加载中..."},
					{id:3,status:"加载中..."}
				]
			} 
		},
		props:{
			pageList:Array,
			pageIndex:Number,
			pages:Array,
			clentHeight:Number
		},
		methods:{
			changePage(index){
				this.$emit('pageChange',index);
			},
			onChangeTab(e){
				this.$emit('pageChange',e.detail.current);
			},
			loadMore(index){
				// console.log(index);
				// console.log(this.loadtimes[index].times);
				$http.request({
					url:"/index_list/data/"+index+"/"+this.loadtimes[index].times
				}).then((res)=>{
					for(let i=0; i<res.data.length; i++)
					{
						 this.pages[index].data.data.push(res.data[i]);
					}
							
					this.loadtimes[index].times++;
					// console.log(this.loadtimes[index].times);
					if(res.code == "end")
					{
						this.status[index].status = "";
						this.loadtimes[index].times = -1;
					}
				}).catch(()=>{
				})
			}
		},
		components:{
			Activity
		}
	}
</script>

<style scoped>
	.scroll-content{
		white-space: nowrap;
		width: 100%;
		height: 80rpx;	
	}
	.scroll-item{
		display: inline-block;
		padding: 10rpx 30rpx;
		font-size: 36rpx;
	}
	.selected-page{
		padding: 10rpx 0;
		border-bottom: 6rpx solid #00B2C2;
	}
	.swiper-item{
		display: inline-block;
	}
	.status-text{
		color: #3f3f3f;
		text-align: center;
	}
</style>