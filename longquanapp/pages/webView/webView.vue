<template>
	<view>
		<web-view :src="href"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href:""
			}
		},
		onLoad() {
			this.href = getApp().globalData.href;
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
