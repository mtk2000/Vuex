<template>
  <div id="app">
    <my-addition />
    <p>----------------</p>
    <my-subtraction />
    <br />
    <br />
    <p>----------------</p>
    <br />
    <h3>Vue.filter 自定义过滤器</h3>
    <my-vuefilter />
  </div>
</template>

<script>
import Addition from './components/Addition.vue';
import Subtraction from './components/Subtraction.vue';
import VueFilter from './components/VueFilter.vue';
export default {
  name: 'App',
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction,
    'my-vuefilter': VueFilter
  },
  data() {
    return {};
  }
};
</script>
