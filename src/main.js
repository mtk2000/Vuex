import Vue from 'vue';
import App from './App';

// 引入store
import store from './store.js';

Vue.config.productionTip = false;

// 创建 Vue 实例之前自定义全局过滤器
Vue.filter('globalCapitalize', function(value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1) + '-haha';
});

new Vue({
  el: '#app',
  store, // store 挂载到根组件下
  components: { App },
  template: '<App/>'
});
