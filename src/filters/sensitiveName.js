// 姓名脱敏（例如：陈*、陈**）
// 第1个字不变，后面全变 *

import getters from '@/store';

const sensitiveName = value => {
  if (value) {
    let pre = value.toString().substring(0, 1);
    let result = pre + '*'.repeat(value.toString().length - 1);
    return result;
  } else {
    return value;
  }
};

export default sensitiveName;
