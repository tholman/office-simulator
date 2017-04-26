/**
 * Keeping track of time!
 */

var bindMethods = require('./bindMethods');

class ticker {

  constructor(params) {
    this.intervalTime = params.interval;
    this.callback = params.callback;
    this.interval = null;

    bindMethods(this, ['callCallback']);

    this.init();
  }

  init() {
    this.interval = setInterval(this.callCallback, this.intervalTime);
  }

  callCallback() {
    this.callback(new Date());
  }

}

module.exports = ticker;