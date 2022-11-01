<template>
	<view class="activity-list">
		<!-- 活动列表组件 -->
		<Activity :dataList='activityList'></Activity>
	</view>
</template>

<script>
	import Activity from './Activity.vue'
	export default{
		data(){
			return {
				activityList:[
				{
					id:1,
					imgUrl:"../../static/images/default.png",
					name:"【暑假哪里玩】丹景山观景台",
					desc:"不可错过的绝世美景"
				},
				{
					id:2,
					imgUrl:'../../static/images/default.png',
					name:'【暑假哪里玩】丹景山观景台',
					desc:'不可错过的绝世美景'
				},
				{
					id:3,
					imgUrl:'../../static/images/default.png',
					name:'【暑假哪里玩】丹景山观景台',
					desc:'不可错过的绝世美景'
				},
				{
					id:4,
					imgUrl:'../../static/images/default.png',
					name:'【暑假哪里玩】丹景山观景台',
					desc:'不可错过的绝世美景'
				}
				]
			}
		},
		components:{
			Activity
		}
	}
</script>

<style>
</style>