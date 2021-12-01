<template>
  <div>
    <!--
        过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：
        在双花括号中：
        {{ message | capitalize }}

        在 v-bind 中：
        <div v-bind:id="rawId | formatId"></div>
    -->

    <h3>本地的过滤器： {{ $store.state.name | localCapitalize }}</h3>

    <h3>全局的过滤器： {{ $store.state.name | globalCapitalize }}</h3>

    <h3>
      重构版的全局的过滤器： {{ num1 | number }}、{{ num2 | number }}、{{
        name | sensitiveName
      }}
    </h3>

    <!--
    过滤器可以串联：
    {{ message | filterA | filterB }}
    在这个例子中，filterA 被定义为接收单个参数的过滤器函数，表达式 message 的值将作为参数传入到函数中。然后继续调用同样被定义为接收单个参数的过滤器函数 filterB，将 filterA 的结果传递到 filterB 中。

    过滤器是 JavaScript 函数，因此可以接收参数：
    {{ message | filterA('arg1', arg2) }}
    这里，filterA 被定义为接收三个参数的过滤器函数。其中 message 的值作为第一个参数，普通字符串 'arg1' 作为第二个参数，表达式 arg2 的值作为第三个参数。
-->

    <h3>本地的串联过滤器： {{ phone | filterA | filterB }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '18888880241',
      num1: 0,
      num2: 128811,
      name: '陈可刚'
    };
  },
  // 你可以在一个组件的选项中定义本地的局部过滤器：
  // 注意：当全局过滤器和局部过滤器重名时，会采用局部过滤器。
  filters: {
    // 局部过滤器：首字母转大写
    localCapitalize: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },

    // 局部过滤器A：屏蔽手机号码中间4位数
    filterA: function(value) {
      if (!value) return '';
      return value.substring(0, 3) + '****' + value.substring(7);
    },

    // 局部过滤器B：校验手机号码是否12开头，否就合法
    filterB: function(value) {
      if (!value) return '';
      const reg = /^12.+/;
      return reg.test(value)
        ? `${value} 此手机号码不合法`
        : `${value} 此手机号码合法`;
    }
  }
};
</script>
