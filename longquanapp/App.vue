<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
		    keywords:[],
			href:"",
		}
	} 
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	
	@import url("@/static/iconfont.css");
	@import url("@/static/customicons.css");
	page {
		background-color: #f5f5f5;
	}

	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
