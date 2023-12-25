const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let newArr = arr.filter(x => x !== -1).sort((a, b) => b - a);
  let res = [];
  for (let elem of arr) {
      if (elem === -1) res.push(-1);
      else res.push(newArr.pop())
  }
  return res;
}

module.exports = {
  sortByHeight
};
