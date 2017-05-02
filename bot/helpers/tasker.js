/**
 * What actions and when!
 */

var bindMethods = require('./bindMethods');

class tasker {

  constructor(data) {
    this.data = data;
  }

  getRandomAction() {
    var totalActions = this.data.actions.length;
    var action = this.data.actions[Math.floor(Math.random() * totalActions)];

    return { message: this.addVariantsToAction(action.message) };
  }

  addVariantsToAction(action) {

    var parsedAction = [];
    var splitAction = action.split("%");

    for( var i = 0; i < splitAction.length; i++ ) {
      if( this.data.variants[splitAction[i]] ) {

        var variants = this.data.variants[splitAction[i]];
        parsedAction.push(variants[Math.floor(Math.random() * variants.length)]);

      } else {
        parsedAction.push(splitAction[i]);
      }
    }

    return parsedAction.join("");
  }

}

module.exports = tasker;