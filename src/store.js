import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { count: 0, name: 'join' },
  mutations: {
    // 只有 mutations 中定义的函数，才有权限修改 state 中的数据
    add(state) {
      state.count++;
      // 不能在 mutations 中执行异步操作
      // setTimeout(() => {
      //   state.count++;
      // }, 3000);
    },
    addN(state, step) {
      state.count += step;
    },
    sub(state) {
      state.count--;
    },
    subN(state, step) {
      state.count -= step;
    }
  },
  actions: {
    // 在 actions 中，不能直接修改 state 属性，要通过 context.commit 来触发 mutations 间接修改
    asyncAdd(context) {
      setTimeout(() => {
        context.commit('add');
      }, 3000);
    },
    asyncAddN(context, step) {
      setTimeout(() => {
        context.commit('addN', step);
      }, 3000);
    },
    asyncSub(context) {
      setTimeout(() => {
        context.commit('sub');
      }, 3000);
    }
  },
  getters: {
    showNum(state) {
      return `当前最新的count值：${state.count}`;
    }
  }
});
