const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = '+';
  if (options.separator !== undefined) separator = String(options.separator);
  let additionSeparator = '|';
  if (options.additionSeparator !== undefined) additionSeparator = String(options.additionSeparator);
  let addition = '';
  if (options.addition !== undefined) addition = String(options.addition);
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;

  str = (str + (addition + additionSeparator).repeat(additionRepeatTimes)).slice(0, -additionSeparator.length);
  str = (str + separator).repeat(repeatTimes).slice(0, -separator.length);
  return str;
}

module.exports = {
  repeater
};
