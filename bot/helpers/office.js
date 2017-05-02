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
    this.shedule.push({date: date, item: item});
  }

  sheduleReaction(announcement) {

    var futureDate = this.getRandomTimeInOfficeHours();

    // Any future date further than 2 days ahead
    futureDate.setDate(futureDate.getDate() + Math.floor(Math.random() * 10) + 2)
    futureDate = this.getNonWeekendDate(futureDate);

    this.sheduleItem(futureDate, announcement);
  }

  getAnnouncement(date) {

    for(var i = 0; i < this.shedule.length; i++) {
      
      var announcement = this.shedule[i];

      // If announcement is past due time, announce it
      if( announcement.date < date ) {

        // Remove it from the TO BE shedule
        this.shedule.splice(i, 1);

        // If there are no actions sheduled, shedule another
        if( this.shedule.length === 0) {
          this.sheduleItem(this.getRandomTimeInOfficeHours(), this.tasker.getRandomAction());
        }

        // If it has a "reaction", shedule the reaction
        if( announcement.item.reaction ) {
          this.sheduleReaction(this.tasker.getReaction(announcement.item.reaction));
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
    date.setDate(date.getDate() + 1);
    date = this.getNonWeekendDate(date);

    // Random hour between opening and closing;
    date.setHours( Math.floor(Math.random() * (this.hours.close - this.hours.open + 1)) + this.hours.open ); 

    // Random Minute
    date.setMinutes( Math.floor(Math.random() * 59) );


    return date;
  }

  getNonWeekendDate(date) {
    if( date.getDay() < 1 ) {
      date.setDate(date.getDay() + 1);
    } else if (date.getDay() > 5 ) {
      date.setDate(date.getDay() + 3);
    }

    return date;
  }


}

module.exports = office;