const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  if (str === '') return '';
  str = str.split('');
  let res = '';
  let counter = 1;
  for (let i = 0; i < str.length - 1; i++) {
      if (str[i + 1] !== str[i]) {
          if (counter > 1) res += counter;
          res+= str[i];
          counter = 1;
      }
      else {
          counter++;
      }
  }
  if (counter === 1) res += str[str.length - 1];
  else res += counter + str[str.length - 1];
  return res;
}

module.exports = {
  encodeLine
};
