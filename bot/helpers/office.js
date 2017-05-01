/**
 * Keeping track of time!
 */

var bindMethods = require('./bindMethods');
var actionData = require('../data/actions');

var Sheduler = require('./sheduler');

class office {

  constructor(params) {

    this.floors = params.floors;
    this.objects = params.objects;
    this.hours = params.hours;
    this.shedule = [];
    this.sheduler = new Sheduler(actionData);

    this.init();
  }

  init() {

    // Shedule an initial item
    this.shedule.push(this.sheduler.getRandomAction());
    
  }

  // getSheduledItems(dateTime) {

  //   for (var i = this.shedule.length; i--; i >= 0) {
  //     var sheduleItem = this.shedule[i];

  //     // if( sheduleItem.)
      
  //   }
  // }

  sheduleItem(dateTime, item) {
    this.shedule.push({dateTime: dateTime, item: item});
  }

  getAnnouncements(date) {

    // if date > announcement date (etc etc)
    var announcement = this.shedule[0];
    this.shedule.pop();

    if( this.shedule.length === 0 ) {
      this.shedule.push(this.sheduler.getRandomAction());
    }

    return this.shedule[0];


  }

}

module.exports = office;