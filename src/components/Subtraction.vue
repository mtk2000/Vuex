<template>
  <div>
    <h3>{{ showNum }}</h3>
    <button @click="sub">-1</button>
    <button @click="subN(3)">-N</button>
    <button @click="subN(10)">-10</button>
    <button @click="asyncSub">3秒钟后-1（异步）</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    // 将需要的 mutations 函数，映射为当前组件的 method 方法
    ...mapMutations(['sub', 'subN']),

    ...mapActions(['asyncSub'])
  }
};
</script>
