/**
 * Bot Manager
 */

var SlackBot = require('slackbots');

var Ticker = require('./helpers/ticker');
var Office = require('./helpers/office');

var bindMethods = require('./helpers/bindMethods');

class officeSimulator {

  // New Manager
  constructor(params) {

    this.token = params.token;
    
    // Off while in the plane
    this.bot = new SlackBot({
      token: this.token,
      name: 'Office Simulator'
    });

    bindMethods(this, ['init', 'testTicker']);

    this.bot.on('start', this.init);
    // this.init();
  }

  // Initial Announcement
  // Set up memory and timings
  init() {
    
    this.announce('hi, this is a test');

    // this.ticker = new Ticker({
    //   interval: 3000, // ms
    //   callback: this.testTicker
    // });

    // this.office = new Office({
    //   floors: 3,
    //   objects: {}
    // });

  }

  testTicker(date) {
    // this.announce("The minutes are: " + date.getMinutes());
    
    var announcement = this.office.getAnnouncements(date);
    this.announce(announcement.message);


  }

  // Speak!
  announce(announcement) {
    // console.log(announcement);
    this.bot.postMessageToChannel('test', announcement, {icon_emoji: ':chart_with_downwards_trend:'});
  }

}

module.exports = officeSimulator;