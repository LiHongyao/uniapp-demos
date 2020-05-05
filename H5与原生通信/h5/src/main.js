import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;


// 初始化uni.webview
document.addEventListener("UniAppJSBridgeReady", function() {
  console.log("初始化uniapp的API成功");
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
});




