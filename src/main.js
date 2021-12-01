import Vue from 'vue';
import App from './App';

// 引入store
import store from './store.js';
import filters from './filters';

Vue.config.productionTip = false;

// 创建 Vue 实例之前自定义全局过滤器（第1种全局方式）
Vue.filter('globalCapitalize', function(value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1) + '-haha';
});

// 创建 Vue 实例之前自定义全局过滤器（第2种全局方式）
Vue.use(filters);

new Vue({
  el: '#app',
  store, // store 挂载到根组件下
  components: { App },
  template: '<App/>'
});
