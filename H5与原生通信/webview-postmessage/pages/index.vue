<template>
	<view class="content">
		<button class="button" type="primary" @tap="goDetails">跳转至详情页</button>
	</view>
</template>

<script>
	export default {
		methods: {
			goDetails() {
				uni.navigateTo({
					url: 'details'
				})
			}
		}
	}
</script>

<style scoped>
.button {
	width: 400upx;
	margin: 100upx auto;
}
</style>
