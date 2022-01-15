//node 版本太新 需要export
//export NODE_OPTIONS=--openssl-legacy-provider
import Vue from 'vue'
import App from './App.vue'
//关闭生产提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el:"#app",
//   render: h => h(App),
// })
