const { REFRESH_RATE, SECOND, MINUTE, HOUR, DAY } = require('../config');
const Dragon = require('../dragon');

const refreshRate = REFRESH_RATE * HOUR;

class Generation {
  constructor() {
    this.accountIds = new Set();
    this.expiration = this.calculateExpiration();
    this.generationId = undefined;
  }

  calculateExpiration() {
    const expirationPeriod = Math.floor(Math.random() * (refreshRate / 2));

    const msUntilExpiration =
      Math.random() < 0.5
        ? refreshRate - expirationPeriod
        : refreshRate + expirationPeriod;

    return new Date(Date.now() + msUntilExpiration);
  }

  newDragon({ accountId }) {
    if (Date.now() > this.expiration) {
      throw new Error(`This generation expired on ${this.expiration}.`);
    }

    if (this.accountIds.has(accountId)) {
      throw new Error('You already have a dragon from this generation.');
    }
    this.accountIds.add(accountId);

    return new Dragon({ generationId: this.generationId });
  }
}

module.exports = Generation;
