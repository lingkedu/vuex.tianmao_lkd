// /* 自己来封装组件库  - 插件*/     样式去网上搜索cssloading

import Loading from './tpl/Loading.vue'
const Fw = {
  install: function ( Vue ) {
    Vue.component('Loading', Loading )
  }
}

export default Fw 