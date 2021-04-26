import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts'
//需要挂载到Vue原型上
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
