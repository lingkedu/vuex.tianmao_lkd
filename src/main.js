import Vue from 'vue'
import App from './App.vue'

import './assets/css/global.styl'
import './utils/rem'

Vue.config.productionTip = false

import router from './router/index.js'
import store from './store'

import { homeFilter } from './filters/index';

import  MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use( MintUI )

import Fw from './freamwork'
Vue.use( Fw )


for ( var key in homeFilter ) {
  Vue.filter( key, homeFilter[ key ] )
}


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
