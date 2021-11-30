<template>
  <div>
    <h3>{{ showNum }}</h3>
    <button @click="sub">马上-1（同步）</button>
    <button @click="subN(3)">马上-3（同步）</button>
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
