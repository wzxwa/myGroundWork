<template>
	<view>
		<Line></Line>
		<view class="login-tel">
			<view class="tel-main">
				<view class="login-form">
					<view class="login-user">
						<text class="user-text" >手机号</text>
						<input type="number" focus="true" v-model="userTel" placeholder="请输入11位手机号"/>
					</view>
				</view>
				<view class="tel" @tap="goNextCode">
					下一步
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Line from "@/components/common/Lines.vue"
	export default {
		data() {
			return {
				userTel:"",
				rules:{
					userTel:{
						rule:/^1[3456789]\d{9}$/,
						msg:"请输入11位手机号"
					},
				}
			}
		},
		methods: {
			goNextCode(){
				if(!this.validate('userTel')) return;
				uni.navigateTo({
					url:"/pages/login-code/login-code"
				})
			},
			validate(key){
				let bool = true;
				if(!this.rules[key].rule.test(this[key])){
					uni.showToast({
						title:this.rules[key].msg,
						icon:"none"
					})
					bool=false;
					return false;
				}
				return bool;
			}
		},
		components:{
			Line
		}
	}
</script>

<style scoped>
.login-tel{
	width:100vw;
	height: 100vh;
}
.tel-main{
	padding: 0 20rpx;
}

.login-form{
	padding: 30rpx 0;
}
.login-user{
	font-size: 32rpx;
	padding: 10rpx 0;
	display: flex;
	align-items: center;
	border-bottom: 2rpx solid #f7f7f7;
}
.user-text{
	padding-right: 10rpx;
}
.tel{
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	color:#fff;
	background-color: #00B2C2;
	border-radius: 40rpx;
}
</style>
