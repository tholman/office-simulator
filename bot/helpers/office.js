/**
 * Keeping track of time!
 */

var bindMethods = require('./bindMethods');

class office {

  constructor(params) {

    this.floors = params.floors;
    this.objects = params.objects;

    this.init();
  }

  init() {}

}

module.exports = office;