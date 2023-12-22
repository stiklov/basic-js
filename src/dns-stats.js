const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dns = [];
  let res = {};
  domains.forEach(domain => {
    let splits = domain.split('.').reverse();
    dns.push(splits);
  });
  dns.forEach(elem => {
    let strDns = '';
    elem.forEach(x => {
      strDns += `.${x}`;
      if (res.hasOwnProperty(strDns)) res[strDns] += 1;
      else res[strDns] = 1;
    });
  });
  return res;
}

module.exports = {
  getDNSStats
};
