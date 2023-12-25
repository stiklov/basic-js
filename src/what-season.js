const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];

  if (!date) return 'Unable to determine the time of year!';
  try {
    date.toTimeString();
  } catch (err) {
    throw new Error("Invalid date!");
  }

  let month = date.getMonth() + 1;
  if (month === 1 || month === 2 || month === 12) return seasons[0];
  else if (month === 3 || month === 4 || month === 5) return seasons[1];
  else if (month === 6 || month === 7 || month === 8) return seasons[2];
  else if (month === 9 || month === 10 || month === 11) return seasons[3];
  else throw new Error('Invalid date!');
}

module.exports = {
  getSeason
};
