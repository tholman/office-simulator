/**
 * What actions and when!
 */

var bindMethods = require('./bindMethods');

class sheduler {

  constructor(data) {
    this.data = data;
    this.init();
  }

  init() {}

  getRandomAction() {
    var totalActions = this.data.actions.length;
    return this.data.actions[Math.floor(Math.random() * totalActions)];
  }

}

module.exports = sheduler;