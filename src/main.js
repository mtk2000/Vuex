// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

// 引入store
import store from './store.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, // store 挂载到根组件下
  components: { App },
  template: '<App/>'
});
