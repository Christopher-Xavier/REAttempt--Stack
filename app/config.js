const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const REFRESH_RATE = process.env.GENERATION_REFRESH_RATE;

const STARTING_BALANCE = process.env.USER_STARTING_BALANCE;

module.exports = {
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  REFRESH_RATE,
  STARTING_BALANCE,
};
