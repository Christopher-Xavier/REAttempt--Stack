const SHA256 = require('crypto-js/sha256');
const { APP_SECRET } = require('../../secrets');

const hash = string => {
  return SHA256(`${string}${APP_SECRET}`).toString();
};

module.exports = { hash };
