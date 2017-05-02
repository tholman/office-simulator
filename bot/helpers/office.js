/**
 * Keeping track of time!
 */

var bindMethods = require('./bindMethods');
var actionData = require('../data/actions');

var Tasker = require('./tasker');

class office {

  constructor(params) {

    this.floors = params.floors;
    this.objects = params.objects;
    this.hours = params.hours;
    this.shedule = [];
    this.tasker = new Tasker(actionData);

    this.init();
  }

  init() {

    // Shedule an initial item
    this.sheduleItem(new Date(), this.tasker.getRandomAction());
  }

  sheduleItem(date, item) {

    console.log("sheduled for: ", date.getDay(), date.getHours(), date.getMinutes());

    this.shedule.push({date: date, item: item});
  }

  sheduleReaction(reaction) {


  }

  getAnnouncement(date) {

    for(var i = 0; i < this.shedule.length; i++) {
      
      var announcement = this.shedule[i];

      // If announcement is past due time, announce it
      if( announcement.date < date ) {

        // Remove it from the TO BE shedule
        this.shedule.splice(i, 1);

        // If it has a "reaction", shedule the reaction
        if( announcement.reaction ) {
          this.sheduleReaction(this.tasker.getReaction(announcement.reaction));
        }

        // If there are no actions sheduled, shedule another
        if( this.shedule.length === 0) {
          this.sheduleItem(this.getRandomTimeInOfficeHours(), this.tasker.getRandomAction());
        }

        // Announce the current item!
        return announcement;
      }
    }
  }

  // Return random time tomorrow
  getRandomTimeInOfficeHours() {

    var date = new Date();
    
    // Tomorrow (but not weekend)
    date.setDate(date.getDay() + 1);
    if( date.getDay() < 1 || date.getDay() > 5 ) {
      date.setDate(1);
    }

    // Random hour between opening and closing;
    date.setHours( Math.floor(Math.random() * (this.hours.close - this.hours.open + 1)) + this.hours.open ); 

    // Random Minute
    date.setMinutes( Math.floor(Math.random() * 59) );

    return date;
  }


}

module.exports = office;