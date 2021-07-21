<template>
  <div>
    <h3>当前最新的count值：{{ count }}</h3>
    <button @click="sub">-1</button>
    <button @click="handleSubN">-N</button>
    <button @click="subN(10)">-10</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    // 将需要的 mutations 函数，映射为当前组件的 method 方法
    ...mapMutations(['sub', 'subN']),
    handleSubN() {
      this.subN(3);
    }
  }
};
</script>
