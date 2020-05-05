<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			const ad = uni.requireNativePlugin('Bloom-AD')
			ad.init({
				appId: 'ba0063bfbc1a5ad878',
				debug: true,
				test: true
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
