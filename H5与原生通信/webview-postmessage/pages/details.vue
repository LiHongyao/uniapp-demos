<template>
	<view class="details">
		<web-view  :src="url" @message="handleMessage"></web-view>
	</view>
</template>

<script>
	const ad = uni.requireNativePlugin('Bloom-AD')
	var wv;//计划创建的webview
	export default {
		data() {
			return {
				url: 'http://192.168.101.34:8081/',
			}
		},
		onReady() {
			
		},
		onUnload: function() {
			ad.destroyBannerAd({
				unitId: "b1",
			})
		},
		methods: {
			handleMessage(event) {
				let _this = this;
				console.log(event.detail.data[0].message);
				ad.destroyBannerAd({
					unitId: "b1",
				})
				ad.showBannerAd({
					unitId: "b1",
					layout: "bottom",
					margins: [0, 0, 0, 30]
				}, result => {
					console.log(JSON.stringify(result))
					// #ifdef APP-PLUS
					var currentWebview = this.$mp.page.$getAppWebview() //获取当前页面的webview对象
					setTimeout(function() {
						let wv = currentWebview.children()[0]
						wv.evalJS("getMsgFromApp('广告执行完毕！')");
					}, 1000); //如果是页面初始化调用时，需要延时一下
					// #endif
				})
			}
		}
	}
</script>

<style>
</style>
