<template>
	<view>
		<Line></Line>
		<view class="login-tel">
			<view class="tel-main">
				<view class="login-form">
					<view class="login-user">
						<text class="user-text" >验证码</text>
						<input type="number" placeholder="请输入验证码" v-model="userCode"/>
						<button plain="true" size="mini" :disabled="disabled" @tap="sendCode">{{codeMsg}}</button>
					</view>
				</view>
				<view class="tel" @tap="goNextIndex">
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
				//倒计时时间
				codeNum:10,
				//显示的文本
				codeMsg:"",
				//按钮是否禁用
				disabled:false,
				//用户输入内容
				userCode:""
			}
		},
		onReady() {
			this.codeMsg = '重新发送 ('+this.codeNum+')';
			this.sendCode();
		},
		methods: {
			//点击验证码发送
			sendCode(){
				this.disabled = true;
				let timer = setInterval(()=>{
					--this.codeNum;
					this.codeMsg = '重新发送 ('+this.codeNum+')';
				},1000);
				setTimeout(()=>{
						clearInterval(timer);
						this.codeNum = 10;
						this.disabled = false;
						this.codeMsg = '重新发送';
				},10000)
			},
			goNextIndex(){
				uni.switchTab({
					url:"/pages/index/index"
				})
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
	white-space: nowrap;
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
