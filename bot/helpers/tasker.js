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
    
    var action = Object.assign({}, this.data.actions[Math.floor(Math.random() * totalActions)]); // Clone
    action.message = this.addVariantsToAction(action.message);

    return action;
  }

  getReaction(action) {
    return this.data.reactions[action];
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