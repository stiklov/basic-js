const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  const firstArr = s1.split('').sort();
  let secondArr = s2.split('').sort();
  let resArr = [];
  for (const every of firstArr) {
    for (const any of secondArr) {
      if (every === any) {
          let index = secondArr.indexOf(any);
          secondArr.splice(index, 1);
          resArr.push(any);
          break;
      }
    }
  }
  return resArr.length;
}

module.exports = {
  getCommonCharacterCount
};
