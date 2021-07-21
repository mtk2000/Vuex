<template>
  <div>
    <h3>当前最新的count值：{{ $store.state.count }}</h3>
    <button @click="handleAdd">+1</button>
    <button @click="handleAddN">+N</button>
    <button @click="handleAsyncAdd">3秒钟后加1（异步）</button>
    <button @click="handleAsyncAddFive">3秒钟后加5（异步）</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleAdd() {
      // 不要直接对store的属性进行修改操作，这是不合法的
      // this.$store.state.count++;
      // 只能通过 mutation 变更 store 中的数据，这种方式可以集中监控所有数据的变化
      this.$store.commit('add');
    },
    handleAddN() {
      this.$store.commit('addN', 5);
    },
    handleAsyncAdd() {
      // 这里的 dispatch 函数，用来专门触发 actions
      this.$store.dispatch('asyncAdd');
    },
    handleAsyncAddFive() {
      this.$store.dispatch('asyncAddN', 5);
    }
  }
};
</script>
