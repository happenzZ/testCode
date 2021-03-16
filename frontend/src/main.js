import Vue from 'vue'
import App from './App.vue'
// import store from './service/store.js'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'video.js/dist/video-js.min.css'
import 'font-awesome/css/font-awesome.css'

import _ from 'lodash'
window._ = _

import * as d3 from 'd3'
window.d3 = d3

import $ from 'jquery'
window.$ = $

Vue.config.productionTip = false


// import BaiduMap from 'vue-baidu-map'

// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: 'OZlWkXDegW6gXltCzTXe79dqbqa3bmAB'
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
