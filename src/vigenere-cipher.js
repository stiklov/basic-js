const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

  constructor(straight = true) {
    this.straight = straight;
  }

  encrypt(text, key) {
      if (!text || !key) throw new Error('Incorrect arguments!');
      let res = '';
      text = text.toUpperCase();
      key = this.fillKey(text.length, key).toUpperCase();
      let j = 0;
      for (let i = 0; i < text.length; i++) {
          if (text[i].charCodeAt(0) > 64 && text[i].charCodeAt(0) < 91) {
              res += String.fromCharCode((text[i].charCodeAt(0) + key[j].charCodeAt(0) - 2 * 65) % 26 + 65);
              j++;
          }
          else res += text[i];
      }
      if (!this.straight) return res.split('').reverse().join('');
      else return res;
  }

  decrypt(text, key) {
      if (!text || !key) throw new Error('Incorrect arguments!');
      let res = '';
      text = text.toUpperCase();
      key = this.fillKey(text.length, key).toUpperCase();
      let j = 0;
      for (let i = 0; i < text.length; i++) {
          if (text[i].charCodeAt(0) > 64 && text[i].charCodeAt(0) < 91) {
              res += String.fromCharCode(90 - (25 - (text[i].charCodeAt(0) - key[j].charCodeAt(0))) % 26);
              j++;
          }
          else res += text[i];
      }
      if (!this.straight) return res.split('').reverse().join('');
      else return res;
  }

  fillKey(length, key) {
      let repeatCount = Math.ceil(length / key.length);
      let resKey = key.repeat(repeatCount).slice(0, length);
      return resKey;
  }
}

module.exports = {
  VigenereCipheringMachine
};
