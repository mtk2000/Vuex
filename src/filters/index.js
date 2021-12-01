// 全局拦截器
import number from './number';
import sensitiveName from './sensitiveName';

const filters = { number, sensitiveName };

export default {
  install(Vue) {
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key]);
    });
  }
};
