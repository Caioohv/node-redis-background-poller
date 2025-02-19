const Redis = require('ioredis');
const moment = require('moment');

class Poller {
  constructor(options) { 
    this.redis = new Redis(options.redis || {});
    this.interval = options.interval || 5 * 1000; // Default 1 second
    this.ttl = options.ttl || 60 * 1000; // Default 60 seconds
  }

  async createPoller ( key, expectedKey, expectedValue ) {
    const expiresAt = moment().add(this.ttl, 'ms');

    

  }
}