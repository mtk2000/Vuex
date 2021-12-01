import numeral from 'numeral';

const number = (value = null, format = '0,0') => {
  return value ? numeral(value).format(format) : '-';
};

export default number;
